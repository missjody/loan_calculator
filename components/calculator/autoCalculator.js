import React, { useEffect, useState } from "react";
import css from "./autoCalculator.module.css"
import _ from 'lodash';

import Error from "./Error"
import LoanTypeSelector from "./LoanTypeSelector"
import ScoreRange from "./ScoreRange"
import Slider from "./Slider"
import TermRange from "./TermRange"

function AutoCalculator({ rates }) { 
//     const [userEntry, setUserEntry] = useState({
//         loanType: "New",
//         term: "60",
//         scoreRange: "APlus",
//         loanAmount: "",
//     })

//     // // so we can set the interest rate
//     const [userRate, setUserRate] = useState({
//         interest: "",
//     })

//     // // what we'll be displaying on the screen
//     const [results, setResults] = useState({
//         monthlyPayment: "",
//         isResult: false
//     })

//     useEffect((e) => {
//         console.log("test ", userEntry.loanAmount)
//         findRate(userEntry, rates)
//         // pass userRate to calculator as well as userEntry

        
//     }, [userEntry, userRate])

//     // listen for the changes event on page
//     // this will grab any userEntry and based on what name the target has,
//     // updates the state value to match
//     const handleInputChange = (event) => {
//         // allows us to update any of the user entries by name and value 
//         setUserEntry({ ...userEntry, [event.target.name]: event.target.value })

//         if (isValid()) {
//             setError("");
//         }
//     };


//     // set up error catch
//     const [error, setError] = useState("")

//     // updated to check for all values on form
//    const isValid = () => {
//         const { loanAmount } = userEntry;
//         let actualError = "";
//         // confirm there is a value selected for loan amount
//         if (!loanAmount) {
//             actualError = "All the values are required";
//         }
//         if (actualError) {
//             setError(actualError);
//             return false;
//         }
//         return true;
//     };


//     // // convert scoreRange entry into interest rate based on api information
//     // // and set it to state value
//     const findRate = (userEntry, rates) => {

//         let grabByType = rates.data.loans[userEntry.loanType];

//         let filter = { "term": userEntry.term };

//         // filter down to grab the rates that go with the term selected
//         let newObj = _.filter(grabByType, filter);

//         setUserRate(newObj[0].rate[userEntry.scoreRange])

//         // // pass userRate to calculator as well as userEntry
//         calculate(userEntry, userRate);
//     }

//     // do the math
//     // set up results to the state to be displayed to the user
//     const calculate = (userEntry, userRate) => {
//          console.log(userEntry);
//         const userAmount = userEntry.loanAmount;
//         console.log("loan amount ", userAmount)
//         const i = (userRate / 100 / 12);
//         console.log("i check for decimals", i)
//         let prep = (1 + i)
//         const months = userEntry.term
//         console.log("months ", months)
//         const power_move = Math.pow(prep, months);
//         const monthly_prep = (userAmount * (power_move * i)) / (power_move - 1);
//         console.log("payment before rounding to two decimals ", monthly_prep)
//         const monthly_payment = monthly_prep.toFixed(2);

//         if (isNaN(monthly_payment)) {
//             return;
//         } else {

//             setResults({
//                 monthlyPayment: monthly_payment,
//                 isResult: true,
//             });
//         }

//         return;
//     }

    // return form from here
    return (
        <div className={css.container}>

            <h1 >
                Loan Payment Calculator
            </h1>

            {/* loan calculator intro */}
            <h5>Calculate your estimated monthly loan payment by entering the loan information below.</h5>

            {/* <p>{error}</p> */}

            <form>

                {/* pass this babe some props */}
                <LoanTypeSelector />
                {/* <label>
                    Choose your loan product:
                <select className={css.select} name="loanType" value={userEntry.loanType} onChange={handleInputChange}>
                        <option value="New">New Auto (2017 & newer)</option>
                        <option value="Used">Used Auto (2010 - 2016)</option>
                    </select>
                </label> */}


                {/* pass this babe some props */}
                <TermRange />
                {/* <label>

                    Choose your loan term:
                <select className={css.select} name="term" value={userEntry.term} onChange={handleInputChange}>
                        <option value="60">60 months</option>
                        <option value="72">72 months</option>
                        <option value="84">84 months</option>
                    </select>

                </label> */}

                {/* pass this babe some props  */}
                <ScoreRange />
                {/* <label>

                    Do you know your credit score:
                <select className={css.select} name="scoreRange" value={userEntry.scoreRange} onChange={handleInputChange}>
                        <option value="APlus">Excellent (740 & above)</option>
                        <option value="A">Great (690-739)</option>
                        <option value="B">Good (660-689)</option>
                        <option value="C">Fair (620-659)</option>
                        <option value="D">Ok (619 & Below)</option>
                    </select>
                </label> */}

                <Slider />
                {/* 
                <p> You want to borrow ${userEntry.loanAmount}</p>
                <input type="range" step={500} max={65000} min={500} name="loanAmount" value={userEntry.loanAmount} onChange={handleInputChange} /> */}

            </form>


                <Error />
                {/* only displays this div if there is a result to display using ternerary */}
                {/* < div style={!results.isResult ? { display: "none" } : { display: "block" }} >
                <h5>Your estimated monthly payment is ${results.monthlyPayment}</h5>
                </div> */}

        </div >
    )

}


export default AutoCalculator
