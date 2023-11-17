import "@fontsource/poppins";
import "../styles/app.scss"
import {Fragment} from "react";
import Head from "next/head";
import ThemeProvider from "../contexts/theme";

const App = ({Component, pageProps}) => {
    const Layout = Component.layout || Fragment

    return (
       <>
           <Head>
               <title>AR | Tuhin</title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           </Head>
          <ThemeProvider>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </ThemeProvider>
       </>
    )
}

export default App