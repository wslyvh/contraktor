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
  }

  return "info"
}