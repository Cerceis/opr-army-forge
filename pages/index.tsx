import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Box, Button, Container, Stack } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AddIcon from "@mui/icons-material/Add";
import { GetServerSidePropsContext } from "next";
import { PWAInstallationPopup } from "../views/components/PWAInstallationPopup"

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const host = context.req.headers.host;
  const vercelProd = "opr-army-forge.vercel.app";
  const isVercelProd = host?.toLocaleLowerCase() === vercelProd;

  return isVercelProd
    ? {
        redirect: {
          permanent: true,
          destination: "https://army-forge.onepagerules.com/",
        },
      }
    : { props: {} };
}


export default function Home() {
  const router = useRouter();
  return (
    <Container className={styles.homeContainer + " container"}>
      <PWAInstallationPopup />
      <div className={styles.outerColumn}>
        <Box mx="auto" pt={6} textAlign="center" className={styles.homeColumn}>
          <div>
            <h1 className={styles.title} style={{ letterSpacing: "8px", margin: 0 }}>
              ARMY
            </h1>
            <Box mx="auto" className={styles.logo}></Box>
            <h1 className={styles.title} style={{ margin: 0 }}>
              FORGE
              <div className={styles.betaTag}></div>
            </h1>
          </div>

          <Stack spacing={2} className={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className="mb-4"
              onClick={() => router.push("/gameSystem")}
            >
              <AddIcon /> <span style={{ fontWeight: 600 }}>&nbsp;Create A New List</span>
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "white",
                background: "rgba(255,255,255,.2)",
                "&:hover": {
                  borderColor: "white",
                  background: "rgba(255,255,255,.3)",
                },
              }}
              onClick={() => router.push("/load")}
            >
              <FolderOpenIcon /> <span style={{ fontWeight: 600 }}>&nbsp;&nbsp;Open A List</span>
            </Button>
          </Stack>
        </Box>
      </div>
    </Container>
  );
}
