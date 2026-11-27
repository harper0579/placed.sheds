const STATION_TIERS = {
  bundle_pro: {
    id: "bundle_pro",
    name: "Bundle 1: Pro Wired & Safety Station (18×10)",
    price: 6899,
    alacarte: 7237,
    doorMode: "single_rollup",
    includedAddons: ["battery_locker", "gas_locker", "workbench_pack", "led_gfci_usb"],
    summaryNote: "Saves $338 vs. $7,237 à-la-carte · Beats Quispamsis $7,252 dealer sale tag by $353."
  },
  bundle_king: {
    id: "bundle_king",
    name: "Bundle 2: King of Scenic View Solar (18×10)",
    price: 9999,
    alacarte: 11330,
    proPlusCompare: 10992,
    doorMode: "single_rollup",
    includedAddons: [
      "battery_locker", "gas_locker", "workbench_pack", "led_gfci_usb",
      "solar_400w", "remote_opener", "charger_48v", "security_pack", "noco_tender"
    ],
    summaryNote: "Saves $993 vs. $10,992 Pro+Add-Ons ($1,331 vs. $11,330 à-la-carte) · Complete off-grid station."
  },
  rung_1: {
    id: "rung_1",
    name: "Rung 1: Open Canopy Station (18×10 Summer Cruiser)",
    price: 4499,
    doorMode: "open",
    includedAddons: [],
    summaryNote: "10'×10' gravel drive-thru bay (9'-1\" clear post width) + dual 4'×10' wood-floor side wings."
  },
  rung_2: {
    id: "rung_2",
    name: "Rung 2: Winter Canvas Closure Station (18×10)",
    price: 4799,
    doorMode: "canvas",
    includedAddons: [],
    summaryNote: "Adds heavy marine-grade winter bay curtains and eave storm straps."
  },
  rung_3: {
    id: "rung_3",
    name: "Rung 3: Fitted LP Wood Panel Station (18×10)",
    price: 4999,
    doorMode: "panels",
    includedAddons: [],
    summaryNote: "Adds pre-cut black LP SmartSide seasonal slot-in bay panels and latches."
  },
  rung_4: {
    id: "rung_4",
    name: "Rung 4: Single 7×7 Steel Roll-Up Station (18×10 Flagship)",
    price: 5299,
    doorMode: "single_rollup",
    includedAddons: [],
    summaryNote: "Commercial 7'×7' black steel coil drum door — zero frost-heave binding in February."
  },
  rung_5: {
    id: "rung_5",
    name: "Rung 5: Dual 7×7 Steel Roll-Ups (18×10 Executive Drive-Thru)",
    price: 6299,
    doorMode: "dual_rollup",
    includedAddons: [],
    summaryNote: "Front and rear 7'×7' commercial steel roll-up doors for 100% drive-in / drive-out winter seal."
  }
};

const STATION_ADDONS = [
  { id: "remote_opener", name: "Electric Roll-Up Opener + 2 Cart Remotes", price: 600, desc: "Motorized drum drive + 2 visor remotes (requires Rung 4/5 or Bundle)" },
  { id: "battery_locker", name: "Left-Wing R-12 Battery Cold Locker", price: 395, desc: "R-12 rigid foam, high hydrogen vent & exterior-mounted 120V GFCI lead" },
  { id: "gas_locker", name: "Right-Wing 3\" Roof-Vented Fuel Locker", price: 395, desc: "Vapor-sealed box, bottom louver, 3\" roof stack & ZERO electrical" },
  { id: "noco_tender", name: "Smart Winter Battery Tender (NOCO)", price: 149, desc: "Plug-in automatic float maintainer & desulfator" },
  { id: "workbench_pack", name: "Bundled Workbench Package", price: 399, desc: "Built-in timber bench + 3-tier tote shelving + pegboard" },
  { id: "second_locker", name: "Second Keyed Partition Gear Locker", price: 495, desc: "Adds a separate keyed exterior door & interior divider wall" },
  { id: "led_gfci_usb", name: "Full Station LED, Exterior GFCI & USB Kit", price: 749, desc: "LEDs in both rooms, bay floodlight, exterior GFCI & workbench USB" },
  { id: "charger_48v", name: "Bay 48V Smart Cart Charger + Circuit", price: 595, desc: "Wall-mounted on left partition (battery side) + dedicated 20A circuit" },
  { id: "security_pack", name: "Campground Security Package", price: 349, desc: "Heavy roll-up padlock hasp + motion bay LED + camera post bracket" },
  { id: "solar_400w", name: "400W Off-Grid Roof Solar + 100Ah Self-Heat LFP", price: 2400, desc: "2×200W black mono panels, MPPT, self-heating LiFePO4 & 2000W inverter" },
  { id: "solar_800w", name: "800W Heavy 48V Cart Solar Boost", price: 3400, desc: "800W roof array + 200Ah self-heating LiFePO4 for frequent cart charging" },
  { id: "pad_prep", name: "Level 3/4\" Crushed Stone Pad Prep", price: 350, desc: "Compacted crushed stone bay & skid leveling bed on your lot" }
];

