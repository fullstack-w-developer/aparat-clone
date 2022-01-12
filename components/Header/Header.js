import { useState, useContext, useEffect } from "react";
import Styles from "../../styles/Header.module.css";
import Image from "next/image";
import LogoBlock from "../../public/image/logo_block.svg";
import LogoWhite from "../../public/image/logo-white.svg";
import PushMenu from "../AsideBar/pushMenu/pushMenu";
import SideBar from "../AsideBar/SideBar/SideBar";
import { pushMenuContext } from "../../Context/MenuContext";

const Header = () => {
  const { globalState } = useContext(pushMenuContext);

  return (
    <div className="custom__container py-3 shadow-lg">
      <div className="header_right">
        <div className="flex justify-around items-center">
          {/* start icon menu */}
          <PushMenu />
          <SideBar />
          {/* end icon menu */}
          {/* logo aprat */}
          {globalState.modeNight ? (
            <Image
              className="cursor-pointer"
              src={LogoWhite}
              alt="logo"
              width={100}
              height={25}
            />
          ) : (
            <Image
              className="cursor-pointer"
              src={LogoBlock}
              alt="logo"
              width={100}
              height={25}
            />
          )}
          {/* strat icon camera */}
          <div>
            <span
              className={`cursor-pointer rounded-full p-2 ${
                globalState.modeNight
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }`}
            >
              <i
                className={`bi bi-camera-video ${
                  globalState.modeNight ? "text-gray-400" : "text-gray-500"
                }`}
                style={{ fontSize: "22px" }}
              ></i>
            </span>
          </div>
          {/* end icon camera */}
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-center items-center">
          <input
            className={`w-5/6 rounded-xl outline-none p-2 focus:outline-none input__search ${
              globalState.modeNight ? "bg-gray-900" : "bg-gray-200"
            }`}
            placeholder="جستجوی ویدیو‌های رویدادها، شخصیت‌ها و ..."
          />
          <span>
            <i
              className={`bi bi-search ${
                globalState.modeNight ? "text-gray-400" : "text-gray-500"
              }`}
              style={{ marginRight: "-2rem" }}
            ></i>
          </span>
        </div>
      </div>
      <div className="header__left flex justify-end items-center">
        <div>
          {/* lg uplod video */}
          <div
            className={`hidden md:flex items-center rounded-lg cursor-pointer md:border md:border-blue-400 ${
              globalState.modeNight ? "hover:bg-gray-800" : "hover:bg-blue-100"
            }`}
          >
            <i
              className="bi bi-plus text-blue-400"
              style={{ fontSize: "20px" }}
            ></i>
            <p
              className={`${Styles.text__video} text-blue-400 px-1  hidden  md:block`}
            >
              بار گذاری ویدیو
            </p>
          </div>
          {/* xs , sm , md upload video */}
          <div
            className={`block md:hidden cursor-pointer rounded-full px-2 ${
              globalState.modeNight ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
          >
            <i
              className="bi bi-plus-circle text-blue-400 "
              style={{ fontSize: "23px" }}
            ></i>
          </div>
        </div>
        <div>
          <div
            className={`hidden  items-center p-1 mx-2  cursor-pointer rounded-lg  md:flex ${
              globalState.modeNight ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
          >
            <span>
              <i
                className={`bi bi-person text-gray-600 ${Styles.icon__user}`}
                style={{ fontSize: "17px" }}
              ></i>
            </span>
            <p
              className={
                globalState.modeNight
                  ? `${Styles.text__login} text-gray-400 mx-1`
                  : `${Styles.text__login} text-gray-600 mx-1`
              }
            >
              ورود یا ثبت نام
            </p>
          </div>

          <div className={`block md:hidden px-5  `}>
            <span
              className={`cursor-pointer rounded-full p-2 ${
                globalState.modeNight
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }`}
            >
              <i
                className={`bi bi-person ${
                  globalState.modeNight ? "text-gray-300" : "text-gray-600"
                }`}
                style={{ fontSize: "23px" }}
              ></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
