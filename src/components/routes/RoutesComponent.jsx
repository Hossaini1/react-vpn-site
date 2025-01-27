import App from "../../App"
import HomeComponent from "../../pages/home/HomeComponent"

 export const routes = [
    {
        path:'/',
        element : <App />,
        // errorElement : <ErrorComponent />,
        children: [
            {
                index:true,
                element: <HomeComponent />
            },
        ]

    }
 ]