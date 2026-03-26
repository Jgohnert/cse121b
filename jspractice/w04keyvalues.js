let medications = {
	'Lactated Ringers' : {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'},
	'Levothyroxine' : {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'},
	'Rosuvastatin' : {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'},
	'Albuterol' : {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'},
	'Esomeprazole' : {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
}

// If you wanted all the data for Lactated Ringers, the code would look like this.
let aMedication = medications['Lactated Ringers']

// Using the defined objects to get the expiration date for Albuterol without getting 
// the data for Albuterol, your code would look like this,
let aBestByDate = medications['Albuterol']['expDate']

// To change the amount of Rosuvastatin on hand, the code would look like this,
medications['Rosuvastatin']['amount'] = 1432

console.log(aMedication)

console.log(aBestByDate)

console.log(medications)

// When you have defined objects, there is another way to access and change values. It 
// uses what is called 'dot notation' by the JavaScript community. Let's look at the 
// example where the amount of Rosuvastatin was changed again. You could do it like this.

// medications.Rosuvastatin.amount = 1432

// That's kind of nice. Many fewer characters to type. You drop all the brackets and 
// quotation marks. But can you use dot notation to set a value? Yep. You can. Here is 
// the Albutorol example from earlier rewritten using dot notation.

// let aBestByDate = medications.Albuterol.expDate