export type Story = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  course: string;
  province: string;
  excerpt: string;
  content: string[]; // paragrafen
};

export const stories: Story[] = [
  {
    slug: "de-haar-eerste-ronde-met-vriendinnen",
    title: "Golfbaan De Haar met vriendinnen: alles behalve strak, wél genoten",
    date: "2026-02-13",
    course: "Golfbaan De Haar",
    province: "Utrecht",
    excerpt:
      "Nieuwe baan, veel te veel optimisme, een paar misserfestivals… en toch weer precies waarom golf zo leuk is.",
    content: [
      "We hadden het plan al weken: met een paar vriendinnen een baan spelen die we nog niet kenden. Het werd Golfbaan De Haar — mooi, rustig, en precies het soort plek waar je denkt: vandaag ga ik écht gewoon slim golfen.",
      "Op de range voelde het nog best oké. Twee ballen recht, één bal ‘redelijk’, en toen besloot mijn brein dat ik er klaar voor was. Spoiler: ik was niet klaar.",
      "Hole 1 begon met een afslag die zo hard naar rechts draaide dat ik even dacht dat de bal onderweg nog een afspraak had. Mijn vriendin riep: ‘Ik zag ’m nog!’ — dat was lief. Niet waar, maar lief.",
      "En toch: het was meteen lekker. De baan lag er prachtig bij, het tempo was relaxed, en niemand deed alsof golf serieus móést zijn. Het werd al snel meer lachen dan rekenen.",
      "Ik had ook zo’n moment waarop je weer gelooft dat je talent hebt: één ijzer-7 die precies deed wat hij moest doen. Bal op de green, twee putts, klaar. Ik keek om me heen alsof ik een major had gewonnen.",
      "De holes erna waren weer gewoon ik: een duff, een chip die óf te kort was óf ineens over de green vloog alsof ik wél talent had. Het mooie is: je schaamt je even, maar daarna lach je en loop je door.",
      "Halverwege kwamen de gesprekken. Niet over techniek, maar over alles. Werk, plannen, gedoe, vakantie. En natuurlijk: waarom we in hemelsnaam een sport hebben gekozen waarbij je de hele dag een klein wit balletje zoekt.",
      "Laatste holes: geen focus op score, wel focus op ‘nog één goede slag’. Die kwam. Niet vaak. Maar genoeg om te denken: volgende keer wordt beter (klassieke leugen).",
      "Conclusie: op De Haar kun je prima slecht spelen — zolang je maar goed gezelschap hebt. We gaan terug. Uiteraard met hetzelfde optimisme. En waarschijnlijk dezelfde shanks.",
    ],
  },

  {
    slug: "winterronde-op-de-scherpenbergh",
    title: "Wintergreen op De Scherpenbergh: verkleumde vingers en warme chocolademelk",
    date: "2026-01-23",
    course: "Golfclub De Scherpenbergh",
    province: "Gelderland",
    excerpt:
      "Twee graden, wind, wintergreens… We wilden ‘gewoon even naar buiten’. Achteraf waren we vooral blij dat we weer binnen zaten.",
    content: [
      "Drie weken geleden vonden we onszelf ontzettend stoer. Het was zo’n dag waarop iedereen normaal zegt: ‘Misschien toch maar niet vandaag.’ Twee graden, wind, half bevroren fairways — en wintergreens.",
      "Maar wij wilden naar buiten. Want ‘frisse lucht is gezond’ en ‘het valt vast mee’. Het viel niet mee.",
      "Op De Scherpenbergh zag het er prachtig uit: kale bomen, lage winterzon, zo’n stilte waardoor je denkt dat je de baan voor jezelf hebt. Alleen… na drie holes voelden mijn handen alsof ze officieel niet meer bij mijn lichaam hoorden.",
      "Mijn eerste afslag ging verrassend goed. Midden fairway. Ik dacht: zie je wel, wintergolf is eigenlijk ideaal. Minder drukte. Meer focus. Twee holes later kon ik mijn tee niet eens meer uit de grond krijgen omdat mijn vingers niet meer wilden buigen.",
      "En wintergreens zijn ook een ervaring. Je putt ziet er goed uit… en dan stuitert je bal alsof hij over een licht hobbelige parkeerplaats rolt. Iedereen doet alsof het normaal is, maar je voelt gewoon: dit is overleven.",
      "We hebben serieus geprobeerd om competitief te blijven. Er werd zelfs nog gezegd: ‘Technisch gezien zijn de omstandigheden voor iedereen gelijk.’ Rond hole 6 was die motivatie dood. Niet het golfen — de kou.",
      "Toch speelden we door. Omdat je het later graag stoer vertelt: ‘We hebben het gewoon gedaan.’ En eerlijk: het was ook mooi. Rustig. Stil. Bijna filmisch. Alleen dan met rillende kaken.",
      "Het absolute hoogtepunt kwam niet op de baan, maar erna. Binnen. Jassen uit. Rode wangen. En een warme chocolademelk die ineens voelde als een Michelin-ervaring.",
      "Conclusie: wintergolf is karaktervormend. Maar volgende keer wachten we gewoon tot het vijf graden warmer is.",
    ],
  },
];

export function getStoriesSorted() {
  return [...stories].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getStoryBySlug(slug: string) {
  return stories.find((s) => s.slug === slug);
}
