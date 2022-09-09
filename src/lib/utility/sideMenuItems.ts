import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaImage, FaRegMoneyBillAlt } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { ImPower } from "react-icons/im";

export default [
  { name: "Home", path: "/", icon: FiHome },
  { name: "Fee", path: "/fee", icon: FaRegMoneyBillAlt },
  { name: "Performance", path: "/performance", icon: ImPower },
  { name: "ToFo NFT marketplace", path: "/nft-tofo", icon: FaImage },
  { name: "About", path: "/about", icon: AiOutlineInfoCircle },

  // { name: "TX History", path: "/transactions", icon: AiOutlineInfoCircle },
];
