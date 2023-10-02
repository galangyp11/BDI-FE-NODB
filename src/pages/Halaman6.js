import "./pages.css";
import Sound from "react-sound";
import bsKancil from ".././sound/bs-kancil-pak-tani.mp3";

const Halaman6 = ({ dongengHalaman6 }) => {
  return (
    <div className="cerita-detail">
      <Sound
        url={bsKancil}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        loop={true}
      />
      <p className="isi-dongeng hal6">
        Tanpa Kancil sadari, perbuatannya diketahui oleh Petani. Petani pun
        merasa geram akibat ulah Kancil yang telah mencuri timun dari ladangnya.
        Ia berniat membalas perbuatan si pencuri yang telah menganggu usahanya.
      </p>
      <div className="gambar hal6"></div>
    </div>
  );
};

export default Halaman6;
