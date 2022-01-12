import Link from "next/link";
import Image from "next/image";
import {useContext,memo} from "react"
import Logo from "../../../public/image/logo_astandard.png"
import { pushMenuContext } from '../../../Context/MenuContext';
const OtherPageAparat = () => {
  const {globalState} = useContext(pushMenuContext)
  return (
      <>
    <div className=" py-3 border-b">
      <p className={globalState.modeNight ? "text-gray-400 text-sm fontfamily py-3 pr-7" : "text-gray-500 text-sm fontfamily py-3 pr-7"}>دیگر صفحات آپارات</p>
      <div className="flex justify-between items-center px-2 pr-4">
        <div>
          <p className={globalState.modeNight ? "text-xs text-gray-400 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-800" : "text-xs text-gray-500 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-200"}>
            <Link href="/">تبلیغات</Link>
          </p>
          <p className={globalState.modeNight ? "text-xs text-gray-400 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-800" : "text-xs text-gray-500 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-200"}>
            <Link href="/">لوگوی‌های آپ</Link>
          </p>
          <p className={globalState.modeNight ? "text-xs text-gray-400 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-800" : "text-xs text-gray-500 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-200"}>
            <Link href="/">در‌آمد زایی</Link>
          </p>
          <p className={globalState.modeNight ? "text-xs text-gray-400 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-800" : "text-xs text-gray-500 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-200"}>
            <Link href="/">سوالات متداول</Link>
          </p>
        </div>
        <div className="borderOtherPage"></div>
        <div>
          <p className={globalState.modeNight ? "text-xs text-gray-400 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-800" : "text-xs text-gray-500 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-200"}>
            <Link href="/">تماس با ما</Link>
          </p>
          <p className={globalState.modeNight ? "text-xs text-gray-400 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-800" : "text-xs text-gray-500 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-200"}>
            <Link href="/"> کانال‌های رسمی </Link>
          </p>
          <p className={globalState.modeNight ? "text-xs text-gray-400 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-800" : "text-xs text-gray-500 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-200"}>
            <Link href="/"> قوانین </Link>
          </p>
          <p className={globalState.modeNight ? "text-xs text-gray-400 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-800" : "text-xs text-gray-500 fontfamily py-3 px-2 cursor-pointer hover:bg-gray-200"}>
            <Link href="/"> به ما بپیوندید </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-3">
      <span>
          <i className="bi bi-twitter text-gray-500 px-1"></i>
        </span>
        <span>
          <i className="bi bi-instagram text-gray-500 px-1"></i>
        </span>
       
      </div>
    </div>
    <div className="text-center pt-3">
    <Image src={Logo} width={70} height={100}/>
</div>
</>
  );
};

export default memo(OtherPageAparat);
