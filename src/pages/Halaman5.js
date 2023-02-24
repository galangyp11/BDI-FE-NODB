import "./pages.css";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';

const Halaman5 = ({  dongengHalaman5 }) => {
    return ( 
        <div className="cerita-detail">
             <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <p className="isi-dongeng hal5">{ dongengHalaman5 }</p>
            <div className="gambar hal5-1"></div>
            <div className="gambar hal5-2"></div>
            <div className="gambar hal5-3"></div>
            <div className="gambar hal5-4"></div>
        </div>
     );
}
 
export default Halaman5