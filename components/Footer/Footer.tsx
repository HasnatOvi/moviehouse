import './module.footer.css'
import { ReactElement } from 'react'
import { faAnglesUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = ():ReactElement => {
    return (
        <footer className='footer marginX paddingLRT'>
            <div className="footer__content">
                <p>Contact or Report Anything Here Email : <strong>moviehouse@gmail.com</strong></p>
                <br/>

               <p> <strong>MOVIEHOUSE</strong> does not rip or host any files on it’s servers. All files or contents hosted on third party websites. MLWBD doesn't accept the responsibility for contents hosted on third party websites. Also MLWBD doesn't RIP/Pirate any file.
                We just collect links from other websites. Nothing Else.
                   </p>

            </div>
            <FontAwesomeIcon className='icon__size footer__arrow' icon={faAnglesUp}/>

        </footer>
    );
};

export default Footer;
