import "./pages.css";
import Sound from "react-sound";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Halaman8 = ({ dongengHalaman8}) => {
    return ( 
        <div className="cerita-detail">
             <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <p className="isi-dongeng hal8">{ dongengHalaman8 }</p>
            <div className="gambar hal8"></div>
        </div>
     );
}
 
export default Halaman8