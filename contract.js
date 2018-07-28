// Token contract address
var myContractAddress = "0xa074dB207b761632cAEe3F1A36DfC1F79d57f3c8";
// Token contract ABI
var myContractABI = [ { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "myform", "outputs": [ { "name": "question1", "type": "string", "value": "" }, { "name": "question2", "type": "string", "value": "" }, { "name": "surveyHash", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "a", "type": "string" }, { "name": "b", "type": "string" }, { "name": "c", "type": "string" } ], "name": "updateForm", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
