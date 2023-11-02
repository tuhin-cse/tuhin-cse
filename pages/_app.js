import "@fontsource/fira-code"
import "@fontsource/nunito"
import "../styles/app.scss"
import {Fragment} from "react";
import Head from "next/head";

const App = ({Component, pageProps}) => {
    const Layout = Component.layout || Fragment

    return (
       <>
           <Head>
               <title>Dev Tuhin</title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           </Head>
           <Layout>
               <Component {...pageProps} />
           </Layout>
       </>
    )
}

export default App