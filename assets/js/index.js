function calculate() {

    // STILL NEED TO SET UP AS AN IFF FOR AUTO
    // if x.auto

    // listen for New or Used
    let auto = "";
    $("#loanProduct option:selected").each(function () {
        auto += $(this).val() + " ";
        console.log("listening to loan product:" + auto);
    });


    // grab term from entry
    let n = "";
    $("#loanTerm option:selected").each(function () {
        n += $(this).val() + " ";
        console.log("listening to loan term:" + n);
    });



    // grab credit score from entry
    let tier = "";
    $("#score option:selected").each(function () {
        tier += $(this).val() + " ";
        console.log("listening to loan term:" + tier);
    });

    // grab loan amt from entry
    let PV = parseInt($("#loanAmt").val());
    console.log("listening to loan amount:", PV);

    // STILL NEED TO ADD LIMITATIONS TO PV
    // alert if loan amt is greater than 65000 or less than 500
    // using a modal maybe?

    // STILL NEED TO SERVE ACTUAL INTEREST
    // grab loans type of x, term length of term, interest rate of credit score tier
    // let interest = 

    // to test, hardcode interest
    let interest = 5.99;

    // i equals interest / 100 / 12
    let i = interest / 100 / 12;
    // prep = (1 + i)
    let prep = (1 + i);
    let power_move = Math.pow(prep, n);
    let monthly_prep = (PV * i * power_move) / (power_move - 1);
    let monthly_payment = monthly_prep.toFixed(2);

    console.log("monthly payment test", monthly_payment)

    // if all selections have been made with acceptable information
    // dynamically display the estimated payment below the selections
    // display monthly_payment 
    // listen for the status changes to dynamically update
}

// on page load
$(function () {

    $("form").change(calculate);
    $("form").keyup(calculate);



});
