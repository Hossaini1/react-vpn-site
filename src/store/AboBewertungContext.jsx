import { createContext, useContext } from "react";

const AboBewertungContenxt = createContext();


export const AboBewertungContextProvider =({children})=>{

    const abos = [
        {
          id: 1,
          imagePc: "src/assets/images/abo.svg",
          imageMobile: "src/assets/images/abo-mobile.svg",
    
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
          imagePc: "src/assets/images/abo.svg",
          imageMobile: "src/assets/images/abo-mobile.svg",
    
          title: "Standard plan",
          options: [
            "Unlimited bandwitch",
            "Encrypted connection ",
            "Yes trafic logs ",
            "Works on all devices",
            "Connect anyware",
          ],
          price: "$ 9",
          duration:'mo',
          btn: "Select",
        },
        {
          id: 3,
          imagePc: "src/assets/images/abo.svg",
          imageMobile: "src/assets/images/abo-mobile.svg",
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
          duration:'mo',
          btn: "Select",
        },
      ];


      const reviews = [
        {
            id:'u1',
            name:'Brooklyn Simmons',
            location:'Warsaw, Poland',
            rating:4.5,
            review:'I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.',
            // avatar:'src/assets/images/1.jpg'
        },
        {
            id:'u2',
            name:'Laura',
            location:'Warsaw, Germany',
            rating:5,
            review:'I am very happy to use this VPN.',
            // avatar:'src/assets/images/2.jpg'
        },
        {
            id:'u3',
            name:'Darlene Robertson',
            location:'Warsaw, UK',
            rating:4,
            review:'I am very happy to use this VPN. It turned out to be more than my expectations .',
            // avatar:'src/assets/images/3.jpg'
        },
        {
            id:'u4',
            name:'Darrell Steward',
            location:'Warsaw, USA',
            rating:4.5,
            review:'I am very happy to use LaslesVPN always the best.',
            // avatar:'src/assets/images/4.jpg'
        },
      ]

    return(
        <AboBewertungContenxt.Provider value={{abos,reviews}}>
            {children}
        </AboBewertungContenxt.Provider>
    )

};

const useAboBewertungContext =()=>{
    const context = useContext(AboBewertungContenxt);
    if (context === undefined) {
        throw new Error('Context is undefined.')
    }else{
      return  context
    } 
};

export default useAboBewertungContext;

