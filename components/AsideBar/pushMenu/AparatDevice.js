import Styles from "../../../styles/Aside.module.css";
import { useContext, memo } from 'react';
import { pushMenuContext } from '../../../Context/MenuContext';

const AparatDevice = () => {
  const {globalState} = useContext(pushMenuContext)
  return (
    <div className="py-4 border-b">
      <div className={globalState.modeNight ? "flex items-cenetr cursor-pointer  hover:bg-gray-800" : "flex items-cenetr cursor-pointer  hover:bg-gray-200"}>
        <div className="pr-7">
          <span>
            <i className="bi bi-phone text-gray-500" style={{ fontSize: "28px" }}></i>
          </span>
        </div>
        <div className="pr-2 pt-1">
          <p className={globalState.modeNight ? `text-gray-400 pt-1 ${Styles.link}` : `text-gray-500 pt-1 ${Styles.link}`}>آپارات در موبایل</p>
          <p className={globalState.modeNight ? `text-gray-400 pt-1 ${Styles.link}` : `text-gray-500 pt-1 ${Styles.link}`}>
            (windows,Android,ios)
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(AparatDevice);