const SHED_MODELS = {
  shed_8x10: { id: "shed_8x10", name: "8×10 Utility / Baby Barn (80 sq ft)", price: 3999, quoteOnly: false, desc: "Sub-10 m² Saint John permit-exempt. 5/8\" T&G floor on 4×4 PT skids, LP SmartSide & 29-ga steel roof." },
  shed_8x12: { id: "shed_8x12", name: "8×12 Camp / Gable Storage Barn (96 sq ft)", price: 4199, quoteOnly: false, desc: "Sub-10 m² Saint John permit-exempt. Maximum permit-free footprint with double barn doors." },
  porch_8x12: { id: "porch_8x12", name: "8×12 RV Porch Edition", price: 0, quoteOnly: true, desc: "Custom covered porch + lockable storage cabin. Priced by site layout & porch rail package — Quote on Request." },
  shop_10x12: { id: "shop_10x12", name: "10×12 Heavy Workshop (120 sq ft)", price: 4950, quoteOnly: false, desc: "Reinforced 16\" O.C. floor grid, high walls, double doors & 29-gauge 3-rib steel roof." },
  porch_10x16: { id: "porch_10x16", name: "10×16 Campground Porch Suite", price: 0, quoteOnly: true, desc: "Custom seasonal lot porch & storage suite — Quote on Request pending site walkthrough." },
  bunkie_12x16: { id: "bunkie_12x16", name: "12×16 Bunkie / Heavy Workshop (192 sq ft)", price: 6499, quoteOnly: false, desc: "Heavy timber skids, 2×6 floor framing, LP SmartSide cedar-texture siding & 29-ga steel roof." },
  loft_12x20: { id: "loft_12x20", name: "12×20 Lofted Barn w/ Mezzanine (240 sq ft)", price: 9499, quoteOnly: false, desc: "Maximum cubic storage with front & rear overhead lofts, heavy double doors & 29-ga steel roof." }
};

const SHED_ADDONS = [
  { id: "shed_rollup", name: "Commercial 7×7 Black Steel Roll-Up Door", price: 750, desc: "Replaces wood swing doors — never jams on winter frost heave" },
  { id: "shed_bench", name: "Built-In Workbench + 3-Tier Shelving", price: 399, desc: "Full-width timber bench, pegboard & tote shelves" },
  { id: "shed_anchors", name: "4× 30\" Helical Earth Auger Wind Anchors", price: 200, desc: "Bay of Fundy wind-uplift tie-downs (already included $0 on Camp Hubs)" },
  { id: "shed_pad", name: "Level 3/4\" Crushed Stone Pad Prep", price: 350, desc: "Compacted gravel base leveled prior to 1-day placement" }
];

let currentMode = "station";

function toggleMobileNav() {
  const nav = document.getElementById("main-nav");
  if (nav) nav.classList.toggle("open");
}

