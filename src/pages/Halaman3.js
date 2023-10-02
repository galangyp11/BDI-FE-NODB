import "./pages.css";
import Sound from "react-sound";
import bsKancil from ".././sound/bs-kancil-pak-tani.mp3";

const Halaman3 = ({ dongengHalaman3 }) => {
  return (
    <div className="cerita-detail">
      <Sound
        url={bsKancil}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        loop={true}
      />
      <p className="isi-dongeng hal3">
        Melihat timun segar di depan matanya, Kancil ingin sekali melahap
        timun-timun itu. Seketika timbulah ide Kancil untuk mencuri timun milik
        Petani.
      </p>
      <div className="gambar hal3"></div>
    </div>
  );
};

export default Halaman3;
