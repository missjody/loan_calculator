function calculate() {

    // STILL NEED IF NO CAR IS SELECTED DISPLAY LINE
    // "PLEASE SELECT NEW OR USED"

    // STILL NEED IF NO TERM IS SELECTED DISPLAY LINE
    // "PLEASE SELECT TERM"

    // STILL NEED IF NO AMOUNT IS ENTERED DISPLAY LINE
    // OR IF AMOUNT DOES NOT FALL BETWEEN 499 AND 65001
    // "PLEASE ENTER A VALUE FROM 500 TO 65,000"

    // STILL NEED IF NO SCORE RANGE IS SELECTED DISPLAY LINE
    // "PLEASE SELECT YOUR SCORE RANGE"

    // STILL NEED TO GRAB RATE BASED ON IF NEW OR USED AUTO
    // IS SELECTED - RIGHT NOW ONLY CALCULATING BASED ON NEW 

    let auto = "";
    $("#loanProduct option:selected").each(function () {
        auto += $(this).val();
        // console.log("listening to loan product:" + auto);
    });

    // grab term from entry
    let n = "";
    $("#loanTerm option:selected").each(function () {
        n += $(this).val();
        // console.log("listening to loan term:" + n);
    });

    // grab loan amt from entry
    let PV = parseInt($("#loanAmt").val());
    // console.log("listening to loan amount:", PV);

    // grab credit score from entry
    let tier = "";
    $("#score option:selected").each(function () {
        tier += $(this).val();
        // console.log("listening to loan term:" + tier);
    });

    // grab loans type of x, term length of term, interest rate of credit score tier
    $.ajax("api/rates/", {
        type: "GET",
        data: "data",
        dataType: "json"
    }).then(function (data) {

        //drill down for new rates only
        let newRates = data.loans.New;
        // console.log("newRates ", newRates)

        let newFilter = { "term": `${n}` };
        // console.log("newFilter ", newFilter)

        // filter down to grab the rates that go with the term selected
        let newObj = _.filter(newRates, newFilter);
        // console.log("New Array ", newObj);

        // translate this to "interest"
        let newInterest = newObj[0].rate[`${tier}`];
        // console.log("newInterest ", newInterest)
        return newInterest;

    }).then(function (newInterest) {
        // magical math moment
        let i = newInterest / 100 / 12;
        let prep = (1 + i);
        let power_move = Math.pow(prep, n);
        let monthly_prep = (PV * i * power_move) / (power_move - 1);
        let monthly_payment = monthly_prep.toFixed(2);

        if (monthly_payment != NaN) {
            console.log("$", monthly_payment)
            $("#monthlyPayment").text("$" + monthly_payment);
        }
    });
}

// on page load, listen for any form changes
// if changes are made, update calculation
$(function () {

    $("form").change(calculate);
    $("form").keyup(calculate);

});
