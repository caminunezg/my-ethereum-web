window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('Metamask not found. Install or enable Metamask.');
    }

    const contractAddress = '0xfeac6b591D97c9B5Adb40c53bD084A4D1835Dc11'; // Replace with your contract's address
    const abi = [	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_amountOfEnergy",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "_energyPrice",
				"type": "uint256"
			}
		],
		"name": "logTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_priceFeed",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint32",
				"name": "amountOfEnergy",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "etherAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usdValue",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "TransactionLogged",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getActualEthPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalEnergyTraded",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalEth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalUsd",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getTransaction",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "amountOfEnergy",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "etherAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usdValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "transactions",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "amountOfEnergy",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "etherAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usdValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Replace with your contract's ABI array

    const contract = new web3.eth.Contract(abi, contractAddress);

    document.getElementById('loadData').addEventListener('click', () => {
        contract.methods.EnergyTransactionLogger9().call().then(function(result) {
            console.log(result);
            alert('Data loaded: ' + result);
        }).catch(function(err) {
            console.log(err);
            alert('Error loading data');
        });
    });
});
