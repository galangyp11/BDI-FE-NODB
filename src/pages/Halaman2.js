import "./pages.css";
import Sound from "react-sound";
import bsKancil from ".././sound/bs-kancil-pak-tani.mp3";

const Halaman2 = ({ dongengHalaman2 }) => {
  return (
    <div className="cerita-detail">
      {/* <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            /> */}
      <p className="isi-dongeng hal2">
        Kancil pun berjalan keluar hutan. Ia berusaha mencari tempat baru,
        berharap di sana tersedia banyak makanan. Saat sedang berjalan,
        tiba-tiba ia melihat ladang Petani yang dipenuhi timun yang sangat
        segar.
      </p>
      <div className="gambar hal2"></div>
    </div>
  );
};

export default Halaman2;
