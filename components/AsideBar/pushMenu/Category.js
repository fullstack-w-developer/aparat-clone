import DropDown from "./DropDown";
import PushMenuComp from "./PushMenuComp";
import { useContext,memo } from 'react';
import { pushMenuContext } from '../../../Context/MenuContext';

const Category = () => {
  const {globalState} = useContext(pushMenuContext)
  return (
    <div className="pt-1 border-b pb-5">
      <h6 className={globalState.modeNight ? "fontfamily text-sm text-gray-400 py-2 pr-6" : "fontfamily text-sm text-red-500 py-2 pr-6"}>دسته بندی</h6>
      <PushMenuComp
        icon="bi bi-film"
        href="/film"
        title="سریال و فیلم‌سینمایی"
      />
      <PushMenuComp icon="bi bi-controller" href="/game" title="گیم" />
      <PushMenuComp icon="bi bi-person" href="/sport" title="ورزشی" />
      <PushMenuComp icon="bi bi-emoji-smile" href="/carton" title="کارتون" />
      <DropDown />
    </div>
  );
};

export default memo(Category);
