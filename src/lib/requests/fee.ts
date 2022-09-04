import {
  IAverageFeeOnEachDayOfWeek,
  IDailyTransactionFee,
  IHourlyTransactionFee,
  ITotalFeeInfo,
} from "lib/types/types/fee";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getTotalFeeInfo = () =>
  getSimpleInfo<ITotalFeeInfo>("6c2bb462-e380-4c77-8e59-f57c6782cc94", "");

export const getDailyTransactionFee = () =>
  getSimpleArrayData<IDailyTransactionFee, IDailyTransactionFee>(
    "8264b936-9338-4008-9df4-350b8fa0ea14",
    "Total Transaction Fees ($ETH Arbitrum)",
    "Day"
  );

export const getHourlyTransactionFee = () =>
  getSimpleArrayData<IHourlyTransactionFee, IHourlyTransactionFee>(
    "adf76f92-8953-46c1-aa48-070024b3684e",
    "Average Transaction Fees in Each Hour ($ETH - Arbitrum)",
    "Hour"
  );

export const getDailyAverageTransactionFee = () =>
  getSimpleArrayData<IDailyTransactionFee, IDailyTransactionFee>(
    "f474deae-34fc-4cdd-a74e-0f00f3682ef1 ",
    "Daily Average of Transaction Fees ($ETH - Arbitrum)",
    "Day"
  );

export const getAverageFeeOnEachDayOfWeek = () =>
  getSimpleArrayData<IAverageFeeOnEachDayOfWeek, IAverageFeeOnEachDayOfWeek>(
    "a681a976-7046-4184-b353-192c4f2ea659",
    "Average Transaction Fees in Each weekday ($ETH - Arbitrum)",
    "Day Number"
  );
