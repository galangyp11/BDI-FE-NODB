import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./pages.css";

const Closing = () => {
  function refresh() {
    window.location.reload();
  }

  return (
    <div className="closing">
      <h1 className="closing-selesai">SELESAI</h1>
      <div className="closing-button">
        <motion.div
          className="baca-lagi"
          whileHover={{ scale: 1, y: [null, -10], backgroundColor: "#2780c9" }}
          whileTap={{ scale: 0.9 }}
          transition={{ ease: "linear", duration: 0.2 }}
        >
          <p
            className="tombol-baca-lagi"
            onClick={refresh}
            style={{ color: "white", padding: "10px" }}
          >
            Baca Lagi
          </p>
        </motion.div>
        <motion.div
          className="baca-lagi"
          style={{ marginLeft: "320px", backgroundColor: "#1c5e94" }}
          whileHover={{ scale: 1, y: [null, -10], backgroundColor: "#2780c9" }}
          whileTap={{ scale: 0.9 }}
          transition={{ ease: "linear", duration: 0.2 }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <p className="tombol-baca-lagi" style={{ padding: "10px" }}>
              Beranda
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Closing;
