// Constantes personnalisées pour PlayerMap dans staging-front
// Ces constantes remplaceront les valeurs par défaut de Player-map

// Prédicats communs
export const COMMON_IDS = {
  GAMES_ID: "0x15fd51c3248baf65414b97a52ff4302e653bd4f765e6784fd5eb4906ea322390",
  FOLLOWS: "0xffd07650dc7ab341184362461ebf52144bf8bcac5a19ef714571de15f1319260", // prédicat --> follows
  IS: "0xdd4320a03fcd85ed6ac29f3171208f05418324d6943f1fac5d3c23cc1ce10eb3",  // prédicat --> is
  IS_PLAYER_OF: "0x6bd2557fa101349b1adab869c7f14bdcb5dce3ae0bc722bee3ae183a544faa81",  // prédicat --> is player of
};

// Types de triples pour les joueurs
export const PLAYER_TRIPLE_TYPES = {
  PLAYER_GAME: {
    predicateId: COMMON_IDS.IS_PLAYER_OF, // predicat --> is player of !!!
    objectId: COMMON_IDS.GAMES_ID // object --> games (BossFighters)
  },
  PLAYER_QUALITY_1: {
    predicateId: COMMON_IDS.IS, // predicat --> is 
    objectId: "0xe8c70540064241818928054f9d655b79a9fc06fad93967db766347d9ed678795" // object --> fairplay !!!
  },
  PLAYER_QUALITY_2: {
    predicateId: COMMON_IDS.IS, // predicat --> is 
    objectId: "0x0b5b1eecbe6c655584f57c15b1fd0a8fbec0ba39bbc1f253824b2075739c3fe1" // object --> strong boss !!!
  },
  PLAYER_QUALITY_3: {
    predicateId: COMMON_IDS.IS, // predicat --> is 
    objectId: "0x48e31f7beaec9a71b62de49865ee2ba664c72c6860f7802d2174d003e635ff7d" // object --> strong fighter !!!
  },
  PLAYER_GUILD: {
    predicateId: COMMON_IDS.IS_PLAYER_OF, // predicat --> is player of !!!
    objectId: null // Sera défini dynamiquement en fonction du choix de guilde
  }
};

// Liste des guildes officielles du jeu
export const OFFICIAL_GUILDS = [
  { id: "0xc183c41276643c4702a171d37cf9a20baa5de5e25caac66c39830b0fca2ba770", name: "The Alchemists" }, // id --> The Alchemists
  { id: "0xb110c4aa1b84b23e8f5e101f664c653812830c0f6a2d795a548160d36d108456", name: "Big Time Warriors" }, // id --> Big TIme Warriors (note: label has typo in DB)
  { id: "0x9bf71e4674afe84dac6a963afd0266007c7353f3c9fa12864754d3f8eeb9ce47", name: "The NEST" }, // id --> The NEST
  { id: "0x41c736b542bdac2569f85106f674a0f532d1128c576ee533c316ddd6f7e34c25", name: "Clock Work Gamers" }, // id --> Clock Work Gamers
  { id: "0xe27adc56828d19a66cb92a1d9d4caeb04d0a295c473562fcc2703e92b1a44f1c", name: "Vast Impact Gaming" }, // id --> Vast Impact Gaming
  { id: "0x4ba717c7f309c98d2ba72c8412960af16872def8e8462f69da2e340762a01627", name: "Kraken Gaming" }, // id --> Kraken Gaming
  { id: "0xfec84b336ffe9c138d4f9d8203ff6453cbc9413927be3ac36fa656b6f940ef88", name: "FAM" } // id --> FAM
];

