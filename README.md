# Loan Calculator 
*building a loan calculator in incremental steps*

## Version 1

Sat up simple interest calculator after retrieving the formula from calculatorsoup.com. Original version features two buttons: one to run the calculation function and one to refresh the page to restart the process.

## Version 2
*new requirements*

Start a new repository in github and add your code. 

Modify the “clear form” to use a form and input type of reset.

Modify the form to use a select for credit score, the rate should be 
      selected from a variable in the script.


```html
<select id="score" name="score">
    <option value="APlus">Excellent (740 & above)</option>
    <option value="A">Great (690-739)</option>
    <option value="B">Good (660-689)</option>
    <option value="C">Fair (620-659)</option>
<option value="D">Ok (619 & Below)</option>
<select>
```

      Then using the variables in the script of:
        APlus="3.990"
        A="4.490"
        B="4.990"
        C="6.490"
        D="8.490"
