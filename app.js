/**
 * BIKE DILADO - Pro Two-Wheeler Showroom Management System
 * Core Application Engine, State Controller, Leads CRM & Financial Suite
 */

// Initial Default Showcase Data
const INITIAL_SETTINGS = {
  showroomName: "BIKE DILADO",
  tagline: "Quality Certified Pre-Owned Two-Wheelers",
  phone: "+91 98200 12345",
  email: "sales@bikedilado.com",
  address: "Plot 42, Link Road, Near Metro Pillar 114, Andheri West, Mumbai, MH - 400053",
  gstin: "27AABCB1234F1Z8",
  invoicePrefix: "BD-2026-",
  invoiceTerms: "1. Vehicle sold in certified inspected condition with all valid papers. 2. RTO Ownership transfer will be initiated by showroom within 15 working days. 3. Warranty covers Engine & Gearbox for 90 days or 3,000 km, whichever comes first.",
  theme: "dark"
};

const INITIAL_BIKES = [
  {
    id: "bike-1",
    brand: "Royal Enfield",
    model: "Classic 350 Reborn",
    regNo: "MH 02 EQ 8844",
    year: 2022,
    kms: 12450,
    owners: "1st Owner",
    fuel: "Petrol",
    color: "Stealth Black",
    chassis: "ME4J35B9K812034",
    engine: "J350E774892",
    inspectionGrade: "Grade A+ (9.5/10)",
    purchaseCost: 145000,
    refurbCost: 4500,
    listingPrice: 178000,
    status: "In Stock",
    image: "assets/royal_enfield.jpg",
    docs: { rc: true, insurance: true, puc: true, form2930: true, keys: true, noc: false },
    notes: "Teflon coated, brand new Apollo ActiGrip rear tire, original exhaust, full service history.",
    createdAt: "2026-09-12T10:30:00.000Z" // 17 days ago
  },
  {
    id: "bike-2",
    brand: "Yamaha",
    model: "YZF-R15 V4 Racing Blue",
    regNo: "DL 3S CB 1029",
    year: 2023,
    kms: 8800,
    owners: "1st Owner",
    fuel: "Petrol",
    color: "Racing Blue",
    chassis: "ME1RG5710P899120",
    engine: "G3J4E998124",
    inspectionGrade: "Grade A+ (9.5/10)",
    purchaseCost: 128000,
    refurbCost: 3200,
    listingPrice: 159000,
    status: "In Stock",
    image: "assets/yamaha_r15.jpg",
    docs: { rc: true, insurance: true, puc: true, form2930: true, keys: true, noc: true },
    notes: "Quickshifter variant, pristine fairing, fresh Motul 300V oil flush, zero accident record.",
    createdAt: "2026-09-24T14:15:00.000Z" // 5 days ago (Fresh)
  },
  {
    id: "bike-3",
    brand: "KTM",
    model: "390 Duke ABS",
    regNo: "KA 05 MN 4412",
    year: 2021,
    kms: 16200,
    owners: "2nd Owner",
    fuel: "Petrol",
    color: "Electronic Orange",
    chassis: "VBK403901M189201",
    engine: "KTM390EU58190",
    inspectionGrade: "Grade A (8.5/10)",
    purchaseCost: 185000,
    refurbCost: 6000,
    listingPrice: 225000,
    status: "Under Servicing",
    image: "assets/ktm_duke.jpg",
    docs: { rc: true, insurance: true, puc: true, form2930: true, keys: true, noc: false },
    notes: "Currently in workshop for front fork oil seal replacement and new brake pads.",
    createdAt: "2026-08-15T11:00:00.000Z" // 45 days ago (Aging)
  },
  {
    id: "bike-4",
    brand: "Honda",
    model: "Activa 6G Deluxe",
    regNo: "MH 12 TS 7711",
    year: 2022,
    kms: 11300,
    owners: "1st Owner",
    fuel: "Petrol",
    color: "Pearl Siren Blue",
    chassis: "ME4JF9123N091823",
    engine: "JF91E1098234",
    inspectionGrade: "Grade A (8.5/10)",
    purchaseCost: 52000,
    refurbCost: 2500,
    listingPrice: 67500,
    status: "In Stock",
    image: "assets/activa_scooter.jpg",
    docs: { rc: true, insurance: true, puc: true, form2930: true, keys: true, noc: false },
    notes: "Single doctor driven, spotless body condition, new Exide battery with 3yr warranty.",
    createdAt: "2026-09-22T09:40:00.000Z" // 7 days ago (Fresh)
  }
];

const INITIAL_SALES = [
  {
    invoiceNo: "BD-2026-0089",
    saleDate: "2026-09-22",
    bikeId: "sold-bike-101",
    brand: "Bajaj",
    model: "Pulsar NS200 ABS",
    regNo: "MH 04 KP 3218",
    year: 2022,
    kms: 19000,
    purchaseCost: 88000,
    refurbCost: 4000,
    totalCost: 92000,
    agreedPrice: 108000,
    discount: 2000,
    rtoFee: 1500,
    accessories: 1200,
    warranty: 0,
    grandTotal: 108700,
    amountPaid: 95000,
    balance: 13700,
    profit: 14000,
    paymentMode: "Split (Cash + UPI)",
    paymentRef: "UPI-4267819921",
    customer: {
      name: "Rajesh Sharma",
      phone: "+91 98201 44552",
      address: "B-203, Gokul Dham, Goregaon East, Mumbai",
      city: "Mumbai",
      idType: "Aadhaar Card",
      idNumber: "5544 3322 1100"
    },
    rtoStatus: "RC Transferred",
    warrantyTerms: "3 Months Engine & Gearbox Warranty + 1 Free Service",
    chassis: "MD2A24FZ7N90182",
    engine: "DHZWD77192"
  },
  {
    invoiceNo: "BD-2026-0094",
    saleDate: "2026-09-25",
    bikeId: "sold-bike-102",
    brand: "TVS",
    model: "Apache RTR 160 4V Special Edition",
    regNo: "MH 03 DW 9021",
    year: 2023,
    kms: 7500,
    purchaseCost: 92000,
    refurbCost: 2000,
    totalCost: 94000,
    agreedPrice: 112000,
    discount: 1000,
    rtoFee: 1500,
    accessories: 1200,
    warranty: 1000,
    grandTotal: 114700,
    amountPaid: 114700,
    balance: 0,
    profit: 17000,
    paymentMode: "Two-Wheeler Loan / Finance",
    paymentRef: "Bajaj Finance Ref #BF88910",
    customer: {
      name: "Ankit Verma",
      phone: "+91 99112 33441",
      address: "Shop 12, Powai Plaza, Hiranandani, Mumbai",
      city: "Mumbai",
      idType: "Driving License",
      idNumber: "MH03-2018001928"
    },
    rtoStatus: "Documents Submitted",
    warrantyTerms: "6 Months Certified Comprehensive Warranty",
    chassis: "MD625BF49P819201",
    engine: "CH4E771982"
  }
];

// Historical Demo & Archive Sales for Past Years (e.g. 2025)
const SAMPLE_2025_SALES = [
  {
    invoiceNo: "BD-2025-0042",
    saleDate: "2025-04-18",
    bikeId: "sold-bike-2025-1",
    brand: "KTM",
    model: "Duke 250 ABS (Gen 2)",
    regNo: "MH 01 DK 4110",
    year: 2021,
    kms: 14200,
    purchaseCost: 135000,
    refurbCost: 3500,
    totalCost: 138500,
    agreedPrice: 158000,
    discount: 2000,
    rtoFee: 1500,
    accessories: 1000,
    warranty: 1000,
    grandTotal: 159500,
    amountPaid: 159500,
    balance: 0,
    profit: 19500,
    paymentMode: "Bank Transfer / NEFT",
    paymentRef: "HDFC-N99182301",
    customer: {
      name: "Vikram Singhania",
      phone: "+91 98202 33119",
      address: "Flat 402, Sea Green Apts, Worli Sea Face, Mumbai",
      city: "Mumbai",
      idType: "Aadhaar Card",
      idNumber: "4421 8899 0012"
    },
    rtoStatus: "Completed / Handover Done",
    warrantyTerms: "6 Months Certified Showroom Warranty on Engine & Transmission",
    chassis: "VBK402507M882190",
    engine: "KTM250EU51928"
  },
  {
    invoiceNo: "BD-2025-0067",
    saleDate: "2025-08-11",
    bikeId: "sold-bike-2025-2",
    brand: "Royal Enfield",
    model: "Meteor 350 Stellar Black",
    regNo: "MH 03 DX 7720",
    year: 2022,
    kms: 11000,
    purchaseCost: 150000,
    refurbCost: 2000,
    totalCost: 152000,
    agreedPrice: 172000,
    discount: 1000,
    rtoFee: 1500,
    accessories: 1500,
    warranty: 0,
    grandTotal: 174000,
    amountPaid: 174000,
    balance: 0,
    profit: 20000,
    paymentMode: "UPI / QR Code",
    paymentRef: "UPI-5520199281",
    customer: {
      name: "Deepak Chawla",
      phone: "+91 97690 12845",
      address: "12/A, Highland Park, Mulund West, Mumbai",
      city: "Mumbai",
      idType: "Driving License",
      idNumber: "MH03-2016008129"
    },
    rtoStatus: "RC Transferred",
    warrantyTerms: "3 Months Showroom Powertrain Guarantee",
    chassis: "ME4J35B7N110944",
    engine: "J350E449102"
  },
  {
    invoiceNo: "BD-2025-0091",
    saleDate: "2025-11-05",
    bikeId: "sold-bike-2025-3",
    brand: "Honda",
    model: "Activa 125 Disc BS6",
    regNo: "MH 47 AM 5519",
    year: 2021,
    kms: 15400,
    purchaseCost: 46000,
    refurbCost: 2200,
    totalCost: 48200,
    agreedPrice: 62000,
    discount: 1000,
    rtoFee: 1500,
    accessories: 800,
    warranty: 0,
    grandTotal: 63300,
    amountPaid: 63300,
    balance: 0,
    profit: 13800,
    paymentMode: "Cash",
    paymentRef: "CASH-REC-2025-091",
    customer: {
      name: "Sunita Deshmukh",
      phone: "+91 98191 77665",
      address: "Plot 78, Sector 19, Borivali West, Mumbai",
      city: "Mumbai",
      idType: "Aadhaar Card",
      idNumber: "3311 7744 9920"
    },
    rtoStatus: "RC Transferred",
    warrantyTerms: "3 Months Engine Warranty",
    chassis: "ME4JF5012L819201",
    engine: "JF50E901824"
  },
  {
    invoiceNo: "BD-2025-0115",
    saleDate: "2025-12-28",
    bikeId: "sold-bike-2025-4",
    brand: "Yamaha",
    model: "MT-15 V2 Metallic Black",
    regNo: "MH 02 FP 9012",
    year: 2022,
    kms: 13100,
    purchaseCost: 118000,
    refurbCost: 2500,
    totalCost: 120500,
    agreedPrice: 142000,
    discount: 1500,
    rtoFee: 1500,
    accessories: 1000,
    warranty: 1000,
    grandTotal: 144000,
    amountPaid: 130000,
    balance: 14000,
    profit: 21500,
    paymentMode: "Split (Cash + UPI)",
    paymentRef: "CASH+UPI-901823",
    customer: {
      name: "Karan Johar Patel",
      phone: "+91 99200 88123",
      address: "B-501, Raheja Heights, Malad East, Mumbai",
      city: "Mumbai",
      idType: "PAN Card",
      idNumber: "ABCDE1234F"
    },
    rtoStatus: "RC Transferred",
    warrantyTerms: "3 Months Comprehensive Coverage",
    chassis: "ME1RG5820N771920",
    engine: "G3J4E882104"
  }
];

const INITIAL_LEADS = [
  {
    id: "lead-1",
    name: "Sahil Khan",
    phone: "9819022334",
    interestedBikeId: "bike-2",
    interestedBikeName: "Yamaha YZF-R15 V4 Racing Blue",
    budget: 155000,
    status: "Hot Prospect",
    testRideDate: "2026-10-01",
    notes: "Very interested in the R15 V4. Inquired about ₹30k down payment loan options. Test ride scheduled.",
    createdAt: "2026-09-28T12:00:00.000Z"
  },
  {
    id: "lead-2",
    name: "Priyanshu Sen",
    phone: "9920188771",
    interestedBikeId: "bike-1",
    interestedBikeName: "Royal Enfield Classic 350 Reborn",
    budget: 175000,
    status: "Test Ride Scheduled",
    testRideDate: "2026-09-30",
    notes: "Looking for matte black Classic 350. Wants to inspect engine cold start and service history.",
    createdAt: "2026-09-27T16:30:00.000Z"
  },
  {
    id: "lead-3",
    name: "Amit Deshmukh",
    phone: "9820044551",
    interestedBikeId: "bike-4",
    interestedBikeName: "Honda Activa 6G Deluxe",
    budget: 65000,
    status: "Follow-up Needed",
    testRideDate: "2026-10-02",
    notes: "Needs scooter for daily college commute. Negotiating on RTO charges.",
    createdAt: "2026-09-25T11:20:00.000Z"
  }
];

