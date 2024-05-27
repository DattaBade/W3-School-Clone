 import './Ad_section.css';
 import Zomato from '../images/Zomato.png';

function Ad_section(){
    return(
        <div className="ad-container">
            <div className='zomato-img-container'>
                <img src={Zomato} height="320px" width="220px"   border-radius= "30px" />
            </div>

        </div>
    );
}

export default Ad_section