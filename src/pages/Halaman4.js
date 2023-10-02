import "./pages.css";
import Sound from "react-sound";
import bsKancil from ".././sound/bs-kancil-pak-tani.mp3";

const Halaman4 = ({ dongengHalaman4 }) => {
  return (
    <div className="cerita-detail">
      <Sound
        url={bsKancil}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        loop={true}
      />
      <p className="isi-dongeng hal4">
        Tanpa pikir panjang, Kancil pun segera masuk ke dalam ladang. Di sana ia
        mulai memakan timun-timun tersebut, satu persatu ia lahap. Kancil sangat
        menyukai timun tersebut. Tanpa disadari, Kancil memakan timun-timun itu
        hingga perutnya kenyang. Kancil pun pulang dengan hati yang senang.
      </p>
      <div className="gambar hal4-1"></div>
      <div className="gambar hal4-2"></div>
      <div className="gambar hal4-3"></div>
    </div>
  );
};

export default Halaman4;
