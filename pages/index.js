// import Head from "next/head"
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

            <h1>beep boop</h1>
            <AutoCalculator rates={rates} />

        </div>
    )
}

// from https://www.youtube.com/watch?v=WzE08kNG4mg
// pulling in api, console log shows data on server side but not client side
Index.getInitialProps = async function () {
    const response = await fetch("http://localhost:3000/api/rates");
    const data = await response.json();

    console.log("Rendering... ")
    // console.log("Data: ", data.loans.New)
    return {
        rates: { data }
    }

}