// Storage Key
const STATE_STORAGE_KEY = "BIKE_DILADO_APP_STATE_V2";

let appState = {
  settings: { ...INITIAL_SETTINGS },
  bikes: [...INITIAL_BIKES],
  sales: [...INITIAL_SALES],
  leads: [...INITIAL_LEADS]
};

let currentViewingSale = null;
let currentViewingArchiveSale = null;

// Archive Explorer State
let activeArchiveData = {
  sourceName: "",
  sales: [],
  period: "",
  isExternal: false
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  applyTheme(appState.settings.theme || "dark");
  initNavigation();
  initLiveClock();
  initStockFilters();
  initBillingBikeSelect();
  initEmiCalculator();
  renderAllViews();
  setupEventListeners();
});

// Load state from localStorage
function loadState() {
  try {
    const raw = localStorage.getItem(STATE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.bikes && parsed.sales && parsed.settings) {
        appState = parsed;
        if (!appState.leads) appState.leads = [...INITIAL_LEADS];
      }
    } else {
      saveState();
    }
  } catch (e) {
    console.error("Could not parse saved state:", e);
  }
}

// Save state to localStorage
function saveState() {
  try {
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}

// Number formatter in Indian Rupee format
function formatINR(number) {
  const n = Math.round(Number(number) || 0);
  return "₹" + n.toLocaleString("en-IN");
}

// Convert Number to Words (Indian Style for Official Invoices)
function numberToWordsINR(amount) {
  amount = Math.round(amount);
  if (amount === 0) return "Zero Rupees Only";

  const single = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function convertTwoDigits(n) {
    if (n < 20) return single[n];
    return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + single[n % 10] : "");
  }

  function convertThreeDigits(n) {
    let str = "";
    if (Math.floor(n / 100) > 0) {
      str += single[Math.floor(n / 100)] + " Hundred ";
      n = n % 100;
    }
    if (n > 0) {
      str += convertTwoDigits(n);
    }
    return str.trim();
  }

  let crore = Math.floor(amount / 10000000);
  amount %= 10000000;
  let lakh = Math.floor(amount / 100000);
  amount %= 100000;
  let thousand = Math.floor(amount / 1000);
  amount %= 1000;
  let remainder = amount;

  let res = "";
  if (crore > 0) res += convertTwoDigits(crore) + " Crore ";
  if (lakh > 0) res += convertTwoDigits(lakh) + " Lakh ";
  if (thousand > 0) res += convertTwoDigits(thousand) + " Thousand ";
  if (remainder > 0) res += convertThreeDigits(remainder) + " ";

  return (res.trim() + " Rupees Only").replace(/\s+/g, " ");
}

// Calculate days in showroom
function getDaysInShowroom(createdAt) {
  if (!createdAt) return 1;
  const created = new Date(createdAt);
  const now = new Date();
  const diffTime = Math.abs(now - created);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays);
}

// Theme Switcher
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.getElementById("themeToggleIcon");
  if (icon) {
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
  appState.settings.theme = theme;
  saveState();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = current === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  showToast(`Switched to ${newTheme === "dark" ? "Night" : "Day"} mode`);
}

/* ==========================================================================
   NAVIGATION & TABS
   ========================================================================== */
function initNavigation() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      switchToTab(tabId);
    });
  });

  document.getElementById("btnQuickBilling").addEventListener("click", () => {
    switchToTab("tab-billing");
  });

  document.getElementById("btnOpenAddBikeModal").addEventListener("click", () => {
    showAddBikeModal();
  });

  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }
}

function switchToTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(t => {
    if (t.getAttribute("data-tab") === tabId) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  document.querySelectorAll(".tab-panel").forEach(p => {
    p.classList.remove("active");
  });

  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Refresh dynamic contents for that tab
  if (tabId === "tab-stock") renderStockGrid();
  if (tabId === "tab-billing") initBillingBikeSelect();
  if (tabId === "tab-sold") renderSoldTable();
  if (tabId === "tab-leads") renderLeadsView();
  if (tabId === "tab-calculator") calculateStandaloneEmi();
  if (tabId === "tab-dashboard") renderDashboard();
}

function initLiveClock() {
  const clockEl = document.getElementById("liveClockDisplay");
  function updateTime() {
    const now = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    clockEl.textContent = now.toLocaleDateString("en-IN", options);
  }
  updateTime();
  setInterval(updateTime, 1000);
}

/* ==========================================================================
   VIEW RENDERERS & KPI METRICS
   ========================================================================== */
function renderAllViews() {
  updateNavCounters();
  renderDashboard();
  renderStockGrid();
  renderStockTable();
  renderSoldTable();
  renderLeadsView();
  loadSettingsForm();
  updateYearlyBackupStats();
}

function updateNavCounters() {
  const inStockBikes = appState.bikes.filter(b => b.status === "In Stock" || b.status === "Under Servicing" || b.status === "Booked");
  const soldBikes = appState.sales;
  const activeLeads = (appState.leads || []).filter(l => l.status !== "Converted to Sale" && l.status !== "Closed / Lost");

  // Aging count (>30 days)
  const agingCount = inStockBikes.filter(b => getDaysInShowroom(b.createdAt) > 30).length;

  // Total gross profit from sales
  const totalProfit = soldBikes.reduce((acc, sale) => acc + (sale.profit || 0), 0);

  document.getElementById("navStockCount").textContent = inStockBikes.length;
  document.getElementById("navAgingCount").textContent = agingCount;
  document.getElementById("navLeadsCount").textContent = activeLeads.length;
  document.getElementById("navSoldCount").textContent = soldBikes.length;
  document.getElementById("navTotalProfit").textContent = formatINR(totalProfit);

  document.getElementById("badgeStockCount").textContent = inStockBikes.length;
  document.getElementById("badgeSoldCount").textContent = soldBikes.length;
  document.getElementById("badgeLeadsCount").textContent = activeLeads.length;
  document.getElementById("sidebarShowroomName").textContent = appState.settings.showroomName || "BIKE DILADO";
}

function renderDashboard() {
  const inStock = appState.bikes.filter(b => b.status === "In Stock");
  const servicing = appState.bikes.filter(b => b.status === "Under Servicing");
  const activeStock = appState.bikes.filter(b => b.status !== "Sold");

  // Aging count (>30 days)
  const agingCount = activeStock.filter(b => getDaysInShowroom(b.createdAt) > 30).length;

  // Active leads
  const openLeads = (appState.leads || []).filter(l => l.status !== "Converted to Sale" && l.status !== "Closed / Lost");

  // Pending RTO transfers
  const pendingRto = appState.sales.filter(s => s.rtoStatus !== "Completed / Handover Done" && s.rtoStatus !== "RC Transferred").length;

  // Pending balance receivables
  const totalReceivables = appState.sales.reduce((acc, s) => acc + (s.balance || 0), 0);

  // Cost value of active stock (purchase + refurb)
  const totalInventoryCost = activeStock.reduce((acc, b) => acc + ((b.purchaseCost || 0) + (b.refurbCost || 0)), 0);
  const potentialListingValue = activeStock.reduce((acc, b) => acc + (b.listingPrice || 0), 0);

  // Sales totals
  const totalBikesSold = appState.sales.length;
  const totalRevenue = appState.sales.reduce((acc, s) => acc + (s.grandTotal || 0), 0);
  const totalGrossProfit = appState.sales.reduce((acc, s) => acc + (s.profit || 0), 0);

  let avgMargin = 0;
  if (totalRevenue > 0) {
    avgMargin = ((totalGrossProfit / totalRevenue) * 100).toFixed(1);
  }

  // Update Main KPI Cards
  document.getElementById("kpiActiveStock").textContent = activeStock.length + " Units";
  document.getElementById("kpiServicingCount").textContent = `${servicing.length} in workshop | ${inStock.length} ready on floor`;

  document.getElementById("kpiInventoryCost").textContent = formatINR(totalInventoryCost);
  document.getElementById("kpiListingValue").textContent = `Potential Sales Value: ${formatINR(potentialListingValue)}`;

  document.getElementById("kpiBikesSold").textContent = totalBikesSold + " Sold";
  document.getElementById("kpiTotalRevenue").textContent = `Revenue: ${formatINR(totalRevenue)}`;

  document.getElementById("kpiNetProfit").textContent = formatINR(totalGrossProfit);
  document.getElementById("kpiProfitMargin").textContent = `Avg. Margin: ${avgMargin}% of turnover`;

  // Secondary Operational KPIs
  document.getElementById("opAgingVal").textContent = `${agingCount} Units`;
  document.getElementById("opLeadsVal").textContent = `${openLeads.length} Hot Leads`;
  document.getElementById("opRtoVal").textContent = `${pendingRto} In Progress`;
  document.getElementById("opReceivableVal").textContent = formatINR(totalReceivables);

  // Render Recent Floor Stock in Dashboard
  const recentStockContainer = document.getElementById("dashRecentStockList");
  recentStockContainer.innerHTML = "";
  const recentBikes = [...activeStock].reverse().slice(0, 4);

  if (recentBikes.length === 0) {
    recentStockContainer.innerHTML = `<div class="empty-state"><p>No bikes currently in stock.</p></div>`;
  } else {
    recentBikes.forEach(b => {
      const days = getDaysInShowroom(b.createdAt);
      const item = document.createElement("div");
      item.className = "recent-item";
      item.innerHTML = `
        <div class="ri-left">
          <img src="${b.image}" alt="${b.brand} ${b.model}" class="ri-thumb" onerror="this.src='assets/royal_enfield.jpg'">
          <div class="ri-info">
            <h5>${b.brand} ${b.model}</h5>
            <p>${b.regNo} • ${b.year} • ${b.kms.toLocaleString()} km • <strong style="color: var(--accent-gold);">${days}d on floor</strong></p>
          </div>
        </div>
        <div class="ri-right">
          <div class="ri-price">${formatINR(b.listingPrice)}</div>
          <div class="ri-sub"><span class="badge-tag ${b.status === 'In Stock' ? 'green' : ''}">${b.status}</span></div>
        </div>
      `;
      recentStockContainer.appendChild(item);
    });
  }

  // Render Recent Sales in Dashboard
  const recentSalesContainer = document.getElementById("dashRecentSalesList");
  recentSalesContainer.innerHTML = "";
  const recentSales = [...appState.sales].reverse().slice(0, 4);

  if (recentSales.length === 0) {
    recentSalesContainer.innerHTML = `<div class="empty-state"><p>No sales recorded yet.</p></div>`;
  } else {
    recentSales.forEach(s => {
      const item = document.createElement("div");
      item.className = "recent-item";
      item.innerHTML = `
        <div class="ri-left">
          <div class="ri-info">
            <h5>${s.brand} ${s.model}</h5>
            <p>Buyer: <strong>${s.customer.name}</strong> • ${s.invoiceNo}</p>
          </div>
        </div>
        <div class="ri-right">
          <div class="ri-price" style="color: #10b981;">+${formatINR(s.profit)} Profit</div>
          <div class="ri-sub">${s.rtoStatus}</div>
        </div>
      `;
      recentSalesContainer.appendChild(item);
    });
  }

  // Render Brand Profitability Breakdown
  renderBrandStats();
}

function renderBrandStats() {
  const container = document.getElementById("dashBrandBreakdown");
  if (!container) return;
  container.innerHTML = "";

  const brandMap = {};
  appState.sales.forEach(s => {
    if (!brandMap[s.brand]) {
      brandMap[s.brand] = { units: 0, revenue: 0, profit: 0 };
    }
    brandMap[s.brand].units++;
    brandMap[s.brand].revenue += (s.grandTotal || 0);
    brandMap[s.brand].profit += (s.profit || 0);
  });

  const brands = Object.keys(brandMap);
  if (brands.length === 0) {
    container.innerHTML = `<p class="helper-text">Brand statistics will calculate as sales are recorded.</p>`;
    return;
  }

  brands.forEach(b => {
    const data = brandMap[b];
    const margin = data.revenue > 0 ? ((data.profit / data.revenue) * 100).toFixed(1) : 0;
    const card = document.createElement("div");
    card.className = "brand-stat-card";
    card.innerHTML = `
      <div class="bsc-name">
        <span>${b}</span>
        <span class="badge-tag green">${margin}% Margin</span>
      </div>
      <div class="bsc-metrics">
        ${data.units} Units Sold • Total Profit: <strong>${formatINR(data.profit)}</strong>
      </div>
      <div class="bsc-progress-wrap">
        <div class="bsc-progress-bar" style="width: ${Math.min(100, Math.max(15, margin * 4))}%;"></div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   BIKE INVENTORY / STOCK MODULE
   ========================================================================== */
function initStockFilters() {
  document.getElementById("stockSearchInput").addEventListener("input", filterAndRenderStock);
  document.getElementById("filterStockStatus").addEventListener("change", filterAndRenderStock);
  document.getElementById("filterStockAging").addEventListener("change", filterAndRenderStock);
  document.getElementById("filterStockBrand").addEventListener("change", filterAndRenderStock);
  document.getElementById("filterStockSort").addEventListener("change", filterAndRenderStock);

  document.getElementById("btnViewGrid").addEventListener("click", () => {
    document.getElementById("btnViewGrid").classList.add("active");
    document.getElementById("btnViewTable").classList.remove("active");
    document.getElementById("stockGridContainer").style.display = "grid";
    document.getElementById("stockTableContainer").style.display = "none";
  });

  document.getElementById("btnViewTable").addEventListener("click", () => {
    document.getElementById("btnViewTable").classList.add("active");
    document.getElementById("btnViewGrid").classList.remove("active");
    document.getElementById("stockGridContainer").style.display = "none";
    document.getElementById("stockTableContainer").style.display = "block";
    renderStockTable();
  });
}

function getFilteredBikes() {
  const query = document.getElementById("stockSearchInput").value.trim().toLowerCase();
  const statusFilter = document.getElementById("filterStockStatus").value;
  const agingFilter = document.getElementById("filterStockAging").value;
  const brandFilter = document.getElementById("filterStockBrand").value;
  const sortMode = document.getElementById("filterStockSort").value;

  let list = [...appState.bikes];

  // Status Filter
  if (statusFilter !== "ALL") {
    list = list.filter(b => b.status === statusFilter);
  }

  // Aging Filter
  if (agingFilter === "FRESH") {
    list = list.filter(b => getDaysInShowroom(b.createdAt) <= 15);
  } else if (agingFilter === "NORMAL") {
    list = list.filter(b => getDaysInShowroom(b.createdAt) > 15 && getDaysInShowroom(b.createdAt) <= 30);
  } else if (agingFilter === "AGING") {
    list = list.filter(b => getDaysInShowroom(b.createdAt) > 30);
  }

  // Brand Filter
  if (brandFilter !== "ALL") {
    list = list.filter(b => b.brand.toLowerCase() === brandFilter.toLowerCase());
  }

  // Search Filter
  if (query) {
    list = list.filter(b => {
      const matchReg = (b.regNo || "").toLowerCase().includes(query);
      const matchBrand = (b.brand || "").toLowerCase().includes(query);
      const matchModel = (b.model || "").toLowerCase().includes(query);
      const matchYear = String(b.year).includes(query);
      const matchColor = (b.color || "").toLowerCase().includes(query);
      return matchReg || matchBrand || matchModel || matchYear || matchColor;
    });
  }

  // Sorting
  if (sortMode === "PRICE_HIGH") {
    list.sort((a, b) => (b.listingPrice || 0) - (a.listingPrice || 0));
  } else if (sortMode === "PRICE_LOW") {
    list.sort((a, b) => (a.listingPrice || 0) - (b.listingPrice || 0));
  } else if (sortMode === "KM_LOW") {
    list.sort((a, b) => (a.kms || 0) - (b.kms || 0));
  } else if (sortMode === "YEAR_NEW") {
    list.sort((a, b) => (b.year || 0) - (a.year || 0));
  } else if (sortMode === "AGING_HIGH") {
    list.sort((a, b) => getDaysInShowroom(b.createdAt) - getDaysInShowroom(a.createdAt));
  } else {
    // NEWEST by creation date or array position
    list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }

  return list;
}

function filterAndRenderStock() {
  renderStockGrid();
  renderStockTable();
}

function resetStockFilters() {
  document.getElementById("stockSearchInput").value = "";
  document.getElementById("filterStockStatus").value = "ALL";
  document.getElementById("filterStockAging").value = "ALL";
  document.getElementById("filterStockBrand").value = "ALL";
  document.getElementById("filterStockSort").value = "NEWEST";
  filterAndRenderStock();
}

function getStatusBadgeClass(status) {
  switch (status) {
    case "In Stock": return "status-in-stock";
    case "Under Servicing": return "status-servicing";
    case "Booked": return "status-booked";
    case "Sold": return "status-sold";
    default: return "";
  }
}

function renderStockGrid() {
  const container = document.getElementById("stockGridContainer");
  const emptyEl = document.getElementById("stockEmptyState");
  container.innerHTML = "";

  const filtered = getFilteredBikes();

  if (filtered.length === 0) {
    emptyEl.style.display = "block";
    return;
  }
  emptyEl.style.display = "none";

  filtered.forEach(bike => {
    const totalCost = (bike.purchaseCost || 0) + (bike.refurbCost || 0);
    const expectedMargin = (bike.listingPrice || 0) - totalCost;
    const days = getDaysInShowroom(bike.createdAt);

    let agingClass = "aging-fresh";
    let agingLabel = `${days}d Fresh`;
    if (days > 30) {
      agingClass = "aging-alert";
      agingLabel = `${days}d Aging!`;
    } else if (days > 15) {
      agingClass = "aging-normal";
      agingLabel = `${days}d on Floor`;
    }

    const card = document.createElement("div");
    card.className = "bike-card";
    card.innerHTML = `
      <div class="bc-img-container">
        <img src="${bike.image}" alt="${bike.brand} ${bike.model}" class="bc-img" onerror="this.src='assets/royal_enfield.jpg'">
        <span class="bc-status-tag ${getStatusBadgeClass(bike.status)}">${bike.status}</span>
        <span class="bc-aging-badge ${agingClass}">${agingLabel}</span>
        <span class="bc-reg-badge">${bike.regNo}</span>
      </div>
      <div class="bc-body">
        <div class="bc-title-row">
          <h3 class="bc-title">${bike.brand} ${bike.model}</h3>
        </div>
        <div class="bc-specs">
          <span>📅 ${bike.year}</span>
          <span>• 🛣️ ${bike.kms.toLocaleString()} km</span>
          <span>• 👤 ${bike.owners}</span>
          <span>• 🎖️ ${bike.inspectionGrade || 'Grade A'}</span>
        </div>
        <div class="bc-financials">
          <div class="bf-row">
            <span>Procurement (Buy + Refurb):</span>
            <strong>${formatINR(totalCost)}</strong>
          </div>
          <div class="bf-row asking">
            <span>Asking Showroom Price:</span>
            <span class="bf-price-big">${formatINR(bike.listingPrice)}</span>
          </div>
          <div class="bf-row" style="margin-top: 4px; font-size: 11px; color: #10b981;">
            <span>Projected Margin:</span>
            <strong>+${formatINR(expectedMargin)}</strong>
          </div>
        </div>
        <div class="bc-docs">
          <span class="doc-pill ${bike.docs?.rc ? 'has-doc' : ''}">RC: ${bike.docs?.rc ? '✓' : '✗'}</span>
          <span class="doc-pill ${bike.docs?.insurance ? 'has-doc' : ''}">Insurance: ${bike.docs?.insurance ? '✓' : '✗'}</span>
          <span class="doc-pill ${bike.docs?.puc ? 'has-doc' : ''}">PUC: ${bike.docs?.puc ? '✓' : '✗'}</span>
          <span class="doc-pill ${bike.docs?.keys ? 'has-doc' : ''}">2 Keys: ${bike.docs?.keys ? '✓' : '✗'}</span>
        </div>
        <div class="bc-actions">
          ${bike.status !== 'Sold' ? `
            <button class="btn btn-primary btn-sm" onclick="startBillingForBike('${bike.id}')" title="Generate Bill for this Bike">
              ⚡ Sell
            </button>
          ` : `
            <button class="btn btn-ghost btn-sm" disabled>Sold</button>
          `}
          <button class="btn btn-outline btn-sm" onclick="openPriceTagModal('${bike.id}')" title="Print Handlebar Price Tag">
            🏷️ Tag
          </button>
          <button class="btn btn-outline btn-sm" onclick="shareBikeWhatsApp('${bike.id}')" title="Share Spec on WhatsApp">
            💬
          </button>
          <button class="btn btn-outline btn-sm" onclick="editBike('${bike.id}')" title="Edit Bike Details">
            ✏️
          </button>
          <button class="btn btn-ghost btn-sm" onclick="deleteBike('${bike.id}')" title="Remove Bike">
            🗑️
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderStockTable() {
  const tbody = document.getElementById("stockTableBody");
  tbody.innerHTML = "";

  const filtered = getFilteredBikes();

  filtered.forEach(bike => {
    const totalCost = (bike.purchaseCost || 0) + (bike.refurbCost || 0);
    const days = getDaysInShowroom(bike.createdAt);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="tb-bike-cell">
          <img src="${bike.image}" alt="${bike.brand}" class="tb-thumb" onerror="this.src='assets/royal_enfield.jpg'">
          <div>
            <div class="tb-bike-title">${bike.brand} ${bike.model}</div>
            <div class="tb-bike-sub">${bike.color || 'Standard'} • ${bike.owners}</div>
          </div>
        </div>
      </td>
      <td><span class="highlight-reg">${bike.regNo}</span></td>
      <td>${bike.year} / ${bike.kms.toLocaleString()} km</td>
      <td><strong>${days} Days</strong></td>
      <td><span class="badge-tag green">${bike.inspectionGrade || 'Grade A'}</span></td>
      <td>${formatINR(totalCost)}</td>
      <td><strong style="color: var(--accent-gold); font-size: 14px;">${formatINR(bike.listingPrice)}</strong></td>
      <td><span class="status-badge-inline ${getStatusBadgeClass(bike.status)}">${bike.status}</span></td>
      <td>
        <div style="display:flex; gap: 4px;">
          ${bike.status !== 'Sold' ? `
            <button class="btn btn-primary btn-xs" onclick="startBillingForBike('${bike.id}')">Sell</button>
          ` : ''}
          <button class="btn btn-outline btn-xs" onclick="openPriceTagModal('${bike.id}')">Tag</button>
          <button class="btn btn-outline btn-xs" onclick="editBike('${bike.id}')">Edit</button>
          <button class="btn btn-ghost btn-xs" onclick="deleteBike('${bike.id}')">Del</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/* ==========================================================================
   ADD & EDIT BIKE MODAL HANDLERS
   ========================================================================== */
function showAddBikeModal() {
  document.getElementById("bikeEditId").value = "";
  document.getElementById("modalBikeTitle").textContent = "Add Used Bike to Showroom Stock";
  document.getElementById("btnSaveBike").textContent = "Save to Inventory";
  document.getElementById("bikeForm").reset();

  // Defaults
  document.getElementById("bikeYear").value = new Date().getFullYear() - 2;
  document.getElementById("bikeImagePreset").value = "assets/royal_enfield.jpg";
  document.getElementById("customImageRow").style.display = "none";
  document.getElementById("chkRc").checked = true;
  document.getElementById("chkInsurance").checked = true;
  document.getElementById("chkPuc").checked = true;
  document.getElementById("chkForm2930").checked = true;
  document.getElementById("chkKeys").checked = true;

  updateModalCostSummary();
  openModal("modalAddBike");
}

function editBike(bikeId) {
  const bike = appState.bikes.find(b => b.id === bikeId);
  if (!bike) return;

  document.getElementById("bikeEditId").value = bike.id;
  document.getElementById("modalBikeTitle").textContent = "Edit Bike Details: " + bike.brand + " " + bike.model;
  document.getElementById("btnSaveBike").textContent = "Update Bike Details";

  document.getElementById("bikeBrand").value = bike.brand;
  document.getElementById("bikeModel").value = bike.model;
  document.getElementById("bikeRegNo").value = bike.regNo;
  document.getElementById("bikeYear").value = bike.year;
  document.getElementById("bikeKms").value = bike.kms;
  document.getElementById("bikeOwners").value = bike.owners;
  document.getElementById("bikeFuel").value = bike.fuel || "Petrol";
  document.getElementById("bikeColor").value = bike.color || "";
  document.getElementById("bikeChassis").value = bike.chassis || "";
  document.getElementById("bikeEngine").value = bike.engine || "";
  document.getElementById("bikeInspectionScore").value = bike.inspectionGrade || "Grade A (8.5/10)";
  document.getElementById("bikePurchaseCost").value = bike.purchaseCost;
  document.getElementById("bikeRefurbCost").value = bike.refurbCost || 0;
  document.getElementById("bikeListingPrice").value = bike.listingPrice;
  document.getElementById("bikeStatus").value = bike.status;
  document.getElementById("bikeNotes").value = bike.notes || "";

  // Presets vs custom image
  if (["assets/royal_enfield.jpg", "assets/yamaha_r15.jpg", "assets/ktm_duke.jpg", "assets/activa_scooter.jpg"].includes(bike.image)) {
    document.getElementById("bikeImagePreset").value = bike.image;
    document.getElementById("customImageRow").style.display = "none";
  } else {
    document.getElementById("bikeImagePreset").value = "CUSTOM";
    document.getElementById("customImageRow").style.display = "grid";
    document.getElementById("bikeImageUrl").value = bike.image;
  }

  // Docs checklist
  document.getElementById("chkRc").checked = !!bike.docs?.rc;
  document.getElementById("chkInsurance").checked = !!bike.docs?.insurance;
  document.getElementById("chkPuc").checked = !!bike.docs?.puc;
  document.getElementById("chkForm2930").checked = !!bike.docs?.form2930;
  document.getElementById("chkKeys").checked = !!bike.docs?.keys;
  document.getElementById("chkNoc").checked = !!bike.docs?.noc;

  updateModalCostSummary();
  openModal("modalAddBike");
}

function updateModalCostSummary() {
  const buy = Number(document.getElementById("bikePurchaseCost").value) || 0;
  const refurb = Number(document.getElementById("bikeRefurbCost").value) || 0;
  const listing = Number(document.getElementById("bikeListingPrice").value) || 0;

  const total = buy + refurb;
  const margin = listing - total;
  const marginPct = total > 0 ? ((margin / total) * 100).toFixed(1) : 0;

  const previewEl = document.getElementById("modalCostPreview");
  previewEl.innerHTML = `
    Total Showroom Investment: <strong>${formatINR(total)}</strong> | 
    Potential Margin: <strong style="color: ${margin >= 0 ? '#10b981' : '#ef4444'}">${formatINR(margin)} (${marginPct}%)</strong>
  `;
}

function onPresetImageSelected(val) {
  const customRow = document.getElementById("customImageRow");
  if (val === "CUSTOM") {
    customRow.style.display = "grid";
  } else {
    customRow.style.display = "none";
  }
}

let uploadedBase64Image = "";
function handleImageFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    uploadedBase64Image = evt.target.result;
    showToast("Image loaded successfully!");
  };
  reader.readAsDataURL(file);
}

function handleSaveBike(e) {
  e.preventDefault();

  const editId = document.getElementById("bikeEditId").value;
  const brand = document.getElementById("bikeBrand").value;
  const model = document.getElementById("bikeModel").value;
  const regNo = document.getElementById("bikeRegNo").value.trim().toUpperCase();
  const year = Number(document.getElementById("bikeYear").value);
  const kms = Number(document.getElementById("bikeKms").value);
  const owners = document.getElementById("bikeOwners").value;
  const fuel = document.getElementById("bikeFuel").value;
  const color = document.getElementById("bikeColor").value.trim();
  const chassis = document.getElementById("bikeChassis").value.trim().toUpperCase();
  const engine = document.getElementById("bikeEngine").value.trim().toUpperCase();
  const inspectionGrade = document.getElementById("bikeInspectionScore").value;
  const purchaseCost = Number(document.getElementById("bikePurchaseCost").value);
  const refurbCost = Number(document.getElementById("bikeRefurbCost").value) || 0;
  const listingPrice = Number(document.getElementById("bikeListingPrice").value);
  const status = document.getElementById("bikeStatus").value;
  const notes = document.getElementById("bikeNotes").value.trim();

  // Resolve Image
  const preset = document.getElementById("bikeImagePreset").value;
  let image = preset;
  if (preset === "CUSTOM") {
    const customUrl = document.getElementById("bikeImageUrl").value.trim();
    if (uploadedBase64Image) {
      image = uploadedBase64Image;
    } else if (customUrl) {
      image = customUrl;
    } else {
      image = "assets/royal_enfield.jpg";
    }
  }

  const docs = {
    rc: document.getElementById("chkRc").checked,
    insurance: document.getElementById("chkInsurance").checked,
    puc: document.getElementById("chkPuc").checked,
    form2930: document.getElementById("chkForm2930").checked,
    keys: document.getElementById("chkKeys").checked,
    noc: document.getElementById("chkNoc").checked
  };

  if (editId) {
    const index = appState.bikes.findIndex(b => b.id === editId);
    if (index !== -1) {
      appState.bikes[index] = {
        ...appState.bikes[index],
        brand, model, regNo, year, kms, owners, fuel, color, chassis, engine,
        inspectionGrade, purchaseCost, refurbCost, listingPrice, status, image, docs, notes
      };
      showToast("Bike updated successfully in showroom stock!");
    }
  } else {
    const newBike = {
      id: "bike-" + Date.now(),
      brand, model, regNo, year, kms, owners, fuel, color, chassis, engine,
      inspectionGrade, purchaseCost, refurbCost, listingPrice, status, image, docs, notes,
      createdAt: new Date().toISOString()
    };
    appState.bikes.unshift(newBike);
    showToast("New bike registered in showroom inventory!");
  }

  saveState();
  closeModal("modalAddBike");
  renderAllViews();
  initBillingBikeSelect();
}

function deleteBike(bikeId) {
  const bike = appState.bikes.find(b => b.id === bikeId);
  if (!bike) return;

  if (confirm(`Are you sure you want to remove "${bike.brand} ${bike.model} (${bike.regNo})" from showroom stock?`)) {
    appState.bikes = appState.bikes.filter(b => b.id !== bikeId);
    saveState();
    renderAllViews();
    initBillingBikeSelect();
    showToast("Bike removed from inventory.");
  }
}

/* ==========================================================================
   SHOWROOM HANDLEBAR TAG & WHATSAPP SPEC SHARE
   ========================================================================== */
function openPriceTagModal(bikeId) {
  const bike = appState.bikes.find(b => b.id === bikeId);
  if (!bike) return;

  document.getElementById("htModel").textContent = `${bike.brand} ${bike.model}`;
  document.getElementById("htReg").textContent = bike.regNo;
  document.getElementById("htYear").textContent = bike.year;
  document.getElementById("htKms").textContent = `${bike.kms.toLocaleString()} km`;
  document.getElementById("htOwner").textContent = bike.owners;
  document.getElementById("htGrade").textContent = bike.inspectionGrade || "Grade A (8.5)";
  document.getElementById("htPrice").textContent = formatINR(bike.listingPrice);

  // Calculate approx monthly EMI for 24 months with 20% down payment
  const loanP = bike.listingPrice * 0.8;
  const rate = 11.5 / 12 / 100;
  const emi = Math.round((loanP * rate * Math.pow(1 + rate, 24)) / (Math.pow(1 + rate, 24) - 1));
  document.getElementById("htEmi").textContent = `Easy Showroom EMI @ ${formatINR(emi)}/mo (24 Months)`;

  openModal("modalPriceTag");
}

function shareBikeWhatsApp(bikeId) {
  const bike = appState.bikes.find(b => b.id === bikeId);
  if (!bike) return;

  const text = `*BIKE DILADO - Certified Pre-Owned Two-Wheeler*\n\n` +
    `🏍️ *Vehicle:* ${bike.brand} ${bike.model}\n` +
    `🔢 *Reg No:* ${bike.regNo}\n` +
    `📅 *Model Year:* ${bike.year}\n` +
    `🛣️ *KM Driven:* ${bike.kms.toLocaleString()} km\n` +
    `👤 *Ownership:* ${bike.owners}\n` +
    `🎖️ *Inspection Score:* ${bike.inspectionGrade || 'Grade A+'}\n` +
    `💰 *Offer Price:* ${formatINR(bike.listingPrice)}\n\n` +
    `✅ 50-Point Certified Inspection Pass\n` +
    `✅ 3-Months Warranty Included\n` +
    `📍 *Showroom:* ${appState.settings.address}\n` +
    `📞 *Call:* ${appState.settings.phone}`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

/* ==========================================================================
   BILLING & INVOICE GENERATOR MODULE
   ========================================================================== */
function initBillingBikeSelect() {
  const select = document.getElementById("billSelectBike");
  if (!select) return;

  const currentVal = select.value;
  select.innerHTML = '<option value="">-- Choose In-Stock Two-Wheeler --</option>';

  const availableBikes = appState.bikes.filter(b => b.status === "In Stock" || b.status === "Booked" || b.status === "Under Servicing");

  availableBikes.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = `${b.brand} ${b.model} - [${b.regNo}] (${formatINR(b.listingPrice)})`;
    select.appendChild(opt);
  });

  if (currentVal && availableBikes.some(b => b.id === currentVal)) {
    select.value = currentVal;
  }

  // Default delivery date to today
  const deliveryDateInput = document.getElementById("deliveryDate");
  if (deliveryDateInput && !deliveryDateInput.value) {
    const today = new Date().toISOString().split("T")[0];
    deliveryDateInput.value = today;
  }
}

function startBillingForBike(bikeId) {
  switchToTab("tab-billing");
  const select = document.getElementById("billSelectBike");
  select.value = bikeId;
  onBillingBikeSelected(bikeId);
}

function onBillingBikeSelected(bikeId) {
  const summaryBox = document.getElementById("billBikeSummary");
  if (!bikeId) {
    summaryBox.style.display = "none";
    document.getElementById("billAgreedPrice").value = "";
    calculateBillingTotals();
    return;
  }

  const bike = appState.bikes.find(b => b.id === bikeId);
  if (!bike) return;

  summaryBox.style.display = "flex";
  document.getElementById("bbpImg").src = bike.image;
  document.getElementById("bbpTitle").textContent = `${bike.brand} ${bike.model}`;
  document.getElementById("bbpReg").textContent = bike.regNo;
  document.getElementById("bbpYear").textContent = bike.year;
  document.getElementById("bbpKms").textContent = `${bike.kms.toLocaleString()} km`;
  document.getElementById("bbpOwners").textContent = bike.owners;

  const totalCost = (bike.purchaseCost || 0) + (bike.refurbCost || 0);
  document.getElementById("bbpTotalCost").textContent = formatINR(totalCost);

  // Set default agreed price to listing price
  const agreedInput = document.getElementById("billAgreedPrice");
  if (!agreedInput.value || Number(agreedInput.value) === 0) {
    agreedInput.value = bike.listingPrice || totalCost;
  }

  calculateBillingTotals();
}

function calculateBillingTotals() {
  const agreedPrice = Number(document.getElementById("billAgreedPrice").value) || 0;
  const discount = Number(document.getElementById("billDiscount").value) || 0;
  const rtoFee = Number(document.getElementById("billRtoFee").value) || 0;
  const accessories = Number(document.getElementById("billAccessories").value) || 0;
  const warranty = Number(document.getElementById("billWarranty").value) || 0;

  const netVehicle = Math.max(0, agreedPrice - discount);
  const addons = rtoFee + accessories + warranty;
  const grandTotal = netVehicle + addons;

  // Real-time profit projection
  const bikeId = document.getElementById("billSelectBike").value;
  const bike = appState.bikes.find(b => b.id === bikeId);
  let profit = 0;
  if (bike) {
    const totalCost = (bike.purchaseCost || 0) + (bike.refurbCost || 0);
    profit = netVehicle - totalCost;
  }

  const profitEl = document.getElementById("billProjectedProfit");
  profitEl.textContent = formatINR(profit);
  profitEl.style.color = profit >= 0 ? "#10b981" : "#ef4444";

  // Summary Table in column 3
  document.getElementById("sumNetVehicle").textContent = formatINR(netVehicle);
  document.getElementById("sumAddons").textContent = formatINR(addons);
  document.getElementById("sumGrandTotal").textContent = formatINR(grandTotal);

  // Payment Balance Calculation
  const amountPaidInput = document.getElementById("billAmountPaid");
  if (!amountPaidInput.dataset.touched) {
    amountPaidInput.value = grandTotal;
  }

  const amountPaid = Number(amountPaidInput.value) || 0;
  const balance = Math.max(0, grandTotal - amountPaid);
  document.getElementById("billBalancePending").value = balance;

  // Loan Mini EMI
  const loanPrincipal = Number(document.getElementById("loanAmount").value) || 0;
  const tenure = Number(document.getElementById("loanTenure")?.value || 24);
  if (loanPrincipal > 0) {
    const rate = 11.5 / 12 / 100;
    const emi = Math.round((loanPrincipal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1));
    document.getElementById("miniEmiDisplay").textContent = `${formatINR(emi)} / mo`;
  } else {
    document.getElementById("miniEmiDisplay").textContent = `₹0 / mo`;
  }
}

document.getElementById("billAmountPaid").addEventListener("input", () => {
  document.getElementById("billAmountPaid").dataset.touched = "true";
  calculateBillingTotals();
});

function toggleLoanSection(val) {
  const box = document.getElementById("loanFieldsBox");
  if (val === "Two-Wheeler Loan / Finance") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

function handleGenerateInvoice(e) {
  e.preventDefault();

  const bikeId = document.getElementById("billSelectBike").value;
  const bike = appState.bikes.find(b => b.id === bikeId);
  if (!bike) {
    alert("Please select an available bike first.");
    return;
  }

  const agreedPrice = Number(document.getElementById("billAgreedPrice").value);
  const discount = Number(document.getElementById("billDiscount").value) || 0;
  const rtoFee = Number(document.getElementById("billRtoFee").value) || 0;
  const accessories = Number(document.getElementById("billAccessories").value) || 0;
  const warranty = Number(document.getElementById("billWarranty").value) || 0;

  const netVehicle = Math.max(0, agreedPrice - discount);
  const grandTotal = netVehicle + rtoFee + accessories + warranty;
  const amountPaid = Number(document.getElementById("billAmountPaid").value) || 0;
  const balance = Math.max(0, grandTotal - amountPaid);

  const totalCost = (bike.purchaseCost || 0) + (bike.refurbCost || 0);
  const profit = netVehicle - totalCost;

  const customerName = document.getElementById("custName").value.trim();
  const customerPhone = document.getElementById("custPhone").value.trim();
  const idType = document.getElementById("custIdType").value;
  const idNumber = document.getElementById("custIdNumber").value.trim();
  const customerAddress = document.getElementById("custAddress").value.trim();
  const customerCity = document.getElementById("custCity").value.trim();
  const deliveryDate = document.getElementById("deliveryDate").value || new Date().toISOString().split("T")[0];
  const warrantyTerms = document.getElementById("warrantyOffer").value;

  const paymentMode = document.getElementById("billPaymentMode").value;
  const paymentRef = document.getElementById("billPaymentNotes").value.trim() || paymentMode;

  const invoicePrefix = appState.settings.invoicePrefix || "BD-2026-";
  const invoiceNo = invoicePrefix + String(appState.sales.length + 101).padStart(4, "0");

  const saleRecord = {
    invoiceNo,
    saleDate: deliveryDate,
    bikeId: bike.id,
    brand: bike.brand,
    model: bike.model,
    regNo: bike.regNo,
    year: bike.year,
    kms: bike.kms,
    owners: bike.owners,
    color: bike.color,
    chassis: bike.chassis || "N/A",
    engine: bike.engine || "N/A",
    purchaseCost: bike.purchaseCost,
    refurbCost: bike.refurbCost,
    totalCost,
    agreedPrice,
    discount,
    rtoFee,
    accessories,
    warranty,
    grandTotal,
    amountPaid,
    balance,
    profit,
    paymentMode,
    paymentRef,
    customer: {
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      city: customerCity,
      idType,
      idNumber
    },
    rtoStatus: "Documents Submitted",
    warrantyTerms
  };

  // 1. Mark Bike as Sold in Inventory
  bike.status = "Sold";

  // 2. Add to Sales Archive
  appState.sales.unshift(saleRecord);

  // 3. Save & Refresh State
  saveState();
  renderAllViews();
  initBillingBikeSelect();

  // 4. Open Invoice Modal
  renderInvoiceModal(saleRecord);

  showToast(`Invoice ${invoiceNo} generated successfully! Bike marked as SOLD.`);
}

/* ==========================================================================
   PRINTABLE INVOICE & GATE PASS ENGINE
   ========================================================================== */
function renderInvoiceModal(sale) {
  currentViewingSale = sale;

  // Showroom Info
  document.getElementById("invShowroomName").textContent = appState.settings.showroomName || "BIKE DILADO";
  document.getElementById("invShowroomTagline").textContent = appState.settings.tagline || "Certified Pre-Owned Showroom";
  document.getElementById("invShowroomAddress").textContent = appState.settings.address;
  document.getElementById("invShowroomPhone").textContent = appState.settings.phone;
  document.getElementById("invShowroomGstin").textContent = appState.settings.gstin;

  // Invoice Meta
  document.getElementById("invNumber").textContent = sale.invoiceNo;
  document.getElementById("invDate").textContent = sale.saleDate;
  document.getElementById("invPayMode").textContent = sale.paymentMode + (sale.paymentRef ? ` (${sale.paymentRef})` : "");

  // Customer Details
  document.getElementById("invCustName").textContent = sale.customer.name;
  document.getElementById("invCustPhone").textContent = sale.customer.phone;
  document.getElementById("invCustIdProof").textContent = `${sale.customer.idType}: ${sale.customer.idNumber}`;
  document.getElementById("invCustAddress").textContent = `${sale.customer.address}, ${sale.customer.city}`;

  // Vehicle Details
  document.getElementById("invBikeModel").textContent = `${sale.brand} ${sale.model}`;
  document.getElementById("invRegNo").textContent = sale.regNo;
  document.getElementById("invYearKm").textContent = `${sale.year} | ${(sale.kms || 0).toLocaleString()} km | ${sale.color || 'Standard'}`;
  document.getElementById("invEngineNo").textContent = sale.engine || "N/A";
  document.getElementById("invChassisNo").textContent = sale.chassis || "N/A";

  // Table Line Items
  document.getElementById("invTableBikeTitle").textContent = `Used Motorcycle / Scooter: ${sale.brand} ${sale.model}`;
  document.getElementById("invTableRegInfo").textContent = `Reg No: ${sale.regNo} | Mfg: ${sale.year} | ${sale.owners || '1st Owner'}`;
  document.getElementById("invTableAgreedPrice").textContent = formatINR(sale.agreedPrice);

  const rowDiscount = document.getElementById("invRowDiscount");
  if (sale.discount > 0) {
    rowDiscount.style.display = "table-row";
    document.getElementById("invTableDiscount").textContent = `-${formatINR(sale.discount)}`;
  } else {
    rowDiscount.style.display = "none";
  }

  document.getElementById("invTableRto").textContent = formatINR(sale.rtoFee);
  document.getElementById("invTableAcc").textContent = formatINR(sale.accessories);

  const rowWarranty = document.getElementById("invRowWarranty");
  if (sale.warranty > 0) {
    rowWarranty.style.display = "table-row";
    document.getElementById("invTableWarranty").textContent = formatINR(sale.warranty);
  } else {
    rowWarranty.style.display = "none";
  }

  document.getElementById("invTableGrandTotal").textContent = formatINR(sale.grandTotal);
  document.getElementById("invTablePaid").textContent = formatINR(sale.amountPaid);

  const rowBalance = document.getElementById("invRowBalance");
  if (sale.balance > 0) {
    rowBalance.style.display = "table-row";
    document.getElementById("invTableBalance").textContent = formatINR(sale.balance);
  } else {
    rowBalance.style.display = "none";
  }

  // Words
  document.getElementById("invAmountInWords").textContent = numberToWordsINR(sale.grandTotal);

  // Warranty note
  document.getElementById("invWarrantyNote").textContent = `Vehicle delivered along with original transfer set. ${sale.warrantyTerms || 'Certified showroom inspection pass.'}`;

  // WhatsApp Button
  const btnShare = document.getElementById("btnShareWhatsAppInv");
  if (btnShare) {
    btnShare.onclick = () => {
      const text = `*BIKE DILADO - Delivery Invoice #${sale.invoiceNo}*\n\n` +
        `Dear ${sale.customer.name}, Congratulations on your purchase of *${sale.brand} ${sale.model}* [${sale.regNo}]!\n` +
        `💰 Total Amount: ${formatINR(sale.grandTotal)}\n` +
        `💵 Amount Paid: ${formatINR(sale.amountPaid)}\n` +
        `${sale.balance > 0 ? `⚠️ Balance Pending: ${formatINR(sale.balance)}\n` : `✅ Payment Status: Fully Paid\n`}` +
        `📄 RTO Transfer: Initiated under reference ${sale.invoiceNo}\n\n` +
        `Thank you for choosing BIKE DILADO!`;
      const cleanPhone = sale.customer.phone.replace(/[^0-9]/g, "");
      window.open(`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`, "_blank");
    };
  }

  openModal("modalInvoice");
}

function printGatePass() {
  if (!currentViewingSale) return;
  const s = currentViewingSale;

  document.getElementById("gpPassNo").textContent = "GP-" + s.invoiceNo.replace("BD-", "");
  document.getElementById("gpDateTime").textContent = `${s.saleDate} ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  document.getElementById("gpInvNo").textContent = s.invoiceNo;
  document.getElementById("gpBike").textContent = `${s.brand} ${s.model}`;
  document.getElementById("gpReg").textContent = s.regNo;
  document.getElementById("gpEngine").textContent = s.engine || "Verified";
  document.getElementById("gpChassis").textContent = s.chassis || "Verified";
  document.getElementById("gpBuyer").textContent = s.customer.name;
  document.getElementById("gpPhone").textContent = s.customer.phone;

  const statusEl = document.getElementById("gpPaymentStatus");
  if (s.balance > 0) {
    statusEl.textContent = `PARTIAL DUE: ${formatINR(s.balance)} (AUTHORIZED)`;
    statusEl.style.color = "#ea580c";
  } else {
    statusEl.textContent = `PAID IN FULL (CLEARED)`;
    statusEl.style.color = "#16a34a";
  }

  closeModal("modalInvoice");
  openModal("modalGatePass");
}

/* ==========================================================================
   CUSTOMER LEADS CRM MODULE
   ========================================================================== */
function renderLeadsView() {
  const container = document.getElementById("leadsContainer");
  const emptyEl = document.getElementById("leadsEmptyState");
  if (!container) return;
  container.innerHTML = "";

  const query = (document.getElementById("leadSearchInput")?.value || "").toLowerCase().trim();
  const statusFilter = document.getElementById("filterLeadStatus")?.value || "ALL";

  let list = [...(appState.leads || [])];

  if (statusFilter !== "ALL") {
    list = list.filter(l => l.status === statusFilter);
  }

  if (query) {
    list = list.filter(l => {
      const matchName = (l.name || "").toLowerCase().includes(query);
      const matchPhone = (l.phone || "").toLowerCase().includes(query);
      const matchBike = (l.interestedBikeName || "").toLowerCase().includes(query);
      return matchName || matchPhone || matchBike;
    });
  }

  if (list.length === 0) {
    emptyEl.style.display = "block";
    return;
  }
  emptyEl.style.display = "none";

  list.forEach(lead => {
    const card = document.createElement("div");
    card.className = "lead-card";

    let badgeClass = "badge-tag purple";
    if (lead.status === "Hot Prospect") badgeClass = "badge-tag red";
    if (lead.status === "Converted to Sale") badgeClass = "badge-tag green";

    card.innerHTML = `
      <div class="lc-top">
        <div>
          <h4 class="lc-name">${lead.name}</h4>
          <span class="lc-phone">📞 ${lead.phone}</span>
        </div>
        <span class="${badgeClass}">${lead.status}</span>
      </div>
      <div class="lc-details">
        <div>Interested: <strong>${lead.interestedBikeName || 'Any Model'}</strong></div>
        <div>Budget: <strong>${lead.budget ? formatINR(lead.budget) : 'Not specified'}</strong></div>
        ${lead.testRideDate ? `<div>Date: 📅 <strong>${lead.testRideDate}</strong></div>` : ''}
      </div>
      <div class="lc-notes">
        "${lead.notes || 'No conversation notes logged.'}"
      </div>
      <div class="lc-actions">
        ${lead.status !== 'Converted to Sale' ? `
          <button class="btn btn-primary btn-xs" onclick="convertLeadToSale('${lead.id}')">
            ⚡ Convert to Sale
          </button>
        ` : ''}
        <button class="btn btn-outline btn-xs" onclick="editLead('${lead.id}')">Edit</button>
        <button class="btn btn-ghost btn-xs" onclick="deleteLead('${lead.id}')">Del</button>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById("leadSearchInput")?.addEventListener("input", renderLeadsView);

function showAddLeadModal() {
  document.getElementById("leadEditId").value = "";
  document.getElementById("leadModalTitle").textContent = "New Customer Inquiry / Test Ride";
  document.getElementById("leadForm").reset();

  // Populate bike selector
  const select = document.getElementById("leadInterestedBike");
  select.innerHTML = '<option value="">-- Choose Stock Bike (Optional) --</option>';
  appState.bikes.filter(b => b.status !== "Sold").forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = `${b.brand} ${b.model} (${formatINR(b.listingPrice)})`;
    select.appendChild(opt);
  });

  openModal("modalLead");
}

function editLead(leadId) {
  const lead = appState.leads.find(l => l.id === leadId);
  if (!lead) return;

  document.getElementById("leadEditId").value = lead.id;
  document.getElementById("leadModalTitle").textContent = "Edit Lead: " + lead.name;
  document.getElementById("leadName").value = lead.name;
  document.getElementById("leadPhone").value = lead.phone;
  document.getElementById("leadBudget").value = lead.budget || "";
  document.getElementById("leadStatus").value = lead.status;
  document.getElementById("leadTestRideDate").value = lead.testRideDate || "";
  document.getElementById("leadNotes").value = lead.notes || "";

  const select = document.getElementById("leadInterestedBike");
  select.innerHTML = '<option value="">-- Choose Stock Bike (Optional) --</option>';
  appState.bikes.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = `${b.brand} ${b.model} (${formatINR(b.listingPrice)})`;
    if (b.id === lead.interestedBikeId) opt.selected = true;
    select.appendChild(opt);
  });

  openModal("modalLead");
}

function handleSaveLead(e) {
  e.preventDefault();

  const editId = document.getElementById("leadEditId").value;
  const name = document.getElementById("leadName").value.trim();
  const phone = document.getElementById("leadPhone").value.trim();
  const bikeId = document.getElementById("leadInterestedBike").value;
  const budget = Number(document.getElementById("leadBudget").value) || 0;
  const status = document.getElementById("leadStatus").value;
  const testRideDate = document.getElementById("leadTestRideDate").value;
  const notes = document.getElementById("leadNotes").value.trim();

  let bikeName = "General Inquiry";
  if (bikeId) {
    const b = appState.bikes.find(x => x.id === bikeId);
    if (b) bikeName = `${b.brand} ${b.model}`;
  }

  if (editId) {
    const idx = appState.leads.findIndex(l => l.id === editId);
    if (idx !== -1) {
      appState.leads[idx] = {
        ...appState.leads[idx],
        name, phone, interestedBikeId: bikeId, interestedBikeName: bikeName,
        budget, status, testRideDate, notes
      };
      showToast("Customer inquiry updated.");
    }
  } else {
    appState.leads.unshift({
      id: "lead-" + Date.now(),
      name, phone, interestedBikeId: bikeId, interestedBikeName: bikeName,
      budget, status, testRideDate, notes,
      createdAt: new Date().toISOString()
    });
    showToast("Customer lead registered!");
  }

  saveState();
  closeModal("modalLead");
  renderAllViews();
}

function deleteLead(leadId) {
  if (confirm("Remove this customer inquiry?")) {
    appState.leads = appState.leads.filter(l => l.id !== leadId);
    saveState();
    renderAllViews();
    showToast("Lead removed.");
  }
}

function convertLeadToSale(leadId) {
  const lead = appState.leads.find(l => l.id === leadId);
  if (!lead) return;

  // Mark lead converted
  lead.status = "Converted to Sale";
  saveState();

  // Switch to billing & prefill
  switchToTab("tab-billing");
  document.getElementById("custName").value = lead.name;
  document.getElementById("custPhone").value = lead.phone;

  if (lead.interestedBikeId) {
    const select = document.getElementById("billSelectBike");
    select.value = lead.interestedBikeId;
    onBillingBikeSelected(lead.interestedBikeId);
  }

  showToast(`Lead converted! Ready to finalize billing for ${lead.name}.`);
}

/* ==========================================================================
   EMI & LOAN CALCULATOR MODULE
   ========================================================================== */
function initEmiCalculator() {
  const select = document.getElementById("emiBikeSelect");
  if (!select) return;

  select.innerHTML = '<option value="">-- Choose Stock Bike or Enter Custom Amount --</option>';
  appState.bikes.filter(b => b.status !== "Sold").forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = `${b.brand} ${b.model} (${formatINR(b.listingPrice)})`;
    select.appendChild(opt);
  });

  calculateStandaloneEmi();
}

