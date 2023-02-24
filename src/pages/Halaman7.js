import "./pages.css";
import Sound from "react-sound";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Halaman7 = ({ dongengHalaman7 }) => {
    return ( 
        <div className="cerita-detail">
             <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <p className="isi-dongeng hal7">{ dongengHalaman7 }</p>
            <div className="gambar hal7-1"></div>
            <div className="gambar hal7-2"></div>
            <div className="gambar hal7-3"></div>
            <div className="gambar hal7-4"></div>
        </div>
     );
}
 
export default Halaman7