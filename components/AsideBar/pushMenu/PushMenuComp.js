import Link from "next/link";
import {useContext,memo} from "react"
import { useRouter } from "next/router";
import Styles from "../../../styles/Aside.module.css";
import { pushMenuContext } from '../../../Context/MenuContext';


const PushMenuComp = ({ href, icon, title }) => {
  const {globalState} = useContext(pushMenuContext)
  const router = useRouter();
  return (
    <div className="w-full">
      <div className={globalState.modeNight ? `w-full py-1 my-1 cursor-pointer hover:bg-gray-800 ` : `w-full py-1 my-1 cursor-pointer hover:bg-gray-200 `}>
        <div className="px-7">
          <Link href={href} passHref>
            <a className="flex items-center">
              <span
                className="text-gray-500 ml-3"
              >
                <i className={icon} style={{ fontSize: "18px" }}></i>
              </span>
               <p className={globalState.modeNight ? `text-gray-400 pt-1 ${Styles.link}` : `text-gray-500 pt-1 ${Styles.link}`}>{title}</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(PushMenuComp);
