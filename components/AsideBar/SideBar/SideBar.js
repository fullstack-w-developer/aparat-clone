import { useState, useContext } from "react";
import { pushMenuContext } from "../../../Context/MenuContext";
import Image from "next/image";
import LogoBlock from "../../../public/image/logo_block.svg";
import LogoWhite from "../../../public/image/logo-white.svg";
import PushMenuComp from "../pushMenu/PushMenuComp";
import Category from "../pushMenu/Category";
import Switch from "../pushMenu/Switch";
import TextInserAparat from "../pushMenu/TextInserAparat";
import AparatDevice from "../pushMenu/AparatDevice";
import OtherPageAparat from "../pushMenu/OtherPageAparat";
import OtherServices from "../pushMenu/OtherServices";
const SideBar = () => {
  const { globalState } = useContext(pushMenuContext);
  const [sideBarMemu, setSideBarMenu] = useState(false);

  const handleSidebar = () => {
    setSideBarMenu(!sideBarMemu);
  };
  return (
    <>
      <div className="xl:hidden">
        <div className="">
          <div
            className={
              globalState.modeNight
                ? "pb-28 mainNavNight"
                : "pb-28 mainNavLight"
            }
            style={sideBarMemu ? { transform: "translateX(0)" } : null}
          >
            <div className="my-4">
              <div className="flex px-4">
                <span
                  onClick={handleSidebar}
                  className="cursor-pointer ml-4 px-2 py-1 rounded-full hover:bg-gray-100"
                >
                  <i className="bi bi-list" style={{ fontSize: "22px" }}></i>
                </span>
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
              </div>
              <div>
                <div className="border-b py-3">
                  <PushMenuComp
                    icon="bi bi-house-door"
                    href="/"
                    title="صحفه ی نخست"
                  />
                </div>

                {/* start category push menu */}
                <Category />

                {/* start  other service  */}
                <OtherServices />
                {/* mode night or day */}
                <Switch />

                {/* text for login */}
                <TextInserAparat />

                {/* device aparat */}
                <AparatDevice />

                <OtherPageAparat />
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={handleSidebar}
          className={`${sideBarMemu ? "open" : null}`}
        >
          <span
            className={`cursor-pointer  p-2 rounded-full ${
              globalState.modeNight ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
          >
            <i
              className={`bi bi-list ${
                globalState.modeNight ? "text-gray-500" : "text-gray-400"
              }`}
              style={{ fontSize: "22px" }}
            ></i>
          </span>
        </div>
        <div
          onClick={handleSidebar}
          className={`overlayLight ${sideBarMemu ? "open" : ""}`}
        />
      </div>
    </>
  );
};

export default SideBar;
