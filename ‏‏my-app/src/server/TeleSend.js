require('dotenv').config();
import axios from 'axios';

export const TeleSned = () => {
    const Send = async (des) => {
        await axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID}&text=${des}`);
    };
    return {
        Send,
    };
};

export default TeleSned;