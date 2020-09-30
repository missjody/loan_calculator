import React, { useState } from "react"

// need to pass over props for the calculator to use -- check syntax for that
function AutoCalculator({ rates }) {

    // what we'll be grabbing from the entries of the user
    const [userEntry, setUserEntry] = useState({
        loanAmount: "",
        scoreRange: "",
        term: "",
    })

    // what we'll be displaying on the screen
    const [results, setResults] = useState({
        monthlyPayment: "",
        // isResult: false, <-- might use something like this to control the display of the payment so that it won't give a NaN result
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
    // set up error catch
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