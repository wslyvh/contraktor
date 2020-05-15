import LendingPoolABI from "../data/ABIs/Aave/LendingPool.json";
import LendingPoolAddressesProviderABI from "../data/ABIs/Aave/LendingPoolAddressesProvider.json";
import LendingPoolCoreABI from "../data/ABIs/Aave/LendingPoolCore.json";

const ALL_PROJECT_DATA = [
    {
		"name": "Aave",
		"contracts": [{
			"name": "LendingPoolAddressesProvider",
			"abi": JSON.stringify(LendingPoolAddressesProviderABI),
			"addresses": [
				{ "mainnet": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8" },
				{ "ropsten": "0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728" },
				{ "kovan": "0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5" }
			]
		},{
			"name": "LendingPool",
			"abi": JSON.stringify(LendingPoolABI),
			"addresses": [
				{ "mainnet": "0x398eC7346DcD622eDc5ae82352F02bE94C62d119" },
				{ "ropsten": "0x9E5C7835E4b13368fd628196C4f1c6cEc89673Fa" },
				{ "kovan": "0x580D4Fdc4BF8f9b5ae2fb9225D584fED4AD5375c" }
			]
		},{
			"name": "LendingPoolCore",
			"abi": JSON.stringify(LendingPoolCoreABI),
			"addresses": [
				{ "mainnet": "0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3" },
				{ "ropsten": "0x4295Ee704716950A4dE7438086d6f0FBC0BA9472" },
				{ "kovan": "0x95D1189Ed88B380E319dF73fF00E479fcc4CFa45" }
			]
		}]
	},
	{
		"name": "Compound",
		"contracts": []
	},
	{
		"name": "ENS",
		"contracts": []
	},
	{
		"name": "Uniswap",
		"contracts": []
	}
]

export default ALL_PROJECT_DATA;