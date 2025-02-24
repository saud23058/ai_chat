import ChatBot from "@/components/ChatBot";
import React from "react";

const Home = () => {
  return (
    <div className="absolute  flex justify-center items-center flex-col gap-20 inset-0 -z-10 h-full w-full bg-gre bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div>
        <h1 className="font-bold text-4xl mt-8 bg-gradient-to-r from-green-500 to-blue-300 bg-clip-text text-transparent">
          Welcome to our Chatbot
        </h1>
      </div>
      <ChatBot />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-700 opacity-20 blur-[100px]"></div>
    </div>
  );
};

export default Home;
