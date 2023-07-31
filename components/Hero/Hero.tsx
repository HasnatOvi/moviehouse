import './module.hero.css';
import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";


const Hero = ():ReactElement => {
    return (
        <section className="hero bg__color">
            <div className="hero__box">
                <Image
                    src={`/hero-banner.jpg`} alt={'my image'}
                    width={380} height={210} className={`hero__img`}/>
                <p>The world war to is heere...</p>
                <div className="yr-br">
                    <p>jul. 30, 2022</p>
                    <span>MOVIE</span>
                </div>
            </div>

            <div className="hero__box">
                <Image
                    src={`/hero-banner.jpg`} alt={'my image'}
                    width={380} height={210} className={`hero__img`}/>
                <p>The world war to is heere...</p>
                <div className="yr-br">
                    <p>jul. 30, 2022</p>
                    <span>MOVIE</span>
                </div>
            </div>
        </section>

    )
};

export default Hero;