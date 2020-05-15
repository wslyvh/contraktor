import { legos } from "@studydefi/money-legos";

const ALL_PROJECT_DATA = [
    {
		"name": "Aave",
		"contracts": [{
			"name": "LendingPoolAddressesProvider",
			"abi": legos.aave.LendingPoolAddressesProvider.abi,
			"addresses": [
				{ "mainnet": legos.aave.LendingPoolAddressesProvider.address },
				{ "ropsten": "0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728" },
				{ "kovan": "0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5" }
			]
		}, {
			"name": "LendingPool",
			"abi": legos.aave.LendingPool.abi,
			"addresses": [
				{ "mainnet": legos.aave.LendingPool.address },
				{ "ropsten": "0x9E5C7835E4b13368fd628196C4f1c6cEc89673Fa" },
				{ "kovan": "0x580D4Fdc4BF8f9b5ae2fb9225D584fED4AD5375c" }
			]
		}, {
			"name": "LendingPoolCore",
			"abi": legos.aave.LendingPoolCore.abi,
			"addresses": [
				{ "mainnet": legos.aave.LendingPoolCore.address },
				{ "ropsten": "0x4295Ee704716950A4dE7438086d6f0FBC0BA9472" },
				{ "kovan": "0x95D1189Ed88B380E319dF73fF00E479fcc4CFa45" }
			]
		}]
	},
	{
		"name": "Compound",
		"contracts": [{
			"name": "comptroller",
			"abi": legos.compound.comptroller.abi,
			"addresses": [
				{ "mainnet": legos.compound.comptroller.address },
				{ "ropsten": "0x2eaa9d77ae4d8f9cdd9faacd44016e746485bddb" }
			]
		}, {
			"name": "priceOracle",
			"abi": legos.compound.priceOracle.abi,
			"addresses": [
				{ "mainnet": legos.compound.priceOracle.address },
				{ "ropsten": "0x5722a3f60fa4f0ec5120dcd6c386289a4758d1b2" }
			]
		}]
	},
	{
		"name": "ENS",
		"contracts": []
	},
	{
		"name": "Uniswap v1",
		"contracts": [{
			"name": "factory",
			"abi": legos.uniswap.factory.abi,
			"addresses": [
				{ "mainnet": legos.uniswap.factory.address },
			]
		}]
	}
]

export default ALL_PROJECT_DATA;