import { GPTLogo2 } from "../../utils/icons.util";
import plus from "./../../assets/images/plus.png";
import discord from "./../../assets/images/discord.png";
import enlarge from "./../../assets/images/enlarge.png";
import logout from "./../../assets/images/logout.png";
import contrast from "./../../assets/images/contrast.png";
import ChatGPT from "./../../assets/images/ChatGPT.png";
import delet from "./../../assets/images/delet.png";
import dislike from "./../../assets/images/dislike.png";
import edit from "./../../assets/images/edit.png";
import like from "./../../assets/images/like.png";
import message from "./../../assets/images/message.png";
import pen from "./../../assets/images/pen.png";
import refresh from "./../../assets/images/refresh.png";
import send from "./../../assets/images/send.png";
import User from "./../../assets/images/User.png";
import user2 from "./../../assets/images/user2.png";

export const Settings = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <header className="h-40 w-full flex justify-center items-center  bg-[#343541]">
        <GPTLogo2 className="fill-white w-40 h-60" />
      </header>
      <div className="text-white font-medium text-[45px] mt-20 ml-36">
        Colors
      </div>
      <div className="flex  items-center gap-5 mt-16 ml-36">
        <button className="w-[69px] h-[69px] rounded-full bg-[#202123]   "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#343541]   "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#444654]   "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#9A9B9F]   "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#C5C5D1]   "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#ECECF1]   "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#FFFFFF]   "></button>
        <button className="w-[69px] h-[69px] rounded-full  cursor-default  "></button>
        <button className="w-[69px] h-[69px] rounded-full  cursor-default  "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#0FA47F]   "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#00897B]   "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#8DCDB8]   "></button>
        <button className="w-[69px] h-[69px] rounded-full bg-[#5536DA]   "></button>
      </div>
      <hr className="border-[#343541] w-[1170px] mt-20 ml-36" />

      <div className="text-white font-medium text-[45px] mt-20 ml-36">
        Icons
      </div>
      <div className="flex  items-center gap-11 mt-16 ml-36">
        <img src={edit} alt="" className="w-5 h-5" />
        <img src={send} alt="" className="w-5 h-5" />
        <img src={refresh} alt="" className="w-5 h-5" />
        <img src={like} alt="" className="w-5 h-5" />
        <img src={dislike} alt="" className="w-5 h-5" />
        <img src={contrast} alt="" className="w-5 h-5" />
        <img src={plus} alt="" className="w-5 h-5" />
        <img src={message} alt="" className="w-5 h-5" />
        <img src={pen} alt="" className="w-5 h-5" />
        <img src={delet} alt="" className="w-5 h-5" />
        <img src={logout} alt="" className="w-5 h-5" />
        <img src={enlarge} alt="" className="w-5 h-5" />
        <img src={discord} alt="" className="w-5 h-5" />
        <img src={user2} alt="" className="w-5 h-5" />
      </div>
      <div className="flex  items-center gap-5 mt-16 ml-36">
        <img src={User} alt="" />
        <img src={ChatGPT} alt="" />
      </div>
      <hr className="h-5 border-transparent" />
    </div>
  );
};
