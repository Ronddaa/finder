import styles from './ContraindicationsServices.module.css'

export default function ContraindicationsServices() {
    return (
      <section className={styles.contraindicationsServicesSection}>
        <div className="container">
          <h2 className={styles.title}>
            Kontraindikationen zu die Injektion von Botulinumtoxin
          </h2>
          <h3 className={styles.titleList}>Absolute Kontraindikationen:</h3>
          <ul className={styles.wrapperList}>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Bei Vorliegen einer
              Krankheit, die mit einer Verletzung der Übertragung von
              Nervenimpulsen verbunden ist, beispielsweise Myasthenia gravis
            </li>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Während der Schwangerschaft
            </li>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Während der Laktation
            </li>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Bei lokalen entzündlichen Prozessen
            </li>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Hämophilie
            </li>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Bei Überempfindlichkeit gegen die Bestandteile des Arzneimittels
            </li>
          </ul>
          <h3 className={styles.titleList}>Mögliche Kontraindikationen</h3>
          <ul className={styles.wrapperList}>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Mit einer Vorgeschichte von Nierenerkrankungen
            </li>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Verwendung von Blutverdünnern (Antikoagulantien)
            </li>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Verschlimmerung somatischer Erkrankungen
            </li>
            <li className={styles.ListElement}>
              <span className={styles.dot}></span> Die Verwendung von Arzneimitteln, die die Aktivität von Botulinumtoxin beeinflussen können: einige Arten von Antibiotika, Muskelrelaxantien.
            </li>
          </ul>
        </div>
      </section>
    );
}