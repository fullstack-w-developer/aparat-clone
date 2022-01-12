import { useState, useEffect, useContext,useCallback,memo } from "react";
import Styles from "../../../styles/Aside.module.css";
import PushMenuComp from "./PushMenuComp";
import { pushMenuContext } from "../../../Context/MenuContext";
const Switch = () => {
  const [toggle, setToggle] = useState(false);
  const { globalState, dispatch } = useContext(pushMenuContext);

  const toggleClick = useCallback(
    ()=> {
      (dispatch({ type: "modeNight" }));
      setToggle(!toggle)
    },[toggle])
  

  useEffect(()=>{
    if(globalState.modeNight){
      document.body.style.background = "rgb(22,23,26)"
    }else{
      document.body.style.background = "rgb(255, 254, 254)"
    }
  },[toggle])

  return (
    <div className="py-3 border-b flex justify-around items-center">
      <div className="w-full">
        <div className={`w-full py-1 my-1`}>
          <div className="px-7">
            <a className="flex items-center">
              <span className="text-gray-500 ml-3">
                <i className="bi bi-film" style={{ fontSize: "18px" }}></i>
              </span>
              <p className={globalState.modeNight ? `text-gray-400 pt-1 ${Styles.link}` : `text-gray-500 pt-1 ${Styles.link}`}>حالت شب</p>
            </a>
          </div>
        </div>
      </div>
      <input
        checked={toggle}
        onChange={toggleClick}
        className="checkBox mx-3"
        type="checkbox"
      />
    </div>
  );
};

export default memo(Switch);
