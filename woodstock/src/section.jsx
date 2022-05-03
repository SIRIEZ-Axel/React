import chair from './chair.svg'
import wood from './wood-restaurant.svg'

const Section1 = () => {
    return (
        <div className="about">
            <div className="chair-div">
                <img src={chair} alt="chair-img" ></img>
            </div>
            <div className="about-text">
                <div className="about-title">
                    <span className='rect-about'></span>
                    <h3>ABOUT US</h3>
                </div>
                <p>
                    Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                </p>
                <button className="learn-btn">LEARN MORE</button>
            </div>
            <div class="shop-div">
                <div className="shop-text">
                    <div className="shop-title">
                        <span className='rect-h3'></span>
                        <h3>SHOP</h3>
                    </div>
                    <p>
                        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                    </p>
                </div>
            </div>
            <div className="resto-div">
                <img src={wood} alt="people working" />
            </div>
        </div>
    );
}

export default Section1;