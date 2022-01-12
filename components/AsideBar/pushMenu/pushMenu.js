import Styles from "../../../styles/Aside.module.css";
import { useContext, useState, useEffect } from "react";
import { pushMenuContext } from "../../../Context/MenuContext";
import Category from "./Category";
import PushMenuComp from './PushMenuComp';
import OtherServices from "./OtherServices";
import Switch from "./Switch";
import TextInserAparat from "./TextInserAparat";
import AparatDevice from './AparatDevice';
import OtherPageAparat from "./OtherPageAparat";
const AsideBar = () => {

  const { globalState, dispatch } = useContext(pushMenuContext);

  const pushMenu = () => {
   (dispatch ({type:"togglePushMenu"}));
  };

  return (
    <>
      <div className="hidden xl:block">
      <div className="menuIcon" onClick={pushMenu}>
        <span className={globalState.modeNight ? "cursor-pointer hover:bg-gray-800 p-2 rounded-full" : "cursor-pointer hover:bg-gray-100 p-2 rounded-lg"}>
          <i className={`bi bi-list ${globalState.modeNight ? 'text-gray-400' : "text-gray-500"}`} style={{ fontSize: "22px" }}></i>
        </span>
      </div>
      <div className={globalState.modeNight ? "pb-28 PushMenuNight" :  "pb-28 pushMenuLight"} style={globalState.pushMenu ? { right: "0px" } : null}>
        {/* start item menu push */}

        {/* start first item push menu */}
        <div className="border-b py-3">
          <PushMenuComp icon="bi bi-house-door" href="/" title="صحفه ی نخست" />
        </div>

        
        {/* start category push menu */}
        <Category/>

          {/* start  other service  */}
          <OtherServices/>
          {/* mode night or day */}
           <Switch/>

           {/* text for login */}
           <TextInserAparat/>

           {/* device aparat */}
           <AparatDevice/>

           <OtherPageAparat/>
      </div>
      </div>
    </>
  );
};

export default AsideBar;
