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