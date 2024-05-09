import {
  faRightLeft,
  faShare,
  faUser,
  faHeart,
  faHouse,
  faBuildingColumns,
  faStar,
  faWallet,
  faLightbulb,
  faMoneyBill,
  faClockRotateLeft,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import ntcImage from './ntc.png';
import ncellImage from './ncell.jpg';
// import other images similarly

export const featuresList = [
  "Dashboard",
  "Bank Account",
  "Favourite Listing",
  "Government of Nepal",
  "Utilities Payment",
  "Financial Education",
  "Corporate Payment",
  "Creditors Payment",
  "Transactions History",
];

export const iconList = [
  faHouse,
  faBuildingColumns,
  faStar,
  faWallet,
  faLightbulb,
  faBuildingColumns,
  faBuildingColumns,
  faMoneyBill,
  faClockRotateLeft,
];

export const firstBox = {
  heading: "Transfer To",
  subHeading: {
    name: ["Fund Transfer", "NEPALPAY Request"],
    icon: [faRightLeft, faShare],
    enableBackgroundColor: false,
  },
  buttonList: {
    name: [
      "Bank Account",
      "Own Account",
      "NEPALPAY Request",
      "Favourite Account",
      "Wallet",
    ],
    icon: [faBuildingColumns, faUser, faShare, faHeart, faWallet],
    enableBackgroundColor: true,
  },
};
export const secondBox = {
  heading: "My Creditors",
  subHeading: {
    name: ["Favorite", "Recent"],
    icon: [faStar, faClockRotateLeft],
    enableBackgroundColor: false,
  }
};

export const paymentsBox = {
  heading: "Payments",
  subHeading: {
    name: ["Government of Nepal", "Utilities Payment", "Financial Institution","Corporate Payment","Credit"],
    icon: [faWallet, faLightbulb,faBuildingColumns,faBuildingColumns,faMoneyBill],
    enableBackgroundColor: false,
  },
  buttonList: {
    name: [
      "Government of Nepal",
      "Semi-Govt.(Sansthan)",
    ],
    icon: [faBuildingColumns,faBuildingColumns],
    enableBackgroundColor: true,
  },
}

export const carousels = [
  {
    title: "NTC Topup",
    image: ''
  },
  {
    title: "Ncell Topup",
    image: ncellImage
  },
  {
    title: "Broker Payment",
    image: '/capital-market.jpg'
  },
  {
    title: "Electricity Bill Payment",
    image: '/electricity.jpg'
  },
  {
    title: 'Creditors Payment',
    image: '/creditors-payment.jpg'
  }
];