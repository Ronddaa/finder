import styles from './MeAbout.module.css'
import meAboutIMG_1 from './meAboutIMG_1.avif'

export default function MeAbout() {
    return (
      <section className={styles.meAboutSection}>
        <div className="container">
          <h2 className={styles.title}>
            Herzlich Willkommen auf Seite von Dr. med. univ. Sviatlana Fineder
          </h2>
          <p className={styles.mainText}>
            Ärztin für Allgemeinmedizin, ästhetische Behandlungen,
            Gesundheitsvorsorge und Akupunktur
          </p>
          <article className={styles.wrapperMeInfo}>
            <ul className={styles.meInfoList}>
              <li className={styles.meInfoText}>
                Dr. Sviatlana Fineder – Ihre Ärztin für Allgemeinmedizin und
                Akupunktur – ist Ihre erfahrene Ansprechpartnerin in allen
                Fragen rund um Gesundheit.
              </li>
              <li className={styles.meInfoText}>
                Primär arbeite ich{" "}
                <span>
                  im Rehabilitationszentrum Laab im Walde für Stütz- und
                  Bewegungsapparat und neurologische Erkrankungen.
                </span>
              </li>
              <li className={styles.meInfoText}>
                Zusätzlich zu meiner hauptberuflichen Tätigkeit im
                Rehabilitationszentrum Laab betreibe ich die{" "}
                <span>Wahlarztpraxis im 14 Bezirk</span> von Wien und 
                <span> Wahlarztpraxis im 23 Bezirk</span> von Wien.
              </li>
            </ul>
            <img
              className={styles.meAboutIMG}
              src={meAboutIMG_1}
              alt="i am is Doctor"
            />
          </article>
        </div>
      </section>
    );
}