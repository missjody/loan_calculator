import Head from "next/head"
// import styles from "../styles/Home.module.css"
import AutoCalculator from "../components/calculator/autoCalculator.js"
import fetch from "isomorphic-unfetch"

export default function Index({ rates }) {
    // console.log("Test: ", rates.data.loans.New)
    // so go down to whatever is selected, new or used {}
    // then map through to match term length
    // and grab rates that go with that term

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

// from https://www.youtube.com/watch?v=WzE08kNG4mg
// pulling in api, console log shows data on server side but not client side
// Index.getInitialProps = async function ({req}) {
//     console.log("What is req", {req})

//     const response = await fetch(req.protocol + "://" + req.get("host") + "/api/rates");
//     const data = await response.json();

//     // console.log("Rendering... ")
//     // console.log("Data: ", data.loans.New)
//     return {
//         rates: { data }
//     }

// }

Index.getInitialProps = async function ({req}) {
    const baseUrl = req ? `${req.protocol}://${req.headers.host}` : '';
    const res = await fetch(`${baseUrl}/api/rates`)
    const data = await res.json()
    return { rates: {data}}
}