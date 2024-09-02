import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import plus from "./../../assets/images/plus.png";
import discord from "./../../assets/images/discord.png";
import enlarge from "./../../assets/images/enlarge.png";
import logout from "./../../assets/images/logout.png";
import contrast from "./../../assets/images/contrast.png";
// import flash from "./../../assets/images/flash.png";
// import limitations from "./../../assets/images/limitations.png";
import send2 from "./../../assets/images/send2.png";

export const Start = () => {
  const navigate = useNavigate();

  const handleNavigateToSettings = () => {
    navigate("/settings");
  };
  return (
    <div className="min-h-screen w-full">
      <div className="min-h-screen w-full flex  ">
        <aside className="bg-gray-900 text-white w-72 h-screen p-4 ">
          <ul>
            <li className="flex items-center h-12 w-full border border-[#444654] rounded-[6px] ">
              <img src={plus} alt="" className="ml-4" />
              <span className="ml-3">New chat</span>
            </li>
          </ul>
          <div className="mt-[400px] space-y-2 ">
            <hr className="border-[#444654]" />
            <div
              className="flex items-center h-12 w-full  cursor-pointer "
              onClick={handleNavigateToSettings}
            >
              <img src={contrast} alt="" />
              <p className="p-2">Light mode</p>
            </div>
            <div className="flex items-center h-12 w-full  ">
              <img src={discord} alt="" />
              <p className="p-2">OpenAI discord</p>
            </div>{" "}
            <div className="flex items-center h-12 w-full  ">
              <img src={enlarge} alt="" />
              <p className="p-2">Updates & Faq</p>
            </div>{" "}
            <div className="flex items-center h-12 w-full  ">
              <img src={logout} alt="" />
              <p className="p-2">Logout</p>
            </div>
          </div>
        </aside>
        <div className=" flex justify-center items-center text-center    relative left-[600px] bottom-64 text-3xl font-medium text-[#ffffff] text-[34px]">
          ChatGPT
        </div>
        <div className=" justify-center items-center text-center flex w-full  gap-4 relative right-16">
          <div>
            <img
              src={contrast}
              alt=""
              className="w-6 h-6 flex justify-center items-center ml-[108px]"
            />
            <div className="text-white font-regular text-[17px] mt-4">
              Examples
            </div>
            <div className="bg-[#444654] h-16 w-60 mt-4 rounded-[6px] text-center flex justify-center items-center text-white font-regular text-[13px]">
              “Explain quantum computing in simple terms” →
            </div>
            <div className="bg-[#444654] h-16 w-60 mt-4 rounded-[6px] text-center flex justify-center items-center text-white font-regular text-[13px]">
              “Got any creative ideas for a 10 year old’s birthday?” →
            </div>
            <div className="bg-[#444654] h-16 w-60 mt-4 rounded-[6px] text-center flex justify-center items-center text-white font-regular text-[13px]">
              “How do I make an HTTP request in Javascript?” →
            </div>
          </div>
          <div>
            <img
              src={plus}
              alt=""
              className="w-6 h-6 flex justify-center items-center ml-[108px]"
            />
            <div className="text-white font-regular text-[17px] mt-4">
              Capabilities
            </div>
            <div className="bg-[#444654] h-16 w-60 mt-4 rounded-[6px] text-center flex justify-center items-center text-white font-regular text-[13px]">
              Remembers what user said earlier in the conversation{" "}
            </div>
            <div className="bg-[#444654] h-16 w-60 mt-4 rounded-[6px] text-center flex justify-center items-center text-white font-regular text-[13px]">
              Allows user to provide follow- up corrections{" "}
            </div>
            <div className="bg-[#444654] h-16 w-60 mt-4 rounded-[6px] text-center flex justify-center items-center text-white font-regular text-[13px]">
              Trained to decline inappropriate requests{" "}
            </div>
          </div>
          <div>
            <img
              src={plus}
              alt=""
              className="w-6 h-6 flex justify-center items-center ml-[108px]"
            />
            <div className="text-white font-regular text-[17px] mt-4">
              Limitations
            </div>
            <div className="bg-[#444654] h-16 w-60 mt-4 rounded-[6px] text-center flex justify-center items-center text-white font-regular text-[13px]">
              May occasionally generate incorrent information{" "}
            </div>
            <div className="bg-[#444654] h-16 w-60 mt-4 rounded-[6px] text-center flex justify-center items-center text-white font-regular text-[13px]">
              May occasionally produce harmful instructions or biased content{" "}
            </div>
            <div className="bg-[#444654] h-16 w-60 mt-4 rounded-[6px] text-center flex justify-center items-center text-white font-regular text-[13px]">
              Limited knowledge of world and events after 2021{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative bottom-28">
        <input
          type="text"
          className=" w-[800px] ml-60 h-12 rounded-[4px] bg-[#40414E] shadow-[#303139]"
        />
      </div>
      <p className="text-[#9A9B9F] font-regular text-[12px] w-full relative bottom-24 left-[450px]">
        <button className="relative bottom-12 left-[790px]">
          {" "}
          <img src={send2} alt="" className="w-4 h-4" />
        </button>
        <span className="underline">ChatGPT Jan 9 Version</span>. Free Research
        Preview. Our goal is to make AI systems more natural and safe to
        interact with. Your feedback will help us improve.
      </p>
    </div>
  );
};
