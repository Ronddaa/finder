import { NavLink } from "react-router-dom";
import styles from "./OfferServices.module.css";
import sprite from "../../../icons.svg";
import offerListImg_1 from "./offerListImg_1.avif";
import offerListImg_2 from "./offerListImg_2.avif";
import offerListImg_3 from "./offerListImg_3.avif";
import offerListImg_4 from "./offerListImg_4.avif";
import offerListImg_5 from "./offerListImg_5.avif";
import offerListImg_6 from "./offerListImg_6.avif";
import offerListImg_7 from "./offerListImg_7.avif";
import offerListImg_8 from "./offerListImg_8.avif";

export default function OfferServices() {
  return (
    <section className={styles.offerServicesSection}>
      <div className="container">
        <h2 className={styles.title}>Mein Angebot</h2>
        <ul className={styles.offerList}>
          <li className={`${styles.card}`}>
            <img
              className={styles.offerListImg}
              src={offerListImg_1}
              alt="Botox Behandlung"
            />
            <article className={styles.wrapperContentInfo}>
              <h3 className={styles.titleCard}>Botox Behandlung</h3>
              <p className={styles.text}>
                Botox-Injektionen sind das effektivste und beliebteste
                kosmetische Verfahren zur Verjüngung der Gesichtshaut und zur
                Erhaltung der eigenen Schönheit.
              </p>
              <NavLink to="" className={styles.linkTo}>
                weiterlesen
                <div className={styles.wrapperDefaultIcon}>
                  <svg className={styles.defaultLinkIcon} width={15} height={8}>
                    <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                  </svg>
                </div>
              </NavLink>
            </article>
          </li>
          <li className={`${styles.card}`}>
            <img
              className={styles.offerListImg}
              src={offerListImg_2}
              alt="Faltenbehandlung mit Hyaluronsäure"
            />
            <article className={styles.wrapperContentInfo}>
              <h3 className={styles.titleCard}>
                Faltenbehandlung mit Hyaluronsäure
              </h3>
              <p className={styles.text}>
                Um Falten zu bekämpfen und jugendliche Haut zu bewahren biete
                ich Ihnen Botulinumtherapie, Biorevitalisierung,
                Faltenunterspritzung und Gesichtsmodellierung mit Hyaluronsäure
              </p>
              <NavLink to="" className={styles.linkTo}>
                weiterlesen
                <div className={styles.wrapperDefaultIcon}>
                  <svg className={styles.defaultLinkIcon} width={15} height={8}>
                    <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                  </svg>
                </div>
              </NavLink>
            </article>
          </li>
          <li className={`${styles.card}`}>
            <img
              className={styles.offerListImg}
              src={offerListImg_3}
              alt="Fadenlifting"
            />
            <article className={styles.wrapperContentInfo}>
              <h3 className={styles.titleCard}>Fadenlifting</h3>
              <p className={styles.text}>
                Das Fadenlifting (Mesothreads) ist ist eine Alternative zum
                chirurgischen Eingriff und ein hochwirksames, sicheres,
                minimal-invasives Verfahren zur Verjüngung von Gesicht
              </p>
              <NavLink to="" className={styles.linkTo}>
                weiterlesen
                <div className={styles.wrapperDefaultIcon}>
                  <svg className={styles.defaultLinkIcon} width={15} height={8}>
                    <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                  </svg>
                </div>
              </NavLink>
            </article>
          </li>
          <li className={`${styles.card}`}>
            <img
              className={styles.offerListImg}
              src={offerListImg_4}
              alt="Lippen aufspritzen"
            />
            <article className={styles.wrapperContentInfo}>
              <h3 className={styles.titleCard}>Lippen aufspritzen</h3>
              <p className={styles.text}>
                Lippen aufspritzen mit Hyaluronsäure kann helfen die Lippen zu
                vergrößern und ihnen eine vollere, definiertere Lippenform zu
                geben
              </p>
              <NavLink to="" className={styles.linkTo}>
                weiterlesen
                <div className={styles.wrapperDefaultIcon}>
                  <svg className={styles.defaultLinkIcon} width={15} height={8}>
                    <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                  </svg>
                </div>
              </NavLink>
            </article>
          </li>
          <li className={`${styles.card}`}>
            <img
              className={styles.offerListImg}
              src={offerListImg_5}
              alt="Plasmalifting / PRP"
            />
            <article className={styles.wrapperContentInfo}>
              <h3 className={styles.titleCard}>Plasmalifting / PRP</h3>
              <p className={styles.text}>
                Beim Plasmalifting / PRP-Lifting wird ein "Medikament" in die
                Haut gespritzt, das vor Ihren Augen aus Ihrem eigenen, speziell
                aufbereiteten Blutplasma entsteht.
              </p>
              <NavLink to="" className={styles.linkTo}>
                weiterlesen
                <div className={styles.wrapperDefaultIcon}>
                  <svg className={styles.defaultLinkIcon} width={15} height={8}>
                    <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                  </svg>
                </div>
              </NavLink>
            </article>
          </li>
          <li className={`${styles.card}`}>
            <img
              className={styles.offerListImg}
              src={offerListImg_6}
              alt="Biorevitalisierung"
            />
            <article className={styles.wrapperContentInfo}>
              <h3 className={styles.titleCard}>Biorevitalisierung</h3>
              <p className={styles.text}>
                Die Biorevitalisierung ist die neueste Verjüngungstechnik, die
                auf atonische, geschwächte, „müde“, dehydrierte alternde Haut
                abzielt.
              </p>
              <NavLink to="" className={styles.linkTo}>
                weiterlesen
                <div className={styles.wrapperDefaultIcon}>
                  <svg className={styles.defaultLinkIcon} width={15} height={8}>
                    <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                  </svg>
                </div>
              </NavLink>
            </article>
          </li>
          <li className={`${styles.card}`}>
            <img
              className={styles.offerListImg}
              src={offerListImg_7}
              alt="Faltenbehandlung mit Radiesse®"
            />
            <article className={styles.wrapperContentInfo}>
              <h3 className={styles.titleCard}>
                Faltenbehandlung mit Radiesse®
              </h3>
              <p className={styles.text}>
                Radiesse® Volumizer ist ein Füllstoff der neuen Generation, der
                für die nicht-chirurgische Gesichtskorrektur entwickelt wurde
                und einen lang anhaltenden Effekt der Faltenglättung erzeugt.
              </p>
              <NavLink to="" className={styles.linkTo}>
                weiterlesen
                <div className={styles.wrapperDefaultIcon}>
                  <svg className={styles.defaultLinkIcon} width={15} height={8}>
                    <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                  </svg>
                </div>
              </NavLink>
            </article>
          </li>
          <li className={`${styles.card}`}>
            <img
              className={styles.offerListImg}
              src={offerListImg_8}
              alt="Regenerative Medizin für Männer"
            />
            <article className={styles.wrapperContentInfo}>
              <h3 className={styles.titleCard}>
                Regenerative Medizin für Männer
              </h3>
              <p className={styles.text}>
                Beim Plasmalifting / PRP-Lifting wird ein "Medikament" in die
                Haut gespritzt, das vor Ihren Augen aus Ihrem eigenen, speziell
                aufbereiteten Blutplasma entsteht.
              </p>
              <NavLink to="" className={styles.linkTo}>
                weiterlesen
                <div className={styles.wrapperDefaultIcon}>
                  <svg className={styles.defaultLinkIcon} width={15} height={8}>
                    <use xlinkHref={`${sprite}#icon-arrowRight`}></use>
                  </svg>
                </div>
              </NavLink>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}
