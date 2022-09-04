import {
  IDailyBlockAge,
  IDailyTPBInfo,
  IDailyTPSInfo,
  IOverallBlockInfo,
  ITodayNewWallet,
} from "lib/types/types/home";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getTotalBlockInfo = () =>
  getSimpleInfo<IOverallBlockInfo>("7531a76c-7bff-439f-9338-42a67feff764", "");

export const getDailyTPSInfo = () =>
  getSimpleArrayData<IDailyTPSInfo, IDailyTPSInfo>(
    "5c774eae-ec64-4a4f-b9bf-96b21d054eca",
    "Daily transaction per second (TPS)",
    "Day"
  );

export const getDailyTPBInfo = () =>
  getSimpleArrayData<IDailyTPBInfo, IDailyTPBInfo>(
    "8c7a9aa0-d108-4292-950b-26ab5e6a7e91",
    "Daily transaction per block (TPB)",
    "Day"
  );

export const getDailyBlockAge = () =>
  getSimpleArrayData<IDailyBlockAge, IDailyBlockAge>(
    "38b02000-eca3-4cab-84a5-1bf64d2bb9f3",
    "Daily Block Age (sec)",
    "Day"
  );

export const getCurrentNewWallet = () =>
  getSimpleInfo<ITodayNewWallet>(
    "a8d05552-7691-4b89-b2b7-d59a73d47a84",
    "Current New Wallets"
  );
