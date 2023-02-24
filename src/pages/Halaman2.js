import "./pages.css";
import Sound from "react-sound";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Halaman2 = ({ dongengHalaman2 }) => {
    return ( 
        <div className="cerita-detail">
             {/* <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            /> */}
            <p className="isi-dongeng hal2">{ dongengHalaman2 }</p>
            <div className="gambar hal2"></div>
        </div>
     );
}
 
export default Halaman2