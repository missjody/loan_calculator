function calculate() {

    // STILL NEED TO SET UP AS AN IFF FOR AUTO
    // if x.auto

    // listen for New or Used
    // STILL NEED IF NO CAR IS SELECTED DISPLAY LINE
    // "PLEASE SELECT NEW OR USED"
    let auto = "";
    $("#loanProduct option:selected").each(function () {
        auto += $(this).val();
        // console.log("listening to loan product:" + auto);
    });


    // grab term from entry
    // STILL NEED IF NO TERM IS SELECTED DISPLAY LINE
    // "PLEASE SELECT TERM"
    let n = "";
    $("#loanTerm option:selected").each(function () {
        n += $(this).val();
        console.log("listening to loan term:" + n);
    });


    // grab loan amt from entry
    // STILL NEED IF NO AMOUNT IS ENTERED DISPLAY LINE
    // OR IF AMOUNT DOES NOT FALL BETWEEN 499 AND 65001
    // "PLEASE ENTER A VALUE FROM 500 TO 65,000"
    let PV = parseInt($("#loanAmt").val());
    // console.log("listening to loan amount:", PV);


    // grab credit score from entry
    // STILL NEED IF NO SCORE RANGE IS SELECTED DISPLAY LINE
    // "PLEASE SELECT YOUR SCORE RANGE"
    let tier = "";
    $("#score option:selected").each(function () {
        tier += $(this).val();
        // console.log("listening to loan term:" + tier);
    });

    // STILL NEED TO SERVE ACTUAL INTEREST
    // grab loans type of x, term length of term, interest rate of credit score tier
    $.ajax("api/rates/", {
        type: "GET",
        data: "data",
        dataType: "json"
    }).then(function (data) {

        //drill down for new rates only
        let newRates = data.loans.New;
        console.log("newRates ", newRates)

        // this is supposed to be grabbing the selected term
        // but it's gabbing before the selection happens
        let newFilter = { "term": `${n}` };
        console.log("newFilter ", newFilter)

        // filter down to grab the rates that go with the term selected
        let newObj = _.filter(newRates, newFilter);
        console.log("New Array ", newObj);


        // translate this to "interest"
        let newInterest = newObj[0].rate[`${tier}`];
        console.log("newInterest ", newInterest)

        // repeat the same for used

        // but how do we pass on to the outside? having async hell
        // everything else runs before this does :(
    });


    // magical math moment
    // let i = interest / 100 / 12;
    // let prep = (1 + i);
    // let power_move = Math.pow(prep, n);
    // let monthly_prep = (PV * i * power_move) / (power_move - 1);
    // let monthly_payment = monthly_prep.toFixed(2);

    // STILL NEED TO SET UP
    // if all selections have been made with acceptable information
    // dynamically display the estimated payment below the selections
    // display monthly_payment 

    // $("#monthlyPayent").text(monthly_payment);
}

// on page load, listen for any form changes
// if changes are made, update calculation
$(function () {

    $("form").change(calculate);
    $("form").keyup(calculate);

});
