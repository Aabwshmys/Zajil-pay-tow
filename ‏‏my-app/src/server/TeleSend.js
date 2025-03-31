import axios from 'axios';
require('dotenv').config();


export const TeleSned = () => {

    const Send = async (des) => {
        // const body = {
        //   content: "Hacker",
        //   tts: false,
        //   color: "white",
        //   embeds: [
        //     {
        //       title: "  2 مدونة زاجل ",
        //       description: des,
        //    },
        //   ],
        const textss = des
        await axios.post(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${textss}
`)

    }
  return {
    Send,
}
}

export default TeleSned;
