import { Link } from "react-router-dom";
import "./pages.css";
import Sound from "react-sound";
import bsKancil from '.././sound/bs-kancil-pak-tani.mp3';


function NavbarB ({ handleNext, handleBack, isDisableBack, isDisableNext, dongengJudul, nomorHal }) {
    return (
        <nav className="navbarb">
             <Sound
                url={bsKancil}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
            <div className="navbarb1">
                <button className="bBack" onClick={handleBack} disabled={isDisableBack}></button>
                <button className="beranda"><Link to="/"></Link></button>
                <p className="judul-navbar">{dongengJudul}</p>
                <p className="halaman-navbar">Halaman {nomorHal}</p>
                <button className="bNext" onClick={handleNext} disabled={isDisableNext}></button>
            </div>
        </nav>
      );
}
 
export default NavbarB;