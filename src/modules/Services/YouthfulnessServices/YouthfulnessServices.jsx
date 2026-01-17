import styles from './YouthfulnessServices.module.css'
import YouthfulnessServicesImg_1 from "./YouthfulnessImg_1.avif";
import YouthfulnessServicesImg_2 from './YouthfulnessImg_2.avif';
import YouthfulnessServicesImg_3 from './YouthfulnessImg_3.avif';
import YouthfulnessServicesImg_4 from './YouthfulnessImg_4.avif';
import YouthfulnessServicesImg_5 from "./YouthfulnessImg_5.avif";

export default function YouthfulnessServices() {
    return (
      <section className={styles.youthfulnessServicesSection}>
        <div className="container">
          <h2 className={styles.title}>
            Eine glatte, straffe und jugendlich schöne Haut
          </h2>
          <ul className={styles.wrapperList}>
            <li className={styles.text}>
              Ziel jeder Faltenunterspritzung ist es, eine langfristige
              Reduzierung der Falten zu erreichen, ohne dass die natürliche
              Mimik beeinträchtigt wird.
            </li>
            <li className={styles.text}>
              In der ästhetischen Medizin gibt es viele Methoden um verschiedene
              Arten von Falten (statisch, hyperdynamisch, involutionär oder
              strukturell) zu behandelt.
            </li>
            <li className={styles.text}>
              Hyaluron (oder Hyaluronsäure) ist ein natürlicher Bestandteil der
              Haut, dessen Hauptaufgabe es ist, Wasser in großen Mengen in der
              Haut zu binden und so die Feuchtigkeit und Elastizität der Haut
              aufrechtzuerhalten.
            </li>
            <li className={styles.text}>
              Hyaluronsäure verleiht unserer Haut jugendliche Spannkraft und
              Vitalität – in fortgeschrittenem Alter nimmt der natürliche Gehalt
              der Hyaluronsäure in der Haut allerdings stetig ab und mit
              zunehmendem Alter entwickeln sich Falten. Dieser Prozess kann je
              nach Veranlagung und Hauttyp bereits in den 30ern einsetzen.
            </li>
            <li className={styles.text}>
              Wer sich lästige Falten nicht gefallen lassen möchte, findet bei
              Dr. Fineder unterstützt Sie dabei und gibt Ihnen eine
              Anti-Falten-Hyaluronsäure-Unterspritzung.
            </li>
            <li className={styles.text}>
              Eine Faltenbehandlung mit Hyaluronsäure wird nicht nur zur
              Faltenreduzierung, sondern auch zur Gewebeauffüllung durchgeführt.
              So werden die Gesichtszüge weicher und jugendlicher. Die Wirkung
              hält zwischen sechs und zwölf Monaten an.
            </li>
            <li className={styles.text}>
              Durch das von Dr.Fineder eingesetzte natürliche Hyaluron bekommt
              Ihre Haut wieder die Jugendlichkeit, Frische und Elastizität von
              früher. Das Hyaluron ist von Bakterien produziert und vom Körper
              zu 100% durch eigene Enzyme abbaubar.
            </li>
          </ul>
          <h3 className={styles.title_2}>
            Bei folgenden Falten bietet sich Faltenunterspritzungen mit
            Hyaluronsäure:
          </h3>
          <ul className={styles.wrapperList_2}>
            <li className={styles.listElement}>
              <span className={styles.dot}></span> Wangenfalten
            </li>
            <li className={styles.listElement}>
              <span className={styles.dot}></span> Augenfalten
            </li>
            <li className={styles.listElement}>
              <span className={styles.dot}></span> Augenbrauenfalten
            </li>
            <li className={styles.listElement}>
              <span className={styles.dot}></span> Mundfalten
            </li>
            <li className={styles.listElement}>
              <span className={styles.dot}></span> Stirnfalten
            </li>
            <li className={styles.listElement}>
              <span className={styles.dot}></span> Marionettenfalten
            </li>
            <li className={styles.listElement}>
              <span className={styles.dot}></span> Lippenfalten
            </li>
            <li className={styles.listElement}>
              <span className={styles.dot}></span> Nasolabialfalten
            </li>
            <li className={styles.listElement}>
              <span className={styles.dot}></span> Falten am Dekolleté
            </li>
          </ul>
          <div className={styles.wrapperImages}>
            <img className={styles.YouthfulnessServicesImg} src={YouthfulnessServicesImg_1} alt="Belotero" />
            <img className={styles.YouthfulnessServicesImg} src={YouthfulnessServicesImg_2} alt="Belotero" />
            <img className={styles.YouthfulnessServicesImg} src={YouthfulnessServicesImg_3} alt="Belotero" />
            <img className={styles.YouthfulnessServicesImg} src={YouthfulnessServicesImg_4} alt="Belotero" />
            <img className={styles.YouthfulnessServicesImg} src={YouthfulnessServicesImg_5} alt="Belotero" />
          </div>
        </div>
      </section>
    );
}