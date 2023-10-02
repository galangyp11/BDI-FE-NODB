import "./pages.css";
import Sound from "react-sound";
import bsKancil from ".././sound/bs-kancil-pak-tani.mp3";

const Halaman10 = ({ dongengHalaman10 }) => {
  return (
    <div className="cerita-detail">
      <Sound
        url={bsKancil}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        loop={true}
      />
      <p className="isi-dongeng hal10">
        Waktu demi waktu berlalu, tidak terasa sudah cukup lama ia menunggu di
        sana. Namun, orang itu tak juga pergi dari tempatnya.
      </p>
      <div className="gambar hal10"></div>
    </div>
  );
};

export default Halaman10;
