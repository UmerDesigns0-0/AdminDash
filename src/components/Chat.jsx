import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/StateContext";

const Chat = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div className="nav-item shadow-2xl absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="text-white  text-xs rounded p-1 px-2 bg-orange"
          >
            5 New
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            handleClick({ chat: false });
          }}
          title="Close Chat"
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:bg-light-slate cursor-pointer hover:scale-105 ease-in-out duration-300"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div>
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b border-slate-200 dark:border-slate-600 p-3 leading-8 cursor-pointer"
          >
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold text-sm dark:text-gray-200 ">
                {item.message}
              </p>
              <p className="text-gray-500 text-xs dark:text-gray-400">
                {item.desc}
              </p>
              <p className="text-gray-500 text-xs dark:text-gray-400">
                {item.time}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