function setEstimatorMode(mode) {
  currentMode = mode;
  const pStation = document.getElementById("panel-station");
  const pShed = document.getElementById("panel-shed");
  const tStation = document.getElementById("tab-station");
  const tShed = document.getElementById("tab-shed");
  const svgCard = document.getElementById("station-svg-card");
  if (!pStation || !pShed) return;

  if (mode === "station") {
    pStation.style.display = "block";
    pShed.style.display = "none";
    if (svgCard) svgCard.style.display = "block";
    tStation.className = "btn btn-primary";
    tShed.className = "btn";
  } else {
    pStation.style.display = "none";
    pShed.style.display = "block";
    if (svgCard) svgCard.style.display = "none";
    tStation.className = "btn";
    tShed.className = "btn btn-primary";
  }
  recalcPlacedQuote();
}

function renderAddonControls() {
  const stContainer = document.getElementById("station-addons-list");
  if (stContainer) {
    stContainer.innerHTML = STATION_ADDONS.map(a => `
      <label class="addon-row" id="row-${a.id}">
        <div style="display:flex;gap:0.7rem;align-items:flex-start;">
          <input type="checkbox" id="chk-${a.id}" data-id="${a.id}" onchange="recalcPlacedQuote()">
          <div>
            <div style="font-weight:800;font-size:0.9rem;">${a.name}</div>
            <div style="font-size:0.78rem;color:var(--muted);">${a.desc}</div>
          </div>
        </div>
        <span class="mono" id="tag-${a.id}" style="font-size:0.82rem;font-weight:700;color:var(--cedar-light);white-space:nowrap;">+$${a.price.toLocaleString("en-CA")}</span>
      </label>
    `).join("");
  }

  const shContainer = document.getElementById("shed-addons-list");
  if (shContainer) {
    shContainer.innerHTML = SHED_ADDONS.map(a => `
      <label class="addon-row" id="row-${a.id}">
        <div style="display:flex;gap:0.7rem;align-items:flex-start;">
          <input type="checkbox" id="chk-${a.id}" data-id="${a.id}" onchange="recalcPlacedQuote()">
          <div>
            <div style="font-weight:800;font-size:0.9rem;">${a.name}</div>
            <div style="font-size:0.78rem;color:var(--muted);">${a.desc}</div>
          </div>
        </div>
        <span class="mono" style="font-size:0.82rem;font-weight:700;color:var(--cedar-light);white-space:nowrap;">+$${a.price.toLocaleString("en-CA")}</span>
      </label>
    `).join("");
  }
}