// List of predefined claim IDs for voting
export const PREDEFINED_CLAIM_IDS = [
  "0xe4230213119263e56f54b1775cc68a17044459ff9eb173c027296a71183b0e1f", // pixward game - is - player first
  "0x5d0520046c19ee1d11394eee35b552a22c33cfb12436d70f4f0a532876fcac4d", // pixward game - is - transparent
  "0xf558c9b2dce229d3b179ac8bfb82391daf132217dafab1ae97ba0347f3ce7c5c", // pixward game - is - open to feedback
  "0xbd8e011371e763cd198d65b984d97095ba8683aaea54e6bf649a6a8bf318bbd8", // pixward game - is - trustful
  "0x6f6e8b77d841dc7f1f6db1d4a9d343c82fa8b7e9b8cc0994df0acc6043d40031", // pixward game - listens to - its community
  "0x3e85439a1af56cdff9a43e8a816b63e04b43867a3127247dc0acf1df96316a4e", // pixward game - listens to - pixward game
  "0x4c4d6868d5904a20a15d4f3c9747d12181bc44aa73e2678411cad233af2aa9da", // boss fighters - is - play-to-earn
  "0xaa179c3eb2a324d1c21bd2e8cba5154cad3597a0d233a139dbc5faee63817f93", // boss fighters - is - pay-to-win
  "0x008c734e4367e902c953741e1d630a7633e7d6adb6473312bd184977008cd03b", // boss fighters - is - fun
  "0xb1e561929163310cb385c918a66012131d920e3df35fb77be03af1ea75be858d", // boss fighters - is - casual
  "0x4b1be50d1c8fcc7a54c3aaaa30cbb48f9b9393e8dfbd4b2dc910a04831d56d8b", // boss fighters - is - esport
  "0x4f8975d9b2438d5716f416587693f55142f586c4c62c3601e5e924777a72e312", // boss fighters - is - teamplay
  "0x42f298ac414b20975a6ab8c94c4b683debe798a09f6957a6bfbcca4af1cdd63b", // boss fighters - is - skill-based
  "0xef3ef30cd762429314bccfd46d8b056c9b1706d934ef419b47b7d8248ad096da", // boss fighters - is - innovative
  "0x5c7f37f87e63beed18989f62fbcaa1bb76b4c97723aebae3f6758e714bde31fe", // high stakes - is - esport
  "0xa389d4eb5f75617a19f9d8d4a960b34fce0878e58289679435261e4085ef8929", // high stakes - is - tactical
  "0xb17dfa387c586717567c5e2c27edabd1f2cfbd46807d45046a3a2a1f29f51280", // high stakes - is - solo mod
  "0x1e31fc307251b307c10cbe4aebf18dff85ba196f4429a4183d546fde68eedeba", // high stakes - is - team mode
  "0x5b5c9fa73f6be933c0580d1a25ca590e5d97c0cc6e92027699f0c7b5b660b8fb", // matchmaking - is - balanced
  "0x60559a1bddb65815a0c8d9af0447fe667131f1982c88d77e782d58c2de84febf", // toxic - is map of - bossfights
  "0x9f74e32015aedeab16096eef3dd581e4857f9395eadcd3977a8de327fcccfd5b", // toxic river - is - balanced
  "0x7ea95d79cf04cffd534250ad61c03768d03a2efc209c997b2a35c7152dcff156", // toxic river - is - fun
  "0x0e2c371bf49a57f2cfa01f2268c010e5f7cfdfd14b706f2a1cb0a2957add3abd", // toxic river - is - immersive
  "0xef6da30d2734115c4707a178f33e927d3ce62e7744cf86f54019c4780ed4c36c", // award - is - balanced
  "0xb21f02971c2ebaa877c303cb026bc27309f7505634aff8bac596c7d7ed039146", // award - is - fun
  "0xc8f8c5e7df4e7e8e19089011b0d7521c0043a86384f349ecf608a0e1ca1ebb08", // award - is - immersive
  "0xbfc8bc7590631a0b0bdf16976e826ba486428dc8549bc5654148cba9d7ac4e51", // radiation rift - is - balanced
  "0x6ce2ce2b368db249ce6826e75191c3fdb1eb0bcef7a6a8f842e0cde97b6af120", // radiation rift - is - fun
  "0x898586a158385db51d063e6982fda2f9104a79736dc83897d52a8b09e3068a44", // radiation rift - is - immersive
];

// Variables d'environnement Pinata (SÉCURISÉES)
export const PINATA_CONFIG = {
  JWT_KEY: import.meta.env.VITE_PINATA_JWT_KEY,
  IPFS_GATEWAY: import.meta.env.VITE_IPFS_GATEWAY || 'gateway.pinata.cloud'
};

// Export des constantes personnalisées pour PlayerMap
export const CUSTOM_PLAYER_MAP_CONSTANTS = {
  COMMON_IDS,
  PLAYER_TRIPLE_TYPES,
  OFFICIAL_GUILDS,
  PREDEFINED_CLAIM_IDS,
  PINATA_CONFIG // ← IMPORTANT : Ajouter PINATA_CONFIG (sécurisé)
};

