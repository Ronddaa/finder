import { NavLink } from "react-router-dom";
import styles from "./BtnWithImage.module.css";
import BtnWI from "../btnWI.avif";
import sprite from "../../../icons.svg";

export default function BtnWithImage({ linkTo }) {
  return (
    <div className={styles.wrapperBtnWithImage}>
      <NavLink className={styles.linkTo} to={linkTo}>
        weiterlesen
        <div className={styles.wrapperDefaultIcon}>
          <svg className={styles.defaultLinkIcon} width={15} height={8}>
            <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
          </svg>
        </div>
      </NavLink>
      <img className={styles.BtnWI} src={BtnWI} alt="Eva" />
    </div>
  );
}
