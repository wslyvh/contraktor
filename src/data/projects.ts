import { legos } from "@studydefi/money-legos";
import { Aave, Compound, ENS, ERC20, Kyber, Maker, Sets, Uniswap } from "../assets/logos/index"
import { 
	Compound_Governance_ABI, 
	Compound_cDAI_ABI, 
	Compound_cETH_ABI, 
	ERC20_ABI, 
	TokenSets_Core_ABI, 
	ENS_Registry_ABI, 
	Uniswap_Factory_ABI, 
	Uniswap_Pair_ABI, 
	Uniswap_Router01_ABI } from "../data/ABIs";

const ALL_PROJECT_DATA = [
    {
		"name": "Aave",
		"logoPath": Aave,
		"contracts": [{
			"name": "LendingPoolAddressesProvider",
			"abi": legos.aave.LendingPoolAddressesProvider.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.aave.LendingPoolAddressesProvider.address },
				{ "network": "ropsten", "address": "0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728" },
				{ "network": "kovan", "address": "0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5" }
			]
		}, {
			"name": "LendingPool",
			"abi": legos.aave.LendingPool.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.aave.LendingPool.address },
				{ "network": "ropsten", "address": "0x9E5C7835E4b13368fd628196C4f1c6cEc89673Fa" },
				{ "network": "kovan", "address": "0x580D4Fdc4BF8f9b5ae2fb9225D584fED4AD5375c" }
			]
		}, {
			"name": "LendingPoolCore",
			"abi": legos.aave.LendingPoolCore.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.aave.LendingPoolCore.address },
				{ "network": "ropsten", "address": "0x4295Ee704716950A4dE7438086d6f0FBC0BA9472" },
				{ "network": "kovan", "address": "0x95D1189Ed88B380E319dF73fF00E479fcc4CFa45" }
			]
		}]
	},
	{
		"name": "Compound",
		"logoPath": Compound,
		"contracts": [{
			"name": "Comptroller",
			"abi": legos.compound.comptroller.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.compound.comptroller.address },
				{ "network": "rinkeby", "address": "0x2eaa9d77ae4d8f9cdd9faacd44016e746485bddb" }
			]
		}, {
			"name": "Governance",
			"abi": Compound_Governance_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0xc0da01a04c3f3e0be433606045bb7017a7323e38" }
			]
		}, {
			"name": "PriceOracle",
			"abi": legos.compound.priceOracle.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.compound.priceOracle.address },
				{ "network": "rinkeby", "address": "0x5722a3f60fa4f0ec5120dcd6c386289a4758d1b2" }
			]
		}, {
			"name": "cDAI",
			"abi": Compound_cDAI_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643' },
				{ "network": "rinkeby", "address": "0x6d7f0754ffeb405d23c51ce938289d4835be3b14" }
			]
		}, {
			"name": "cETH",
			"abi": Compound_cETH_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5' },
				{ "network": "rinkeby", "address": "0xd6801a1dffcd0a410336ef88def4320d6df1883e" }
			]
		}]
	},
	{
		"name": "ENS Domains",
		"logoPath": ENS,
		"contracts": [{
			"name": "Registry",
			"abi": ENS_Registry_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
				{ "network": "ropsten", "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
				{ "network": "rinkeby", "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
				{ "network": "goerli", "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
			]
		}]
	},
	{
		"name": "ERC20 Tokens",
		"logoPath": ERC20,
		"contracts": [{
			"name": "DAI",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": legos.erc20.dai.address},
				{ "network": "ropsten", "address": "0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108" },
				{ "network": "kovan", "address": '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD' },
			]
		}, {
			"name": "BAT",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": legos.erc20.bat.address }
			]
		}, {
			"name": "REP",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": legos.erc20.rep.address }
			]
		}, {
			"name": "USDC",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": legos.erc20.usdc.address }
			]
		}, {
			"name": "WETH",
			"abi": legos.erc20.weth.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.erc20.weth.address }
			]
		}, {
			"name": "ZRX",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": legos.erc20.zrx.address }
			]
		}]
	},
	{
		"name": "Kyber",
		"logoPath": Kyber,
		"contracts": [{
			"name": "Network",
			"abi": legos.kyber.network.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.kyber.network.address }
			]
		}]
	},
	{
		"name": "Maker",
		"logoPath": Maker,
		"contracts": [{
			"name": "dssCdpManager",
			"abi": legos.maker.dssCdpManager.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.maker.dssCdpManager.address }
			]
		}, {
			"name": "dssProxyActions",
			"abi": legos.maker.dssProxyActions.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.maker.dssProxyActions.address }
			]
		}, {
			"name": "ethUsdPriceFeed",
			"abi": legos.maker.ethUsdPriceFeed.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.maker.ethUsdPriceFeed.address }
			]
		}, {
			"name": "proxyRegistry",
			"abi": legos.maker.proxyRegistry.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.maker.proxyRegistry.address }
			]
		}]
	},
	{
		"name": "Token Sets",
		"logoPath": Sets,
		"contracts": [{
			"name": "Core",
			"abi": TokenSets_Core_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0xf55186CC537E7067EA616F2aaE007b4427a120C8' },
				{ "network": "kovan", "address": '0x3ee64Fe0b9246Ae52845F01A79c4b3A6D252289a' },
			]
		}]
	},
	{
		"name": "Uniswap v2",
		"logoPath": Uniswap,
		"contracts": [{
			"name": "Factory",
			"abi": Uniswap_Factory_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f" },
				{ "network": "ropsten", "address": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f" },
				{ "network": "kovan", "address": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f" },
				{ "network": "rinkeby", "address": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f" },
				{ "network": "goerli", "address": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f" },
			]
		}, {
			"name": "Pair",
			"abi": Uniswap_Pair_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "" },
			]
		}, {
			"name": "Router",
			"abi": Uniswap_Router01_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a" },
				{ "network": "ropsten", "address": "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a" },
				{ "network": "kovan", "address": "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a" },
				{ "network": "rinkeby", "address": "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a" },
				{ "network": "goerli", "address": "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a" },
			]
		}]
	}
]

export default ALL_PROJECT_DATA;