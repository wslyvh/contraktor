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
      return "muted";
  }

  return "info"
}