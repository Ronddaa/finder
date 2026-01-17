import { useLocation } from "react-router-dom";
import styles from "./InformationServices.module.css";
import { informationContent } from "./informationServicesContent";

export default function InformationServices() {
  const { pathname } = useLocation();

  // Достаем данные именно для текущего пути
  const content = informationContent[pathname];

  // Если данных для этого пути нет, не рендерим секцию вообще
  if (!content) return null;

  return (
    <section className={styles.informationServicesSection}>
      <div className="container">
        <h2 className={styles.title}>wichtige Informationen</h2>

        <div className={styles.wrapperMain_information}>
          {/* Разбиваем текст по \n\n на отдельные абзацы */}
          {content.main_information.split("\n\n").map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {renderFormattedText(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderFormattedText(text) {
  // Регулярное выражение ищет текст между #...# или %...%
  // Используем захватывающие скобки (), чтобы split сохранил сами разделители
  const parts = text.split(/(#.*?#|%.*?%)/g);

  return parts.map((part, i) => {
    // Если часть текста начинается и заканчивается на #
    if (part.startsWith("#") && part.endsWith("#")) {
      return (
        <strong key={i} className={styles.boldText}>
          {part.slice(1, -1)} {/* Убираем сами символы # */}
        </strong>
      );
    }

    // Если часть текста начинается и заканчивается на %
    if (part.startsWith("%") && part.endsWith("%")) {
      return (
        <span key={i} className={styles.coloredText}>
          {part.slice(1, -1)} {/* Убираем сами символы % */}
        </span>
      );
    }

    // Если это обычный текст
    return part;
  });
}
