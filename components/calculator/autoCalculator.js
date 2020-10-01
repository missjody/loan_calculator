import React, { useState } from "react" // , 
// import FormLayout from "./formLayout.js"
// import Head from 'next/head'


// need to pass over props for the calculator to use -- check syntax for that
function AutoCalculator({ rates }) {
    // console.log("Do rates pass over? ", rates) THEY DO hurray

    // // what we'll be grabbing from the entries of the user
    const [userEntry, setUserEntry] = useState({
        loanAmount: "",
        scoreRange: "",
        term: "",
    })

    // // so we can set the interest rate
    // const [userRate, setUserRate] = useState({
    //     interest: "",
    // })

    // // what we'll be displaying on the screen
    // const [results, setResults] = useState({
    //     monthlyPayment: "",
    //     isResult: false
    // })

    // // // do we pull the api here? 
    // // // this gets called on every request
    // // export async function getServerSideProps() {
    // //     const response = await fetch("http://localhost:3000/api/rates")
    // //     const rates = await response.json()
    // //     //passes to page via props
    // //     return { props: { rates } }
    // // }

    // // listen for the changes event on page
    // // this will grab any userEntry and based on what name the target has,
    // // updates the state value to match
    // const handleInputChange = (event) => setUserEntry({ ...userEntry, [event.target.name]: event.target.value })

    // // set up error catch
    // const [error, setError] = useState("")

    // // this sets an error but how do we want it display onto the screen
    // const isValid = () => {
    //     const { loanAmount, term } = userEntry;
    //     let actualError = "";
    //     // confirm there are values entered
    //     if (!loanAmount || !term) {
    //         actualError = "All the values are required";
    //     }
    //     // Validade if the values are numbers
    //     if (isNaN(loanAmount) || isNaN(term)) {
    //         actualError = "All the values must be a valid number";
    //     }
    //     // Validade if the values are positive numbers
    //     if (Number(loanAmount) <= 0 || Number(term) <= 0) {
    //         actualError = "All the values must be a positive number";
    //     }
    //     if (actualError) {
    //         setError(actualError);
    //         return false;
    //     }
    //     return true;
    // };

    // // convert scoreRange entry into interest rate based on api information
    // // and set it to state value

    // const handleSubmitValues = (event) => {
    //     event.preventDefault();
    //     if (isValid()) {
    //         setError("");
    //         calculate(userValues);
    //     }
    // };

    // // do the math
    // // Calculation
    // // set up results to the state to be displayed to the user
    // const calculate = ({ amount, interest, term }) => {
    //     const userAmount = Number(amount);
    //     const i = Number(interest) / 100 / 12;
    //     let prep = (1 + i)
    //     const months = Number(term) * 12;
    //     const power_move = Math.pow(prep, months);
    //     const monthly_prep = (userAmount * x * i) / (x - 1);
    //     const monthly_payment = monthly_prep.toFixed(2);

    //     setResults({
    //         monthlyPayment: monthly_payment,
    //         isResult: true,
    //     });

    //     return;
    // }

    // // set up ability to clear information and start over
    // // Clear input fields
    // const clearFields = () => {
    //     setUserValues({
    //         amount: "",
    //         scoreRange: "",
    //         term: "",
    //     });

    //     setResults({
    //         monthlyPayment: "",
    //         isResult: false,
    //     });
    // };

    // // return form from here
    // return (
    //     <FormLayout>
    //         <Head>
    //             <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
    //             <title>Auto Loan Payment Calculator</title>
    //             <link rel="icon" href="/favicon.ico" />
    //         </Head>

    //         {/* <h1 className={styles.title}>
    //             Loan Payment Calculator
    //         </h1> */}

    //         {/* <p className={styles.description}> */}
    //         {/* loan calculator intro */}
    //         <h5>Calculate your estimated monthly loan payment by entering the loan information below.</h5>
    //         {/* </p> */}

    //         {/* <p className="error">{error}</p> */}

    //         {/* form */}
    //         <form >
    //             {/* onChange={handleSubmitValues} */}
    //             {/* do a truthy, if there is not a result yet only display the questions, if there is a result also show the result box and refresh button 
    //             so basically double up these options once we figure out if they can stay selects or inputs */}
    //             {/* change these to inputs? do I remember how this is done in React, or rather in Next */}
    //             <select className="custom-select" id="loanProduct">
    //                 <option selected>Choose your loan product</option>
    //                 <option value="New">New Auto (2017 & newer)</option>
    //                 <option value="Used">Used Auto (2010 - 2016)</option>
    //             </select>

    //             <select className="custom-select" id="loanTerm">
    //                 <option selected>Choose your loan term</option>
    //                 <option value="60">60 months</option>
    //                 <option value="72">72 months</option>
    //                 <option value="84">84 months</option>
    //             </select>

    //             <select className="custom-select" id="score">
    //                 <option selected>Do you know your credit score</option>
    //                 <option value="APlus">Excellent (740 & above)</option>
    //                 <option value="A">Great (690-739)</option>
    //                 <option value="B">Good (660-689)</option>
    //                 <option value="C">Fair (620-659)</option>
    //                 <option value="D">Ok (619 & Below)</option>
    //             </select>

    //             <input type="number" className="form-control" id="loanAmt"
    //                 placeholder="Enter desired loan amount from $500 to $65,000">
    //             </input>
    //         </form>

    //         <div>
    //             <h5 id="monthlyPayment"></h5>
    //         </div>
    //         {/* 
    //         <div>
    //             <input
    //                 className='button'
    //                 value='Start Over'
    //                 type='button'
    //                 onClick={clearFields}
    //             />
    //         </div> */}

    //     </FormLayout>
    // )

    return (
        <h1> Test </h1>
    )


}




export default AutoCalculator




