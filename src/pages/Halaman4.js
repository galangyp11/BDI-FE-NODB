import "./pages.css";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Halaman4 = ({ dongengHalaman4 }) => {
    return ( 
        <div className="cerita-detail">
             <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <p className="isi-dongeng hal4">{ dongengHalaman4 }</p>
            <div className="gambar hal4-1"></div>
            <div className="gambar hal4-2"></div>
            <div className="gambar hal4-3"></div>
        </div>
     );
}
 
export default Halaman4