function recalcPlacedQuote() {
  const priceMainEl = document.getElementById("quote-cash-price");
  if (!priceMainEl) return;

  const batchSelect = document.getElementById("park-batch-discount");
  const batchDiscount = batchSelect ? parseInt(batchSelect.value || "0", 10) : 0;

  let title = "";
  let desc = "";
  let quoteOnly = false;
  let cashSubtotal = 0;
  let selectedItems = [];
  let savingsBadges = [];
  let checklist = [
    "29-Gauge Black 3-Rib Steel Roof (4:12 Pitch · NB Wet-Snow Rated)",
    "LP SmartSide Zinc-Borate Black Vertical Siding + Natural Cedar Trim"
  ];

  if (currentMode === "station") {
    const tierKey = document.getElementById("station-tier").value;
    const tier = STATION_TIERS[tierKey];
    title = tier.name;
    desc = tier.summaryNote;
    cashSubtotal = tier.price;
    checklist.push("18'-0\" × 10'-0\" Symmetrical Core (Center 10×10 Gravel Bay · 9'-1\" Clear Posts · 4× 30\" Augers Included)");
    checklist.push("7'-0\" Side Eaves · 8'-8\" Ridge Peak (Tucks 4+ ft Below 5th-Wheel Roofs)");

    const activeAddonIds = new Set();
    STATION_ADDONS.forEach(a => {
      const chk = document.getElementById("chk-" + a.id);
      const row = document.getElementById("row-" + a.id);
      const tag = document.getElementById("tag-" + a.id);
      if (!chk || !row || !tag) return;

      if (tier.includedAddons.includes(a.id)) {
        chk.checked = true;
        chk.disabled = true;
        row.classList.add("locked");
        tag.textContent = "Included ($0)";
        tag.style.color = "var(--green)";
        activeAddonIds.add(a.id);
      } else {
        if (chk.disabled) {
          chk.disabled = false;
          chk.checked = false;
          row.classList.remove("locked");
        }
        let effPrice = a.price;
        if (a.id === "solar_800w" && tier.includedAddons.includes("solar_400w")) {
          effPrice = 1000;
          tag.textContent = "+$1,000 Boost";
        } else {
          tag.textContent = "+$" + a.price.toLocaleString("en-CA");
        }
        tag.style.color = "var(--cedar-light)";

        if (chk.checked) {
          if (a.id === "solar_400w" && document.getElementById("chk-solar_800w")?.checked) {
            chk.checked = false;
          } else {
            cashSubtotal += effPrice;
            selectedItems.push(`${a.name} (+$${effPrice.toLocaleString("en-CA")})`);
            activeAddonIds.add(a.id);
          }
        }
      }
    });

    if (
      !tier.includedAddons.includes("battery_locker") &&
      !tier.includedAddons.includes("gas_locker") &&
      activeAddonIds.has("battery_locker") &&
      activeAddonIds.has("gas_locker")
    ) {
      cashSubtotal -= 91;
      savingsBadges.push("Safety Locker Duo Applied (-$91: $699 vs. $790)");
    }

    if (tierKey === "bundle_pro") {
      savingsBadges.push("Pro Wired Bundle Savings: -$338 vs. $7,237 à-la-carte");
    } else if (tierKey === "bundle_king") {
      savingsBadges.push("King Bundle Savings: -$993 vs. Pro+Add-Ons (-$1,331 à-la-carte)");
    }

    if (activeAddonIds.has("battery_locker") && activeAddonIds.has("gas_locker")) {
      checklist.push("Opposite-Wing Safety Isolation: Left R-12 Battery Box (Exterior GFCI) · Right 3\" Roof-Vented Zero-Elec Fuel Locker");
    } else if (activeAddonIds.has("battery_locker")) {
      checklist.push("Left-Wing R-12 Insulated Battery Locker w/ High Hydrogen Vent & Exterior-Mounted 120V GFCI");
    } else if (activeAddonIds.has("gas_locker")) {
      checklist.push("Right-Wing Vapor-Sealed Fuel Locker w/ Bottom Louver, 3\" Roof Vent Stack & Zero Electrical");
    }
    if (activeAddonIds.has("led_gfci_usb") || activeAddonIds.has("solar_400w") || activeAddonIds.has("solar_800w") || activeAddonIds.has("charger_48v") || activeAddonIds.has("remote_opener")) {
      checklist.push("Electrical Circuits & Tie-Ins Installed & Signed Off by Licensed NB Electrician");
    }

    updateStationSvg(tier.doorMode, activeAddonIds);
  } else {
    const modelKey = document.getElementById("shed-model").value;
    const model = SHED_MODELS[modelKey];
    title = model.name;
    desc = model.desc;
    quoteOnly = model.quoteOnly;
    cashSubtotal = model.price;
    checklist.push("5/8\" Tongue-and-Groove Wood Floor on Heavy 4×4 Pressure-Treated Ground Skids");

    SHED_ADDONS.forEach(a => {
      const chk = document.getElementById("chk-" + a.id);
      if (!chk) return;
      chk.disabled = quoteOnly;
      if (!quoteOnly && chk.checked) {
        cashSubtotal += a.price;
        selectedItems.push(`${a.name} (+$${a.price.toLocaleString("en-CA")})`);
      }
    });
  }

  const descEl = document.getElementById("active-model-desc");
  if (descEl) descEl.textContent = desc;

  const listEl = document.getElementById("dynamic-included-list");
  if (listEl) {
    listEl.innerHTML = checklist.map(c => `<li style="display:flex;gap:0.5rem;align-items:flex-start;"><span style="color:var(--green);font-weight:900;">✓</span><span>${c}</span></li>`).join("");
  }

  const pricingBlock = document.getElementById("live-pricing-block");
  const quoteOnlyBlock = document.getElementById("quote-only-block");
  const ctaBtn = document.getElementById("lock-slot-btn");

  if (quoteOnly) {
    if (pricingBlock) pricingBlock.style.display = "none";
    if (quoteOnlyBlock) quoteOnlyBlock.style.display = "block";
    if (ctaBtn) ctaBtn.textContent = "Request Custom Porch Quote →";
    window.__placedCurrentQuote = {
      quoteOnly: true,
      title,
      summary: `${title} — Custom Quote on Request (Site & Porch Layout Walkthrough)`
    };
    return;
  }

  if (pricingBlock) pricingBlock.style.display = "block";
  if (quoteOnlyBlock) quoteOnlyBlock.style.display = "none";
  if (ctaBtn) ctaBtn.textContent = "Lock In 30% Build Slot →";

  if (batchDiscount > 0) {
    cashSubtotal = Math.max(0, cashSubtotal - batchDiscount);
    savingsBadges.push(`Park Group Batching (3–5 Units): -$${batchDiscount}`);
  }

  const deposit30 = Math.round(cashSubtotal * 0.30);
  const hst15 = Math.round(cashSubtotal * 0.15 * 100) / 100;
  const totalWithHst = Math.round((cashSubtotal + hst15) * 100) / 100;

  priceMainEl.textContent = "$" + cashSubtotal.toLocaleString("en-CA");
  document.getElementById("quote-hst").textContent = "$" + hst15.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById("quote-total-hst").textContent = "$" + totalWithHst.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById("quote-deposit").textContent = "$" + deposit30.toLocaleString("en-CA");

  const badgesEl = document.getElementById("quote-savings-badges");
  if (badgesEl) {
    badgesEl.innerHTML = savingsBadges.map(b => `<div class="pill pill-green" style="margin-top:0.35rem;">${b}</div>`).join("");
  }

  const lineSummary = [
    `Model: ${title}`,
    selectedItems.length ? `Add-Ons: ${selectedItems.join(", ")}` : "Add-Ons: Standard Base Package",
    batchDiscount > 0 ? `Group Batching: -$${batchDiscount} (3–5 Park Units)` : null,
    `Pre-Tax Subtotal: $${cashSubtotal.toLocaleString("en-CA")} CAD`,
    `15% NB HST: $${hst15.toFixed(2)} CAD`,
    `Total w/ HST: $${totalWithHst.toFixed(2)} CAD`,
    `30% Material-Lock Deposit (Pre-Tax): $${deposit30.toLocaleString("en-CA")} CAD`
  ].filter(Boolean).join(" | ");

  window.__placedCurrentQuote = {
    quoteOnly: false,
    title,
    cashSubtotal,
    hst15,
    totalWithHst,
    deposit30,
    selectedItems,
    summary: lineSummary
  };
}

