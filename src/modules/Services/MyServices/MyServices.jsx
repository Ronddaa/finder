import styles from './MyServices.module.css'
import sprite from '../../../icons.svg'

export default function MyServices() {
    return (
      <section className={styles.myServicesSection}>
        <div className="container">
          <h2 className={styles.title}>Meine Leistungen</h2>
          <ul className={styles.list}>
            <li className={styles.element}>
              <svg className={styles.contactIcon} width={111} height={97}>
                <use xlinkHref={`${sprite}#icon-tampone`}></use>
              </svg>
              <article className={styles.wrapperInfo}>
                <h3 className={styles.titleElement}>Blutabnahme</h3>
                <p className={styles.textElement}>
                  Für eine genaue Diagnosestellung wird in meiner Ordination
                  auch eine Blutabnahme angeboten.
                </p>
              </article>
            </li>
            <li className={styles.element}>
              <svg className={styles.contactIcon} width={111} height={97}>
                <use xlinkHref={`${sprite}#icon-circlebtns`}></use>
              </svg>
              <article className={styles.wrapperInfo}>
                <h3 className={styles.titleElement}>Akupunktur</h3>
                <p className={styles.textElement}>
                  In meiner Ordination biete ich Akupunktur als Reiztherapie.
                  Mit Hilfe von Akupunkturnadeln werden bestimmte Punkte auf den
                  Meridianen stimuliert, um bestehende Störungen zu beseitigen
                </p>
              </article>
            </li>
            <li className={styles.element}>
              <svg className={styles.contactIcon} width={111} height={97}>
                <use xlinkHref={`${sprite}#icon-caseplus`}></use>
              </svg>
              <article className={styles.wrapperInfo}>
                <h3 className={styles.titleElement}>Hausbesuche</h3>
                <p className={styles.textElement}>
                  Sollte es Ihnen aus gesundheitlichen Gründen nicht möglich
                  sein zu mir in die Ordination zu kommen, mache ich natürlich
                  auch Hausbesuche im gesamten Stadtgebiet von Wien.
                </p>
              </article>
            </li>
            <li className={styles.element}>
              <svg className={styles.contactIcon} width={111} height={97}>
                <use xlinkHref={`${sprite}#icon-pulse`}></use>
              </svg>
              <article className={styles.wrapperInfo}>
                <h3 className={styles.titleElement}>EKG</h3>
                <p className={styles.textElement}>
                  Die Elektrokardiografie (kurz EKG) ist eine kardiologische
                  Basisuntersuchung mit hoher Aussagekraft bezüglich
                  Herzerkrankungen.
                </p>
              </article>
            </li>
            <li className={styles.element}>
              <svg className={styles.contactIcon} width={111} height={97}>
                <use xlinkHref={`${sprite}#icon-spritz`}></use>
              </svg>
              <article className={styles.wrapperInfo}>
                <h3 className={styles.titleElement}>Impfungen</h3>
                <p className={styles.textElement}>
                  Den gewünschten Impfstoff erhalten Sie in Ihrer Apotheke.
                  Dieser wird dann in der Ordination verabreicht.
                </p>
              </article>
            </li>
            <li className={styles.element}>
              <svg className={styles.contactIcon} width={111} height={97}>
                <use xlinkHref={`${sprite}#icon-burgerheart`}></use>
              </svg>
              <article className={styles.wrapperInfo}>
                <h3 className={styles.titleElement}>Vorsorge­untersuchung</h3>
                <p className={styles.textElement}>
                  Ich empfehle meinen Patienten eine Vorsorgeuntersuchung,
                  welche für alle Personen ab dem 18. Lebensjahr einmal im Jahr
                  durchgeführt werden kann.
                </p>
              </article>
            </li>
          </ul>
        </div>
      </section>
    );
}