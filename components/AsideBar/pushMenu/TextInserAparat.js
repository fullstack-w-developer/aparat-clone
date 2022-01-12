import Link from "next/link"
import Styles from "../../../styles/Aside.module.css"
import { pushMenuContext } from '../../../Context/MenuContext';
import { useContext,memo } from 'react';
const TextInserAparat = () => {
  const {globalState} = useContext(pushMenuContext)
  return (
    <div className="py-4 pr-7 border-b">
       <p className={globalState.modeNight ? `text-gray-400 pt-1 ${Styles.link}` : `text-gray-500 pt-1 ${Styles.link}`}>در آپارات واردشوید تا ویدیو‌های و کانال‌های بهتری بر اساس سلیقه شما پیشنهاد شود</p>
       <Link href="/"><a className={`text-blue-500 ${Styles.link}`}>وارد شوید</a></Link>
    </div>
  );
}

export default memo(TextInserAparat);
