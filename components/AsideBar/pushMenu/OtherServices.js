import PushMenuComp from "./PushMenuComp";
import { useContext,memo } from 'react';
import { pushMenuContext } from '../../../Context/MenuContext';
const OtherServices = () => {
  const {globalState} = useContext(pushMenuContext)
  return (
    <div className="pt-1 border-b pb-5">
    <h6 className={globalState.modeNight ? "fontfamily text-sm text-gray-400 py-2 pr-6" : "fontfamily text-sm text-red-500 py-2 pr-6"}>دیگر سرویس ها</h6>
    <PushMenuComp icon="bi bi-controller" href="/" title="فیلمو" />
    <PushMenuComp icon="bi bi-person" href="/" title="فیلمو مدرسه" />
    <PushMenuComp icon="bi bi-emoji-smile" href="/" title="آپارات کودک" />
    <PushMenuComp icon="bi bi-emoji-smile" href="/" title="پخش زنده" />
    <PushMenuComp icon="bi bi-emoji-smile" href="/" title="رویداد ها" />
    <PushMenuComp icon="bi bi-emoji-smile" href="/" title="آپارات اسپورت" />
  </div>
  );
}

export default memo(OtherServices);
