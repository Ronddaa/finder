import styles from "./EducationAbout.module.css";

export default function EducationAbout() {
  return (
    <section className={styles.EducationAboutSection}>
      <div className="container">
        <h2 className={styles.title}>Ausbildung und Spezielle Kurse:</h2>
        <ul className={styles.educationList}>
          <li className={styles.listElement}><span className={styles.dot}></span>
            Allgemeinmedizinische Ausbildung, Krankenhaus Steyr
          </li>
          <li className={styles.listElement}><span className={styles.dot}></span>Diplom Körperakupunktu</li>
          <li className={styles.listElement}><span className={styles.dot}></span>Diplom Krankenhaushygiene</li>
          <li className={styles.listElement}><span className={styles.dot}></span>ÖÄK- Diplom Notärztin</li>
          <li className={styles.listElement}><span className={styles.dot}></span>Ultraschall Abdomen Grundkurs</li>
          <li className={styles.listElement}><span className={styles.dot}></span>Medical Englisch Kurs</li>
          <li className={styles.listElement}><span className={styles.dot}></span>
            Zertifikat Basis Training “Botox & Filler”
          </li>
          <li className={styles.listElement}><span className={styles.dot}></span>
            Zertifikat Advancer- Training Botox&Filler
          </li>
          <li className={styles.listElement}><span className={styles.dot}></span>Zertifikat Mesotherapie</li>
          <li className={styles.listElement}><span className={styles.dot}></span>
            Zertificat Plasmolifting PRP Technology in Ästhetik
          </li>
          <li className={styles.listElement}><span className={styles.dot}></span>Medicine and Trichology</li>
          <li className={styles.listElement}><span className={styles.dot}></span>
            Zertifikat Vorsorgeuntersuchung
          </li>
        </ul>
      </div>
    </section>
  );
}
