// on page load
// listen for New or Used
$("#loanProduct")
    .change(function () {
        let str = "";
        $("option:selected").each(function () {
            str += $(this).val() + " ";
            console.log("listening to loan product:" + str);
        });
    })
    .change();


// listen for term
$("#loanTerm")
    .change(function () {
        let str = "";
        $("option:selected").each(function () {
            str += $(this).val() + " ";
            console.log("listening to loan term:" + str);
        });
    })
    .change();

// listen for credit score


// listen for amount entered and 
$("#loanAmt")
    .change(function () {
        let str = "";
        $("#loanAmt").val(function () {
            str += $(this).val() + " ";
            console.log("listening to loan amount:" + str);
        });
    })
    .change();

// alert if loan amt is greater than 65000 or less than 500
// using a modal maybe?

    // if x.auto
    // grab term from entry
        // let n =
    // grab credit score from entry
        // let tier =
    // grab loan amt from entry
        // let PV = 
    // grab loans type of x, term length of term, interest rate of credit score tier
        // let interest = 

    // i equals interest / 100 / 12     
    // prep = (1 + i)
    // let power_move = Math.pow(prep, n);
    // let monthly_prep = (PV * i * power_move) / (power_move - 1);
    // let monthly_payment = monthly_prep.toFixed(2);


// if all selections have been made with acceptable information
// dynamically display the estimated payment below the selections
    // display monthly_payment 
// listen for the status changes to dynamically update



