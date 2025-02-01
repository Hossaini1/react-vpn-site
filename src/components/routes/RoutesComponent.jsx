import App from "../../App";
import HomeComponent from "../../pages/home/HomeComponent";
import SignUpComponent from "../../pages/sign-up/SignUpComponent";

export const routes = [
  {
    path: "/",
    element: <App />,
    // errorElement : <ErrorComponent />,
    children: [
      {
        index: true,
        element: <HomeComponent />,
      },
      {
        path: "/signup",
        element: <SignUpComponent />,
      },
    ],
  },
//   {
//     path: "**",
//     element: <NotFoundComponent />,
//   },
];
