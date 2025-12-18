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
  "0xd7ed7a67569535e35493ad0ea1f68315c64e9127786f353e5c6e9110f3e31327",
  // ?? "0xd6fbed088f652f0d2ee6f935c48e414015adb1f767009c3f7b712188e8d38b96",
  "0xf67d9f4e5b03c804b182a2e932e0d7bcb7c32d2319d05806338c4891f84e6bcd",
  "0x9fd8477a717544a24ad06270c0b992acd95e4c32e38229c347f86f8bdd2df135",
  "0x5dc1590e885724df51f38b3831410aa6fd6df5f43237d8bf2d7d6d2e70640553",
  "0x059ef77810909dbdc3c3997fb96cb75d76a7ee073612cba0cb2ac0da9f29245b",
  "0x5edf9d42a8d6643efbddb163a10aa0ba0c6e4901efcfa3ebc8e4996344a11f30",
  "0x79e94215a7d847579ee54853e0c0725d6432f7c7d511a91a84d9e09543c04da8",
  "0xed6cc1be88583dbd2d7e7afc6e766c15edb253f5be3261ced47668fad5d9dd21",
  "0x4ae706ace671712262059075a85a6b158af9926b9139cb884afddd8d37b2306f",
  "0x1ae54265474aa20a6e95736984caf3afac490190e9a83fb70d3ac174946553db",
  "0x5895158c990f90a62cf03badcabb823312048d95d8979ba3cc76ff79b35f2df0",
  "0xb0b113a0948b636fcdfb5e4e95bbf7063194faafc7bf6581972d3725eae56df8",
  "0x0dddf5c6ee4d53191ffb84cc8ccff1a734bffeceec34698850f020b98115bd7c",
  "0x8da1c9787a56ad8c3530c9a51922058244d00e303269c9f88ee97fd40654df68",
  "0xe9644169933866284baf95a66f5078c62edbe423a4c3750ea9ed51535e3b7421",
  "0x40a96b7e4b6278e142f923da1c3f972fe5f5414177cc1a150d309d3ef2befb0e",
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

