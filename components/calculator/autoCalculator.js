import React, { useState } from "react";
import css from "./autoCalculator.module.css"
import _ from 'lodash';

function AutoCalculator({ rates }) {
    // // what we'll be grabbing from the entries of the user
    // by setting the initial values the user does not have to click on the first option displayed on load
    // IN THEORY, however it's not updating properly 
    const [userEntry, setUserEntry] = useState({
        loanType: "New",
        term: "60",
        scoreRange: "APlus",
        loanAmount: "",
    })

    // // so we can set the interest rate
    const [userRate, setUserRate] = useState({
        interest: "",
    })

    // // what we'll be displaying on the screen
    const [results, setResults] = useState({
        monthlyPayment: "",
        isResult: false
    })

    // listen for the changes event on page
    // this will grab any userEntry and based on what name the target has,
    // updates the state value to match
    const handleInputChange = (event) => {
        console.log(userEntry);
        // allows us to update any of the user entries by name and value 
        // but, is doing it this way not updating calculator in some way?
        // look into findRate and make sure it's processing properly 
        setUserEntry({ ...userEntry, [event.target.name]: event.target.value })

        if (isValid()) {
            setError("");
            // do we need to pass props to findRate()?
            findRate(userEntry, rates)
        }
    };


    // set up error catch
    const [error, setError] = useState("")

    // updated to check for all values on form
    // it is not checking values correctly, and passing a valid when there are answers missing
    const isValid = () => {
        const { loanAmount } = userEntry;
        let actualError = "";
        // confirm there is a value selected for loan amount
        if (!loanAmount) {
            actualError = "All the values are required";
        }
        if (actualError) {
            setError(actualError);
            return false;
        }
        return true;
    };


    // // convert scoreRange entry into interest rate based on api information
    // // and set it to state value
    const findRate = (userEntry, rates) => {

        let grabByType = rates.data.loans[userEntry.loanType];

        let filter = { "term": userEntry.term };

        // filter down to grab the rates that go with the term selected
        let newObj = _.filter(grabByType, filter);

        setUserRate(newObj[0].rate[userEntry.scoreRange])

        // pass userRate to calculator as well as userEntry
        calculate(userEntry, userRate);
    }

    // do the math
    // set up results to the state to be displayed to the user
    const calculate = (userEntry, userRate) => {
        const userAmount = userEntry.loanAmount;
        console.log("loan amount ", userAmount)
        const i = (userRate / 100 / 12);
        console.log("i check for decimals", i)
        let prep = (1 + i)
        const months = userEntry.term
        console.log("months ", months)
        const power_move = Math.pow(prep, months);
        const monthly_prep = (userAmount * (power_move * i)) / (power_move - 1);
        console.log("payment before rounding to two decimals ", monthly_prep)
        const monthly_payment = monthly_prep.toFixed(2);

        setResults({
            monthlyPayment: monthly_payment,
            isResult: true,
        });

        return;
    }

    // return form from here
    return (
        <div className={css.container}>

            <h1 >
                Loan Payment Calculator
            </h1>

            {/* loan calculator intro */}
            <h5>Calculate your estimated monthly loan payment by entering the loan information below.</h5>

            <p>{error}</p>

            <form>



                <label>
                    Choose your loan product:
                <select className={css.select} name="loanType" value={userEntry.loanType} onChange={handleInputChange}>
                        <option value="New">New Auto (2017 & newer)</option>
                        <option value="Used">Used Auto (2010 - 2016)</option>
                    </select>
                </label>

                <label>

                    Choose your loan term:
                <select className={css.select} name="term" value={userEntry.term} onChange={handleInputChange}>
                        <option value="60">60 months</option>
                        <option value="72">72 months</option>
                        <option value="84">84 months</option>
                    </select>

                </label>

                <label>

                    Do you know your credit score:
                <select className={css.select} name="scoreRange" value={userEntry.scoreRange} onChange={handleInputChange}>
                        <option value="APlus">Excellent (740 & above)</option>
                        <option value="A">Great (690-739)</option>
                        <option value="B">Good (660-689)</option>
                        <option value="C">Fair (620-659)</option>
                        <option value="D">Ok (619 & Below)</option>
                    </select>
                </label>

                <p> You want to borrow ${userEntry.loanAmount}</p>
                <input type="range" step="500" max="65000" min="500" name="loanAmount" value={userEntry.loanAmount} onChange={handleInputChange} />

            </form>

            {/* only displays this div if there is a result to display */}
            < div style={!results.isResult ? { display: "none" } : { display: "block" }} >
                <h5>Your estimated monthly payment is ${results.monthlyPayment}</h5>
            </div>

        </div >
    )

}


export default AutoCalculator




