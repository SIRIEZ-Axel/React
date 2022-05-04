import '../style/Banner.css';
import leaf from '../img/leaf.png';


function Banner() {
    const title = 'La maison de la jungle';
    return (
        <div className='lmj-banner'>
            <img src={leaf}></img>
            <h1>{title}</h1>
        </div>
    )
}

export default Banner;