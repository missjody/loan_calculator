# Loan Calculator 
*building a loan calculator in incremental steps*

~~Link to most up to date version of Loan Calculator [here](https://missjody.github.io/loan_calculator/)~~

## Version 4

* upgraded to express server, jquery

*new requirements*

Display the following drop-downs which rely on eachother
  * Loan Product – in this case, there is only one product in the data, Auto
  * Loan SubType – in this case, Auto has a “Year”, New & Used
  * Loan Amount - Hard-Code minAmount as 500, maxAmount as 65000
  * Credit Score
  
Once all of these items are selected, a rate is auto-filled, and the calculation based on amount desired is specified

8/23: TODOS:

    * STILL NEED IF NO CAR IS SELECTED DISPLAY LINE
     "PLEASE SELECT NEW OR USED"

    * STILL NEED IF NO TERM IS SELECTED DISPLAY LINE
     "PLEASE SELECT TERM"

    * STILL NEED IF NO AMOUNT IS ENTERED DISPLAY LINE
     OR IF AMOUNT DOES NOT FALL BETWEEN 499 AND 65001
     "PLEASE ENTER A VALUE FROM 500 TO 65,000"

    * STILL NEED IF NO SCORE RANGE IS SELECTED DISPLAY LINE
     "PLEASE SELECT YOUR SCORE RANGE"

    * STILL NEED TO GRAB RATE BASED ON IF NEW OR USED AUTO
     IS SELECTED - RIGHT NOW ONLY CALCULATING BASED ON NEW 

## Version 3.2

* set up catch for missing input entries

## Version 3.1
*merged @jeremysimmons code from 8/3 on 8/11*

* remove whitespace as markup, use styles
* change input type to number (todo, implement required fields)
* use object to lookup rates, instead of switch
* use static element to hold result, instead of dynamic
* reuse reset form, form onreset event

## Version 2
*new requirements*

✔ Start a new repository in github and add your code. 
    * Neglected to email myself my completed code from my work computer
    * Rewrote the end of the application so I could begin building off of it

✔ Modify the “clear form” to use a form and input type of reset.

✔ Modify the form to use a select for credit score, the rate should be 
      selected from a variable in the script.

```html
<select id="score" name="score">
    <option value="APlus">Excellent (740 & above)</option>
    <option value="A">Great (690-739)</option>
    <option value="B">Good (660-689)</option>
    <option value="C">Fair (620-659)</option>
    <option value="D">Ok (619 & Below)</option>
</select>
```

✔ Then use the variables in the script of:
  *  APlus="3.990"
  *  A="4.490"
  *  B="4.990"
  *  C="6.490"
  *  D="8.490"
  
Still to do on this version: pop up asking them to enter information if inputs are left blank. 

## Version 1

Sat up simple interest calculator after retrieving the formula from calculatorsoup.com. Original version features two buttons: one to run the calculation function and one to refresh the page to restart the process.



