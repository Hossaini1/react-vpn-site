import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import aboImgPc from "../assets/images/abo.svg";
import aboImgMobile from '../assets/images/abo-mobile.svg';
import avatar1 from '../assets/images/1.jpg';
import avatar2 from '../assets/images/2.jpg';
import avatar3 from '../assets/images/3.jpg';
import avatar4 from '../assets/images/4.jpg';

const AboBewertungContenxt = createContext();

export const AboBewertungContextProvider = ({ children }) => {
  const abos = [
    {
      id: 1,
      imagePc: aboImgPc,
      imageMobile: aboImgMobile,

      title: "Free",
      options: [
        "Unlimited bandwitch",
        "Encrypted connection ",
        "Encrypted connection",
      ],
      price: "Free",
      btn: "Select",
    },
    {
      id: 2,
      imagePc: aboImgPc,
      imageMobile: aboImgMobile,

      title: "Standard plan",
      options: [
        "Unlimited bandwitch",
        "Encrypted connection ",
        "Yes trafic logs ",
        "Works on all devices",
        "Connect anyware",
      ],
      price: "$ 9",
      duration: "mo",
      btn: "Select",
    },
    {
      id: 3,
      imagePc: aboImgPc,
      imageMobile: aboImgMobile,
      title: "Premium plan",
      options: [
        "Unlimited bandwitch",
        "Encrypted connection ",
        "Yes trafic logs",
        "Works on all devices",
        "Connect anyware",
        "Get new features",
      ],
      price: "$ 12",
      duration: "mo",
      btn: "Select",
    },
  ];

  const reviews = [
    {
      id: "u1",
      name: "Brooklyn Simmons",
      location: "Warsaw, Poland",
      rating: 4.5,
      review:
        "I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      avatar: avatar1,
    },
    {
      id: "u2",
      name: "Laura",
      location: "Warsaw, Germany",
      rating: 5,
      review: "I am very happy to use this VPN.",
      avatar: avatar2,
    },
    {
      id: "u3",
      name: "Darlene Robertson",
      location: "Warsaw, UK",
      rating: 4,
      review:
        "I am very happy to use this VPN. It turned out to be more than my expectations .",
      avatar: avatar3,
    },
    {
      id: "u4",
      name: "Darrell Steward",
      location: "Warsaw, USA",
      rating: 4.5,
      review: "I am very happy to use LaslesVPN always the best.",
      avatar: avatar4,
    },
  ];

  return (
    <AboBewertungContenxt.Provider value={{ abos, reviews }}>
      {children}
    </AboBewertungContenxt.Provider>
  );
};

AboBewertungContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAboBewertungContext = () => {
  const context = useContext(AboBewertungContenxt);
  if (context === undefined) {
    throw new Error("Context is undefined.");
  } else {
    return context;
  }
};

export default useAboBewertungContext;