function onEmiBikeSelected(bikeId) {
  if (!bikeId) return;
  const bike = appState.bikes.find(b => b.id === bikeId);
  if (!bike) return;

  const priceInput = document.getElementById("emiVehiclePrice");
  priceInput.value = bike.listingPrice;

  // Set default down payment to 20%
  const dp = Math.round(bike.listingPrice * 0.2);
  const dpSlider = document.getElementById("emiDownPaymentSlider");
  dpSlider.max = bike.listingPrice;
  dpSlider.value = dp;

  calculateStandaloneEmi();
}

function onEmiSliderChange(field, val) {
  if (field === "downPayment") {
    calculateStandaloneEmi();
  }
}

function calculateStandaloneEmi() {
  const price = Number(document.getElementById("emiVehiclePrice").value) || 0;
  const dpSlider = document.getElementById("emiDownPaymentSlider");
  dpSlider.max = price;

  const downPayment = Math.min(price, Number(dpSlider.value) || 0);
  const interestRate = Number(document.getElementById("emiInterestRate").value) || 11.5;
  const tenureMonths = Number(document.getElementById("emiTenureSelect").value) || 24;

  const dpPct = price > 0 ? ((downPayment / price) * 100).toFixed(1) : 0;
  document.getElementById("emiDownPaymentDisplay").textContent = formatINR(downPayment);
  document.getElementById("emiDownPaymentPct").textContent = `(${dpPct}%)`;

  const principal = Math.max(0, price - downPayment);
  let emi = 0;
  let totalInterest = 0;
  let totalPayable = principal;

  if (principal > 0 && tenureMonths > 0) {
    const r = (interestRate / 12) / 100;
    emi = Math.round((principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1));
    totalPayable = emi * tenureMonths;
    totalInterest = Math.max(0, totalPayable - principal);
  }

  document.getElementById("standaloneEmiVal").textContent = `${formatINR(emi)} / mo`;
  document.getElementById("standaloneEmiTenureBadge").textContent = `${tenureMonths} Months Tenure`;
  document.getElementById("ehrPrice").textContent = formatINR(price);
  document.getElementById("ehrDownPayment").textContent = formatINR(downPayment);
  document.getElementById("ehrPrincipal").textContent = formatINR(principal);
  document.getElementById("ehrInterest").textContent = formatINR(totalInterest);
  document.getElementById("ehrTotalPayable").textContent = formatINR(totalPayable);
}

