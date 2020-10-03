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
	Uniswap_Router01_ABI, 
	TokenSets_Roboset_ABI,
	TokenSets_RebalancingSetIssuanceModule_ABI,
	TokenSets_TransferProxy_ABI} from "../data/ABIs";

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
		"name": "ERC20",
		"logoPath": ERC20,
		"contracts": [{
			"name": "BAT",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF" },
				{ "network": "ropsten", "address": "0x85B24b3517E3aC7bf72a14516160541A60cFF19d" },
				{ "network": "kovan", "address": '0x2d12186Fbb9f9a8C28B3FfdD4c42920f8539D738' }
			]
		}, {
			"name": "DAI",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F" },
				{ "network": "ropsten", "address": "0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108" },
				{ "network": "kovan", "address": "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD" },
				{ "network": "rinkeby", "address": "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea"}
			]
		}, {
			"name": "KNC",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0xdd974D5C2e2928deA5F71b9825b8b646686BD200" },
				{ "network": "ropsten", "address": "0xCe4aA1dE3091033Ba74FA2Ad951f6adc5E5cF361" },
				{ "network": "kovan", "address": '0x3F80c39c0b96A0945f9F0E9f55d8A8891c5671A8' }
			]
		}, {
			"name": "LINK",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA" },
				{ "network": "ropsten", "address": "0x1a906E71FF9e28d8E01460639EB8CF0a6f0e2486" },
				{ "network": "kovan", "address": '0xAD5ce863aE3E4E9394Ab43d4ba0D80f419F61789' },
				{ "network": "rinkeby", "address": "0x01be23585060835e02b77ef475b0cc51aa1e0709"}
			]
		}, {
			"name": "MKR",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2" },
				{ "network": "ropsten", "address": "0x2eA9df3bABe04451c9C3B06a2c844587c59d9C37" },
				{ "network": "kovan", "address": '0x61e4CAE3DA7FD189e52a4879C7B8067D7C2Cc0FA' }
			]
		}, {
			"name": "SNX",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F" },
				{ "network": "kovan", "address": '0x7FDb81B0b8a010dd4FFc57C3fecbf145BA8Bd947' }
			]
		}, {
			"name": "REP",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0x1985365e9f78359a9B6AD760e32412f4a445E862" },
				{ "network": "ropsten", "address": "0xBeb13523503d35F9b3708ca577CdCCAdbFB236bD" },
				{ "network": "kovan", "address": '0x260071C8D61DAf730758f8BD0d6370353956AE0E' }
			]
		}, {
			"name": "TUSD",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0x0000000000085d4780B73119b644AE5ecd22b376" },
				{ "network": "ropsten", "address": "0xa51EE1845C13Cb03FcA998304b00EcC407fc1F92" },
				{ "network": "kovan", "address": '0x1c4a937d171752e1313D70fb16Ae2ea02f86303e' }
			]
		}, {
			"name": "USDC",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" },
				{ "network": "ropsten", "address": "0x851dEf71f0e6A903375C1e536Bd9ff1684BAD802" },
				{ "network": "kovan", "address": '0xe22da380ee6B445bb8273C81944ADEB6E8450422' }
			]
		}, {
			"name": "USDT",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0xdac17f958d2ee523a2206206994597c13d831ec7" },
				{ "network": "ropsten", "address": "0xB404c51BBC10dcBE948077F18a4B8E553D160084" },
				{ "network": "kovan", "address": '0x13512979ADE267AB5100878E2e0f485B568328a4' }
			]
		}, {
			"name": "WBTC",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" },
				{ "network": "ropsten", "address": "0xa0E54Ab6AA5f0bf1D62EC3526436F3c05b3348A0" },
				{ "network": "kovan", "address": '0x3b92f58feD223E2cB1bCe4c286BD97e42f2A12EA' }
			]
		}, {
			"name": "WETH",
			"abi": legos.erc20.weth.abi,
			"addresses": [
				{ "network": "mainnet", "address": legos.erc20.weth.address },
				{ "network": "rinkeby", "address": "0xc778417e063141139fce010982780140aa0cd5ab"}
			]
		}, {
			"name": "ZRX",
			"abi": ERC20_ABI,
			"addresses": [
				{ "network": "mainnet", "address": "0xE41d2489571d322189246DaFA5ebDe1F4699F498" },
				{ "network": "ropsten", "address": "0x02d7055704EfF050323A2E5ee4ba05DB2A588959" },
				{ "network": "kovan", "address": '0xD0d76886cF8D952ca26177EB7CfDf83bad08C00C' },
				{ "network": "rinkeby", "address": '0xddea378a6ddc8afec82c36e9b0078826bf9e68b6' }
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
		}, {
			"name": "ETH20SMACO",
			"abi": TokenSets_Roboset_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0x9ea463Ec4cE9E9E5bc9cFd0187C4Ac3a70DD951D' },
			]
		}, {
			"name": "ETH50SMACO",
			"abi": TokenSets_Roboset_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0xa360F2aF3F957906468c0FD7526391AeD08aE3DB' },
			]
		}, {
			"name": "ETH12EMACO",
			"abi": TokenSets_Roboset_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0x2c5a9980B41861D91D30d0E0271d1c093452DcA5' },
			]
		}, {
			"name": "ETH26EMACO",
			"abi": TokenSets_Roboset_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0x614857c755739354d68ae0abd53849cf45d6a41d' },
			]
		}, {
			"name": "BTCETH5050",
			"abi": TokenSets_Roboset_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0xc06aEc5191bE16b94FfC97B6Fc01393527367365' },
			]
		}, {
			"name": "BTCETH7525",
			"abi": TokenSets_Roboset_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0xA35Fc5019C4dc509394Bd4d74591a0bF8852c195' },
			]
		}, {
			"name": "ETHBTC7525",
			"abi": TokenSets_Roboset_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0xA6c040045d962e4B8eFa00954c7d23CCd0a2b8AD' },
			]
		}, {
			"name": "ETHBTCRSI",
			"abi": TokenSets_Roboset_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0xbf70A33A13fBe8D0106Df321Da0Cf654d2E9Ab50' },
			]
		}, {
			"name": "RebalancingSetIssuanceModule",
			"abi": TokenSets_RebalancingSetIssuanceModule_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0xceda8318522d348f1d1aca48b24629b8fbf09020' },
				{ "network": "kovan", "address": '0x91E1489D04054Ae552a369504F94E0236909c53c' },
			]
		}, {
			"name": "TransferProxy",
			"abi": TokenSets_TransferProxy_ABI,
			"addresses": [
				{ "network": "mainnet", "address": '0x882d80d3a191859d64477eb78cca46599307ec1c' },
				{ "network": "kovan", "address": '0x61d264865756751392C0f00357Cc26ea70D98E3B' },
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
