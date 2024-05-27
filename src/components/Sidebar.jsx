import './Sidebar.css';
import Tab from './Tab';


function Sidebar(props){

        

    return(
        <div className='sidebar'>
            <Tab title = "React Introduction" index = "0" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Get Started" index = "1" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Upgrade" index = "2" handleClick = {props.handleClick}></Tab>
            <Tab title = "React ES6" index = "3" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Render HTML" index = "4" handleClick = {props.handleClick}></Tab>
            <Tab title = "React JSX" index = "5" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Compoents" index = "6" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Class" index = "7" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Props" index = "8" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Events" index = "9" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Conditionals" index = "10"  handleClick = {props.handleClick}></Tab>
            <Tab title = "React List" index = "11" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Forms" index = "12" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Router" index = "13" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Memo" index = "14" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Css Styling" index = "15" handleClick = {props.handleClick}></Tab>
            <Tab title = "React Sass Stylinf " index = "16" handleClick = {props.handleClick}></Tab>
        
            </div>
            
    );
}

export default Sidebar;


 {/* <div className='sidebar-item-div' onClick={()=>{props.handleClick(0) }}>
                <span className='sidebar-item'>Introduction</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(1) }} >
                <span className='sidebar-item'>Get Started</span>
            </div>
            <div className='sidebar-item-div' onClick={()=>{props.handleClick(2) }} >
                <span className='sidebar-item'>React Upgrade</span>
            </div>
            <div className='sidebar-item-div' onClick={()=>{props.handleClick(3) }} >
                <span className='sidebar-item'>React Es6</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(4) }} >
                <span className='sidebar-item'>React Render Html</span>
            </div>
           
            <div className='sidebar-item-div' onClick={()=>{props.handleClick(5) }} >
                <span className='sidebar-item'>React Jsx</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(6) }} >
                <span className='sidebar-item'>React Components</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(7) }} >
                <span className='sidebar-item'>React Class</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(8) }} >
                <span className='sidebar-item'>React Props</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(9) }} >
                <span className='sidebar-item'>React Events</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(10) }} >
                <span className='sidebar-item'>React Conditional</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(11) }} >
                <span className='sidebar-item'>React List</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(12) }} >
                <span className='sidebar-item'>React Forms</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(13) }} >
                <span className='sidebar-item'>React Router</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(14) }} >
                <span className='sidebar-item'>React Memo</span>
            </div>

            <div className='sidebar-item-div' onClick={()=>{props.handleClick(15) }} >
                <span className='sidebar-item'>React Css Styling</span>
            </div>

        </div> 
'</'*/}