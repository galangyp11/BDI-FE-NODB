import "./pages.css";
import Sound from "react-sound";
import bsKancil from ".././sound/bs-kancil-pak-tani.mp3";

const Halaman5 = ({ dongengHalaman5 }) => {
  return (
    <div className="cerita-detail">
      <Sound
        url={bsKancil}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        loop={true}
      />
      <p className="isi-dongeng hal5">
        hari-hari berikutnya, Kancil selalu kembali mengunjungi ladang Petani.
        Ia memakan timun-timun milik Petani. Awalnya hanya sedikit, lama
        kelamaan jumlahnya pun bertambah setiap hari. Kancil selalu pulang
        dengan hati yang senang.
      </p>
      <div className="gambar hal5-1"></div>
      <div className="gambar hal5-2"></div>
      <div className="gambar hal5-3"></div>
      <div className="gambar hal5-4"></div>
    </div>
  );
};

export default Halaman5;
