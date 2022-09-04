import {
  IMostPopularActions,
  IDailyNewWallets,
  IDailyTXBotRate,
  IDailyAddressAndUserInformation,
} from "lib/types/types/performance";
import { getSimpleArrayData } from "./utils";

export const getMostPopularActions = () =>
  getSimpleArrayData<IMostPopularActions, IMostPopularActions>(
    "ba114c8c-e41c-4e9a-a57a-48544e6e962b",
    "Most Popular Type of action By Number of transactions for Arbitrum"
  );

export const getDailyNewWallets = () =>
  getSimpleArrayData<IDailyNewWallets, IDailyNewWallets>(
    "dc9617fd-0fd1-41b2-89fa-c3679a036673",
    "Daily new wallets"
  );

export const getDailyTXBotRate = () =>
  getSimpleArrayData<IDailyTXBotRate, IDailyTXBotRate>(
    "5d4118f1-6bbb-4a86-9820-cc649273299d",
    "Transactions bot rate"
  );

export const getDailyAddressAndUserInformation = () =>
  getSimpleArrayData<
    IDailyAddressAndUserInformation,
    IDailyAddressAndUserInformation
  >(
    "838e1dd9-3992-4289-9150-9646c1d5a668",
    "Number of transactions,Number of unique address"
  );
