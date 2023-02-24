import "./pages.css";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Halaman9 = ({ dongengHalaman9 }) => {
    return ( 
        <div className="cerita-detail">
             <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <p className="isi-dongeng hal9">{ dongengHalaman9 }</p>
            <div className="gambar hal9"></div>
        </div>
     );
}
 
export default Halaman9