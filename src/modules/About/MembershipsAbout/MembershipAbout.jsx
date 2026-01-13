import styles from "./MembershipAbout.module.css";
import sprite from "../../../icons.svg";

export default function MembershipAbout() {
  return (
    <section className={styles.membershipAboutSection}>
      <div className="container">
        <h2 className={styles.title}>Mitgliedschaften:</h2>
        <ul className={styles.wrapperList}>
          <li className={styles.elementList}>
            <svg className={styles.star} width={30} height={30}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            Österreichische Ärztekammer (ÖÄK)
          </li>
          <li className={styles.elementList}>
            <svg className={styles.star} width={30} height={30}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            Österreichische Gesellschaft für kontrollierte Akupunktur und TCM (ÖGKA)
          </li>
          <li className={styles.elementList}>
            <svg className={styles.star} width={30} height={30}>
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            Österreichische Gesellschaft für Mesotherapie
          </li>
        </ul>
      </div>
    </section>
  );
}
