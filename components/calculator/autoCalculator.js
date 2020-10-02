import React, { useState } from "react"


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
            findRate()
            // pass userRate to calculator as well as userEntry
            calculate(userEntry);
        }
    };


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


    // // convert scoreRange entry into interest rate based on api information
    // // and set it to state value
    const findRate = () => {
        // map over data to find match to value of userEntry.loanType
        // map over data to find match to value of userEntry.term
        // map over that term's rates to match to value of userEntry.scoreRange
        // setUserRate to the rate found
    }

    // do the math
    // Calculation
    // set up results to the state to be displayed to the user
    const calculate = ({ amount, interest, term }) => {
        const userAmount = Number(amount);
        const i = Number(interest) / 100 / 12;
        let prep = (1 + i)
        const months = Number(term) * 12;
        const power_move = Math.pow(prep, months);
        const monthly_prep = (userAmount * power_move * i) / (power_move - 1);
        const monthly_payment = monthly_prep.toFixed(2);

        setResults({
            monthlyPayment: monthly_payment,
            isResult: true,
        });

        return;
    }

    // set up ability to clear information and start over
    // Clear input fields
    const clearFields = () => {
        setUserEntry({
            amount: "",
            scoreRange: "",
            term: "",
        });

        setResults({
            monthlyPayment: "",
            isResult: false,
        });
    };

    // return form from here
    return (
        <div>


            <h1 >
                Loan Payment Calculator
            </h1>

            {/* loan calculator intro */}
            <h5>Calculate your estimated monthly loan payment by entering the loan information below.</h5>

            <p className="error">{error}{userEntry.term}TEST</p>

            <form>

                <select className="custom-select" id="loanProduct" name="loanType" onChange={handleInputChange}>
                    <option selected>Choose your loan product</option>
                    <option value="New">New Auto (2017 & newer)</option>
                    <option value="Used">Used Auto (2010 - 2016)</option>
                </select>


                <select className="custom-select" id="loanTerm">
                    <option selected>Choose your loan term</option>
                    <option value="60">60 months</option>
                    <option value="72">72 months</option>
                    <option value="84">84 months</option>
                </select>

                <select className="custom-select" id="score">
                    <option selected>Do you know your credit score</option>
                    <option value="APlus">Excellent (740 & above)</option>
                    <option value="A">Great (690-739)</option>
                    <option value="B">Good (660-689)</option>
                    <option value="C">Fair (620-659)</option>
                    <option value="D">Ok (619 & Below)</option>
                </select>

                {/* <p> I want to borrow ${userEntry.loanAmount}</p> */}
                <input type="range" step={1} maxvalue={65000} minvalue={500} onChange={handleInputChange} />

                {/* <input type="number" className="form-control" id="loanAmt"
                    placeholder="Enter desired loan amount from $500 to $65,000">
                </input> */}
            </form>


            <div>
                <h5 id="monthlyPayment"></h5>
            </div>

            <div>
                <input
                    className="button"
                    value="Start Over"
                    type="button"
                    onClick={clearFields}
                />
            </div>



        </div>
    )

}




export default AutoCalculator




