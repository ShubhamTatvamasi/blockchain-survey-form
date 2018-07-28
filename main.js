// Main coinbase account from metamask
var coinbase;

var myContract;
// variable for submitting the form
var a;
var b;
var c;

// Web3 start function, It will run when the web page is loaded
function startWeb3() {

  coinbase = web3.eth.coinbase;
  document.getElementById("myaccount").innerHTML = coinbase;

  myContract = web3.eth.contract(myContractABI).at(myContractAddress);

  getValues(coinbase);
  // getValue2();
  // getSurveyHash();
}

// Get the Ether balance of the coinbase account from the metamask
function submitForm() {

	a = document.querySelector('input[name="concrete"]:checked').value;
	b = document.getElementById("concreteFloor").value;
	c = document.getElementById("fileHash").value;

	 return myContract.updateForm(a,b,c, function (error, result) {
		console.log(result);
	  })
}

function getValues(coinbase) {
	  return myContract.myform(coinbase, function (error, result) {

 	    document.getElementById("answer1").innerHTML = result[0];
 	    document.getElementById("answer2").innerHTML = result[1];
 	    document.getElementById("answer3").innerHTML = result[2];

	  	// console.log(result);
	  })
}