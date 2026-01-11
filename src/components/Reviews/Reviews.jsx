import styles from './Reviews.module.css'

export default function Reviews() {
    return (
      <section className={styles.reviewsSection}>
        <div className="container">
          <h2 className={styles.title}>Kundenbewertung</h2>
          <ul className={styles.wrapperReviews}>
            <li className={styles.reviewsElement}>
              <p className={styles.nameReviews}>Ludmila Karakuta</p>
              <p className={styles.city}>Wien</p>
              <p className={styles.comments}>
                Frau Doktor Fineder nimmt sich die Zeit für ein umfassendes
                Gespräch und bespricht nicht nur die Diagnose sondern auch die
                Form der Therapie. Sehr nett, empathisch und kompetent! Ich kann
                sie uneingeschränkt empfehlen.
              </p>
            </li>
            <li className={styles.reviewsElement}>
              <p className={styles.nameReviews}>Karl Haudum</p>
              <p className={styles.city}>Ansfelden</p>
              <p className={styles.comments}>
                Ich war wegen der Vorsorgeuntersuchung bei Fr. Dr. Fineder. Sie
                ist wirklich sehr kompetent und hat mir alles genau erklärt. Ab
                jetzt mache ich jedes Jahr meine Vorsorgeuntersuchung bei dieser
                Ärztin.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
}