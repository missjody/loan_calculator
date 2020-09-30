import React, { useState } from "react"

// need to pass over props for the calculator to use -- check syntax for that
function AutoCalculator({ rates }) {

    // what we'll be grabbing from the entries of the user
    const [userEntry, setUserEntry] = useState({
        loanAmount: "",
        scoreRange: "",
        term: "",
    })

    // so we can set the interest rate
    const [userRate, setUserRate] = useState({
        interest: "",
    })

    // what we'll be displaying on the screen
    const [results, setResults] = useState({
        monthlyPayment: "",
        isResult: false
    })

    // do we pull the api here? 
    // this gets called on every request
    export async function getServerSideProps() {
        const response = await fetch("http://localhost:3000/api/rates")
        const rates = await response.json()
        //passes to page via props
        return { props: { rates } }
    }

    // listen for the changes event on page
    // this will grab any userEntry and based on what name the target has,
    // updates the state value to match
    const handleInputChange = (event) =>
        setUserEntry({ ...userEntry, [event.target.name]: event.target.value })

    // set up error catch
    const [error, setError] = useState("")

    // this sets an error but how do we want it display onto the screen
    const isValid = () => {
        const { loanAmount, term } = userEntry;
        let actualError = "";
        // confirm there are values entered
        if (!loanAmount || !term) {
            actualError = "All the values are required";
        }
        // Validade if the values are numbers
        if (isNaN(loanAmount) || isNaN(term)) {
            actualError = "All the values must be a valid number";
        }
        // Validade if the values are positive numbers
        if (Number(loanAmount) <= 0 || Number(term) <= 0) {
            actualError = "All the values must be a positive number";
        }
        if (actualError) {
            setError(actualError);
            return false;
        }
        return true;
    };

    // convert scoreRange entry into interest rate based on api information
    // and set it to state value

    const handleSubmitValues = (event) => {
        event.preventDefault();
        if (isValid()) {
            setError("");
            calculate(userValues);
        }
    };

    // Calculation
    // set up results to the state to be displayed to the user
    const calculate = ({ amount, interest, years }) => {
        const userAmount = Number(amount);
        const i = Number(interest) / 100 / 12;
        let prep = (1 + i)
        const months = Number(years) * 12;
        const power_move = Math.pow(prep, months);
        const monthly_prep = (userAmount * x * i) / (x - 1);
        const monthly_payment = monthly_prep.toFixed(2);

        setResults({
            monthlyPayment: monthly_payment,
            isResult: true,
        });
    }
    return;
};

// Clear input fields
const clearFields = () => {
    setUserValues({
        amount: "",
        interest: "",
        years: "",
    });

    setResults({
        monthlyPayment: "",
        totalPayment: "",
        totalInterest: "",
        isResult: false,
    });
};


// do the math

// set up ability to clear information and start over
// return form from here


//     let auto = "";
//     $("#loanProduct option:selected").each(function () {
//         auto += $(this).val();
//         // console.log("listening to loan product:" + auto);
//     });

//     // grab term from entry
//     let n = "";
//     $("#loanTerm option:selected").each(function () {
//         n += $(this).val();
//         // console.log("listening to loan term:" + n);
//     });

//     // grab loan amt from entry
//     // let PV = parseInt($("#loanAmt").val());
//     let PV;
//     let loanAmt = parseInt($("#loanAmt").val());

//     if (loanAmt > 499 && loanAmt < 65001) {
//         PV = loanAmt;
//     }
//     // console.log("listening to loan amount:", PV);

//     // grab credit score from entry
//     let tier = "";
//     $("#score option:selected").each(function () {
//         tier += $(this).val();
//         // console.log("listening to loan term:" + tier);
//     });

//     // grab loans type of x, term length of term, interest rate of credit score tier
//     $.ajax("api/rates/", {
//         type: "GET",
//         data: "data",
//         dataType: "json"
//     }).then(function (data) {

//         //drill down for new rates only
//         let newRates;

//         if (`${auto}` == "New") {
//             newRates = data.loans.New;
//         } else {
//             newRates = data.loans.Used;
//         }
//         //  = data.loans.`${auto}`;
//         // console.log("newRates ", newRates)

//         let newFilter = { "term": `${n}` };
//         // console.log("newFilter ", newFilter)

//         // filter down to grab the rates that go with the term selected
//         let newObj = _.filter(newRates, newFilter);
//         // console.log("New Array ", newObj);

//         // translate this to "interest"
//         let newInterest = newObj[0].rate[`${tier}`];
//         // console.log("newInterest ", newInterest)
//         return newInterest;

//     }).then(function (newInterest) {
//         // magical math moment
//         let i = newInterest / 100 / 12;
//         let prep = (1 + i);
//         let power_move = Math.pow(prep, n);
//         let monthly_prep = (PV * i * power_move) / (power_move - 1);
//         let monthly_payment = monthly_prep.toFixed(2);

//         // ISSUE /////
//         // cant get it to not display NaN for monthly_payment once term is selected
//         //////////////

//         console.log("PV before test ", PV)
//         if (isNaN(PV)) {
//             $("#monthlyPayment").text("Enter a value between $500 and $65,000 please.")
//         } else {
//             console.log("$", monthly_payment)
//             $("#monthlyPayment").text("$" + monthly_payment);
//         }

//     });
// }

// // on page load, listen for any form changes
// // if changes are made, update calculation
// $(function () {

//     $("form").change(calculate);
//     $("form").keyup(calculate);

// });

export default AutoCalculator()