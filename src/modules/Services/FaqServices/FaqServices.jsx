import { useLocation } from "react-router-dom";
import { faqServicesContent } from "./faqServicesContent.js";
import styles from "./FaqServices.module.css";

export default function FaqServices() {
  const { pathname } = useLocation();

  const faqs = faqServicesContent[pathname];

  // Если вопросов нет, не рендерим секцию вообще
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={styles.faqServicesSection}>
      <div className="container">
        <h2 className={styles.title}>FAQ</h2>
        <ul className={styles.wrapperFaqs}>
          {faqs.map((item, index) => (
            <li key={index} className={styles.faqsElement}>
              <p className={styles.numberOf}>
                {String(index + 1)}
              </p>
              <article className={styles.wrapperContent}>
                <h3 className={styles.titleQuest}>{item.question}</h3>
                <p className={styles.answer}>{item.answer}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
