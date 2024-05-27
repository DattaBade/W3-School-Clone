import './Main.css';

function Main(props){
    return(
        <div className="Main-Container">
            <h1>{props.title}</h1> 
            <div className='content-div'>
                <p>{props.content}</p>
            </div>
        </div>
    );

}

export default Main;