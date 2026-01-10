import styles from './EvaFooter.module.css';
import footerIMG from './footerIMG.avif'

export default function EvaFooter() {
    return (
      <article className={styles.EvaFooterSection}>
        <img className={styles.footerImg} src={footerIMG} alt="Eva?" />
        <div className={`container ${styles.EvaFooterContent}`}>
          <h2 className={styles.titleEvaFooter}>
            Wünschen Sie ein online Gespräch mit Dr. Fineder?
          </h2>
          <p className={styles.description}>
            Dr. Fineder erstellt für Sie eine online Diagnose und startet eine
            Therapie oder empfiehlt weitere Maßnahmen
          </p>
          <a href="#" className={styles.footerBtn} target="_blank">
            Telemedizinische Beratung
          </a>
        </div>
      </article>
    );
}