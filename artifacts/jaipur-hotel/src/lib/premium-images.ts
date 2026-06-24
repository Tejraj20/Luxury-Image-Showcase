// Premium royalty-free images from Unsplash
// Used in all storytelling sections. Real hotel photos are reserved for Gallery + Rooms.
const U = (id: string, w = 1920, q = 85) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const PREMIUM_IMAGES = {
  // ── Hero chapter slides ──────────────────────────────────────────────
  // Amber Fort, Jaipur — golden sandstone tiered architecture, warm sunlight
  heroPalace:   U("photo-1599661046289-e31897846e41"),
  // Amber Fort from water — dawn mist over Jaipur
  heroAmber:    U("photo-1548013146-72479768bada"),
  // Luxury Indian palace hotel infinity pool at dusk
  heroLuxury:   U("photo-1571896349842-33c89424de2d"),

  // ── Heritage chapter panels ─────────────────────────────────────────
  // City Palace exterior — grand Jaipur architecture
  heritagePinkCity:     U("photo-1587474260584-136574528ed5"),
  // Ornate Rajasthani archway / haveli interior carvings
  heritageArch:         U("photo-1567521464027-f127ff144326"),
  // Colourful Rajasthan culture and bazaar scene
  heritageCulture:      U("photo-1512813195386-6cf811ad3542"),
  // Heritage luxury hotel — warm lobby and carved columns
  heritageGuest:        U("photo-1564501049412-61c2a3083791"),

  // ── Dining chapter beats ────────────────────────────────────────────
  // Elegant rooftop restaurant — golden-hour warm light
  diningGolden:  U("photo-1555396273-367ea4eb4db5"),
  // Fine dining with candles and warm ambiance
  diningCandle:  U("photo-1414235077428-338989a2e8c0"),
  // Night terrace under open sky / moonlit outdoor dining
  diningNight:   U("photo-1559339352-11d035aa65de"),

  // ── Explore chapter — Jaipur landmark backgrounds ───────────────────
  exploreHawaMahal:    U("photo-1524492412937-b28074a47d70"),
  exploreJohari:       U("photo-1567521464027-f127ff144326"),
  exploreCityPalace:   U("photo-1587474260584-136574528ed5"),
  exploreJantar:       U("photo-1548013146-72479768bada"),
  exploreAlbertHall:   U("photo-1582719478250-c89cae4dc85b"),
};
