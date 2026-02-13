export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string, bijv. "2026-02-10"
  location?: string;
  readingTime?: string; // bijv. "6 min"
  content: string[]; // paragrafen
};

const stories: Story[] = [
  {
    slug: "de-haar-eerste-ronde-met-vriendinnen",
    title: "Haar eerste ronde met vriendinnen op De Haar",
    excerpt:
      "Een onbekende baan, een paar vriendinnen, winterlucht in de longen en toch vooral veel plezier — ondanks het scorekaartje.",
    date: "2026-02-13",
    location: "Golfclub De Haar (Utrecht)",
    readingTime: "6 min",
    content: [
      "We hadden onszelf wijsgemaakt dat we ‘even een rondje’ gingen lopen. Gewoon lekker, beetje praten, beetje slaan, beetje genieten. Maar ja — dat zeggen mensen altijd voordat ze drie holes later al ruzie hebben met hun eigen swing.",
      "Het was één van die ochtenden waarop je jas eigenlijk nog dicht moet, maar je tóch je polo aantrekt omdat je jezelf wijsmaakt dat het dan al lente wordt. We reden richting Golfclub De Haar, een baan waar we nog nooit gespeeld hadden. Nieuwe baan = nieuw excuus, vonden we.",
      "Bij de eerste tee deden we alsof we er vaak kwamen. Beetje nonchalant kijken, tas neerzetten, praten over ‘course management’ alsof we ooit een plan hebben. En toen kwam natuurlijk de afslag.",
      "Mijn eerste bal ging… laten we zeggen: niet richting waar de hole ongeveer was. Meer richting ‘spannende ontdekkingstocht door het bos’. Iedereen lachte. Ik ook. Nog.",
      "Toch gebeurde er iets geks: tussen de slices en drie-putts door zat er af en toe ineens een bal tussen waarvan je denkt: oké, dáárom doe ik dit. Zo’n ijzer-7 die precies doet wat je in je hoofd hoorde. En dan loop je weer drie holes op adrenaline.",
      "We speelden slecht, maar op een gezellige manier. Veel ‘nee joh, je ligt prima’ terwijl iemand letterlijk achter een boom ligt. Veel foto’s. Veel commentaar op elkaar. En vooral: nul stress.",
      "En op het einde — toen de scores het niet meer waard waren om te tellen — liepen we de laatste holes gewoon uit alsof we op een mini-vakantie waren. Zonnetje, grapjes, en dat gevoel dat je de week weer even gereset hebt.",
      "Binnen eindigden we met iets warms, een beetje napraten en de standaard conclusie: volgende keer gaan we echt oefenen. (Spoiler: dat doen we niet.)",
    ],
  },

  // Verhaal 2 (voorbeeld)
  {
    slug: "een-rondje-met-net-te-veel-zelfvertrouwen",
    title: "Een rondje met net te veel zelfvertrouwen",
    excerpt:
      "Je kent het: je start met één mooie bal en denkt direct dat je ‘m hebt’ — tot hole 3 je weer terug op aarde zet.",
    date: "2026-02-12",
    location: "Utrecht",
    readingTime: "5 min",
    content: [
      "Ik begon met één bal die zó goed was dat ik meteen gevaarlijke gedachten kreeg. Je weet wel: vandaag wordt een dag.",
      "En precies daardoor werd het natuurlijk géén dag.",
      "Hole 2 kwam met een drie-putt die me weer netjes terugzette in de categorie ‘mid handicapper met grootse dromen’.",
      "Maar goed: het was buiten, het was gezellig, en ergens is dat ook gewoon winst.",
    ],
  },

  // Verhaal 3 (voorbeeld wintergreens Gelderland)
  {
    slug: "wintergreens-en-warme-chocolademelk",
    title: "Wintergreens, koude handen en warme chocolademelk",
    excerpt:
      "Drie weken geleden was het zó koud dat de bal bijna pijn deed. We speelden toch — en waren achteraf vooral blij met de warme choco.",
    date: "2026-02-10",
    location: "Gelderland",
    readingTime: "6 min",
    content: [
      "Het was zo’n dag waarop je al spijt hebt als je de auto uitstapt. Koude lucht, stijve handen, en een baan die er prachtig uitzag maar eigenlijk één grote waarschuwing was.",
      "We speelden op wintergreens. Omdat het ‘toch lekker was om buiten te zijn’. Dat is de leugen die golfers zichzelf vertellen als ze eigenlijk gewoon niet binnen willen blijven.",
      "De eerste paar holes waren vooral overleven. Je swing is korter, je tempo is sneller, je voelt niks in je vingers. En je ballen… die doen ook niet wat ze normaal doen. (De ballen bedoel ik ja.)",
      "Op een gegeven moment sloeg iemand een wedge die normaal landt en stopt — en nu rolde ‘ie gewoon door alsof de green van marmer was.",
      "We hebben gelachen, we hebben gemopperd, we hebben minstens drie keer gezegd dat we beter koffie hadden kunnen drinken in plaats van golfen.",
      "En toen we klaar waren, waren we eerlijk gezegd vooral trots dat we überhaupt doorgezet hadden. Binnen was het warm. We namen warme chocolademelk en deden alsof het een heroic adventure was.",
      "Conclusie: wintergreens zijn prima… maar alleen als je daarna meteen iets warms drinkt en je scorekaartje direct weggooit.",
    ],
  },
];

export function getAllStories(): Story[] {
  return [...stories].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
