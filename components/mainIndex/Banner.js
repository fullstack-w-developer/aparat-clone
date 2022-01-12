import { useState, useContext } from "react";
import styles from "../../styles/main.module.css";
import { pushMenuContext } from "./../../Context/MenuContext";
import Image from "next/image";
import LogoBlock from "../../public/image/logo_block.svg";
import LogoWhite from "../../public/image/logo-white.svg";
import Link from "next/link";

const Banner = () => {
  const [banner, setBanner] = useState(true);
  const { globalState } = useContext(pushMenuContext);
  const hideBanner = () => {
    setBanner(false);
  };
  return (
    <div className="border-b-2 pt-6 pb-12">
      {banner ? (
        <div className={`${styles.Banner__main}`}>
          {/* logo */}
          <div className="flex">
            <div
              className={`${
                globalState.modeNight
                  ? styles.logo__containerNight
                  : styles.logo__containerLight
              }`}
            >
              {globalState.modeNight ? (
                <Image src={LogoBlock} alt="logo" width={100} height={35} />
              ) : (
                <Image src={LogoWhite} alt="logo" width={100} height={35} />
              )}
            </div>

            {/* text */}
            <div
              className={
                globalState.modeNight ? "text-gray-100 py-2" : "text-white py-2"
              }
            >
              <p className={styles.text__banner}>
                آپارات کودک دوست امن کودک شما!
              </p>
              <p className={`pb-2 ${styles.text__banner}`}>
                بستر تماشا‌ی کارتون و محتوای مناسب کودکان
              </p>
              <Link href="/">
                <a className="">
                  {" "}
                  <span className={styles.link__page}>
                    <i className="bi bi-box-arrow-up-right pl-1"></i>ورود به
                    دنیای شاد کارتونی
                  </span>
                </a>
              </Link>
            </div>
          </div>

          {/* card amount */}

          <div className={styles.card__amount}>
            <div
              className={`${
                globalState.modeNight ? "text-gray-400" : "text-blue-500"
              }`}
            >
              <p className="text-sm">
                تا <span className="text-lg">60%</span> تخفیف
              </p>
              <p className="text-sm">اشتراک‌آپارات‌کودک</p>
            </div>
          </div>

          {/*  close button */}
          <div className={`${styles.times__banner}`} onClick={hideBanner}>
            <span
              className={`text-xl ${
                globalState.modeNight ? "text-gray-500 " : "text-gray-400 "
              }`}
            >
              <i>&times;</i>
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Banner;