function applyEmiToBilling() {
  const price = Number(document.getElementById("emiVehiclePrice").value) || 0;
  const dpSlider = document.getElementById("emiDownPaymentSlider");
  const downPayment = Number(dpSlider.value) || 0;
  const principal = Math.max(0, price - downPayment);

  switchToTab("tab-billing");

  // Select matching bike if one was chosen
  const chosenBikeId = document.getElementById("emiBikeSelect").value;
  if (chosenBikeId) {
    document.getElementById("billSelectBike").value = chosenBikeId;
    onBillingBikeSelected(chosenBikeId);
  }

  document.getElementById("billAgreedPrice").value = price;
  document.getElementById("billPaymentMode").value = "Two-Wheeler Loan / Finance";
  toggleLoanSection("Two-Wheeler Loan / Finance");
  document.getElementById("loanAmount").value = principal;
  document.getElementById("billAmountPaid").value = downPayment;
  document.getElementById("billAmountPaid").dataset.touched = "true";

  calculateBillingTotals();
  showToast("Financing quote transferred to billing desk!");
}

/* ==========================================================================
   COLLECT PENDING BALANCE MODULE
   ========================================================================== */
function openCollectBalanceModal(invoiceNo) {
  const sale = appState.sales.find(s => s.invoiceNo === invoiceNo);
  if (!sale) return;

  document.getElementById("cbInvoiceNo").value = sale.invoiceNo;
  document.getElementById("cbCustName").textContent = sale.customer.name;
  document.getElementById("cbInvNo").textContent = sale.invoiceNo;
  document.getElementById("cbBalanceDue").textContent = formatINR(sale.balance);
  document.getElementById("cbAmountPaying").value = sale.balance;
  document.getElementById("cbAmountPaying").max = sale.balance;

  openModal("modalCollectBalance");
}

