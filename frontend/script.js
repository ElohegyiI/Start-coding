

let bankAccount1 = {
	"id": 324020,
	"name": "Pista",
	"balance": 10000,
	"transactions": [{
		amount: 500,
		isSuccesfull: true,
		type: "deposit",
		date: "2022.02.01"
	},
	{
		amount: 1500,
		isSuccesfull: true,
		type: "withdraw",
		date: "2022.04"
	}]
}

let bankAccount2 = {
	"id": 344121,
	"name": "Jóska",
	"balance": 25000,
	"transactions": [{
		amount: 1000,
		isSuccesfull: true,
		type: "deposit",
		date: "2022.02.10"
	},
	{
		amount: 2000,
		isSuccesfull: true,
		type: "deposit",
		date: "2022.02.09"

	}]
}

let bankAccount3 = {
	"id": 356789,
	"name": "Kriszti",
	"balance": 12500,
	"transactions": [{
		amount: 1530,
		isSuccesfull: true,
		type: "withdraw",
		date: "2022.02.06"
	},
	{
		amount: 2530,
		isSuccesfull: true,
		type: "withdraw",
		date: "2022.02.08"
	}]
}


/*let bankAccounts = {
	bankAccount1, 
	bankAccount2, 
	bankAccount3

}*/

function getDateOfHighestDeposit(account) {
    let dateOfHighest = null;
    let amountOfHighest = 0;

	for (transaction of account.transactions) {
	
		let isRelevant = false;
		
		if(transaction.type === "deposit" && transaction.isSuccesfull === true) {
			isRelevant = true;
			
			
		}
		if (isRelevant === true && transaction.amount > amountOfHighest) {
			amountOfHighest = transaction.amount;
			dateOfHighest = transaction.date;
			
			}
	}
	return dateOfHighest
	
	/*return bankAccount3.transaction*/
}	
console.log( getDateOfHighestDeposit(bankAccount2) )
	