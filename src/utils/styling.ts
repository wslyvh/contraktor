import { Address } from "../types";

export function getNetworkName(chainId: number): string { 
  switch (chainId) {
    case 1:
      return "mainnet";
    case 3:
      return "ropsten";
    case 42:
      return "kovan";
    case 4:
      return "rinkeby";
    case 5:
      return "goerli";
    case 100:
      return "xdai";
  }

  return "mainnet"
}

export function getNetworkColor(network: string): string { 
  switch (network) {
    case "mainnet":
      return "info";
    case "ropsten":
      return "danger";
    case "kovan":
      return "primary";
    case "rinkeby":
      return "warning";
    case "goerli":
      return "dark";
    case "xdai":
      return "light";
  }

  return "info"
}

export function getEtherscanLink(address: Address): string { 
  switch (address.network) {
    case "ropsten":
      return "https://ropsten.etherscan.io/address/" + address.address
    case "kovan":
      return "https://kovan.etherscan.io/address/" + address.address
    case "rinkeby":
      return "https://rinkeby.etherscan.io/address/" + address.address
    case "goerli":
      return "https://goerli.etherscan.io/address/" + address.address
    case "xdai":
      return "https://blockscout.com/poa/xdai/address/" + address.address
  }

  return "https://www.etherscan.io/address/" + address.address
}

export function getMemberCardRowStyle(type: string) { 
  if (type === "constructor") // grey
    return "alert alert-secondary"

  if (type === "views") // blue 
    return "alert alert-primary"

  if (type === "payable") // red 
    return "alert alert-danger"

  if (type === "functions") // orange/yellow
    return "alert alert-warning"

  if (type === "events") // green 
    return "alert alert-success"

  return "alert alert-info"
}