function handleSaveBalanceCollection(e) {
  e.preventDefault();

  const invoiceNo = document.getElementById("cbInvoiceNo").value;
  const paying = Number(document.getElementById("cbAmountPaying").value) || 0;
  const mode = document.getElementById("cbPaymentMode").value;
  const ref = document.getElementById("cbRefNotes").value.trim();

  const sale = appState.sales.find(s => s.invoiceNo === invoiceNo);
  if (!sale) return;

  sale.amountPaid += paying;
  sale.balance = Math.max(0, sale.balance - paying);
  sale.paymentNotes = (sale.paymentNotes ? sale.paymentNotes + " | " : "") + `Paid ${formatINR(paying)} via ${mode} (${ref || 'Receipt'})`;

  saveState();
  closeModal("modalCollectBalance");
  renderAllViews();
  showToast(`Payment of ${formatINR(paying)} recorded! Remaining due: ${formatINR(sale.balance)}`);
}

/* ==========================================================================
   SOLD BIKES & SALES HISTORY MODULE
   ========================================================================== */
function renderSoldTable() {
  const tbody = document.getElementById("soldTableBody");
  const emptyEl = document.getElementById("soldEmptyState");
  tbody.innerHTML = "";

  const query = (document.getElementById("soldSearchInput").value || "").toLowerCase().trim();
  const yearFilter = document.getElementById("filterSoldYear")?.value || "ALL";
  const rtoFilter = document.getElementById("filterRtoStatus").value;
  const balanceFilter = document.getElementById("filterPaymentBalance")?.value || "ALL";

  let list = [...appState.sales];

  if (yearFilter !== "ALL") {
    list = list.filter(s => (s.saleDate || "").startsWith(yearFilter));
  }

  if (rtoFilter !== "ALL") {
    list = list.filter(s => s.rtoStatus === rtoFilter);
  }

  if (balanceFilter === "PAID") {
    list = list.filter(s => s.balance === 0);
  } else if (balanceFilter === "PENDING") {
    list = list.filter(s => s.balance > 0);
  }

  if (query) {
    list = list.filter(s => {
      const matchInv = (s.invoiceNo || "").toLowerCase().includes(query);
      const matchName = (s.customer?.name || "").toLowerCase().includes(query);
      const matchPhone = (s.customer?.phone || "").toLowerCase().includes(query);
      const matchReg = (s.regNo || "").toLowerCase().includes(query);
      const matchBike = `${s.brand} ${s.model}`.toLowerCase().includes(query);
      return matchInv || matchName || matchPhone || matchReg || matchBike;
    });
  }

  // Update summary bar based on selected year (or all if ALL)
  const summarySales = yearFilter === "ALL" ? appState.sales : appState.sales.filter(s => (s.saleDate || "").startsWith(yearFilter));
  const totalCount = summarySales.length;
  const totalRev = summarySales.reduce((acc, s) => acc + (s.grandTotal || 0), 0);
  const totalCost = summarySales.reduce((acc, s) => acc + (s.totalCost || 0), 0);
  const totalProfit = summarySales.reduce((acc, s) => acc + (s.profit || 0), 0);

  document.getElementById("soldTotalCount").textContent = `${totalCount} Units`;
  document.getElementById("soldTotalRevenue").textContent = formatINR(totalRev);
  document.getElementById("soldTotalCost").textContent = formatINR(totalCost);
  document.getElementById("soldNetProfit").textContent = formatINR(totalProfit);

  if (list.length === 0) {
    emptyEl.style.display = "block";
    return;
  }
  emptyEl.style.display = "none";

  list.forEach(sale => {
    const profitMargin = sale.totalCost > 0 ? ((sale.profit / sale.totalCost) * 100).toFixed(1) : 0;
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <strong>${sale.invoiceNo}</strong>
        <div class="inv-item-sub">📅 ${sale.saleDate}</div>
      </td>
      <td>
        <div class="tb-bike-title">${sale.brand} ${sale.model}</div>
        <div class="tb-bike-sub"><span class="highlight-reg">${sale.regNo}</span> • ${sale.year}</div>
      </td>
      <td>
        <div><strong>${sale.customer.name}</strong></div>
        <div class="tb-bike-sub">📞 ${sale.customer.phone}</div>
      </td>
      <td>
        <strong>${formatINR(sale.grandTotal)}</strong>
        <div class="inv-item-sub">${sale.paymentMode}</div>
      </td>
      <td>
        <div>${formatINR(sale.totalCost)}</div>
        <div class="inv-item-sub">Procure + Refurb</div>
      </td>
      <td>
        <strong style="color: #10b981; font-size: 14px;">+${formatINR(sale.profit)}</strong>
        <span class="badge-tag green" style="display:inline-block; font-size: 10px; margin-top: 2px;">${profitMargin}% Margin</span>
      </td>
      <td>
        ${sale.balance > 0 ? `
          <button class="btn btn-danger-outline btn-xs" onclick="openCollectBalanceModal('${sale.invoiceNo}')">
            Collect ₹${sale.balance.toLocaleString()}
          </button>
        ` : `
          <span style="color: #10b981; font-weight:700;">Paid in Full</span>
        `}
      </td>
      <td>
        <select class="select-control" style="padding: 4px 8px; font-size: 11px;" onchange="updateRtoStatus('${sale.invoiceNo}', this.value)">
          <option value="Documents Submitted" ${sale.rtoStatus === 'Documents Submitted' ? 'selected' : ''}>Documents Submitted</option>
          <option value="NOC Applied" ${sale.rtoStatus === 'NOC Applied' ? 'selected' : ''}>NOC Applied</option>
          <option value="RC Transferred" ${sale.rtoStatus === 'RC Transferred' ? 'selected' : ''}>RC Transferred</option>
          <option value="Completed / Handover Done" ${sale.rtoStatus === 'Completed / Handover Done' ? 'selected' : ''}>Completed / Handover</option>
          <option value="Pending with Buyer" ${sale.rtoStatus === 'Pending with Buyer' ? 'selected' : ''}>Pending with Buyer</option>
        </select>
      </td>
      <td>
        <div style="display:flex; gap: 4px;">
          <button class="btn btn-primary btn-xs" onclick="openOldSaleDetail('${sale.invoiceNo}')" title="Inspect Full Sale Record Dossier">
            👁️ Details
          </button>
          <button class="btn btn-outline btn-xs" onclick="reprintInvoice('${sale.invoiceNo}')" title="Reprint Official Invoice">
            🧾 Bill
          </button>
          <button class="btn btn-ghost btn-xs" onclick="deleteSaleRecord('${sale.invoiceNo}')" title="Cancel & Delete Sale">
            🗑️
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById("soldSearchInput").addEventListener("input", renderSoldTable);

function updateRtoStatus(invoiceNo, newStatus) {
  const sale = appState.sales.find(s => s.invoiceNo === invoiceNo);
  if (sale) {
    sale.rtoStatus = newStatus;
    saveState();
    showToast(`RTO Paper status for ${invoiceNo} updated to: ${newStatus}`);
  }
}

function reprintInvoice(invoiceNo) {
  const sale = appState.sales.find(s => s.invoiceNo === invoiceNo);
  if (sale) {
    renderInvoiceModal(sale);
  }
}

function deleteSaleRecord(invoiceNo) {
  if (confirm(`Are you sure you want to delete invoice record "${invoiceNo}"?`)) {
    const sale = appState.sales.find(s => s.invoiceNo === invoiceNo);
    if (sale && sale.bikeId) {
      const bike = appState.bikes.find(b => b.id === sale.bikeId);
      if (bike) {
        bike.status = "In Stock";
      }
    }
    appState.sales = appState.sales.filter(s => s.invoiceNo !== invoiceNo);
    saveState();
    renderAllViews();
    showToast("Sales record deleted and bike returned to inventory.");
  }
}

function exportSoldToCSV() {
  if (appState.sales.length === 0) {
    alert("No sales records to export.");
    return;
  }

  const headers = [
    "Invoice No", "Date", "Bike Brand", "Model", "Reg No", "Year", "Buyer Name",
    "Buyer Phone", "Sale Amount (INR)", "Showroom Cost (INR)", "Gross Profit (INR)",
    "Payment Mode", "RTO Status"
  ];

  const rows = appState.sales.map(s => [
    `"${s.invoiceNo}"`,
    `"${s.saleDate}"`,
    `"${s.brand}"`,
    `"${s.model}"`,
    `"${s.regNo}"`,
    s.year,
    `"${s.customer.name}"`,
    `"${s.customer.phone}"`,
    s.grandTotal,
    s.totalCost,
    s.profit,
    `"${s.paymentMode}"`,
    `"${s.rtoStatus}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Bike_Dilado_Sales_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Sales history exported to CSV!");
}

function exportStockToCSV() {
  if (appState.bikes.length === 0) {
    alert("No bikes in inventory.");
    return;
  }

  const headers = [
    "ID", "Brand", "Model", "Reg No", "Year", "KM", "Ownership", "Inspection Grade",
    "Purchase Cost", "Refurb Cost", "Total Cost", "Listing Price", "Status", "Days on Floor"
  ];

  const rows = appState.bikes.map(b => [
    `"${b.id}"`,
    `"${b.brand}"`,
    `"${b.model}"`,
    `"${b.regNo}"`,
    b.year,
    b.kms,
    `"${b.owners}"`,
    `"${b.inspectionGrade || 'Grade A'}"`,
    b.purchaseCost,
    b.refurbCost,
    (b.purchaseCost || 0) + (b.refurbCost || 0),
    b.listingPrice,
    `"${b.status}"`,
    getDaysInShowroom(b.createdAt)
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Bike_Dilado_Inventory_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Inventory exported to CSV!");
}

/* ==========================================================================
   SELLER PURCHASE VOUCHER
   ========================================================================== */
function showPurchaseVoucherModal() {
  document.getElementById("pvDate").textContent = new Date().toLocaleDateString("en-IN");
  openModal("modalPurchaseVoucher");
}

function printDailyReport() {
  window.print();
}

/* ==========================================================================
   SHOWROOM SETTINGS & BACKUP HANDLERS
   ========================================================================== */
function loadSettingsForm() {
  document.getElementById("setBusinessName").value = appState.settings.showroomName || "BIKE DILADO";
  document.getElementById("setTagline").value = appState.settings.tagline || "";
  document.getElementById("setPhone").value = appState.settings.phone || "";
  document.getElementById("setEmail").value = appState.settings.email || "";
  document.getElementById("setAddress").value = appState.settings.address || "";
  document.getElementById("setGstin").value = appState.settings.gstin || "";
  document.getElementById("setInvoicePrefix").value = appState.settings.invoicePrefix || "BD-2026-";
  document.getElementById("setInvoiceTerms").value = appState.settings.invoiceTerms || "";
}

function saveSettings(e) {
  e.preventDefault();
  appState.settings = {
    ...appState.settings,
    showroomName: document.getElementById("setBusinessName").value.trim(),
    tagline: document.getElementById("setTagline").value.trim(),
    phone: document.getElementById("setPhone").value.trim(),
    email: document.getElementById("setEmail").value.trim(),
    address: document.getElementById("setAddress").value.trim(),
    gstin: document.getElementById("setGstin").value.trim(),
    invoicePrefix: document.getElementById("setInvoicePrefix").value.trim(),
    invoiceTerms: document.getElementById("setInvoiceTerms").value.trim()
  };

  saveState();
  renderAllViews();
  showToast("Showroom profile & invoice settings saved!");
}

function exportDataBackup() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `Bike_Dilado_Backup_${new Date().toISOString().split("T")[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Full Showroom backup downloaded!");
}

function importDataBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (parsed.bikes && parsed.sales) {
        appState = parsed;
        saveState();
        renderAllViews();
        initBillingBikeSelect();
        initEmiCalculator();
        showToast("Backup restored successfully!");
      } else {
        alert("Invalid backup file structure.");
      }
    } catch (err) {
      alert("Error parsing backup JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function resetToSampleData() {
  if (confirm("Reset showroom database back to sample demo inventory and sales records?")) {
    appState = {
      settings: { ...INITIAL_SETTINGS },
      bikes: JSON.parse(JSON.stringify(INITIAL_BIKES)),
      sales: JSON.parse(JSON.stringify(INITIAL_SALES)),
      leads: JSON.parse(JSON.stringify(INITIAL_LEADS))
    };
    saveState();
    renderAllViews();
    initBillingBikeSelect();
    initEmiCalculator();
    showToast("Reset to sample demo data complete!");
  }
}

/* ==========================================================================
   MODAL & TOAST HELPERS
   ========================================================================== */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("show");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("show");
  }
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMsg");
  msgEl.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function setupEventListeners() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal("modalAddBike");
      closeModal("modalInvoice");
      closeModal("modalPriceTag");
      closeModal("modalGatePass");
      closeModal("modalLead");
      closeModal("modalCollectBalance");
      closeModal("modalPurchaseVoucher");
      closeModal("modalArchiveViewer");
      closeModal("modalOldSaleDetail");
      closeModal("modalYearlyAudit");
    }

    // Ctrl+K to jump to search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const search = document.getElementById("stockSearchInput");
      if (search) {
        switchToTab("tab-stock");
        search.focus();
      }
    }
  });

  const btnExport = document.getElementById("btnExportDataPrompt");
  if (btnExport) {
    btnExport.addEventListener("click", exportDataBackup);
  }

  const archiveSearch = document.getElementById("archiveSearchInput");
  if (archiveSearch) {
    archiveSearch.addEventListener("input", renderArchiveRecordsTable);
  }
}

/* ==========================================================================
   YEARLY DATA BACKUP & ANNUAL AUDIT MODULE
   ========================================================================== */
function openYearlyBackupModal() {
  switchToTab("tab-settings");
  const el = document.getElementById("yearlyBackupSelect");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    updateYearlyBackupStats();
  }
}

