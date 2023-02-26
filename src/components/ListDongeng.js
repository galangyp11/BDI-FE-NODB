import { useState, useEffect} from "react";
import Axios from "axios";
import Home from "./Home";
import Sound from "react-sound";

import bsBeranda from "../sound/bs-beranda.mp3"

const ListDongeng = ( ) => {
    const [dongengs, setDongengs] = useState([]);

    useEffect(() => {
        getDongengs();
    }, []);
    
    const getDongengs = async () => {
        const response = await Axios.get(`https://bdi-be.vercel.app/`);
        setDongengs(response.data);
        console.log(response.data);
    }

    return ( 
        <div>
            {/* <Sound
                url={bsBeranda}
                playStatus={Sound.status.PLAYING}
                playFromPosition={0}
                loop={true}
            /> */}
            <Home dongengs={dongengs}/>
        </div>
     );
 }
  
 export default ListDongeng;