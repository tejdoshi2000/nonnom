import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./src/Header";
import Body from "./src/Body";
import RestaurantCard from "./src/RestaurantCard";
import CarouselCard from "./src/CarouselCard";
import { MdStars, MdOutlineShoppingBag } from "react-icons/md";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./src/About";
import Contact from "./Contact";
import Mission from "./src/Mission";
import { useState } from "react";
import Error from "./src/Error";
import RestaurantMenu from "./src/RestaurantMenu";
import RestsByItem from "./src/RestsByItem";
import UserContext from "./src/utils/UserContext";




/*
*Header
-Logo
-NavLinks
*Body
-Serach
-Restaurant Cards
*Footer
-Links 
-Contacts
*/


const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name:'Tej Doshi'
    };
    setUserName(data.name);
  }, [])

  

  
  return (
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
      <Header /> 
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: '/mission',
        element : <Mission/>
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>

      },
      {
        path: '/cards',
        element: <RestsByItem/>

      }
    ],
    errorElement: <Error/>
  },
 
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