function updateYearlyBackupStats() {
  const select = document.getElementById("yearlyBackupSelect");
  if (!select) return;
  const year = select.value;

  const lblJson = document.getElementById("lblYearJson");
  const lblCsv = document.getElementById("lblYearCsv");
  if (lblJson) lblJson.textContent = year;
  if (lblCsv) lblCsv.textContent = year;

  const filteredSales = year === "ALL" 
    ? appState.sales 
    : appState.sales.filter(s => (s.saleDate || "").startsWith(year));

  const totalRev = filteredSales.reduce((acc, s) => acc + (s.grandTotal || 0), 0);
  const totalCost = filteredSales.reduce((acc, s) => acc + (s.totalCost || 0), 0);
  const totalProfit = filteredSales.reduce((acc, s) => acc + (s.profit || 0), 0);
  const marginPct = totalCost > 0 ? ((totalProfit / totalCost) * 100).toFixed(1) : 0;

  const summaryEl = document.getElementById("yearlyBackupStatSummary");
  if (summaryEl) {
    if (filteredSales.length === 0) {
      summaryEl.innerHTML = `<strong>${year}:</strong> 0 Sales recorded in active showroom database.`;
    } else {
      summaryEl.innerHTML = `
        <strong>${year}:</strong> ${filteredSales.length} Units Sold | 
        Rev: <strong>${formatINR(totalRev)}</strong> | 
        Profit: <strong style="color:#10b981;">+${formatINR(totalProfit)} (${marginPct}%)</strong>
      `;
    }
  }
}

function downloadYearlyPackage(type) {
  const select = document.getElementById("yearlyBackupSelect");
  const year = select ? select.value : "2026";

  const filteredSales = year === "ALL" 
    ? appState.sales 
    : appState.sales.filter(s => (s.saleDate || "").startsWith(year));

  if (filteredSales.length === 0) {
    alert(`No sales records found for year ${year} in active database.`);
    return;
  }

  const totalRev = filteredSales.reduce((acc, s) => acc + (s.grandTotal || 0), 0);
  const totalCost = filteredSales.reduce((acc, s) => acc + (s.totalCost || 0), 0);
  const totalProfit = filteredSales.reduce((acc, s) => acc + (s.profit || 0), 0);

  if (type === "JSON") {
    const backupPackage = {
      archiveType: "YEARLY_SALES_AND_INVENTORY_BACKUP",
      backupYear: year,
      exportedAt: new Date().toISOString(),
      showroom: { ...appState.settings },
      metrics: {
        totalUnitsSold: filteredSales.length,
        totalSalesRevenue: totalRev,
        totalProcurementCost: totalCost,
        netRealizedProfit: totalProfit
      },
      sales: filteredSales,
      currentInventorySnapshot: appState.bikes
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupPackage, null, 2));
    const dl = document.createElement("a");
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", `Bike_Dilado_Yearly_Backup_${year}_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
    showToast(`Yearly Backup Package for ${year} downloaded as JSON!`);
  } else if (type === "CSV") {
    const headers = [
      "Invoice No", "Date", "Bike Brand", "Model", "Reg No", "Mfg Year", "Buyer Name",
      "Buyer Phone", "Buyer ID Proof", "Sale Amount (INR)", "Procure Cost (INR)",
      "Refurb Cost (INR)", "Total Cost (INR)", "Gross Profit (INR)", "Payment Mode", "RTO Status"
    ];

    const rows = filteredSales.map(s => [
      `"${s.invoiceNo}"`,
      `"${s.saleDate}"`,
      `"${s.brand}"`,
      `"${s.model}"`,
      `"${s.regNo}"`,
      s.year,
      `"${s.customer ? s.customer.name : ''}"`,
      `"${s.customer ? s.customer.phone : ''}"`,
      `"${s.customer ? (s.customer.idType + ' - ' + s.customer.idNumber) : ''}"`,
      s.grandTotal || 0,
      s.purchaseCost || 0,
      s.refurbCost || 0,
      s.totalCost || 0,
      s.profit || 0,
      `"${s.paymentMode || ''}"`,
      `"${s.rtoStatus || ''}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Bike_Dilado_Sales_Audit_${year}_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Sales Audit Sheet for ${year} exported to CSV!`);
  }
}

