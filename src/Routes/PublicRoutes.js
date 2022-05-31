import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";

export const PublicRoutes = [
    {
        path:'/', name:'Home', Component:Home
    },
    {
        path:'/about', name:'About', Component:About
    },
    {
        path:'/contact', name:'Contact', Component:Contact
    },
    {
        path:'/', name:'Home', Component:Login
    },
]