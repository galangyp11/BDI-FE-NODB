import "./pages.css";
import Sound from "react-sound";
import bsKancil from ".././sound/bs-kancil-pak-tani.mp3";

const Halaman7 = ({ dongengHalaman7 }) => {
  return (
    <div className="cerita-detail">
      <Sound
        url={bsKancil}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        loop={true}
      />
      <p className="isi-dongeng hal7">
        Petani terus berpikir dan mencari ide, hingga akhirnya ia menemukan
        sebuah ide. Petani mengambil bajunya yang sudah tak dipakai, caping, dan
        kelapa. Lalu ia menyatukan semua itu, membentuknya menjadi orang-orangan
        sawah. Kemudian, ia meletakkannya di ladang timun.
      </p>
      <div className="gambar hal7-1"></div>
      <div className="gambar hal7-2"></div>
      <div className="gambar hal7-3"></div>
      <div className="gambar hal7-4"></div>
    </div>
  );
};

export default Halaman7;
