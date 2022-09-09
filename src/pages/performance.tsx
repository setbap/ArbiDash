import Home from "lib/pages/home";
import {
  getTotalBlockInfo,
  getDailyTPSInfo,
  getDailyTPBInfo,
  getDailyBlockAge,
  getCurrentNewWallet,
} from "lib/requests/home";
export async function getStaticProps() {
  const [
    totalBlockInfo,
    dailyTPSInfo,
    dailyTPBInfo,
    dailyBlockAge,
    currentNewWallet,
  ] = await Promise.all([
    getTotalBlockInfo(),
    getDailyTPSInfo(),
    getDailyTPBInfo(),
    getDailyBlockAge(),
    getCurrentNewWallet(),
  ]);
  return {
    props: {
      totalBlockInfo,
      dailyTPSInfo,
      dailyTPBInfo,
      dailyBlockAge,
      currentNewWallet,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
