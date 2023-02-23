import { useState, useEffect} from "react";
import Axios from "axios";
import Home from "./Home";

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
            <Home dongengs={dongengs}/>
        </div>
     );
 }
  
 export default ListDongeng;