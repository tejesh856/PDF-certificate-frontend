import React, { useContext } from "react";
import { HomeIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import logo from "../assets/avatar1.png";
import { datacontext } from "../Datacontext";

export default function Sidebar() {
  const { clicked, setclicked, backgroundColor, setBackgroundColor } =
    useContext(datacontext);
  const handletoggle = () => {
    setclicked(!clicked);
  };
  const handlecertificateclick = () => {
    setBackgroundColor({
      studentCertificate: "bg-blue-600 text-white",
      certificatesList: "bg-transparent",
      settings: "bg-transparent",
    });
  };

  return (
    <div
      className={`relative ${
        clicked ? "w-24" : "w-80"
      } transition-w duration-500 h-full py-6 px-2 border border-l-0  border-gray-400 drop-shadow-sm flex flex-col justify-between rounded`}
    >
      <div className="flex flex-col">
        <div className="flex justify-center items-center border border-t-0 border-l-0 border-r-0 border-gray-400 py-2">
          <img
            src={logo}
            alt="logo"
            className={`${clicked ? "w-10 h-10 mr-0" : "w-20 h-20 mr-2"}`}
          />
          <h1 className={`text-xl font-bold ${clicked ? "hidden" : "inline"}`}>
            Admin
          </h1>
        </div>
        <div className="flex flex-col mt-6">
          <span
            onClick={handlecertificateclick}
            className={`text-xl flex items-center ${
              clicked ? "justify-center" : ""
            } py-2 px-3 rounded ${
              backgroundColor.studentCertificate
            } cursor-pointer transition-colors w-full`}
          >
            <HomeIcon
              className={`${clicked ? "w-5 h-5 mr-0" : "w-5 h-5 mr-4"}`}
            />
            <span className={`${clicked ? "hidden" : "inline"}`}>
              Student Certificate
            </span>
          </span>
        </div>
      </div>

      <div className="border border-b-0 border-l-0 border-r-0 border-gray-400 py-2"></div>

      <ChevronLeftIcon
        onClick={handletoggle}
        className={`absolute top-6 w-8 h-8 cursor-pointer ${
          clicked ? "-right-3 rotate-180" : "-right-4 rotate-0"
        } font-bold rounded-full text-white text-2xl p-1 bg-blue-600 block border border-gray-400`}
      />
    </div>
  );
}
