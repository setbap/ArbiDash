import NFT from "lib/pages/nft";
import { getNFTAverageSellPrice, getNFTSalesInfo } from "lib/requests/nft";
export async function getStaticProps() {
  const nFTSalesInfo = await getNFTSalesInfo();
  const NFTAverageSellPrice = await getNFTAverageSellPrice();
  return {
    props: { ...nFTSalesInfo, NFTAverageSellPrice },
    revalidate: 10 * 60,
  };
}
export default NFT;
