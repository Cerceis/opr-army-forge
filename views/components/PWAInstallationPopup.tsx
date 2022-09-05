import React from "react";
import Router from "next/router";
import { Card, CardContent, CardActions, Button, Typography, Checkbox } from "@mui/material";

const ROUTE_WHITE_LIST = [
    "/list"
]

export class PWAInstallationPopup extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            eventListenerInitiated: false,
            displayStyle: "none",
            neverDisplayAnymoreChecked: false,
            defferedPromptEvent: null,
            destroyed: false
        };
    }

    private _checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked !== true && event.target.checked !== false) return;
        this.setState({ ...this.state, neverDisplayAnymoreChecked: event.target.checked });
    };

    private _setNoPwaInstallationPrompt = (value: boolean) => localStorage.setItem("noPwaInstallationPrompt", String(value));

    private _install = () => {
        if (!this.state.defferedPromptEvent) return;
        this.state.defferedPromptEvent.prompt();
        this.state.defferedPromptEvent.userChoice.then(choice => {
            if (choice.outcome === 'accepted') {
                setTimeout(() => {
                    this.setState({ ...this.state, displayStyle: "none", destroyed: true });
                }, 100)
            }
        })
    }

    private _initiatePWAInstallationEventlistener = () => window.addEventListener('beforeinstallprompt', (event: Event) => {
        console.log("invoked2")
        event.preventDefault();
        this.setState({ ...this.state, defferedPromptEvent: event });
        this.setState({ ...this.state, eventListenerInitiated: true})
    });

    componentDidMount() {
        if(this.state.eventListenerInitiated === true) return;
        const noPwaInstallationPrompt: string = localStorage.getItem("noPwaInstallationPrompt");
        console.log("invoked1")
        // Safety Check
        if (
            noPwaInstallationPrompt !== "true" &&
            noPwaInstallationPrompt !== "false" &&
            noPwaInstallationPrompt !== null
        ) return;
        // Return if user prompt to not see it anymore
        if (noPwaInstallationPrompt === "true") return;
        this._initiatePWAInstallationEventlistener();
    }

    componentDidUpdate() {
        if(!ROUTE_WHITE_LIST.includes(Router.pathname)) return;
        if(
            this.state.displayStyle !== "block" &&
            this.state.destroyed === false &&
            this.state.eventListenerInitiated === true
        )
            this.setState({ ...this.state, displayStyle: "block" });        
    }

    private _closeHandler = () => {
        this.setState({ ...this.state, displayStyle: "none", destroyed: true }); 
        this._setNoPwaInstallationPrompt(this.state.neverDisplayAnymoreChecked); 
    }

    render() {
        return (
            <Card variant="outlined" sx={
                {
                    minWidth: "300px",
                    maxWidth: "350px",
                    zIndex: "2",
                    position: "fixed",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: this.state.displayStyle,
                }
            }>
                <CardContent style={{ paddingBottom: 0 }}>
                    <Typography variant="h6" color="text.secondary">
                        Add to your device's homepage.
                    </Typography>
                    <div style={{ opacity: .5 }}>
                        Don't show again.
                        <Checkbox checked={this.state.neverDisplayAnymoreChecked} onChange={this._checkHandler} />
                    </div>
                </CardContent>
                <CardActions style={{ justifyContent: "end", display: "flex" }}>
                    <Button onClick={() => { this._closeHandler() }}>Close</Button>
                    <Button onClick={() => { this._install() }}>Install</Button>
                </CardActions>
            </Card>
        )
    }
}