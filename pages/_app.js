import '../styles/globals.css'
import Layout from "../components/Layout";
import App from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { client } from "../lib/client";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E7AE4B",
    },
    secondary: {
      main: "#fff",
    },
  },
});

function MyApp({ Component, footerData, pageProps }) {
  return (
    <Layout footerData={footerData}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const footerData = await client.fetch(`{
    'contactInfo': *[_type=="contact"][0],
    'hoursOfOperation': *[_type == "hours_of_operation"][0],
    'footerContent': *[_type=="footer"][0]
  }`);
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, footerData };
};

export default MyApp;
