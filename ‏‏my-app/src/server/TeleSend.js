import axios from 'axios';
require('dotenv').config();

export const TeleSned = () => {
    const Send = async (des) => {
        try {
            
            await axios.post(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${des}`);
            console.log("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };
    return {
        Send,
    };
};

export default TeleSned;
