const images = 'src/assets/img';

export class Party {
  afkorting: String;
  titel: String;
  lijsttrekker: String;
  logo: String;
  trefwoorden?: String[];
  categorie: String;
}

export const mockParties: Party [] = [
  {
    afkorting: 'DENK',
    titel: 'DENK',
    lijsttrekker: 'Tunahan Kuzu',
    logo: `${images}/partijen/DENK.png`,
    trefwoorden: [
      'Allochtoon', 'Allochtonen', 'Islam', 'Sociaal', 'Rechtvaardig'
    ],
    categorie: 'Links progressief'
  },
  {
    afkorting: 'GL',
    titel: '	GroenLinks',
    lijsttrekker: 'Jesse Klaver',
    logo: `${images}/partijen/GL.png`,
    trefwoorden: [
      'Zorg', 'Milieu', 'Groen', 'Onderwijs', 'Klimaat', 'Natuur'
    ],
    categorie: 'Links progressief'
  },
  {
    afkorting: 'PvdA',
    titel: 'Partij van de Arbeid',
    lijsttrekker: 'Lodewijk Asscher',
    logo: `${images}/partijen/PvdA.png`,
    trefwoorden: [
      ''
    ],
    categorie: 'Links progressief'
  },
  {
    afkorting: 'PvdD',
    titel: 'Partij voor de Dieren',
    lijsttrekker: 'Marianne Thieme',
    logo: `${images}/partijen/PvdD.png`,
    trefwoorden: [
      'Zorg', 'Pensioen', 'Onderwijs'
    ],
    categorie: 'Links progressief'
  },
  {
    afkorting: 'SP',
    titel: 'Socialistische Partij',
    lijsttrekker: 'Emile Roemer',
    logo: `${images}/partijen/SP.png`,
    trefwoorden: [
      'Zorg', 'Betaalbaar', 'Iedereen', 'Werk', 'Inkomen', 'AOW', '65'
    ],
    categorie: 'Links progressief'
  },
  {
    afkorting: '50+',
    titel: '50PLUS',
    lijsttrekker: 'Henk Krol',
    logo: `${images}/partijen/50plus.png`,
    trefwoorden: [
      'AOW', '65', 'Pensioen', 'Solidariteit', 'Koopkracht'
    ],
    categorie: 'Links progressief'
  },
  {
    afkorting: 'CU',
    titel: 'ChristenUnie',
    lijsttrekker: 'Gert-Jan Segers',
    logo: `${images}/partijen/CU.png`,
    trefwoorden: [
      'Geloof', 'Islamisering', 'Gezin', 'Pensioen', 'Abortus', 'Godsdienstvrijheid'
    ],
    categorie: 'Links conservatief'
  },
  {
    afkorting: 'D66',
    titel: 'Democraten 66',
    lijsttrekker: 'Alexander Pechtold',
    logo: `${images}/partijen/D66.png`,
    trefwoorden: [
      'Onderwijs', 'Klimaat', 'Gezin', 'Pensioen', 'Abortus', 'Godsdienstvrijheid', 'Natuur', 'Europa'
    ],
    categorie: 'Rechts progressief'
  },
  {
    afkorting: 'CDA',
    titel: 'Christen-Democratisch Appèl',
    lijsttrekker: 'Sybrand Buma',
    logo: `${images}/partijen/CDA.png`,
    trefwoorden: [
      'Waarden', 'Traditie', 'Familie', 'Gezin', 'Eerlijk', 'Economie', 'Zorg'
    ],
    categorie: 'Rechts conservatief'
  },
  {
    afkorting: 'PVV',
    titel: 'Partij voor de Vrijheid',
    lijsttrekker: 'Geert Wilders',
    logo: `${images}/partijen/PVV.png`,
    trefwoorden: [
      'Allochtoon', 'Allochtonen', 'Islam', 'Nederland', 'Euro', 'Europa'
    ],
    categorie: 'Rechts conservatief'
  },
  {
    afkorting: 'SGP',
    titel: 'Staatkundig Gereformeerde Partij',
    lijsttrekker: 'Kees van der Staaij',
    logo: `${images}/partijen/SGP.png`,
    trefwoorden: [
      'Gods woord', 'Bijbel', ' Geloof', 'Islamisering', 'Gezin', 'Defensie', 'Abortus', 'Godsdienstvrijheid'
    ],
    categorie: 'Rechts conservatief'
  },
  {
    afkorting: 'VNL',
    titel: 'VoorNederland',
    lijsttrekker: 'Jan de Roos',
    logo: `${images}/partijen/VNL.png`,
    trefwoorden: [
      'lage', 'belasting', 'veiligheid', 'immigratie', 'defensie', ' Nederland', 'Zorg', 'Infrastructuur'
    ],
    categorie: 'Rechts conservatief'
  },
  {
    afkorting: 'VVD',
    titel: 'Volkspartij voor Vrijheid en Democratie',
    lijsttrekker: 'Mark Rutte',
    logo: `${images}/partijen/VVD.png`,
    trefwoorden: [
      'Belasting', 'Banen', 'Normaal', 'Investeren', 'Ouderen', 'Zorg'
    ],
    categorie: 'Rechts conservatief'
  },
];
