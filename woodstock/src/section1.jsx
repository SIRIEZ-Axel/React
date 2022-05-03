import React from 'react';
import chair from './chair.svg'
import wood from './wood-restaurant.svg'

class Section1 extends React.Component {
    render(){
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
                <div className="div-btn">
                    <button className="learn-btn">LEARN MORE</button>
                    <span className='line-learn'></span>
                </div>
            </div>

            <div class="shop-div">
                <div className="shop-text">
                    <div className="shop-title">
                        <span className='rect-shop'></span>
                        <h3>SHOP</h3>
                    </div>
                    <p>
                        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                    </p>
                    <div className='div-btn'>
                        <button className="shop-btn">Go Shopping</button>
                        <span className='line-shop'></span>
                    </div>

                </div>
                <div className="resto-div">
                    <img src={wood} alt="people working" />
                </div>
            </div>
        </div>
    );
}
}

export default Section1;