import Navbar from "./components/Navbar";
 import Sidebar from "./components/Sidebar";
import './App.css';
import Main from "./components/Main";
import { useState } from "react";
import { titles} from "./Data";
import { contents } from "./Data";
import Ad_section from "./components/Ad_section";


function App(){

  
    
     let[title,setTitle] =  useState(titles[0]);
     let[content,setContent] =  useState(contents[0]);


    let  handleClick = (idx) =>{
        setTitle(titles[idx]);
        setContent(contents[idx]);
        
    }


    return(
        <div>
            <Navbar />
           <div className="Side-Main-Container">  
           <Sidebar handleClick = {handleClick} ></Sidebar>
           <Main title = {title} content = {content}></Main>
           <Ad_section />
           </div>
           
           
        </div>
    );
}

export default App;