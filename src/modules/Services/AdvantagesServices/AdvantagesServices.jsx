import styles from './AdvantagesServices.module.css'

export default function AdvantagesServices() {
    return (
      <section className={styles.advantagesServicesSection}>
        <div className="container">
          <h2 className={styles.title}>Meine Vorteile</h2>
          <ul className={styles.cardList}>
            <li className={`${styles.card} ${styles.card_1}`}>
              <h3 className={styles.titleElement}>Telemedizinische <br /> Beratung</h3>
              <article className={styles.wrapperCardText}>
                <p className={styles.cardText}>
                  In meiner modernen Arztpraxis biete ich eine telemedizinische
                  Beratung mit Patienten via Videocall per Skype oder WhatsApp
                </p>
              </article>
            </li>
            <li className={`${styles.card} ${styles.card_2}`}>
              <h3 className={styles.titleElement}>Zahlungsmöglichkeiten</h3>
              <article className={styles.wrapperCardText}>
                <p className={styles.cardText}>
                  Als Zahlungsmöglichkeiten in meiner Ordinationen sind sowohl
                  Bargeld als auch Bankomat und Kreditkarten möglich
                </p>
              </article>
            </li>
            <li className={`${styles.card} ${styles.card_3}`}>
              <h3 className={`${styles.titleElement} ${styles.titleElementWhite}`}>Mehrsprachigkeit</h3>
              <article className={styles.wrapperCardText}>
                <p className={styles.cardText}>
                  Gespräche in meine Ordination kann ich mit Ihnen in den
                  Sprachen - Deutsch, Russisch. Polnisch, Englisch führen.
                </p>
              </article>
            </li>
          </ul>
        </div>
      </section>
    );
}