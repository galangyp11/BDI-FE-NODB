import "./pages.css";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Halaman6 = ({ dongengHalaman6 }) => {
    return ( 
        <div className="cerita-detail">
             <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <p className="isi-dongeng hal6">{ dongengHalaman6 }</p>
            <div className="gambar hal6"></div>
        </div>
     );
}
 
export default Halaman6