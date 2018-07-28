pragma solidity ^0.4.23;

contract SurveyForm {

mapping (address => form) public myform;

	struct form {
	    
	    string question1;
		string question2;
		string surveyHash;
	    
	}

	function updateForm(string a, string b, string c) public {
	    
	    myform[msg.sender].question1 = a;
		myform[msg.sender].question2 = b;
		myform[msg.sender].surveyHash = c;
		
	}

}