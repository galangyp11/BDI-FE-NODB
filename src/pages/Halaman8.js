import "./pages.css";
import Sound from "react-sound";
import bsKancil from ".././sound/bs-kancil-pak-tani.mp3";

const Halaman8 = ({ dongengHalaman8 }) => {
  return (
    <div className="cerita-detail">
      <Sound
        url={bsKancil}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        loop={true}
      />
      <p className="isi-dongeng hal8">
        Suatu ketika Kancil yang merasa lapar pun kembali ke ladang Petani. Ia
        sudah tak sabar ingin segera makan timun sebanyak-banyaknya. Di
        perjalanan, Kancil membayangkan memakan timun yang enak dan segar.
      </p>
      <div className="gambar hal8"></div>
    </div>
  );
};

export default Halaman8;
