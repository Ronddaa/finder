import styles from './About.module.css'
import useIsDesktop from '../../hooks/useIsDesktop';
import BtnWithImage from '../Buttons/WithImage/BtnWithImage';
import meAboutIMGOne from './aboutImgOne.avif'
import meAboutIMGTwo from './aboutImgTwo.avif'

export default function About() {
  const isDesktop = useIsDesktop(1024);

    return (
      <section className={styles.ablotSection}>
        <div className={`container ${styles.aboutContent}`}>
          <h2 className={styles.title}>Über mich</h2>
          <article className={styles.wrapperContent}>
            <ul className={styles.wrapperInfoList}>
              <li className={styles.listText}>
                <p className={styles.text}>
                  <span>
                    Dr. Fineder – Fachärztin für Allgemeinmedizin, Longevity &
                    ästhetische Behandlungen Natürlich schön. Vital. Strahlend.
                  </span>
                </p>
              </li>
              <li className={styles.listText}>
                <p className={styles.text}>
                  In meiner Praxis verbinde ich meine Expertise in
                  nicht-operativen ästhetischen Behandlungen mit innovativen
                  Longevity-Konzepten – für Ihre natürliche Schönheit, die von
                  innen strahlt.
                </p>
              </li>
              {!isDesktop && (
                <li className={styles.listText}>
                  <img
                    className={styles.meAboutIMG}
                    src={meAboutIMGOne}
                    alt="I am is Doctor"
                    width={509}
                    height={357}
                  />
                </li>
              )}
              <li className={styles.listText}>
                <p className={styles.text}>
                  <span>Meine Expertise:</span> <br /> Mit viel Erfahrung und
                  ästhetischem Gespür biete ich Ihnen sanfte, präzise
                  Behandlungen für Gesichtsverjüngung, Konturierung und
                  Hautregeneration mit Exosomen sowie Skin Longevity –
                  individuell auf Sie abgestimmt.
                </p>
              </li>
              <li className={styles.listText}>
                <p className={styles.text}>
                  Ergänzend setze ich auf ganzheitliche Longevity-Methoden wie
                  NAD⁺-Infusionen, mitochondriale Energieoptimierung und
                  personalisiertes Gewichtsmanagement mit Mounjaro® für
                  nachhaltige Vitalität von innen.
                </p>
              </li>
              <li className={styles.listText}>
                <BtnWithImage linkTo="/about" />
              </li>
            </ul>
            {isDesktop && (
              <div className={styles.wrapperImagesMe}>
                <img
                  className={styles.meAboutIMG}
                  src={meAboutIMGOne}
                  alt="I am is Doctor"
                  width={509}
                  height={357}
                />
                <img
                  className={styles.meAboutIMG}
                  src={meAboutIMGTwo}
                  alt="I am is Doctor"
                  width={509}
                  height={357}
                />
              </div>
            )}
          </article>
        </div>
      </section>
    );
}