
import { createBrowserRouter } from 'react-router-dom';
import App from "./App"
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

const Root =createBrowserRouter ([

    {
        path:"/",
        element:<App/>,
        children:[
            {
               path:"",
               element:<Home/>
            },
            {
                path:"aboutme",
                element:<AboutMe/>,

            },
            {
                path:"portfolio",
                element:<Portfolio/>
            },
            {
                path:"contact",
                element:<Contact/>
            }
        ]
    }
   
    ]);
    
export default Root


