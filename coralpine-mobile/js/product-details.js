// PRODUCT PAGE TEXT – description (desc) and extra details rows, by product id (see products.js).
// Edit freely; a product without an entry here gets a short automatic description.
const DETAILS = {
  // ---------- iPhone 13 family & SE (3rd gen) ----------
  37: { // iPhone 13 mini
    desc: "All the power of the iPhone 13 in a phone that fits in any pocket and is easy to use with one hand. The A15 Bionic chip keeps it fast for everyday apps, and the dual 12MP cameras with Night mode and Cinematic mode take great photos and video.",
    details: { Chip: "A15 Bionic", "Rear camera": "Dual 12MP: Wide + Ultra Wide", "Front camera": "12MP TrueDepth", Unlock: "Face ID", Charging: "Lightning, MagSafe & Qi wireless", "Water resistance": "IP68", Build: "Aluminium frame, Ceramic Shield front" },
  },
  36: { // iPhone 13
    desc: "A reliable all-rounder with a bright 6.1-inch display, the fast A15 Bionic chip and great battery life. The dual 12MP cameras add Night mode, Photographic Styles and Cinematic mode video.",
    details: { Chip: "A15 Bionic", "Rear camera": "Dual 12MP: Wide + Ultra Wide", "Front camera": "12MP TrueDepth", Unlock: "Face ID", Charging: "Lightning, MagSafe & Qi wireless", "Water resistance": "IP68", Build: "Aluminium frame, Ceramic Shield front" },
  },
  35: { // iPhone 13 Pro
    desc: "The first iPhone Pro with a smooth 120Hz ProMotion display. It has a pro triple camera with a 3x telephoto lens and macro photography, the A15 Bionic chip and a premium stainless steel design.",
    details: { Chip: "A15 Bionic (5-core GPU)", "Rear camera": "Triple 12MP: Wide, Ultra Wide, 3x Telephoto + LiDAR", "Front camera": "12MP TrueDepth", "Refresh rate": "ProMotion up to 120Hz", Unlock: "Face ID", Charging: "Lightning, MagSafe & Qi wireless", "Water resistance": "IP68", Build: "Stainless steel frame, Ceramic Shield front" },
  },
  34: { // iPhone 13 Pro Max
    desc: "A big 6.7-inch ProMotion display with 120Hz scrolling and outstanding battery life. The pro triple camera has a 3x telephoto lens, macro mode and LiDAR for fast focus in low light.",
    details: { Chip: "A15 Bionic (5-core GPU)", "Rear camera": "Triple 12MP: Wide, Ultra Wide, 3x Telephoto + LiDAR", "Front camera": "12MP TrueDepth", "Refresh rate": "ProMotion up to 120Hz", Unlock: "Face ID", Charging: "Lightning, MagSafe & Qi wireless", "Water resistance": "IP68", Build: "Stainless steel frame, Ceramic Shield front" },
  },
  33: { // iPhone SE (3rd generation)
    desc: "The most affordable way into a modern iPhone. It has the classic design with a Home button and Touch ID, the same A15 Bionic chip as the iPhone 13, and 5G.",
    details: { Chip: "A15 Bionic", "Rear camera": "12MP Wide", "Front camera": "7MP", Unlock: "Touch ID (Home button)", Charging: "Lightning & Qi wireless", "Water resistance": "IP67", Build: "Aluminium frame, glass front and back" },
  },

  // ---------- iPhone 12 family & SE (2nd gen) ----------
  41: { // iPhone 12 mini
    desc: "A compact 5.4-inch phone with a full edge-to-edge OLED display and 5G. Flat-edge design, Ceramic Shield front and MagSafe make it a small phone with no big compromises.",
    details: { Chip: "A14 Bionic", "Rear camera": "Dual 12MP: Wide + Ultra Wide", "Front camera": "12MP TrueDepth", Unlock: "Face ID", Charging: "Lightning, MagSafe & Qi wireless", "Water resistance": "IP68", Build: "Aluminium frame, Ceramic Shield front" },
  },
  40: { // iPhone 12
    desc: "The iPhone that brought 5G, the flat-edge design and MagSafe. A sharp 6.1-inch OLED display, the A14 Bionic chip and dual cameras with Night mode make it a great value pick.",
    details: { Chip: "A14 Bionic", "Rear camera": "Dual 12MP: Wide + Ultra Wide", "Front camera": "12MP TrueDepth", Unlock: "Face ID", Charging: "Lightning, MagSafe & Qi wireless", "Water resistance": "IP68", Build: "Aluminium frame, Ceramic Shield front" },
  },
  39: { // iPhone 12 Pro
    desc: "A premium stainless steel iPhone with a pro triple camera, a LiDAR scanner for better low-light focus, and Apple ProRAW photos. Fast A14 Bionic chip and 5G.",
    details: { Chip: "A14 Bionic", "Rear camera": "Triple 12MP: Wide, Ultra Wide, 2x Telephoto + LiDAR", "Front camera": "12MP TrueDepth", Unlock: "Face ID", Charging: "Lightning, MagSafe & Qi wireless", "Water resistance": "IP68", Build: "Stainless steel frame, Ceramic Shield front" },
  },
  38: { // iPhone 12 Pro Max
    desc: "The biggest iPhone of its year, with a 6.7-inch display and the best camera Apple had made at the time. Sensor-shift stabilisation and a 2.5x telephoto lens give sharp photos.",
    details: { Chip: "A14 Bionic", "Rear camera": "Triple 12MP: Wide (sensor-shift OIS), Ultra Wide, 2.5x Telephoto + LiDAR", "Front camera": "12MP TrueDepth", Unlock: "Face ID", Charging: "Lightning, MagSafe & Qi wireless", "Water resistance": "IP68", Build: "Stainless steel frame, Ceramic Shield front" },
  },
  42: { // iPhone SE (2nd generation)
    desc: "A small, simple and budget-friendly iPhone with the classic Home button and Touch ID. The A13 Bionic chip keeps everyday apps, WhatsApp and photos running smoothly.",
    details: { Chip: "A13 Bionic", "Rear camera": "12MP Wide", "Front camera": "7MP", Unlock: "Touch ID (Home button)", Charging: "Lightning & Qi wireless", "Water resistance": "IP67", Build: "Aluminium frame, glass front and back" },
  },

  // ---------- iPhone 11 family ----------
  45: { // iPhone 11
    desc: "One of the most popular iPhones ever. A 6.1-inch Liquid Retina display, the A13 Bionic chip and a dual camera with Ultra Wide and Night mode, at a very friendly price.",
    details: { Chip: "A13 Bionic", "Rear camera": "Dual 12MP: Wide + Ultra Wide", "Front camera": "12MP TrueDepth", Unlock: "Face ID", Charging: "Lightning & Qi wireless", "Water resistance": "IP68", Build: "Aluminium frame, glass back" },
  },
  44: { // iPhone 11 Pro
    desc: "The first iPhone with a triple camera, in a compact 5.8-inch size. A bright Super Retina XDR OLED display, Night mode and a premium stainless steel and matte glass design.",
    details: { Chip: "A13 Bionic", "Rear camera": "Triple 12MP: Wide, Ultra Wide, 2x Telephoto", "Front camera": "12MP TrueDepth", Unlock: "Face ID", Charging: "Lightning & Qi wireless", "Water resistance": "IP68", Build: "Stainless steel frame, matte glass back" },
  },
  43: { // iPhone 11 Pro Max
    desc: "A large 6.5-inch Super Retina XDR display, a triple camera with Night mode and very long battery life. A great big-screen iPhone at a used price.",
    details: { Chip: "A13 Bionic", "Rear camera": "Triple 12MP: Wide, Ultra Wide, 2x Telephoto", "Front camera": "12MP TrueDepth", Unlock: "Face ID", Charging: "Lightning & Qi wireless", "Water resistance": "IP68", Build: "Stainless steel frame, matte glass back" },
  },

  // ---------- iPhone X / XS / XR ----------
  48: { // iPhone XR
    desc: "A colourful 6.1-inch iPhone with Face ID, the A12 Bionic chip and portrait photos from a single 12MP camera. A solid, low-cost phone for everyday use.",
    details: { Chip: "A12 Bionic", "Rear camera": "12MP Wide", "Front camera": "7MP TrueDepth", Unlock: "Face ID", Charging: "Lightning & Qi wireless", "Water resistance": "IP67", Build: "Aluminium frame, glass back" },
  },
  47: { // iPhone XS
    desc: "A compact 5.8-inch iPhone with a sharp OLED display, a dual camera with 2x telephoto and Smart HDR, and a polished stainless steel frame.",
    details: { Chip: "A12 Bionic", "Rear camera": "Dual 12MP: Wide + 2x Telephoto", "Front camera": "7MP TrueDepth", Unlock: "Face ID", Charging: "Lightning & Qi wireless", "Water resistance": "IP68", Build: "Stainless steel frame, glass back" },
  },
  46: { // iPhone XS Max
    desc: "The first 6.5-inch iPhone: a big OLED screen for videos and reading, a dual camera with 2x telephoto, and a premium stainless steel design.",
    details: { Chip: "A12 Bionic", "Rear camera": "Dual 12MP: Wide + 2x Telephoto", "Front camera": "7MP TrueDepth", Unlock: "Face ID", Charging: "Lightning & Qi wireless", "Water resistance": "IP68", Build: "Stainless steel frame, glass back" },
  },
  49: { // iPhone X
    desc: "The iPhone that started the modern design: an edge-to-edge OLED display, Face ID and no Home button. Dual camera with 2x telephoto and Portrait mode. A great entry price into the Face ID iPhones.",
    details: { Chip: "A11 Bionic", "Rear camera": "Dual 12MP: Wide + 2x Telephoto", "Front camera": "7MP TrueDepth", Unlock: "Face ID", Charging: "Lightning & Qi wireless", "Water resistance": "IP67", Build: "Stainless steel frame, glass back" },
  },
};
PRODUCTS.forEach((p) => Object.assign(p, DETAILS[p.id]));
