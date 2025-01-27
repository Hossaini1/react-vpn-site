// import { TickIcon } from "../icons/Icons";
// import './abo-models.scss';

// const AboModelComponent = () => {
//   const abos = [
//     {
//       id: 1,
//       imagePc: "src/assets/images/abo.svg",
//       imageMobile: "src/assets/images/abo-mobile.svg",

//       title: "Free",
//       options: [
//         "Unlimited bandwitch",
//         "Encrypted connection ",
//         "Encrypted connection",
//       ],
//       price: "Free",
//       btn: "Select",
//     },
//     {
//       id: 2,
//       imagePc: "src/assets/images/abo.svg",
//       imageMobile: "src/assets/images/abo-mobile.svg",

//       title: "Standard plan",
//       options: [
//         "Unlimited bandwitch",
//         "Encrypted connection ",
//         "Yes trafic logs ",
//         "Works on all devices",
//         "Connect anyware",
//       ],
//       price: "Free",
//       btn: "Select",
//     },
//     {
//       id: 3,
//       imagePc: "src/assets/images/abo.svg",
//       imageMobile: "src/assets/images/abo-mobile.svg",
//       title: "Premium plan",
//       options: [
//         "Unlimited bandwitch",
//         "Encrypted connection ",
//         "Yes trafic logs",
//         "Works on all devices",
//         "Connect anyware",
//         "Get new features",
//       ],
//       price: "Free",
//       btn: "Select",
//     },
//   ];

//   return (
//     <div className="abo-models">
//       {abos.map((abo) => (
//         <div key={abo.id} className="abo-container">
//           <div className="abo-img-box">
//           <div className="inner-img-option-box">
//           <picture>
//               <source
//                 srcSet={abo.imagePc}
//                 media="(min-width: 576px )"
//                 alt={abo.title}
//               />
//               <img
//                 src={abo.imageMobile}
//                 alt={abo.title}
//               />
//             </picture>
//             <h5> {abo.title} </h5>
          

//           <ul>
//             {abo.options.map((option,index)=>(
//                <li key={index}>
//               <span>
//                 <TickIcon />
//               </span>
//               <span>{option}</span>
//             </li>  
//             ))}
           
//           </ul>
//           </div>
//           </div>

//           <div className="abo-footer">
//             <h5>{abo.price}</h5>
//             <button>{abo.btn}</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default AboModelComponent;
            
// 
import { TickIcon } from "../icons/Icons";
import './abo-models.scss';


const AboModelComponent = () => {
  const abos = [
    {
      id: 1,
      imagePc: "src/assets/images/abo.svg",
      imageMobile: "src/assets/images/abo-mobile.svg",
      title: "Free",
      options: [
        "Unlimited bandwidth",
        "Encrypted connection",
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
        "Unlimited bandwidth",
        "Encrypted connection",
        "Yes traffic logs",
        "Works on all devices",
        "Connect anywhere",
      ],
      price: "Free",
      btn: "Select",
    },
    {
      id: 3,
      imagePc: "src/assets/images/abo.svg",
      imageMobile: "src/assets/images/abo-mobile.svg",
      title: "Premium plan",
      options: [
        "Unlimited bandwidth",
        "Encrypted connection",
        "Yes traffic logs",
        "Works on all devices",
        "Connect anywhere",
        "Get new features",
      ],
      price: "Free",
      btn: "Select",
    },
  ];

  return (
    <div className="slider-container">
      <div className="abo-slider">
        {abos.map((abo) => (
          <div key={abo.id} className="abo-container">
            <div className="abo-img-box">
              <picture>
                <source
                  srcSet={abo.imagePc}
                  media="(min-width: 576px)"
                  alt={abo.title}
                />
                <img src={abo.imageMobile} alt={abo.title} />
              </picture>
              <h5>{abo.title}</h5>
              <ul>
                {abo.options.map((option, index) => (
                  <li key={index}>
                    <span>
                      <TickIcon />
                    </span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="abo-footer">
              <h5>{abo.price}</h5>
              <button>{abo.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboModelComponent;

