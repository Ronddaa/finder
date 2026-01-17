import styles from './CombinationServices.module.css'

export default function CombinationServices() {
    return (
      <section className={styles.combinationServicesSection}>
        <div className="container">
          <h2 className={styles.title}>
            Kombination von Botox-Injektionen mit anderen ästhetischen
            Behandlungen
          </h2>
          <ul className={styles.wrapperList}>
            <li className={styles.text}>
              Botulinumtoxin-Injektionsverfahren können gleichzeitig mit
              Biorevitalisierung oder Mesotherapie durchgeführt werden, mit
              Injektionen von Hyaluronsäure für Kontur- und volumetrische
              plastische Chirurgie, Plasmolifting, Peeling,
              Laser-Anti-Aging-Verfahren (z. B. Photorejuvenation)
            </li>
            <li className={styles.text}>
              Während der Beratung vor dem Eingriff beurteile ich den Zustand
              Ihrer Haut, das Vorhandensein altersbedingter Veränderungen und
              erst danach empfehle ich Ihnen die am besten geeigneten Eingriffe.
              Anschließend erstellen wir gemeinsam mit Ihnen ein empfohlenes
              Behandlungsprogramm.
            </li>
          </ul>
        </div>
      </section>
    );
}