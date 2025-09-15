import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";

function Contact() {
  return (
    <div className=" py-[100px] relative z-10">
      {/* component Intro */}
      <span className=" absolute top-[-15px] left-[-16.5px] text-[#034FE3]/50">
        <AdjustIcon fontSize="large" />
      </span>
      <hr className=" w-[3px] h-[36px]  bg-[#034FE3]/90 rounded-full absolute sm:top-[110px] top-[100px] -left-[2.5px] border-none" />
      <div className="text-[#333] dark:text-slate-100 pl-2">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-[#333] dark:text-slate-100 pl-2 ">
          Contact <span className=" text-[#034FE3] underline">Us </span>
        </p>
        <p className=" text-[18px] font-[300] ">
          Feel free to contact our team via the form below.
        </p>
      </div>

      {/* container  */}
      <main className="flex xl:flex-row flex-col items-stretch justify-between gap-[32px] sm:pl-10 pl-0 py-[50px]">
        <div className="flex-1 lg:min-h-[500px] h-[250px] rounded-[18px] overflow-hidden relative">
          <img
            src="/contactus.png"
            alt="services img"
            loading="lazy"
            className="w-full h-full object-cover z-0"
          />
        </div>
        <form className="flex-1 flex flex-col shadow-md dark:border-1 border-[#034FE3] rounded-[18px] p-5 gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] text-[#034FE3]">Send us a message!</h2>
            <p className=" text-[16px] font-[300] text-black dark:text-white">
              Contact us for solar panel installation or energy solution. Our
              team is ready to help. <br />
              Send a message for a quick response and let's build a suitable
              future.
            </p>
          </div>
          <input
            type="text"
            placeholder="Email Address"
            className=" w-full border-1 border-gray-600 dark:border-gray-500 text-black dark:text-white rounded-[10px] py-2 px-3 outline-none"
          />
          <div className="flex items-center justify-center gap-2">
            <input
              type="text"
              placeholder="First Name"
              className=" w-full border-1 border-gray-600 dark:border-gray-500 text-black dark:text-white rounded-[10px] py-2 px-3 flex-1 outline-none"
            />{" "}
            <input
              type="text"
              placeholder="Last Name"
              className=" w-full border-1 border-gray-600 dark:border-gray-500 text-black dark:text-white rounded-[10px] py-2 px-3 flex-1 outline-none"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Write Message"
            className=" w-full border-1 border-gray-600 dark:border-gray-500 text-black placeholder:text-black dark:text-white dark:placeholder:text-white rounded-[10px] py-2 px-3 outline-none"
            cols={40}
            rows={8}></textarea>
          <button className=" bg-gradient-to-b from-1% from-transparent to-[#034FE3]  shadow-lg py-[15px] px-[42px] rounded-full text-[16px] text-white  hover:scale-[101%] transition-all duration-300 cursor-pointer w-full">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
