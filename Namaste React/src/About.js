import React from "react";
import ReactDOM from "react-dom";
import UserFunc from "./UserFunc";
import UserClass from "./UserClass";
import UserContext from "./utils/UserContext";


class About extends React.Component{
   constructor(props){
      super(props)
      console.log('Parent Constructor')
;   }
componentDidMount(){
   console.log("Parent Mounted");
   
   
}
   render(){
      console.log('Parent Render')
       return    ( 
    <div> 
<UserContext.Consumer>
   {({loggedInUser})=> <h1>{loggedInUser}</h1>}
</UserContext.Consumer>
     <h1>About us page is here</h1>
     
  
   
     <UserClass  name ={'Tej Doshi'} location = {"Ahmedabad"} />
     <UserClass  name ={'Elon'} location = {"Texas"} />
     
     </div>
     )
   }
}

// const About = () =>{
//  return    ( 
//     <div> 
//      <h1>About us page is here</h1>
//      <UserFunc name ={'Tej Doshi'} location = {"Ahmedabad"}/>
//      <UserClass  name ={'Tej Doshi'} location = {"Ahmedabad"} />
     
//      </div>
//      )
// }




export default About;