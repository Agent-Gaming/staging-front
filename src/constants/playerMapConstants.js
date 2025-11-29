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
  "0x60559a1bddb65815a0c8d9af0447fe667131f1982c88d77e782d58c2de84febf", // toxic - is map of - bossfights
  "0x9f74e32015aedeab16096eef3dd581e4857f9395eadcd3977a8de327fcccfd5b", // toxic river - is - balanced
  "0x7ea95d79cf04cffd534250ad61c03768d03a2efc209c997b2a35c7152dcff156", // toxic river - is - fun
  "0x0e2c371bf49a57f2cfa01f2268c010e5f7cfdfd14b706f2a1cb0a2957add3abd", // toxic river - is - immersive
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

