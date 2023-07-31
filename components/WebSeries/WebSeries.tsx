import './module.webseries.css';
import Image from "next/image";
import { ReactElement } from 'react';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'

const WebSeries = (): ReactElement => {
  return(
      <section className="webseries">
        <div className="web__box">
            <FontAwesomeIcon className='web-line' icon={ faGripVertical }/>
            <span>Web Series</span>
            <Image src={`/banner-1.jpg`} alt={'web series image'}
                   width={155} height={220}/>
        </div>
      </section>
  )
}

export default WebSeries;