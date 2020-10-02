import React, { useState } from "react";
import _ from 'lodash';

// need to pass over props for the calculator to use -- check syntax for that
function AutoCalculator({ rates }) {
    // console.log("Do rates pass over? ", rates) THEY DO hurray

    // // what we'll be grabbing from the entries of the user
    const [userEntry, setUserEntry] = useState({
        loanType: "",
        loanAmount: "",
        scoreRange: "",
        term: "",
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
        setUserEntry({ ...userEntry, [event.target.name]: event.target.value })
        if (isValid()) {
            setError("");
            // do we need to pass props to findRate()?
            findRate(userEntry, rates)
            // pass userRate to calculator as well as userEntry
            calculate(userEntry, userRate);
        }
    };


    // set up error catch
    const [error, setError] = useState("")

    // this sets an error but how do we want it display onto the screen
    // updated to check for all values on form
    const isValid = () => {
        const { loanType, loanAmount, scoreRange, term } = userEntry;
        let actualError = "";
        // confirm there are values entered
        if (!loanAmount || !term || !loanType || !scoreRange) {
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
    }

    // do the math
    // Calculation
    // set up results to the state to be displayed to the user
    // we'll be passing these values in differently cause it's userRate.interest and userEntry.loanAmount, userEntry.term
    const calculate = (userEntry, userRate) => {
        const userAmount = userEntry.loanAmount;
        const i = userRate / 100 / 12;
        let prep = (1 + i)
        // months is already being brought in with the months due to a drop down with terms 
        // so we do not need to multiply by 12 like we have here
        // const months = userEntry.term * 12;
        const months = userEntry.term
        const power_move = Math.pow(prep, months);
        const monthly_prep = (userAmount * power_move * i) / (power_move - 1);
        const monthly_payment = monthly_prep.toFixed(2);

        setResults({
            monthlyPayment: monthly_payment,
            isResult: true,
        });

        return;
    }

    // return form from here
    return (
        <div className="container">

            <h1 >
                Loan Payment Calculator
            </h1>

            {/* loan calculator intro */}
            <h5>Calculate your estimated monthly loan payment by entering the loan information below.</h5>

            <p className="error">{error}</p>

            <form>

                <select className="custom-select" id="loanProduct" name="loanType" onChange={handleInputChange}>
                    <option selected>Choose your loan product</option>
                    <option value="New">New Auto (2017 & newer)</option>
                    <option value="Used">Used Auto (2010 - 2016)</option>
                </select>


                <select className="custom-select" id="loanTerm" name="term" onChange={handleInputChange}>
                    <option selected>Choose your loan term</option>
                    <option value="60">60 months</option>
                    <option value="72">72 months</option>
                    <option value="84">84 months</option>
                </select>

                <select className="custom-select" id="score" name="scoreRange" onChange={handleInputChange}>
                    <option selected>Do you know your credit score</option>
                    <option value="APlus">Excellent (740 & above)</option>
                    <option value="A">Great (690-739)</option>
                    <option value="B">Good (660-689)</option>
                    <option value="C">Fair (620-659)</option>
                    <option value="D">Ok (619 & Below)</option>
                </select>

                <p> You want to borrow ${userEntry.loanAmount}</p>
                <input type="range" step={500} max={65000} min={500} name="loanAmount" onChange={handleInputChange} />

            </form>


            <div>
                <h5 id="monthlyPayment">Your estimated monthly payment is ${results.monthlyPayment}</h5>
            </div>

        </div>
    )

}


export default AutoCalculator




