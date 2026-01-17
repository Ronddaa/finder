import styles from './RecommendationsServices.module.css'

export default function RecommendationsServices() {
    return (
      <section className={styles.recommendationsServicesSection}>
        <div className="container">
          <h2 className={styles.title}>Empfehlungen nach Botox-Injektion:</h2>
          <ul className={styles.wrapperList}>
            <li className={styles.text}>
              Sie können sofort zu Ihrem normalen Tagesablauf zurückkehren.
              Innerhalb von 12 Stunden nach dem Eingriff ist die Massage des
              behandelten Gesichtsteils verboten.
            </li>
            <li className={styles.text}>
              Für 24 Stunden nach der Injektion sind Sport, Alkoholkonsum,
              Sonnenbaden oder der Besuch eines Solariums verboten.
            </li>
            <li className={styles.text}>
              In den nächsten 7-10 Tagen nach dem Eingriff wird empfohlen, eine
              Überhitzung zu vermeiden, d.h. Sie müssen Sauna-, Bade- oder
              heiße Badbesuche ausschließen. Vermeiden Sie die Anwendung von
              Beruhigungsmitteln oder Aminoglykosiden für zwei Wochen nach der
              Injektion, da diese die Wirkung von Botulinumtoxin verringern.
            </li>
          </ul>
        </div>
      </section>
    );
}