# 🏍️ BIKE DILADO - Used Bike Showroom Management System

**BIKE DILADO** is a comprehensive, modern web-based dealership ERP and accounts suite designed specifically for used two-wheeler showrooms. It streamlines inventory listing, 50-point inspection grading, GST billing & invoicing, financing/EMI calculation, customer leads CRM, and RTO paper dispatch tracking.

---

## 🌟 Key Features

### 1. 🏍️ Bike Stock & Inventory Management
- **Detailed Two-Wheeler Profiling**: Brand, Model, Registration Number, Year of Mfg, Kilometers, Fuel Type, Color, Chassis / VIN, Engine Number, Ownership (`1st Owner`, `2nd Owner`, etc.).
- **Procurement & Refurbishment Cost Tracking**:
  - Purchase Price (₹)
  - Servicing & Repair Cost (₹) (e.g., new tires, battery, engine oil flush, teflon coating)
  - Total Procurement Cost (`Purchase + Refurbishment`)
  - Target Listing Price (₹) with real-time potential profit margin calculation.
- **Document Checklist Verification**: Original RC Book/Smart Card, Valid Insurance, PUC Certificate, Signed RTO Form 29 & 30, 2 Original Keys, Bank NOC.
- **Stock Status Modes**: `In Stock (Floor Ready)`, `Under Servicing / Inspection`, `Booked (Token Received)`, `Sold`.
- **Aging Stock & Velocity Tracker**:
  - Real-time `Days on Floor` tracking.
  - Urgency pills: `Fresh Stock (< 15 Days)`, `Standard (15-30 Days)`, `Aging Stock (> 30 Days)`.
- **Dual Display Modes**: Sleek automotive vehicle card grid and high-density inventory table view.

### 2. 🧾 Showroom Billing & Delivery Receipt
- **Vehicle Pre-population**: Selecting a bike automatically loads all specifications and purchase cost.
- **Customer Particulars**: Full name, mobile number, residential address, city, and verified government ID (Aadhaar, Driving License, PAN, Voter ID).
- **Line Items & Add-ons**: Agreed sale price, showroom discount, RTO transfer fee, helmet & care kit, extended warranty.
- **Live Profit Projection**: Shows the showroom's net profit before finalizing the bill.
- **Payment & Financing**:
  - Cash, UPI (GPay/PhonePe), Bank Transfer (NEFT/RTGS), Two-Wheeler Loan / EMI Finance.
  - Down payment and balance due tracking.
- **Official Printable Tax / Delivery Invoice**:
  - Formatted strictly for **standard A4 printing** (`@media print` clean layout with zero UI clutter).
  - Showroom letterhead, GSTIN, invoice number, HSN codes (`8711`, `9987`, `6506`), automatic conversion of amount to words (*Indian numbering format*), warranty terms, RTO undertaking, and official seal.

### 3. 👥 Customer Leads & Inquiries CRM
- Record prospective buyers with phone numbers, desired model, budget, and follow-up / test ride date.
- Status tracking: `Hot Prospect`, `Test Ride Scheduled`, `Follow-up Needed`, `Converted to Sale`.
- **One-Click "Convert to Sale"**: Instantly opens the billing desk with the customer details and selected bike pre-filled.

### 4. 🧮 Showroom EMI & Loan Desk
- Interactive loan calculator for walk-in showroom visitors.
- Interactive Down Payment slider with dynamic percentage feedback.
- Instant calculation of Monthly EMI, Total Interest, and Total Repayment across 12, 24, 36, or 48 months.
- One-click `Apply Quote to New Billing` button.

### 5. 🏷️ Showroom Floor Tools
- **Printable Handlebar Price Tag**: Hang on bike handlebars with model specs, certified badge, price, and monthly EMI.
- **Security Delivery Gate Pass**: Official vehicle release voucher for security checkout.
- **Outstanding Balance Collector**: Collect pending customer dues directly from the sales table.
- **Seller Purchase Voucher**: Legal agreement and declaration protecting the showroom from previous owners' traffic fines/e-challans.
- **WhatsApp Direct Sharing**: Share bike spec sheets and invoice receipts directly to customer WhatsApp numbers.
- **Day & Night Themes**: Toggle between luxury Obsidian Dark and clean Showroom Light mode.

---

## 🚀 Getting Started

### Local Setup
No complex dependencies or build steps required. Simply run a local HTTP server:

```bash
# Using Python
python -m http.server 5173

# Or using Node.js
npx serve -l 5173
```

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 📁 Project Structure

```
├── index.html       # Main application markup, modals & print templates
├── style.css        # Responsive dark/light theme, automotive cards & A4 print CSS
├── app.js           # Core state controller, CRM logic, EMI engine & localStorage
├── assets/          # High-resolution showroom photography
│   ├── royal_enfield.jpg
│   ├── yamaha_r15.jpg
│   ├── ktm_duke.jpg
│   └── activa_scooter.jpg
└── README.md        # Project documentation
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
