export type Story = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  author: string;
  course: string;
  province: string;
  excerpt: string;
  content: string[];
};

export const stories: Story[] = [
  {
    slug: "de-haar-eerste-ronde-met-vriendinnen",
    title: "De Haar, vriendinnen en een scorekaart vol schaamte",
    date: "2026-02-13",
    author: "Sanne",
    course: "Golfclub De Haar",
    province: "Utrecht",
    excerpt:
      "Ik speelde beroerd, verloor ballen alsof het mijn hobby was… maar ik heb zelden zo genoten. En ja: de rosé achteraf telt óók als course management.",
    content: [
      "We hadden het plan al weken: even ‘lekker’ negen holes lopen met z’n vieren. Geen wedstrijd, geen druk, gewoon gezellig. Alleen… we kozen meteen een baan waar je niet per ongeluk even doorheen wandelt: Golfclub De Haar. Utrecht, mooi, chique vibes — en ik met m’n zelfvertrouwen van een natte pannenkoek.",
      "We kwamen aan alsof we op citytrip waren. Koffie in de hand, veel te vrolijk, en natuurlijk meteen doen alsof we dit soort banen elke week spelen. ‘Ja hoor, wij lopen hier vaker.’ (Leugen.)",
      "Op de driving range ging het nog. Tenminste: het leek alsof het ging. Ik sloeg twee ballen recht. TWEE. En toen dacht mijn brein: oké prima, we zijn warm. Spoiler: we waren niet warm.",
      "Hole 1 begon met een afslag die zo hard naar rechts draaide dat ik even dacht dat de bal onderweg nog een afspraak had. Mijn vriendin riep: ‘Ik zag ’m nog!’ — dat was lief. Niet waar, maar lief.",
      "En toch: het was meteen lekker. De baan was prachtig. Je loopt daar en je denkt: oké, als ik vandaag niks kan, kan ik in ieder geval kijken. En lachen. En dat deden we dus ook, de hele ronde door.",
      "Ik had een klassieker: die ene hole waar alles ineens klikt. Drive in het midden. Tweede slag oké. Pitch… best. En toen: één putt. Eén! Ik keek om me heen alsof ik een major had gewonnen. Mijn vriendinnen deden mee alsof het de normaalste zaak van de wereld was. (Ook lief.)",
      "De holes erna waren weer gewoon ik: een slice, een duff, een chip die óf te kort was óf ineens over de green heen vloog alsof ik wél talent had. Het gekke is: je schaamt je even, maar daarna lach je en loop je door. En dat is precies waarom ik golf — het is ongemakkelijk en geweldig tegelijk.",
      "Halverwege kwamen de gesprekken. Niet over techniek, maar over alles. Werk, gedoe, vakantie, en natuurlijk: waarom we in hemelsnaam een sport hebben gekozen waarbij je de hele dag een klein wit balletje zoekt.",
      "Laatste hole: ik wilde ‘m netjes uitspelen. Rustig. Slim. Course management. Nou: ik begon met een te ambitieuze slag, eindigde met een soort creatieve route langs de rough, en stond uiteindelijk met een score op mijn kaart waar je normaal een waarschuwingssticker op plakt.",
      "Maar eerlijk? Het voelde als winst. We waren buiten. We hadden gelachen. Ik had één hole gehad waarop ik even dacht: oh ja, daarom doe ik dit. En daarna… het clubhuis. Zon. Drankje. En vier mensen die het erover eens waren dat dit dus precies een perfecte golfdag kan zijn, zelfs als je scorekaart het niet met je eens is.",
      "Volgende keer weer. Misschien speel ik beter. Misschien niet. Maar ik ga wel.",
    ],
  },
];

export function getStoriesSorted(): Story[] {
  return [...stories].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
