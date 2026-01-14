import services_1 from "./services_1.avif";
import services_2 from "./services_2.avif";
// ... импортируйте остальные картинки

export const servicesData = {
  "/behandlungsangebote/kundenbewertung": {
    title: "Praktische Ärztin für Allgemeinmedizin in Liesing Wien",
    text: "Als Ärztin für Allgemeinmedizin betreue ich Menschen medizinisch in ihrem gesamten Lebensbereich unabhängig von Alter, Geschlecht oder Art der Erkrankung – vor allem hinsichtlich Vorsorge, Erkennung und Behandlung von Gesundheitsstörungen bzw. Krankheiten jeder Art",
    image: services_1,
        showExtraBlock: true,
    textMore: "In meiner Praxis als Allgemeinmediziner wende ich eine harmonische und effektive Kombination aus klassischen klinischen Kriterien zur Diagnose, Behandlung und natürlich Prävention von Krankheiten sowie Akupunkturtechniken an.\n\nAls Wahlärztin nehme ich mir für das Gespräch mit Ihnen die Zeit, die Sie benötigen, um Klarheit in Ihre aktuelle Situation zu bringen. Gemeinsam werden wir dann den Weg in Richtung Gesundheit lenken."
  },
  "/behandlungsangebote/akupunktur": {
    title: "Akupunktur",
    text: "Akupunktur ist das Einwirken dünner Nadeln auf bestimmte biologisch aktive Punkte des menschlichen Körpers",
    image: services_2,
      showExtraBlock: true,
    textMore: "Akupunktur hat sich als alternative Behandlungsmethode in vielen Fällen etabliert. Sie kann entweder unterstützend zu Medikamenten oder als Ersatztherapie in bestimmten Fällen angewendet werden.\n\nDie Vorteile einer Akupunkturbehandlung liegen hauptsächlich in der Vermeidung von medikamentösen Nebenwirkungen und in der ganzheitlichen Zugangsweise zum Patient.\n\nDie Wirksamkeit der Akupunktur ist seit über 2000 Jahren in der Traditionellen chinesischen Medizin bewiesen."
  },
};
