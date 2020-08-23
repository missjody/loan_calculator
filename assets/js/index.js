function calculate() {

    // STILL NEED TO SET UP AS AN IFF FOR AUTO
    // if x.auto

    // listen for New or Used
    // STILL NEED IF NO CAR IS SELECTED DISPLAY LINE
    // "PLEASE SELECT NEW OR USED"
    let auto = "";
    $("#loanProduct option:selected").each(function () {
        auto += $(this).val() + " ";
        console.log("listening to loan product:" + auto);
    });


    // grab term from entry
    // STILL NEED IF NO TERM IS SELECTED DISPLAY LINE
    // "PLEASE SELECT TERM"
    let n = "";
    $("#loanTerm option:selected").each(function () {
        n += $(this).val() + " ";
        console.log("listening to loan term:" + n);
    });


    // grab loan amt from entry
    // STILL NEED IF NO AMOUNT IS ENTERED DISPLAY LINE
    // OR IF AMOUNT DOES NOT FALL BETWEEN 499 AND 65001
    // "PLEASE ENTER A VALUE FROM 500 TO 65,000"
    let PV = parseInt($("#loanAmt").val());
    console.log("listening to loan amount:", PV);


    // grab credit score from entry
    // STILL NEED IF NO SCORE RANGE IS SELECTED DISPLAY LINE
    // "PLEASE SELECT YOUR SCORE RANGE"
    let tier = "";
    $("#score option:selected").each(function () {
        tier += $(this).val() + " ";
        console.log("listening to loan term:" + tier);
    });

    // STILL NEED TO SERVE ACTUAL INTEREST
    // grab loans type of x, term length of term, interest rate of credit score tier
    // let interest = 


    // magical math moment
    let i = interest / 100 / 12;
    let prep = (1 + i);
    let power_move = Math.pow(prep, n);
    let monthly_prep = (PV * i * power_move) / (power_move - 1);
    let monthly_payment = monthly_prep.toFixed(2);

    // STILL NEED TO SET UP
    // if all selections have been made with acceptable information
    // dynamically display the estimated payment below the selections
    // display monthly_payment 
}

// on page load, listen for any form changes
// if changes are made, update calculation
$(function () {

    $("form").change(calculate);
    $("form").keyup(calculate);

});
