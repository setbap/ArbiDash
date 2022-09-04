export interface IMostPopularActions {
  Type: string;
  "TX Count": number;
}

export interface IDailyNewWallets {
  Day: number;
  "New Wallets": number;
  "Average New Wallets": number;
}

export interface IDailyTXBotRate {
  Day: string;
  "Bot Rate": number;
}

export interface IDailyAddressAndUserInformation {
  Day: string;
  "Number of transactions": number;
  "Number of unique addresses": number;
}