function updateStationSvg(doorMode, activeAddons) {
  const svgContainer = document.getElementById("station-2d-svg");
  if (!svgContainer) return;

  const hasBatt = activeAddons.has("battery_locker");
  const hasGas = activeAddons.has("gas_locker");
  const hasBench = activeAddons.has("workbench_pack");
  const hasSolar = activeAddons.has("solar_400w") || activeAddons.has("solar_800w");
  const hasCharger = activeAddons.has("charger_48v");
  const hasOpener = activeAddons.has("remote_opener");

  const doorLabelMap = {
    open: "OPEN SUMMER CANOPY",
    canvas: "MARINE CANVAS CURTAIN",
    panels: "SLIP-IN LP WOOD PANELS",
    single_rollup: hasOpener ? "7'×7' AUTO STEEL ROLL-UP" : "7'×7' STEEL ROLL-UP DOOR",
    dual_rollup: "DUAL 7'×7' ROLL-UPS (FRONT & REAR)"
  };
  const doorColor = (doorMode === "single_rollup" || doorMode === "dual_rollup") ? "#54c67a" : "#e09a5a";

  svgContainer.innerHTML = `
    <svg viewBox="0 0 760 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="18 by 10 Full Station 2D Floor Plan">
      <rect width="760" height="360" rx="12" fill="#0a0908" stroke="#2d2721" stroke-width="2"/>
      <line x1="60" y1="34" x2="700" y2="34" stroke="#8f867c" stroke-width="1.5"/>
      <text x="380" y="26" text-anchor="middle" fill="#e09a5a" font-family="IBM Plex Mono, monospace" font-size="12" font-weight="700">◀ 18'-0" OVERALL WIDTH (4'-0" + 10'-0" + 4'-0" · 180 SQ FT) ▶</text>

      <rect x="60" y="54" width="145" height="240" fill="#181410" stroke="#c67a3a" stroke-width="2.5"/>
      <text x="132" y="80" text-anchor="middle" fill="#e09a5a" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">LEFT WING · 4'×10'</text>
      <text x="132" y="98" text-anchor="middle" fill="#ffffff" font-family="Archivo, sans-serif" font-size="12" font-weight="800">5/8" T&G Wood Floor</text>
      <rect x="72" y="112" width="121" height="72" rx="4" fill="#12100e" stroke="#2d2721"/>
      <text x="132" y="142" text-anchor="middle" fill="#c9c0b6" font-family="Archivo, sans-serif" font-size="11">Club & Tote Shelving</text>
      <text x="132" y="162" text-anchor="middle" fill="#8f867c" font-family="IBM Plex Mono, monospace" font-size="10">4×4 PT Skids</text>

      <rect x="72" y="196" width="121" height="86" rx="4" fill="${hasBatt ? '#101a13' : '#141210'}" stroke="${hasBatt ? '#54c67a' : '#3a322b'}" stroke-width="2"/>
      <text x="132" y="218" text-anchor="middle" fill="${hasBatt ? '#54c67a' : '#8f867c'}" font-family="Archivo, sans-serif" font-size="11" font-weight="800">${hasBatt ? 'R-12 BATTERY BOX' : 'Optional Battery Box'}</text>
      <text x="132" y="236" text-anchor="middle" fill="#c9c0b6" font-family="IBM Plex Mono, monospace" font-size="9.5">High H2 Louver Vent</text>
      ${hasBatt ? `<rect x="140" y="183" width="52" height="13" rx="2" fill="#54c67a"/><text x="166" y="193" text-anchor="middle" fill="#0a0908" font-family="IBM Plex Mono, monospace" font-size="8.5" font-weight="700">EXT GFCI</text>` : ''}

      <rect x="205" y="54" width="350" height="240" fill="#12100e" stroke="#8f867c" stroke-dasharray="6 4" stroke-width="1.5"/>
      <rect x="205" y="54" width="14" height="14" fill="#c67a3a"/>
      <rect x="541" y="54" width="14" height="14" fill="#c67a3a"/>
      <rect x="205" y="280" width="14" height="14" fill="#c67a3a"/>
      <rect x="541" y="280" width="14" height="14" fill="#c67a3a"/>

      <line x1="235" y1="56" x2="525" y2="56" stroke="${doorMode === 'dual_rollup' ? '#54c67a' : '#524940'}" stroke-width="${doorMode === 'dual_rollup' ? '6' : '3'}"/>
      <text x="380" y="74" text-anchor="middle" fill="#c9c0b6" font-family="IBM Plex Mono, monospace" font-size="10">${doorMode === 'dual_rollup' ? 'REAR 7\'×7\' STEEL ROLL-UP (SEALED DRIVE-THRU)' : 'REAR DRIVE-THROUGH / VENTILATED OPENING'}</text>

      <rect x="330" y="106" width="100" height="132" rx="14" fill="#1e1a16" stroke="#ffffff" stroke-width="2"/>
      <rect x="342" y="122" width="76" height="26" rx="4" fill="#0a0908" stroke="#8f867c"/>
      <text x="380" y="172" text-anchor="middle" fill="#ffffff" font-family="Archivo, sans-serif" font-size="13" font-weight="900">CART BAY</text>
      <text x="380" y="190" text-anchor="middle" fill="#e09a5a" font-family="IBM Plex Mono, monospace" font-size="10.5" font-weight="700">10'×10' (9'-1" Clear)</text>
      <text x="380" y="208" text-anchor="middle" fill="#c9c0b6" font-family="IBM Plex Mono, monospace" font-size="9.5">3/4" Gravel · No Wood Rot</text>

      ${hasCharger ? `<rect x="208" y="148" width="44" height="22" rx="3" fill="#c67a3a"/><text x="230" y="163" text-anchor="middle" fill="#0a0908" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="700">48V EV</text>` : ''}
      ${hasSolar ? `<rect x="285" y="246" width="190" height="20" rx="4" fill="#101a13" stroke="#54c67a"/><text x="380" y="260" text-anchor="middle" fill="#54c67a" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700">☀ ROOF SOLAR ARRAY ACTIVE</text>` : ''}

      <line x1="235" y1="292" x2="525" y2="292" stroke="${doorColor}" stroke-width="6"/>
      <text x="380" y="314" text-anchor="middle" fill="${doorColor}" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">FRONT: ${doorLabelMap[doorMode] || '7\'×7\' ROLL-UP'}</text>

      <rect x="555" y="54" width="145" height="240" fill="#181410" stroke="#c67a3a" stroke-width="2.5"/>
      <text x="627" y="80" text-anchor="middle" fill="#e09a5a" font-family="IBM Plex Mono, monospace" font-size="11" font-weight="700">RIGHT WING · 4'×10'</text>
      <rect x="567" y="96" width="121" height="88" rx="4" fill="#12100e" stroke="${hasBench ? '#e09a5a' : '#2d2721'}" stroke-width="1.5"/>
      <text x="627" y="132" text-anchor="middle" fill="#ffffff" font-family="Archivo, sans-serif" font-size="11" font-weight="800">${hasBench ? 'WORKBENCH + PEGBOARD' : 'Gear & Tool Room'}</text>
      <text x="627" y="152" text-anchor="middle" fill="#c9c0b6" font-family="IBM Plex Mono, monospace" font-size="9.5">5/8" T&G Wood Floor</text>

      <rect x="567" y="196" width="121" height="86" rx="4" fill="${hasGas ? '#241510' : '#141210'}" stroke="${hasGas ? '#e09a5a' : '#3a322b'}" stroke-width="2"/>
      <text x="627" y="218" text-anchor="middle" fill="${hasGas ? '#e09a5a' : '#8f867c'}" font-family="Archivo, sans-serif" font-size="11" font-weight="800">${hasGas ? 'SEALED FUEL LOCKER' : 'Optional Fuel Locker'}</text>
      <text x="627" y="236" text-anchor="middle" fill="#c9c0b6" font-family="IBM Plex Mono, monospace" font-size="9.5">3" Roof Stack + Louver</text>
      <text x="627" y="254" text-anchor="middle" fill="#f87171" font-family="IBM Plex Mono, monospace" font-size="9.5" font-weight="700">ZERO ELECTRICAL</text>

      <text x="380" y="344" text-anchor="middle" fill="#8f867c" font-family="IBM Plex Mono, monospace" font-size="10.5">7'-0" Side Wall Eaves · 8'-8" Gable Peak · Zero BBQ Deck · Mirror-Reversible for Lot Fit</text>
    </svg>
  `;
}

function submitBuildQuote() {
  const q = window.__placedCurrentQuote;
  if (!q) {
    window.location.href = "contact.html";
    return;
  }
  const params = new URLSearchParams({
    model: q.title,
    quoteOnly: q.quoteOnly ? "1" : "0",
    cash: q.quoteOnly ? "Quote on Request" : String(q.cashSubtotal),
    deposit: q.quoteOnly ? "TBD" : String(q.deposit30),
    summary: q.summary
  });
  window.location.href = "contact.html?" + params.toString();
}

function printSpecSheet() {
  window.print();
}

function initContactForm() {
  const form = document.getElementById("placed-contact-form");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const summary = params.get("summary");
  const model = params.get("model");
  const cfgField = document.getElementById("contact-configuration");
  const banner = document.getElementById("prefilled-quote-banner");

  if (summary && cfgField) {
    cfgField.value = summary;
    if (banner) {
      banner.style.display = "block";
      banner.innerHTML = `<div class="kicker">Configured Build Attached</div><div style="margin-top:0.35rem;font-weight:700;">${summary.replace(/</g, "<")}</div>`;
    }
  } else if (model && cfgField) {
    cfgField.value = model;
  }

  form.addEventListener("submit", async function (ev) {
    ev.preventDefault();
    const statusEl = document.getElementById("contact-status");
    const submitBtn = document.getElementById("contact-submit-btn");
    const payload = {
      name: document.getElementById("contact-name").value.trim(),
      email: document.getElementById("contact-email").value.trim(),
      location: document.getElementById("contact-location").value.trim(),
      configuration: cfgField ? cfgField.value.trim() : "",
      message: document.getElementById("contact-message").value.trim(),
      subject: "PLaCED V10 Build Slot / Quote Inquiry"
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending Request...";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        statusEl.style.display = "block";
        statusEl.className = "card card-green";
        statusEl.innerHTML = "<strong>Request received!</strong> Our shop desk will follow up shortly to confirm your lot walkthrough and build-week schedule.";
        form.reset();
        submitBtn.textContent = "Sent ✓";
        return;
      }
      throw new Error(data.message || "Fallback to direct email");
    } catch (_) {
      const mailBody = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nTown / Campground: ${payload.location}\n\nSelected Build:\n${payload.configuration}\n\nNotes:\n${payload.message}`
      );
      window.location.href = `mailto:placed.sj@gmail.com?subject=${encodeURIComponent(payload.subject)}&body=${mailBody}`;
      statusEl.style.display = "block";
      statusEl.className = "card card-highlight";
      statusEl.innerHTML = "Opening your email app with your complete build configuration attached.";
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Build Request →";
    }
  });
}

