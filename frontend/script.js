let bankAccount1 = {
	"id": 324020,
	"name": "Pista",
	"balance": 10000,
	"transaction": {
		"amount": 500,
		"isSuccesfull": true,
		"type": "deposit",
		"date": "2022.02.10"
	}
}

let bankAccount2 = {
	"id": 344121,
	"name": "Jóska",
	"balance": 25000,
	"transaction": {
		"amount": 1000,
		"isSuccesfull": true,
		"type": "deposit",
		"date": "2022.02.01"
	}
}

let bankAccount3 = {
	"id": 356789,
	"name": "Kriszti",
	"balance": 12500,
	"transaction": {
		"amount": 1530,
		"isSuccesfull": true,
		"type": "withdraw",
		"date": "2022.02.06"
	}
}


let bankAccounts = {
	bankAccount1, 
	bankAccount2, 
	bankAccount3

}

function getDateOfHighestDeposit(account) {
    let dateOfHighest = null;
    let amountOfHighest = 0;
}
	for (transaction of bankAccounts.transaction) {
		if(transaction.type === "deposit" && transaction.isSuccesfull === true) {
			let isRelevant = true;
			if (isRelevant === true && transaction.amount > amountOfHighest) {
				amountOfHighest = transaction.amount;
                dateOfHighest = transaction.date;
			}
		}
	return dateOfHighest;	
	}
	
	
	