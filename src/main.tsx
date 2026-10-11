import { StrictMode, useState} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';

export default function App() {
    const [change, setChanged] = useState<boolean>(false);
    const [zoomDone, setZoomDone] = useState<boolean>(false);
    const [backgroundToggle, setBackgroundToggle] = useState<boolean>(false);
    const [videoPlay, setVideoPlay] = useState<boolean>(false);
    const launcher = () => {
        setChanged(true); 
        setVideoPlay(true);
        setTimeout(() => {
            setZoomDone(true);
            setBackgroundToggle(true);},
            10000);
        };
    const reset = () => {
        setChanged(false);
        setZoomDone(false);
        setBackgroundToggle(false);
        setVideoPlay(false);
    }
    if (zoomDone) {      
        return (
            <div className={`portal_background ${backgroundToggle ? 'portal_after' : ''}`}>
                <h1>Welkom in Ferry's Domein!</h1>
                <div className="cta_container">
                    <button className="cta_button">Koop hier leipe Shit</button>
                    <button className="cta_button" onClick={() => {reset()}}>Reset UI</button>
                </div>
                {/* <div className='content_main'>
                    <div className='content_solo'>1</div>
                    <div className='content_solo'>2</div>
                    <div className='content_solo'>3</div>
                    <div className='content_solo'>4</div>
                </div> */}
            </div>
        )
    }
  
    else return (
        <div className="intro_main_frame">
            <video
                muted={true}
                autoPlay={videoPlay}
                preload="metadata"
                playsInline
                className="event_video">
                <source src="/space_transition.mp4" />
            </video>
            <div className={`intro_main_content ${change ? 'header_top' : ''}`}>
                <button className='cta_button'>Consumeer Hier</button>
                <button className="event_button" onClick={() => launcher()}>
                    Take The Journey
                </button>
                
            </div>
        </div>
    )
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