let currentPamphletPage = 0;
function setPamphletPage(idx) {
  const pages = document.querySelectorAll(".pamphlet-slide");
  const tabs = document.querySelectorAll(".pamphlet-tab");
  if (!pages.length) return;
  currentPamphletPage = Math.max(0, Math.min(pages.length - 1, idx));
  pages.forEach((p, i) => { p.style.display = i === currentPamphletPage ? "block" : "none"; });
  tabs.forEach((t, i) => { t.className = i === currentPamphletPage ? "btn btn-primary pamphlet-tab" : "btn pamphlet-tab"; });
  const counter = document.getElementById("pamphlet-counter");
  if (counter) counter.textContent = `Page ${currentPamphletPage + 1} of ${pages.length}`;
}
function toggleAllPamphletPages() {
  const pages = document.querySelectorAll(".pamphlet-slide");
  const btn = document.getElementById("pamphlet-toggle-all");
  if (!pages.length) return;
  const showingAll = btn.dataset.all === "1";
  if (showingAll) {
    btn.dataset.all = "0";
    btn.textContent = "Show All 6 Pages";
    setPamphletPage(currentPamphletPage);
  } else {
    btn.dataset.all = "1";
    btn.textContent = "Single-Page View";
    pages.forEach(p => { p.style.display = "block"; });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderAddonControls();
  recalcPlacedQuote();
  initContactForm();
  if (!document.getElementById("quote-cash-price") && document.getElementById("station-2d-svg")) {
    updateStationSvg("single_rollup", new Set(["battery_locker", "gas_locker", "workbench_pack", "solar_400w", "charger_48v"]));
  }
});