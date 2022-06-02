import About from "../Components/Pages/About/About";
import Appointment from "../Components/Pages/Appointment/Appointment";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Signup from "../Components/Pages/Login/Signup";

export const PublicRoutes = [
    {
        path:'/', name:'Home', Component:Home
    }, {
        path:'/appointment', name:'Appointment', Component:Appointment
    },

    {
        path:'/about', name:'About', Component:About    
    },
    {
        path:'/contact', name:'Contact', Component:Contact
    },
    {
        path:'/login', name:'Login', Component:Login
    },
    {
        path:'/signup', name:'Signup', Component:Signup
    },
]