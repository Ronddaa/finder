import styles from './IndicationsServices.module.css'

export default function IndicationsServices() {
    return (
      <section className={styles.indicationsServicesSection}>
        <div className="container">
          <h2 className={styles.title}>
            Bei folgenden Beschwerden hat sich die Stimulation von
            Akupunkturpunkten zur Aktivierung der Selbstheilungskraft bewährt:
          </h2>
          <ul className={styles.wrapperList}>
            <li className={styles.listText}>
              <span className={styles.dot}></span> chronische und akute
              Schmerzzustände (Wirbelsäulenbeschwerden, Arthrosen, Schmerzen
              nach Operation, Muskelspannungen, Migräne)
            </li>
            <li className={styles.listText}>
              <span className={styles.dot}></span> viszerale Schmerzen
              (Reizdarmsyndrom, Gastritis)
            </li>
            <li className={styles.listText}>
              <span className={styles.dot}></span> Allergien (Pollenallergie,
              Hausstauballergie), allergisches Asthma
            </li>
            <li className={styles.listText}>
              <span className={styles.dot}></span> klimakterische Beschwerden,
              Kinderwunsch, Geburtsvorbereitung
            </li>
            <li className={styles.listText}>
              <span className={styles.dot}></span> Stärkung des Immunsystems
              (Long Covid, chronisch wiederkehrende Infekte wie Bronchitis,
              chronischer Sinusitis)
            </li>
            <li className={styles.listText}>
              <span className={styles.dot}></span> psychische Belastungen
              (Schlafstörungen, Depressionen, innere Unruhe, Burnout)
            </li>
            <li className={styles.listText}>
              <span className={styles.dot}></span> als Unterstützung beim
              Abnehmen und bei der Raucherentwöhnung
            </li>
          </ul>
          <p className={styles.lastText}>
            Es wird feine Nadeln an unterschiedlichen Akupunkturpunkten gesetzt
            und für 30 Minuten belassen. Die Therapie sollte einmal wöchentlich
            über 6-10 Wochen durchgeführt werden
          </p>
        </div>
      </section>
    );
}