function printAnnualAuditReport() {
  const select = document.getElementById("yearlyBackupSelect");
  const year = select ? select.value : "2026";

  const salesList = year === "ALL" 
    ? [...appState.sales] 
    : appState.sales.filter(s => (s.saleDate || "").startsWith(year));

  let displayList = salesList;
  if (displayList.length === 0 && year === "2025") {
    displayList = SAMPLE_2025_SALES;
  }

  // Populate Header
  document.getElementById("auditShowroomName").textContent = appState.settings.showroomName || "BIKE DILADO";
  document.getElementById("auditShowroomAddress").textContent = appState.settings.address || "";
  document.getElementById("auditGstin").textContent = appState.settings.gstin || "27AABCB1234F1Z8";
  document.getElementById("auditPhone").textContent = appState.settings.phone || "";
  document.getElementById("auditPeriodLabel").textContent = year === "ALL" ? "Cumulative Showroom All-Time" : `Calendar Year ${year}`;
  document.getElementById("auditGeneratedDate").textContent = new Date().toLocaleDateString("en-IN");
  document.getElementById("auditTableYearLabel").textContent = year;

  // Compute Totals
  const totalUnits = displayList.length;
  const totalRev = displayList.reduce((acc, s) => acc + (s.grandTotal || 0), 0);
  const totalCost = displayList.reduce((acc, s) => acc + (s.totalCost || 0), 0);
  const totalProfit = displayList.reduce((acc, s) => acc + (s.profit || 0), 0);
  const avgMargin = totalCost > 0 ? ((totalProfit / totalCost) * 100).toFixed(1) : 0;

  document.getElementById("auditUnitsVal").textContent = `${totalUnits} Units`;
  document.getElementById("auditRevenueVal").textContent = formatINR(totalRev);
  document.getElementById("auditCostVal").textContent = formatINR(totalCost);
  document.getElementById("auditProfitVal").textContent = formatINR(totalProfit);
  document.getElementById("auditMarginVal").textContent = `${avgMargin}%`;

  document.getElementById("auditFootCost").textContent = formatINR(totalCost);
  document.getElementById("auditFootRevenue").textContent = formatINR(totalRev);
  document.getElementById("auditFootProfit").textContent = formatINR(totalProfit);

  // Table Body
  const tbody = document.getElementById("auditTableBody");
  tbody.innerHTML = "";

  if (displayList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 20px; color:#64748b;">No delivery transactions recorded for ${year}.</td></tr>`;
  } else {
    displayList.forEach((s, idx) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td>
          <strong>${s.invoiceNo}</strong><br>
          <small style="color:#64748b;">${s.saleDate}</small>
        </td>
        <td>
          <strong>${s.brand} ${s.model}</strong><br>
          <span style="font-family:monospace; font-weight:700;">${s.regNo}</span> (${s.year})
        </td>
        <td>
          <strong>${s.customer ? s.customer.name : 'Walk-in Buyer'}</strong><br>
          <small style="color:#64748b;">${s.customer ? s.customer.phone : ''}</small>
        </td>
        <td>${formatINR(s.totalCost)}</td>
        <td><strong>${formatINR(s.grandTotal)}</strong></td>
        <td style="text-align:right; color:#16a34a; font-weight:700;">+${formatINR(s.profit)}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  openModal("modalYearlyAudit");
}

/* ==========================================================================
   HISTORICAL SALES & EXPORTED ARCHIVE EXPLORER
   ========================================================================== */
function openArchiveExplorerModal() {
  openModal("modalArchiveViewer");
  if (!activeArchiveData.sales || activeArchiveData.sales.length === 0) {
    loadActiveArchiveIntoViewer();
  }
}

function loadActiveArchiveIntoViewer() {
  activeArchiveData = {
    sourceName: "Active Showroom Database (Current)",
    sales: JSON.parse(JSON.stringify(appState.sales)),
    period: "Live Showroom Sales",
    isExternal: false
  };
  populateArchiveViewerState();
}

function loadSampleHistoricalArchive() {
  activeArchiveData = {
    sourceName: "2025 Annual Historical Sales Backup (Demo Archive)",
    sales: JSON.parse(JSON.stringify(SAMPLE_2025_SALES)),
    period: "Calendar Year 2025",
    isExternal: true
  };
  populateArchiveViewerState();
  showToast("Loaded 2025 historical archive with 4 verified sales!");
}

function handleArchiveFileSelected(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      let salesList = [];
      let period = "Exported File";

      if (Array.isArray(parsed)) {
        salesList = parsed;
      } else if (parsed.sales && Array.isArray(parsed.sales)) {
        salesList = parsed.sales;
        period = parsed.backupYear ? `Year ${parsed.backupYear}` : (parsed.exportedAt ? new Date(parsed.exportedAt).toLocaleDateString() : "Archive File");
      } else if (parsed.sales) {
        salesList = Object.values(parsed.sales);
      }

      if (salesList.length === 0) {
        alert("The selected JSON file does not contain any recognizable sales records.");
        return;
      }

      activeArchiveData = {
        sourceName: file.name,
        sales: salesList,
        period: period,
        isExternal: true
      };

      populateArchiveViewerState();
      showToast(`Loaded ${salesList.length} sales from ${file.name}!`);
    } catch (err) {
      alert("Error reading backup JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function populateArchiveViewerState() {
  const lbl = document.getElementById("archiveSourceLabel");
  if (lbl) lbl.textContent = activeArchiveData.sourceName;

  const sales = activeArchiveData.sales || [];
  const metaStrip = document.getElementById("archiveMetaStrip");
  const toolbar = document.getElementById("archiveFilterToolbar");
  const tableContainer = document.getElementById("archiveTableContainer");
  const placeholder = document.getElementById("archiveEmptyPlaceholder");
  const btnMerge = document.getElementById("btnMergeArchiveData");

  if (sales.length === 0) {
    if (metaStrip) metaStrip.style.display = "none";
    if (toolbar) toolbar.style.display = "none";
    if (tableContainer) tableContainer.style.display = "none";
    if (placeholder) placeholder.style.display = "block";
    if (btnMerge) btnMerge.style.display = "none";
    return;
  }

  if (metaStrip) metaStrip.style.display = "grid";
  if (toolbar) toolbar.style.display = "flex";
  if (tableContainer) tableContainer.style.display = "block";
  if (placeholder) placeholder.style.display = "none";
  if (btnMerge) btnMerge.style.display = "inline-flex";

  const totalRev = sales.reduce((acc, s) => acc + (s.grandTotal || 0), 0);
  const totalCost = sales.reduce((acc, s) => acc + (s.totalCost || 0), 0);
  const totalProfit = sales.reduce((acc, s) => acc + (s.profit || 0), 0);

  document.getElementById("amsDate").textContent = activeArchiveData.period || "Multiple Years";
  document.getElementById("amsUnits").textContent = `${sales.length} Units`;
  document.getElementById("amsRevenue").textContent = formatINR(totalRev);
  document.getElementById("amsCost").textContent = formatINR(totalCost);
  document.getElementById("amsProfit").textContent = formatINR(totalProfit);

  renderArchiveRecordsTable();
}

function renderArchiveRecordsTable() {
  const tbody = document.getElementById("archiveTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const query = (document.getElementById("archiveSearchInput")?.value || "").toLowerCase().trim();
  const yearFilter = document.getElementById("filterArchiveYear")?.value || "ALL";

  let list = [...(activeArchiveData.sales || [])];

  if (yearFilter !== "ALL") {
    list = list.filter(s => (s.saleDate || "").startsWith(yearFilter));
  }

  if (query) {
    list = list.filter(s => {
      const inv = (s.invoiceNo || "").toLowerCase();
      const name = (s.customer?.name || "").toLowerCase();
      const phone = (s.customer?.phone || "").toLowerCase();
      const reg = (s.regNo || "").toLowerCase();
      const bike = `${s.brand || ''} ${s.model || ''}`.toLowerCase();
      return inv.includes(query) || name.includes(query) || phone.includes(query) || reg.includes(query) || bike.includes(query);
    });
  }

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:24px; color:var(--text-muted);">No sales records match your filter criteria in this archive.</td></tr>`;
    return;
  }

  list.forEach(sale => {
    const profitMargin = sale.totalCost > 0 ? ((sale.profit / sale.totalCost) * 100).toFixed(1) : 0;
    const isAlreadyInActive = appState.sales.some(s => s.invoiceNo === sale.invoiceNo);
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <strong>${sale.invoiceNo}</strong>
        ${isAlreadyInActive ? '<span class="badge-tag green" style="font-size:9px; margin-left:4px;">In System</span>' : '<span class="badge-tag amber" style="font-size:9px; margin-left:4px;">Archive Only</span>'}
        <div class="inv-item-sub">📅 ${sale.saleDate}</div>
      </td>
      <td>
        <div class="tb-bike-title">${sale.brand} ${sale.model}</div>
        <div class="tb-bike-sub"><span class="highlight-reg">${sale.regNo}</span> • ${sale.year}</div>
      </td>
      <td>
        <div><strong>${sale.customer?.name || 'Customer'}</strong></div>
        <div class="tb-bike-sub">📞 ${sale.customer?.phone || 'N/A'}</div>
      </td>
      <td>
        <strong>${formatINR(sale.grandTotal)}</strong>
        <div class="inv-item-sub">${sale.paymentMode || 'Paid'}</div>
      </td>
      <td>
        <div>${formatINR(sale.totalCost)}</div>
      </td>
      <td>
        <strong style="color: #10b981; font-size: 14px;">+${formatINR(sale.profit)}</strong>
        <span class="badge-tag green" style="display:inline-block; font-size: 10px; margin-top: 2px;">${profitMargin}% Margin</span>
      </td>
      <td>
        ${sale.balance > 0 ? `<span style="color:#ef4444; font-weight:700;">Due ₹${sale.balance.toLocaleString()}</span>` : `<span style="color:#10b981; font-weight:700;">Paid in Full</span>`}
      </td>
      <td>
        <span class="badge-tag">${sale.rtoStatus || 'RC Transferred'}</span>
      </td>
      <td>
        <div style="display:flex; gap: 4px;">
          <button class="btn btn-primary btn-xs" onclick="openOldSaleDetail('${sale.invoiceNo}')" title="Inspect Full Sale Record Dossier">
            👁️ Details
          </button>
          <button class="btn btn-outline btn-xs" onclick="reprintArchiveInvoice('${sale.invoiceNo}')" title="Reprint Official Invoice">
            🧾 Bill
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openOldSaleDetail(invoiceNo) {
  let sale = (activeArchiveData.sales || []).find(s => s.invoiceNo === invoiceNo);
  if (!sale) {
    sale = appState.sales.find(s => s.invoiceNo === invoiceNo);
  }
  if (!sale) {
    sale = SAMPLE_2025_SALES.find(s => s.invoiceNo === invoiceNo);
  }
  if (!sale) {
    alert("Record not found for invoice: " + invoiceNo);
    return;
  }

  currentViewingArchiveSale = sale;
  currentViewingSale = sale;

  // Populate Header & Summary Strip
  document.getElementById("osdTitle").textContent = `Historical Sale Record Dossier: ${sale.invoiceNo}`;
  document.getElementById("osdSubtitle").textContent = `${sale.brand} ${sale.model} (${sale.regNo}) • Delivered on ${sale.saleDate}`;
  document.getElementById("osdInvoiceNo").textContent = sale.invoiceNo;
  document.getElementById("osdSaleDate").textContent = sale.saleDate;
  document.getElementById("osdPayMode").textContent = sale.paymentMode || "Direct Payment";
  document.getElementById("osdProfit").textContent = `+${formatINR(sale.profit || 0)}`;

  // Customer Information
  const c = sale.customer || {};
  document.getElementById("osdCustName").textContent = c.name || "N/A";
  document.getElementById("osdCustPhone").textContent = c.phone || "N/A";
  document.getElementById("osdCustId").textContent = c.idType ? `${c.idType} (${c.idNumber || 'Verified'})` : "Verified Aadhaar / DL";
  document.getElementById("osdCustCity").textContent = c.city || "Mumbai";
  document.getElementById("osdCustAddress").textContent = c.address || "Showroom Registered Buyer";

  // Vehicle Specifications
  document.getElementById("osdBikeModel").textContent = `${sale.brand} ${sale.model}`;
  document.getElementById("osdRegNo").textContent = sale.regNo;
  document.getElementById("osdYearKm").textContent = `${sale.year} | ${(sale.kms || 0).toLocaleString()} km | ${sale.owners || '1st Owner'}`;
  document.getElementById("osdEngine").textContent = sale.engine || "Verified & Inspected";
  document.getElementById("osdChassis").textContent = sale.chassis || "Verified & Inspected";

  // Financial Breakdown
  const procure = sale.purchaseCost || (sale.totalCost ? sale.totalCost - (sale.refurbCost || 0) : 0);
  const refurb = sale.refurbCost || 0;
  const addons = (sale.rtoFee || 0) + (sale.accessories || 0) + (sale.warranty || 0);

  document.getElementById("osdProcureCost").textContent = formatINR(procure);
  document.getElementById("osdRefurbCost").textContent = formatINR(refurb);
  document.getElementById("osdTotalCost").textContent = formatINR(sale.totalCost || (procure + refurb));
  document.getElementById("osdAgreedPrice").textContent = formatINR(sale.agreedPrice || sale.grandTotal);
  document.getElementById("osdDiscount").textContent = sale.discount > 0 ? `-${formatINR(sale.discount)}` : "₹0";
  document.getElementById("osdAddons").textContent = formatINR(addons);
  document.getElementById("osdGrandTotal").textContent = formatINR(sale.grandTotal);
  document.getElementById("osdPaid").textContent = formatINR(sale.amountPaid);
  document.getElementById("osdBalance").textContent = formatINR(sale.balance || 0);

  // RTO & Paperwork
  document.getElementById("osdRtoStage").textContent = sale.rtoStatus || "Completed";
  document.getElementById("osdWarranty").textContent = sale.warrantyTerms || "Certified Showroom Powertrain Guarantee";
  document.getElementById("osdPayNotes").textContent = sale.paymentRef || (sale.paymentNotes || "Showroom Verified Transaction");

  openModal("modalOldSaleDetail");
}

function reprintFromOsd() {
  if (currentViewingArchiveSale) {
    closeModal("modalOldSaleDetail");
    renderInvoiceModal(currentViewingArchiveSale);
  }
}

function reprintArchiveInvoice(invoiceNo) {
  let sale = (activeArchiveData.sales || []).find(s => s.invoiceNo === invoiceNo);
  if (!sale) sale = appState.sales.find(s => s.invoiceNo === invoiceNo);
  if (!sale) sale = SAMPLE_2025_SALES.find(s => s.invoiceNo === invoiceNo);
  if (sale) {
    renderInvoiceModal(sale);
  }
}

function mergeArchiveRecordsIntoSystem() {
  const archiveSales = activeArchiveData.sales || [];
  if (archiveSales.length === 0) {
    alert("No records in current archive to merge.");
    return;
  }

  let addedCount = 0;
  let updatedCount = 0;

  archiveSales.forEach(rec => {
    const existingIdx = appState.sales.findIndex(s => s.invoiceNo === rec.invoiceNo);
    if (existingIdx !== -1) {
      appState.sales[existingIdx] = { ...appState.sales[existingIdx], ...rec };
      updatedCount++;
    } else {
      appState.sales.unshift({ ...rec });
      addedCount++;
    }
  });

  saveState();
  renderAllViews();
  populateArchiveViewerState();
  updateYearlyBackupStats();

  showToast(`Successfully merged: ${addedCount} new records added, ${updatedCount} existing updated!`);
}
