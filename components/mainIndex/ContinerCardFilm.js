import Link from "next/link";
import ReactPlayer from "react-player";
import styles from "../../styles/main.module.css";
import { useContext } from "react";
import { pushMenuContext } from "./../../Context/MenuContext";
import Poster from "../../public/image/logo_astandard.png"


const ContinerCardFilm = ({ title }) => {
  const { globalState } = useContext(pushMenuContext);
  const playVideo = (event) => {
    // if (event.target.currentTime = 50) {
    //   event.target.pause();
    // } else {
    //   event.target.play();
    // }
    event.target.play();
  };
  const updateTime = (event) => {
    if (event.target.currentTime > 10.0) {
      event.target.pause()
      event.target.load()
    }
  };
  const pushVideo = (event) => {
    event.target.pause();
    event.target.currentTime = 0;
    event.target.load()
  };
  return (
    <div>
      <div className={styles.video__preview}>
        <div
          className={`${styles.title__videos} ${
            globalState.modeNight ? "text-gray-200" : "text-gray-900"
          }`}
        >
          <p>{title}</p>
        </div>
        <Link href="/">
          <a>
            <video
             poster="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              onTimeUpdate={updateTime}
              onMouseOver={playVideo}
              onMouseOut={pushVideo}
              autobuffer="true"
              preload="none"
              style={{objectFit:"cover", width:"100%",height:"120px"}}
              muted
              src="https://s-v4.tamasha.com/statics/videos_file/02/1b/A1g7a_021b3aa34505a0762e35f12c3d9f8cee7dbca7bf_n_360.mp4"
            />
          </a>
        </Link>
        <div className="pl-5">
          <p
            className={`${styles.title__video} ${
              globalState.modeNight ? "text-gray-200" : "text-gray-900"
            }`}
          >
            فیلم اکشن و علمی تخیلی لوسی Lucy دوبله فارسی 1080p
          </p>
          <p
            className={`${styles.chanel__name} ${
              globalState.modeNight ? "text-gray-200" : "text-gray-500"
            }`}
          >
            Farsi1
          </p>
          <div
            className={`flex ${
              globalState.modeNight ? "text-gray-300" : "text-gray-500"
            }`}
          >
            <p className={styles.details__video}>757 بازدید</p>
            <p className={`px-2 ${styles.details__video}`}>.</p>
            <p className={styles.details__video}>1 روز پیش</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinerCardFilm;
