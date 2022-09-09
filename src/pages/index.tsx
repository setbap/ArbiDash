import Performance from "lib/pages/performance";
import {
  getMostPopularActions,
  getDailyNewWallets,
  getDailyTXBotRate,
  getDailyAddressAndUserInformation,
} from "lib/requests/performance";
export async function getStaticProps() {
  const [
    mostPopularActions,
    dailyNewWallets,
    dailyTXBotRate,
    dailyAddressAndUserInformation,
  ] = await Promise.all([
    getMostPopularActions(),
    getDailyNewWallets(),
    getDailyTXBotRate(),
    getDailyAddressAndUserInformation(),
  ]);
  return {
    props: {
      mostPopularActions,
      dailyNewWallets,
      dailyTXBotRate,
      dailyAddressAndUserInformation,
    },
    revalidate: 10 * 60,
  };
}
export default Performance;
