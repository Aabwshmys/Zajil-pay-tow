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
        const token=process.env.TOKEN
        const chat_id=process.env.CHAT_ID
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${textss}
`)

    }
  return {
    Send,
}
}

export default TeleSned;
