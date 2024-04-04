import { FaSearch, FaRegUser, FaCode} from "react-icons/fa";
import { MdStars, MdOutlineShoppingBag, MdPerson } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Header = () => {

  const newUser = useContext(UserContext)
    
    const [btnName, setBtnName] = useState('Login');
    const UserInfo = useContext(UserContext);

    useEffect(() =>{
      console.log('useEffect is called')
    })
const onlineStatus = useOnlineStatus();
    //If no dependency is present in the arguments then, useEffect is called after every render of the component
    // If an empty array is passed in args, then useEffect is called after the initial render only(Just once),
    // If a component is passed inside args then, useEffect will be called everytime that dependency is updated 

    const imageUrl = "/image/logo-color.png";
    
    return (
      
      <header className="bg-white py-2 px-4 flex justify-between items-center">
      {/* Logo */}
     <Link to={'/'}> <div className="flex items-center">
        <img src={require('/logo-no-background.png')} alt="Logo" className="w-14 h-12 s" />
        
      </div>
      </Link>

      {/* Menu */}
     
      <nav className="flex-grow flex justify-end text-xs font-sans">
        <a href="#" className="flex text-gray rounded-md m-1 p-1   hover:bg-orange-500 hover:text-white mx-2"><FaSearch className="mt-1"/>Search</a>
        <a href="#" className=" flex text-gray rounded-md m-1 p-1 hover:bg-orange-500 hover:text-white  mx-2"><TbDiscount2 className="mt-1"/>Offers</a>
        <Link to={'/about'}> <a href="#" className=" flex text-gray rounded-md m-1 p-1 hover:bg-orange-500 hover:text-white  mx-2"><FaRegUser className="mt-1"/> SignUp</a></Link>
        <a href="#" className=" flex text-gray rounded-md m-1 p-1 hover:bg-orange-500 hover:text-white  mx-2"><MdOutlineShoppingBag className="mt-1"/> Cart </a>
        <a href="#" className="  text-gray rounded-md m-1 p-1 hover:bg-orange-500 hover:text-white  mx-2"><button className="login flex"   onClick = {()=>{
      btnName === "Login" ? setBtnName('Logout') 
      : setBtnName('Login');
    } }> <MdPerson className="mt-1"/>{btnName}</button></a>
    <a>{newUser.loggedInUser}</a>
      </nav>
    </header>
     
    );

          

  };
  
export default Header;




// Original code

// {/* <div className="header flex bg-gray-100 justify-between shadow-lg ">
// <div className="logo-container">
  
// <Link to='/'>  <img className="logo-img h-3/4 w-20" src={require('/logo-no-background.png')} /></Link>  
// </div>
// <div className="nav-items  w-1/2 items-center">
//   <ul className="flex m-4 p-4 items-center justify-between">
//     <li className="flex"><FaSearch/>Search</li>
//     {/* <li>Online Status : {onlineStatus ? "Green" : 'Red'}</li> */}
//     <li className="flex" ><Link to='/about' className="nav-links flex mt-2" ><TbDiscount2/>About</Link> </li>
//     <li className="flex"><FaRegUser/> Sign Up</li>
//     <li className="flex"><MdOutlineShoppingBag/> Cart  </li>
//     <li className="flex"><button className="login"   onClick = {()=>{
//       btnName === "Login" ? setBtnName('Logout') 
//       : setBtnName('Login');
//     } }> <MdPerson/>{btnName}</button> </li>
    
//   </ul>
// </div>
// </div> */}











