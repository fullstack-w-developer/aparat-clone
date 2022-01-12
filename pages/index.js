import { useContext } from "react";
import { pushMenuContext } from "../Context/MenuContext";
import Banner from "../components/mainIndex/Banner";
import ContinerCardFilm from './../components/mainIndex/ContinerCardFilm';
import Carousel from "../components/slider/Carousel"
import styles from "../styles/main.module.css"

export default function Home() {
  const {globalState} = useContext(pushMenuContext);

  return (
   
    <div className={`main px-5  ${ globalState.pushMenu ? "mr-0 xl:mr-60" : null}`} >
      <div className={globalState.pushMenu ? styles.banner__style_isPushMenu : styles.banner__style_notPushMenu}>
        <Banner/>
      <div>
      <div className={globalState.pushMenu ? styles.film__container__main__isPushMenu : styles.film__container__main__notPushMenu}>
        <ContinerCardFilm title="ویژه‌آپارات"/>
        <ContinerCardFilm />
        <ContinerCardFilm/>
        <ContinerCardFilm/>
        <ContinerCardFilm/>
        <ContinerCardFilm/>
        <ContinerCardFilm/>
        <ContinerCardFilm/>
        <ContinerCardFilm/>
        <ContinerCardFilm/>
        </div>
      </div>
      </div>
    </div>
  );
}

