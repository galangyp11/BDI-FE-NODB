import "./pages.css";
import Sound from "react-sound";
import bsKancil from ".././sound/bs-kancil-pak-tani.mp3";

const Halaman9 = ({ dongengHalaman9 }) => {
  return (
    <div className="cerita-detail">
      <Sound
        url={bsKancil}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        loop={true}
      />
      <p className="isi-dongeng hal9">
        Ketika sampai di depan ladang, betapa terkejutnya Kancil mendapati ada
        orang yang menjaga ladang Petani. Kancil yang berniat mencuri pun
        kemudian bersembunyi. Ia mencoba menunggu sampai orang itu pergi.
      </p>
      <div className="gambar hal9"></div>
    </div>
  );
};

export default Halaman9;
