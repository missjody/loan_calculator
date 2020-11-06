import Head from "next/head"
// import styles from "../styles/Home.module.css"
import AutoCalculator from "../components/calculator/AutoCalculator.js"
import fetch from "isomorphic-unfetch"

export default function Index({ rates }) {

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
                <title>Auto Loan Payment Calculator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AutoCalculator rates={rates} />

        </div>
    )
}


// Index.getInitialProps = async function ({req}) {
//     const baseUrl = req ? `https://${req.headers.host}` : '';
//     const res = await fetch(`${baseUrl}/api/rates`)
//     const data = await res.json()
//     return { rates: {data}}
// }