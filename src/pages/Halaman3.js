import "./pages.css";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Halaman3 = ({ dongengHalaman3 }) => {
    return ( 
        <div className="cerita-detail">
             <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <p className="isi-dongeng hal3">{ dongengHalaman3 }</p>
            <div className="gambar hal3"></div>
        </div>
     );
}
 
export default Halaman3