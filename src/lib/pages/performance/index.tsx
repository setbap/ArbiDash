import { Box, color, SimpleGrid } from "@chakra-ui/react";
import DonutChart from "lib/components/charts/DonutChart";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { ReturnDataType } from "lib/types/types/base";

import names from "lib/utility/names";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import {
  IDailyAddressAndUserInformation,
  IDailyNewWallets,
  IDailyTXBotRate,
  IMostPopularActions,
} from "lib/types/types/performance";
import BarGraph from "lib/components/charts/BarGraph";
import ChartBox from "lib/components/charts/LineChart";

const CalendarChart: any = dynamic(
  () => import("../../components/charts/CalendarChart"),
  { ssr: false }
);

const FlowChart: any = dynamic(
  () => import("../../components/charts/FlowChart"),
  { ssr: false }
);

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

interface Props {
  mostPopularActions: ReturnDataType<IMostPopularActions[]>;
  dailyNewWallets: ReturnDataType<IDailyNewWallets[]>;
  dailyTXBotRate: ReturnDataType<IDailyTXBotRate[]>;
  dailyAddressAndUserInformation: ReturnDataType<
    IDailyAddressAndUserInformation[]
  >;
}

const Governance = ({
  mostPopularActions,
  dailyNewWallets,
  dailyTXBotRate,
  dailyAddressAndUserInformation,
}: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${names.APP_NAME} NetWork Performance | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`}
        description="Track the latest stats and trends on ${names.BLOCKCHAIN}"
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `${names.APP_NAME} | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`,
          description: `Track the latest stats and trends on ${names.BLOCKCHAIN}`,
          images: [
            {
              url: `https://${names.SITE_URL}/og.png`,
              alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
            },
          ],
          site_name: `${names.APP_NAME}`,
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} px={{ base: 3, sm: 2, md: 8 }}>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        ></SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <DonutChart
            queryLink={mostPopularActions.key}
            data={mostPopularActions.data}
            modelInfo=""
            title={mostPopularActions.title}
            nameKey="Type"
            dataKey="TX Count"
          />
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[3]}
            data={dailyNewWallets.data}
            queryLink={dailyNewWallets.key}
            modelInfo=""
            title={dailyNewWallets.title}
            baseSpan={2}
            barDataKey="New Wallets"
            lineDataKey="Average New Wallets"
            xAxisDataKey="Day"
          />
          <BarGraph
            values={dailyTXBotRate.data}
            queryLink={dailyTXBotRate.key}
            modelInfo=""
            title={dailyTXBotRate.title}
            baseSpan={3}
            dataKey="Day"
            oxLabel="Day"
            oyLabel="Bot rate(%)"
            labels={[{ key: "Bot Rate", color: colors[3] }]}
          />
          <ChartBox
            customColor={colors[0]}
            data={dailyAddressAndUserInformation.data}
            queryLink={dailyAddressAndUserInformation.key}
            modelInfo=""
            title={dailyAddressAndUserInformation.title.split(",")[0]}
            baseSpan={3}
            extraDecimal={8}
            areaDataKey="Number of transactions"
            xAxisDataKey="Day"
          />
          <ChartBox
            customColor={colors[0]}
            data={dailyAddressAndUserInformation.data}
            queryLink={dailyAddressAndUserInformation.key}
            modelInfo=""
            title={dailyAddressAndUserInformation.title.split(",")[1]}
            baseSpan={3}
            extraDecimal={8}
            areaDataKey="Number of unique addresses"
            xAxisDataKey="Day"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
