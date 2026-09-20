// Toutes les infos des projets sont ici, séparées du rendu visuel.
// title/description sont bilingues (fr/en). Les tags techniques (Figma, HTML...)
// ne sont pas traduits car ce sont des noms propres/technos, sauf ceux qui sont
// des mots français ordinaires (Vidéo, Montage...), traduits eux aussi.
// primaryLink/secondaryLinks utilisent un "type" (online/figma/source) : le
// libellé affiché est traduit automatiquement via translations.js, pas stocké ici.

import adidasImg from "../assets/Adidas.png";
import waitroseImg from "../assets/Waitrose.png";
import animationImg from "../assets/Animation.png";
import hemeraImg from "../assets/Héméra.png";
import aeroportImg from "../assets/Aéroport.png";
import olivaImg from "../assets/Oliva.png";
import mycrewImg from "../assets/Mycrew.png";
import voyageurImg from "../assets/Voyageur.png";
import courtMetrageImg from "../assets/Court-métrage.png";
import cartesImg from "../assets/Cartes.png";
import streamingImg from "../assets/Streaming.png";
import cervoiserieImg from "../assets/LaCervoiserie.jpg";

const projects = [
  {
    date: { fr: "Juin 2026", en: "June 2026" },
    title: {
      fr: "Stage: refonte du site web de La Cervoiserie",
      en: "Internship: redesign of La Cervoiserie website",
    },
    description: {
      fr: "Le but de ce stage était de refondre le site web de La Cervoiserie, une grande franchise de bar en France.",
      en: "The goal of this internship was to redesign the website of La Cervoiserie, a great franchise of bars in France.",
    },
    tags: { fr: ["WordPress", "Figma"], en: ["WordPress", "Figma", "Tailwind CSS"] },
    image: cervoiserieImg,
    imageAlt: "Aperçu du projet Cervoiserie",
    imageLink:
      "https://www.lacervoiserie.com/",
    primaryLink: {
      type: "online",
      url: "https://www.lacervoiserie.com/",
    },
     secondaryLinks: [
      {
        type: "figma",
        url: "https://www.figma.com/design/sMzcAYoyontsUb7l53LNeC/Refonte-site-web-La-Cervoiserie?node-id=0-1&t=FZPy1SxmSXFrLP36-1",
      },
    ],
  },
  {
    date: { fr: "Octobre 2025", en: "October 2025" },
    title: {
      fr: "Création d'un site click & collect Adidas sur Wordpress",
      en: "Building an Adidas click & collect site on WordPress",
    },
    description: {
      fr: "Le site reprend les codes graphiques d'Adidas. Le but était de créer un site click & collect pour une marque existante. (Pour des raisons de problèmes avec le serveur, seul le figma est accessible)",
      en: "The site follows Adidas' visual identity. The goal was to build a click & collect site for an existing brand. (Due to server issues, only the Figma file is accessible)",
    },
    tags: { fr: ["WordPress", "Figma", "Tailwind CSS"], en: ["WordPress", "Figma", "Tailwind CSS"] },
    image: adidasImg,
    imageAlt: "Aperçu du projet Adidas",
    imageLink:
      "https://www.figma.com/design/fpRI3eIK2bZ8HbxLHRlLe4/Arthur-Desmoulins-%7C-Sa%C3%A93.01?node-id=1-100999&t=VTFPRJ2qvWYJICM1-1",
    primaryLink: {
      type: "online",
      url: "https://www.figma.com/design/fpRI3eIK2bZ8HbxLHRlLe4/Arthur-Desmoulins-%7C-Sa%C3%A93.01?node-id=1-100999&t=VTFPRJ2qvWYJICM1-1",
    },
    secondaryLinks: [],
  },
  {
    date: { fr: "décembre 2024", en: "December 2024" },
    title: { fr: "Vidéos en stop motion", en: "Stop motion videos" },
    description: {
      fr: "Un projet réalisé en stop motion avec des fruits et légumes afin de promouvoir les bénéfices de l'alimentation saine. Ce projet a été réalisé en équipe de 3 personnes.",
      en: "A stop motion project using fruits and vegetables to promote the benefits of healthy eating. This project was made as a team of 3.",
    },
    tags: {
      fr: ["Photographie", "Montage (DaVinci Resolve)"],
      en: ["Photography", "Editing (DaVinci Resolve)"],
    },
    image: waitroseImg,
    imageAlt: "Aperçu du projet Waitrose",
    imageLink: "https://www.youtube.com/watch?v=hK9BioWJLr8",
    primaryLink: { type: "online", url: "https://www.youtube.com/watch?v=hK9BioWJLr8" },
    secondaryLinks: [],
  },
  {
    date: { fr: "décembre 2025", en: "December 2025" },
    title: { fr: "Création d'un site avec tailwind CSS", en: "Building a site with Tailwind CSS" },
    description: {
      fr: "Le but de ce site était de présenter une cause (ici le tourisme) et à l'aide de petites animations, énoncer les chiffres clés de cette dernière.",
      en: "The goal of this site was to present a cause (here, tourism) and, with small animations, highlight its key figures.",
    },
    tags: {
      fr: ["Tailwind CSS", "Figma", "After Effects"],
      en: ["Tailwind CSS", "Figma", "After Effects"],
    },
    image: animationImg,
    imageAlt: "Aperçu du projet Adidas",
    imageLink: "https://eregaudie17.github.io/Sae-3.03/",
    primaryLink: { type: "online", url: "https://eregaudie17.github.io/Sae-3.03/" },
    secondaryLinks: [
      { type: "source", url: "https://github.com/ArthurDesmoulins/Sae-3.03" },
      {
        type: "figma",
        url: "https://www.figma.com/design/XGnlmXJAVPMuCvMgU7G30F/Sa%C3%A9-3.03?node-id=5-12&t=tmcaLTj1xzV1wUCN-1",
      },
    ],
  },
  {
    date: { fr: "JUIN 2025", en: "JUNE 2025" },
    title: { fr: "Création d'une application", en: "Designing an app" },
    description: {
      fr: "Sur Figma, mes coéquipiers et moi avons réalisé la maquette d'une application initiée par l'entreprise Héméra afin d'inciter les gens à pratiquer des activités sportives dans les espaces de télétravail tels qu'Héméra. Ce projet fictif avait pour but de proposer des idées à Héméra et restait donc dans un cadre professionnel, car nous devions suivre le style de l'entreprise. Nous avons ensuite réalisé une vidéo pour présenter notre projet.",
      en: "On Figma, my teammates and I designed a mockup for an app initiated by the company Héméra, aimed at encouraging people to do sports activities in coworking spaces like Héméra. This fictional project was meant to pitch ideas to Héméra, so it stayed within a professional framework since we had to follow the company's style. We then made a video to present our project.",
    },
    tags: {
      fr: ["Vidéo", "Figma", "Montage (DaVinci Resolve)"],
      en: ["Video", "Figma", "Editing (DaVinci Resolve)"],
    },
    image: hemeraImg,
    imageAlt: "Aperçu du projet Héméra",
    imageLink: "https://www.youtube.com/watch?v=yy9XKiiBpbc",
    primaryLink: { type: "online", url: "https://www.youtube.com/watch?v=yy9XKiiBpbc" },
    secondaryLinks: [],
  },
  {
    date: { fr: "Septembre 2025", en: "September 2025" },
    title: {
      fr: "Audit du site de l'aéroport de Limoges",
      en: "Audit of the Limoges airport website",
    },
    description: {
      fr: "Voici un audit du site web de l'aéroport de Limoges ainsi que les recommendations pour tenter de l'améliorer.",
      en: "Here is an audit of the Limoges airport website, along with recommendations to try to improve it.",
    },
    tags: { fr: ["Figma", "After Effects"], en: ["Figma", "After Effects"] },
    image: aeroportImg,
    imageAlt: "Aperçu du projet Aéroport",
    imageLink:
      "https://www.figma.com/design/flpJWXpfG2fG2tOvh7PW9M/Arthur-Desmoulins?node-id=1-4&t=FnyREHX4v750mZvF-1",
    primaryLink: {
      type: "figma",
      url: "https://www.figma.com/design/flpJWXpfG2fG2tOvh7PW9M/Arthur-Desmoulins?node-id=1-4&t=FnyREHX4v750mZvF-1",
    },
    secondaryLinks: [],
  },
  {
    date: { fr: "septembre 2025", en: "September 2025" },
    title: { fr: "Maquette de site web", en: "Website mockup" },
    description: {
      fr: "Le but ici était de créer une maquette de site web pour une entreprise fictive d'huile d'olive de luxe en respectant des contraintes sur la charte graphique.",
      en: "The goal here was to create a website mockup for a fictional luxury olive oil company, following constraints on the visual identity.",
    },
    tags: { fr: ["Figma"], en: ["Figma"] },
    image: olivaImg,
    imageAlt: "Aperçu du projet Oliva",
    imageLink:
      "https://www.figma.com/design/SafVuZTPRrs6LXbvO7pOkd/ARTHUR-DESMOULINS---Oliva?node-id=0-7&t=R2xIusAkkWXLWyP5-1",
    primaryLink: {
      type: "figma",
      url: "https://www.figma.com/design/SafVuZTPRrs6LXbvO7pOkd/ARTHUR-DESMOULINS---Oliva?node-id=0-7&t=R2xIusAkkWXLWyP5-1",
    },
    secondaryLinks: [],
  },
  {
    date: { fr: "octobre 2025", en: "October 2025" },
    title: { fr: "Appli de rencontre sport", en: "Sports dating app" },
    description: {
      fr: "Ici il convenait de créer la maquette d'une appli fictive de rencontre à destination des sportifs.",
      en: "Here, the task was to design a mockup for a fictional dating app aimed at athletes.",
    },
    tags: { fr: ["Figma"], en: ["Figma"] },
    image: mycrewImg,
    imageAlt: "Aperçu du projet Mycrew",
    imageLink:
      "https://www.figma.com/design/fb8W8WGVMlfhKvQw9ZC9fo/Arthur-Desmoulins---mycrew?node-id=0-1&t=lyt1YgEAj7WPqza3-1",
    primaryLink: {
      type: "figma",
      url: "https://www.figma.com/design/fb8W8WGVMlfhKvQw9ZC9fo/Arthur-Desmoulins---mycrew?node-id=0-1&t=lyt1YgEAj7WPqza3-1",
    },
    secondaryLinks: [],
  },
  {
    date: { fr: "Mai 2025", en: "May 2025" },
    title: { fr: "Site one page", en: "One page site" },
    description: {
      fr: "Ici, il fallait créer un site one page afin de présenter une œuvre d'art, son auteur et le mouvement qui l'entoure. Personnellement, j'ai choisi de mettre en avant « Le Voyageur contemplant la mer de nuages » de Caspar David Friedrich.",
      en: "Here, the task was to create a one page site presenting a work of art, its author and the movement surrounding it. I personally chose to feature \"Wanderer above the Sea of Fog\" by Caspar David Friedrich.",
    },
    tags: { fr: ["Figma"], en: ["Figma"] },
    image: voyageurImg,
    imageAlt: "Aperçu du projet Voyageur",
    imageLink:
      "https://www.figma.com/design/8RpklEQTeExMuXCYMeeGHQ/Arthur-Desmoulins---Le-voyageur-contemplant-la-mer-de-nuage?node-id=2009-57&t=XvhdPg1N9U1xfaD9-1",
    primaryLink: {
      type: "figma",
      url: "https://www.figma.com/design/8RpklEQTeExMuXCYMeeGHQ/Arthur-Desmoulins---Le-voyageur-contemplant-la-mer-de-nuage?node-id=2009-57&t=XvhdPg1N9U1xfaD9-1",
    },
    secondaryLinks: [],
  },
  {
    date: { fr: "Avril 2025", en: "April 2025" },
    title: { fr: "Court métrage", en: "Short film" },
    description: {
      fr: "Il fallait réaliser un court métrage artistique, j'étais le réalisateur ainsi que le cadreur et le monteur.",
      en: "The task was to make an artistic short film; I was the director, camera operator and editor.",
    },
    tags: {
      fr: ["Premier Pro", "DaVinci Resolve", "Réalistion et cadrage"],
      en: ["Premiere Pro", "DaVinci Resolve", "Directing and camera work"],
    },
    image: courtMetrageImg,
    imageAlt: "Aperçu du projet Court-métrage",
    imageLink: "https://youtu.be/QZ9tO2DEMTQ",
    primaryLink: { type: "online", url: "https://youtu.be/QZ9tO2DEMTQ" },
    secondaryLinks: [],
  },
  {
    date: { fr: "Octobre 2024", en: "October 2024" },
    title: { fr: "Cartes de tarot", en: "Tarot cards" },
    description: {
      fr: "Le but était de créer deux jeux de cartes de tarot : un vectoriel (Illustrator) et l'autre matriciel (Photoshop). Le temps imparti étant court, les jeux n'ont pas pu être réalisés en entier.",
      en: "The goal was to create two tarot card decks: one vector-based (Illustrator) and the other raster-based (Photoshop). Given the short time frame, the decks couldn't be fully completed.",
    },
    tags: {
      fr: ["Illustrator", "Photoshop", "Canva"],
      en: ["Illustrator", "Photoshop", "Canva"],
    },
    image: cartesImg,
    imageAlt: "Aperçu du projet Adidas",
    imageLink:
      "https://www.canva.com/design/DAGUkkKY-ac/JeA0pxc7p9cj6atuxkIpwQ/edit?utm_content=DAGUkkKY-ac&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    primaryLink: {
      type: "online",
      url: "https://www.canva.com/design/DAGUkkKY-ac/JeA0pxc7p9cj6atuxkIpwQ/edit?utm_content=DAGUkkKY-ac&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    secondaryLinks: [],
  },
  {
    date: { fr: "Janvier 2025", en: "January 2025" },
    title: { fr: "Site de streaming", en: "Streaming site" },
    description: {
      fr: "Le but de ce site était de créer un site de streaming avec un back-office fonctionnel, puis de reproduire le style d'un site de streaming existant.",
      en: "The goal of this site was to build a streaming site with a functional back-office, then reproduce the style of an existing streaming site.",
    },
    tags: { fr: ["CSS", "HTML", "PHP"], en: ["CSS", "HTML", "PHP"] },
    image: streamingImg,
    imageAlt: "Aperçu du projet Streaming",
    imageLink: "https://desmoulins-sae203.mmi-limoges.fr/",
    primaryLink: { type: "online", url: "https://desmoulins-sae203.mmi-limoges.fr/" },
    secondaryLinks: [
      { type: "source", url: "https://github.com/ArthurDesmoulins/SAE2.03-Desmoulins" },
    ],
  },
  
];

export default projects;