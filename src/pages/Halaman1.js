import "./pages.css";
import Sound from "react-sound";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Halaman1 = ({ dongengHalaman1 }) => {
    return ( 
        <div className="cerita-detail">
             {/* <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            /> */}
            <p className="isi-dongeng hal1">{ dongengHalaman1 }</p>
            <div className="gambar hal1"></div>
        </div>
     );
}
 
export default Halaman1;