import React, { useState } from "react";
import { Card, CardContent, CardActions, Button, Typography, Checkbox } from "@mui/material";

export const PWAInstallationPopup = () => {

    const [dispalyStyle, setDisplayStyle] = useState("none");
    const [neverDisplayAnymoreChecked, setNeverDisplayAnymoreChecked] = useState(false);
    const [defferedPromptEvent, setDefferedPromptEvent] = useState(null);

    const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked !== true && event.target.checked !== false) return;
        setNeverDisplayAnymoreChecked(event.target.checked);
    };
    
    const setNoPwaInstallationPrompt = (value: boolean) => localStorage.setItem( "noPwaInstallationPrompt", String(value));

    const install = () => {
        if(!defferedPromptEvent) return;
        defferedPromptEvent.prompt();
        defferedPromptEvent.userChoice.then(choice => {
            if(choice.outcome === 'accepted'){
                setDisplayStyle("none");
            }
        })
    }

    React.useEffect(() => {
        const noPwaInstallationPrompt: string = localStorage.getItem("noPwaInstallationPrompt");
        // Safety Check
        if(
            noPwaInstallationPrompt !== "true" && 
            noPwaInstallationPrompt !== "false" &&
            noPwaInstallationPrompt !== null
        ) return;
        // Return if user prompt to not see it anymore
        if(noPwaInstallationPrompt === "true") return;
        window.addEventListener('beforeinstallprompt', (event: Event) => {
            event.preventDefault();
            setDefferedPromptEvent(event);
            setDisplayStyle("block");
        });
    })

    const PopupCard = (
        <Card variant="outlined" sx={
            {
                minWidth: "300px",
                maxWidth: "350px",
                zIndex: "2",
                position: "fixed",
                left: "50%",
                transform: "translateX(-50%)",
                display: dispalyStyle,
            }
        }>
            <CardContent style={{ paddingBottom: 0 }}>
                <Typography variant="h6" color="text.secondary">
                    Add to your device's homepage.
                </Typography>
                <div style={{ opacity: .5 }}>
                    Don't show again.
                    <Checkbox checked={neverDisplayAnymoreChecked} onChange={checkHandler} />
                </div>
            </CardContent>
            <CardActions style={{ justifyContent: "end", display: "flex" }}>
                <Button onClick={() => {setDisplayStyle("none"); setNoPwaInstallationPrompt(neverDisplayAnymoreChecked);}}>Close</Button>
                <Button onClick={()=>{install()}}>Install</Button>
            </CardActions>
        </Card>
    );

    return PopupCard;
}
