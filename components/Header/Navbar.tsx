import Image from "next/image";
import Link from "next/link";
import "./module.navbar.css";
import { ReactElement } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'

const Navbar = ():ReactElement => {
    return (
        <header className="navbar__header paddingX">
            <div className="navbar__brand">
                <Image className="logo" src="/logo.png" alt="Movie house logo"
                       width={255} height={55}
                />
            </div>
           <nav className="navbar">
               <ul className="navbar__items">
                   <li className="navbar__item">
                       <Link className="navbar__link" href="/">Movies</Link>
                   </li>
                   <li className="navbar__item">
                       <Link className="navbar__link" href="/">Genres</Link>
                   </li>
                   <li className="navbar__item">
                       <Link className="navbar__link" href="/">Special Categories</Link>
                   </li>
                   <li className="navbar__item">
                       <Link className="navbar__link" href="/">Join us on Telegram</Link>
                   </li>
                   <li className="navbar__item">
                       <Link className="navbar__link" href="/">Web Series</Link>
                   </li>
               </ul>
           </nav>
            <div className="navbar__searchBox">
                <form action="#">
                    <input type="text" placeholder="Search"/>
                    <FontAwesomeIcon className='icon__size search__icon' icon={faSearch}/>
                </form>
            </div>
        </header>
    );
};

export default Navbar;
