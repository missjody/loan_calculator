# Loan Calculator 
*building a loan calculator in incremental steps*

Link to Version 5 of Loan Calculator [here](https://infinite-escarpment-31136.herokuapp.com/)

## Version 6

*refactor in redux*

* deploy version 5 to Azure and write an article outlining how to do so

* answer the question why next doesn't use an index.html in public

* refactor 
  * keep notes about the refactor to write an article on how to do it

* break down into more components
  * focus being on changing impure functions to pure functions
  * calculator shell
  * user friendly sliding bar (update UI)
  * score range options
  * terms options
  * loan types options

* jest
  * test: snapshot test for score range options
  * test: test calculator functionality 
  
* capture user contact info before displaying the payment info?
  * give nice little disclaimer 
  * hitting cancel backs out to the beginning, clearing entries
  * write email and entry and results to a doc

* service worker?

## Version 5

*updated to a react app with next.js framework and express.js server*

✔ update to react app

✔ seperate component for doing the math 

✔ pass values as props

✔ serve rates

✔ organize css according to Next js standards

✔ deployed


## Version 4

* upgraded to express server, jquery

*new requirements*

✔ Display the following drop-downs which rely on eachother
  * Loan Product – in this case, there is only one product in the data, Auto
  * Loan SubType – in this case, Auto has a “Year”, New & Used
  * Loan Amount - Hard-Code minAmount as 500, maxAmount as 65000
  * Credit Score
  
✔ Once all of these items are selected, a rate is auto-filled, and the calculation based on amount desired is specified.

After the user selects New or Used Auto, Term, and Credit Score, as well as types in desired loan amount, the calculator automatically generates an estimated monthly payment and displays it on the page. This payment is determined by drawing the associated interest rate based on the entries provide from the API call to a json object. If the user does not type in a loan amount between $500 and $65,000 the application instead will display a request to enter an amount according to the parameters. 

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