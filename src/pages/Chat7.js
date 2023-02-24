import {motion} from "framer-motion";
import  TypeAnimation from "react-type-animation";
import "./pages.css";

import Sound from "react-sound";
import soundChat7 from '.././sound/chat7.mp3';
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Chat7 = ({ dongengChat7 }) => {
    return ( 
        <div className="cerita-detail">
            <Sound
                url={soundChat7}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
            />
             <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <div className="hal-chat-paktani">
            <motion.div 
                className="paktani"
                initial={{ opacity:0 }}
                animate={{ opacity:1, x:[-80,0], y:[-80,0] }}
                transition={{ ease: "easeOut", duration:1 }}
            >
            </motion.div> 
            <motion.div
                className="chat-box kanan"
                initial={{ opacity:0 }}
                animate={{ opacity:1, y:[80,0] }}
                transition={{ ease: "easeOut", duration:1 }}
            >
                <h2 className="nametag-paktani">Pak Tani</h2>
                <TypeAnimation
                    className="chat-box-text"
                    cursor={false}
                    sequence={[ dongengChat7, 1000 ]}
                    speed={99}
                    wrapper="h3"
                    repeat="1"
                >
                </TypeAnimation>
            </motion.div>
            <motion.div
                className="lingkaranpt"
                animate={{ rotate:[0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <motion.div
                className="segienampt"
                animate={{ rotate:[0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <motion.div
                className="bintangpt"
                animate={{ rotate:[0, 360], y:[null, 60, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
            
            </div>
        </div>
     );
}
 
export default Chat7;