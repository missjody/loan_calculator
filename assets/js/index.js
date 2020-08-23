function calculate() {
    console.log("this might work")
}

// on page load
$(function () {

    $("form").change(calculate);
    $("form").keyup(calculate);

    // listen for New or Used
    $("#loanProduct")
        .change(function () {
            let str = "";
            $("option:selected").each(function () {
                str += $(this).val() + " ";
                console.log("listening to loan product:" + str);
            });
        })


    // listen for term
    $("#loanTerm")
        .change(function () {
            let str = "";
            $("option:selected").each(function () {
                str += $(this).val() + " ";
                console.log("listening to loan term:" + str);
            });
        })


    // listen for credit score
    $("#score")
        .change(function () {
            let str = "";
            $("option:selected").each(function () {
                str += $(this).val() + " ";
                console.log("listening to loan term:" + str);
            });
        })

    // listen for amount entered  
    //keyup instead of keypress, so we get the number 
    //after new number has been added, not before
    $("#loanAmt").keyup(function () {
        let amt = parseInt($("#loanAmt").val());
        console.log("listening to loan amount:", amt);
    })


    // if x.auto
    // grab term from entry
    // let n =
    // grab credit score from entry
    // let tier =
    // grab loan amt from entry
    // let PV = 
    // alert if loan amt is greater than 65000 or less than 500
    // using a modal maybe?

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


});
