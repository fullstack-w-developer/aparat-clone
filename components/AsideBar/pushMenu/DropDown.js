import Link from "next/link";
import Styles from "../../../styles/Aside.module.css";
import { useContext, useState,memo } from "react";
import {items} from "./data"
import { pushMenuContext } from "../../../Context/MenuContext";



const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);
  const {globalState} = useContext(pushMenuContext)
  const dropDownMenu = () => {
    setDropDown(!dropDown);
  };
  return (
    <div>
      <ul>
        <li onClick={dropDownMenu}>
          {items.map((item)=>(
              <ul className="hidden" style={dropDown ? { display: "block" } : null} key={item.id}>
              <li className="py-2 hover:bg-gray-200">
                <Link href="/">
                  <a className="flex items-center px-7">
                    <span>
                      <i className={`ml-3 ${item.icon}`}></i>
                    </span>
                    <p className={`text-gray-600 ${Styles.link}`}>{item.name}</p>
                  </a>
                </Link>
              </li>
            </ul>
          ))}
            <div className="flex items-center cursor-pointer px-7">
            <span className={`${dropDown ? "transform rotate-180" : null}`}>
              <i className="bi bi-chevron-up  text-gray-600 "></i>
            </span>
            <p className={globalState.modeNight ? `text-gray-400 mr-3 ${Styles.link}` : `text-gray-600 mr-3 ${Styles.link}`}>{dropDown ?  "نمایش جزئیات کمتر" : "نمایش جزئیات بیشتر"}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(DropDown);
