import styles from "./WithImageYellow.module.css";
import BtnWI from "../btnWI.avif";

export default function BtnWithImageYellow() {
  return (
    <div className={styles.wrapperBtnWithImage}>
      <a
        href="https://patient.latido.at/booking/select;profileid=6374e6595b5372f6ace4d962;coredataid=63ac3b534945c399efcd3112"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.headerBtn}
      >
        Termin buchen
      </a>
      <img className={styles.BtnWI} src={BtnWI} alt="Eva" />
    </div>
  );
}
