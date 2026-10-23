const iconPaths = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  bed: '<path d="M3 18v-7a2 2 0 0 1 2-2h5a3 3 0 0 1 3 3v6"/><path d="M3 16h18v4M13 12h5a3 3 0 0 1 3 3v1"/>',
  pill: '<path d="m10.5 20.5 10-10a5 5 0 0 0-7-7l-10 10a5 5 0 0 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  wallet: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18M16 14h2"/>',
  flask: '<path d="M9 3h6M10 3v7L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 10V3"/><path d="M7 16h10"/>',
  scan: '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M7 12h10M12 7v10"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 1 1 4.5 1.5c-.9 1.1-2.1 1.3-2.1 3M12 17h.01"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  pulse: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6a1.5 1.5 0 0 0-3-1.5h0a1.5 1.5 0 0 0-3 1.5ZM9 12h6M9 16h6"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',
  report: '<path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 6-7"/>',
  network: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="m11 7-5 10m7-10 5 10M7 19h10"/>'
};

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((element) => {
    const icon = iconPaths[element.dataset.icon];
    if (icon) element.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg>`;
  });
}

const seedPatients = [
  { id: "RM-240812", name: "Siti Aminah", initials: "SA", gender: "Perempuan", age: 34, birthDate: "1992-02-14", nik: "DEMO-0001", phone: "08xx-xxx-0001", address: "Data simulasi", clinic: "Poli Penyakit Dalam", doctor: "dr. Maya Putri", status: "Menunggu" },
  { id: "RM-240813", name: "Budi Santoso", initials: "BS", gender: "Laki-laki", age: 52, birthDate: "1974-05-10", nik: "DEMO-0002", phone: "08xx-xxx-0002", address: "Data simulasi", clinic: "Poli Jantung", doctor: "dr. Andi Pratama", status: "Dalam pemeriksaan" },
  { id: "RM-240814", name: "Dewi Lestari", initials: "DL", gender: "Perempuan", age: 27, birthDate: "1999-03-22", nik: "DEMO-0003", phone: "08xx-xxx-0003", address: "Data simulasi", clinic: "Poli Kandungan", doctor: "dr. Rina Safitri", status: "Menunggu" },
  { id: "RM-240815", name: "Agus Wijaya", initials: "AW", gender: "Laki-laki", age: 46, birthDate: "1980-09-02", nik: "DEMO-0004", phone: "08xx-xxx-0004", address: "Data simulasi", clinic: "Poli Saraf", doctor: "dr. Aditya Rahman", status: "Selesai" },
  { id: "RM-240816", name: "Nadia Permata", initials: "NP", gender: "Perempuan", age: 19, birthDate: "2007-01-17", nik: "DEMO-0005", phone: "08xx-xxx-0005", address: "Data simulasi", clinic: "Poli Anak", doctor: "dr. Maya Putri", status: "Menunggu" },
  { id: "RM-240817", name: "Hendra Gunawan", initials: "HG", gender: "Laki-laki", age: 61, birthDate: "1965-08-06", nik: "DEMO-0006", phone: "08xx-xxx-0006", address: "Data simulasi", clinic: "Poli Penyakit Dalam", doctor: "dr. Andi Pratama", status: "Menunggu" }
];

const localNow = new Date();
const today = `${localNow.getFullYear()}-${String(localNow.getMonth() + 1).padStart(2, "0")}-${String(localNow.getDate()).padStart(2, "0")}`;
const seedVisits = seedPatients.slice(0, 5).map((patient, index) => ({
  id: `RJ-${String(index + 1).padStart(4, "0")}`, patientId: patient.id, date: today,
  time: `${String(8 + Math.floor(index / 2)).padStart(2, "0")}:${index % 2 ? "45" : "30"}`,
  clinic: patient.clinic, doctor: patient.doctor,
  type: "Rawat jalan", status: patient.status
}));
const emptyState = () => ({
  patients: seedPatients, visits: seedVisits, admissions: [], soap: [],
  lab: [], radiology: [], prescriptions: [], charges: [], messages: [], audit: []
});
const storageKey = "simrs-pku-delanggu-demo-v2";
let storageWarning = "";
let state;
try {
  const stored = localStorage.getItem(storageKey);
  state = stored ? { ...emptyState(), ...JSON.parse(stored) } : emptyState();
} catch (error) {
  state = emptyState();
  storageWarning = `Penyimpanan browser tidak dapat dibaca: ${error.message}`;
}

const moduleLabels = {
  dashboard: "Dashboard", pasien: "Data pasien", rme: "Rekam medis (SOAP)",
  "rawat-jalan": "Rawat jalan", "rawat-inap": "Rawat inap", farmasi: "Farmasi",
  keuangan: "Keuangan", komunikasi: "Komunikasi", laboratorium: "Laboratorium",
  radiologi: "Radiologi", laporan: "Laporan & RL", integrasi: "Integrasi & keamanan"
};
const pageContent = document.getElementById("page-content");
const modal = document.getElementById("patient-modal");
const modalContent = document.getElementById("modal-content");
const searchInput = document.getElementById("global-search");
const searchResults = document.getElementById("search-results");
let activeModule = "dashboard";
let toastTimer;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function initials(name) {
  return String(name || "").split(/\s+/).map((part) => part[0]).slice(0, 2).join("").toUpperCase();
}

function avatar(name, value = initials(name)) {
  return `<span class="avatar">${escapeHtml(value)}</span>`;
}

function patientFor(id) {
  return state.patients.find((patient) => patient.id === id);
}

function visitFor(id) {
  return state.visits.find((visit) => visit.id === id);
}

function nextId(prefix, rows) {
  return `${prefix}-${String(rows.length + 1).padStart(4, "0")}`;
}

function formatDate(date) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${date}T00:00:00`));
}

function formatMoney(value) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(Number(value) || 0);
}

function statusPill(status) {
  const kind = /menunggu|belum dibayar|baru/i.test(status) ? "waiting" : /selesai|lunas|diserahkan|aktif/i.test(status) ? "done" : "";
  return `<span class="status-pill ${kind}">${escapeHtml(status)}</span>`;
}

function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.toggle("toast-error", isError);
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3500);
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("SIMRS demo data could not be saved", error);
    showToast(`Gagal menyimpan data: ${error.message}`, true);
    return false;
  }
}

function commit(description, change) {
  const previous = state;
  state = JSON.parse(JSON.stringify(state));
  change(state);
  state.audit.unshift({
    id: `AUD-${Date.now()}`, at: new Date().toISOString(),
    actor: "Pengguna demo", action: description, module: moduleLabels[activeModule]
  });
  state.audit = state.audit.slice(0, 250);
  if (!saveState()) state = previous;
  else renderPage();
}

function openDialog(title, subtitle, fields, action, submitText = "Simpan") {
  modalContent.innerHTML = `
    <div class="modal-heading"><div><span class="eyebrow">SIMRS · MODE DEMO</span><h2 id="modal-title">${escapeHtml(title)}</h2><p>${escapeHtml(subtitle)}</p></div>
    <button type="button" class="icon-button modal-close" data-action="close-modal" aria-label="Tutup"><span data-icon="close"></span></button></div>
    <form data-form-action="${escapeHtml(action)}"><div class="form-grid">${fields}</div>
      <div class="form-note"><span data-icon="info"></span>Gunakan data fiktif saja. Data ini disimpan lokal di browser.</div>
      <div class="modal-actions"><button type="button" class="button button-secondary" data-action="close-modal">Batal</button><button type="submit" class="button button-primary">${escapeHtml(submitText)}</button></div>
    </form>`;
  hydrateIcons(modalContent);
  modal.hidden = false;
  const firstField = modalContent.querySelector("input, select, textarea");
  if (firstField) firstField.focus();
}

function closeDialog() {
  modal.hidden = true;
}

function field(label, name, type = "text", options = {}) {
  const full = options.full ? " full-field" : "";
  const required = options.required === false ? "" : " required";
  if (type === "select") {
    const choices = options.choices || [];
    return `<label class="form-field${full}">${escapeHtml(label)}<select name="${escapeHtml(name)}"${required}><option value="">Pilih ${escapeHtml(label.toLowerCase())}</option>${choices.map(([value, text]) => `<option value="${escapeHtml(value)}">${escapeHtml(text)}</option>`).join("")}</select></label>`;
  }
  if (type === "textarea") {
    return `<label class="form-field${full}">${escapeHtml(label)}<textarea name="${escapeHtml(name)}" rows="${options.rows || 3}" maxlength="1500"${required} placeholder="${escapeHtml(options.placeholder || "")}"></textarea></label>`;
  }
  const attrs = `${options.min !== undefined ? ` min="${options.min}"` : ""}${options.max !== undefined ? ` max="${options.max}"` : ""}${options.pattern ? ` pattern="${options.pattern}"` : ""}${options.placeholder ? ` placeholder="${escapeHtml(options.placeholder)}"` : ""}`;
  return `<label class="form-field${full}">${escapeHtml(label)}<input name="${escapeHtml(name)}" type="${escapeHtml(type)}"${attrs}${required}></label>`;
}

function patientOptions() {
  return state.patients.map((patient) => [patient.id, `${patient.name} (${patient.id})`]);
}

function visitOptions() {
  return state.visits.map((visit) => {
    const patient = patientFor(visit.patientId);
    return [visit.id, `${visit.id} · ${patient?.name || "Pasien"} · ${visit.clinic}`];
  });
}

function dashboard() {
  const todayVisits = state.visits.filter((visit) => visit.date === today);
  const activeAdmissions = state.admissions.filter((item) => item.status === "Dirawat");
  const waiting = todayVisits.filter((visit) => visit.status === "Menunggu").length;
  const counts = [
    ["Pasien terdaftar", state.patients.length, "users", "Data simulasi lokal"],
    ["Kunjungan hari ini", todayVisits.length, "calendar", "Rawat jalan dan rawat inap"],
    ["Pasien rawat inap", activeAdmissions.length, "bed", "Kamar terisi dalam demo"],
    ["Menunggu layanan", waiting, "pulse", "Kunjungan berstatus menunggu"]
  ];
  const schedule = todayVisits.slice(0, 6).map((visit) => {
    const patient = patientFor(visit.patientId);
    return `<div class="schedule-item"><div class="schedule-time">${escapeHtml(visit.time || "—")}<small>${escapeHtml(visit.type)}</small></div><div class="patient-line">${avatar(patient?.name || "Pasien")}<span><strong>${escapeHtml(patient?.name || "Pasien")}</strong><small>${escapeHtml(visit.clinic)}</small></span></div>${statusPill(visit.status)}</div>`;
  }).join("");
  pageContent.innerHTML = `
    <section class="demo-warning"><strong>MODE DEMO</strong><span>Data tersimpan di browser ini saja. Jangan masukkan data pasien nyata, NIK, atau informasi klinis.</span></section>
    <section class="welcome-row"><div><span class="eyebrow">${escapeHtml(new Intl.DateTimeFormat("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date()).toLocaleUpperCase("id"))}</span><h1>Ringkasan operasional</h1><p>RSU PKU Kota Delanggu · lingkungan demonstrasi lokal</p></div><button class="button button-primary" data-action="add-patient"><span data-icon="plus"></span> Daftarkan pasien</button></section>
    <section class="stats-grid">${counts.map(([label, count, icon, note]) => `<article class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon mint" data-icon="${icon}"></span></div><div class="stat-value-row"><strong class="stat-value">${count}</strong></div><div class="stat-sub">${note}</div></article>`).join("")}</section>
    <section class="content-grid">
      <article class="panel"><div class="panel-heading"><div><h2>Alur layanan</h2><p>Catatan dari pendaftaran sampai layanan penunjang</p></div></div>
        <div class="workflow-list">
          ${workflowStep("01", "Pendaftaran pasien", "Tambah pasien dan buat kunjungan rawat jalan atau rawat inap.", "pasien")}
          ${workflowStep("02", "Rekam medis elektronik", "Dokumentasikan asesmen, diagnosis, dan rencana dalam format SOAP.", "rme")}
          ${workflowStep("03", "Layanan penunjang", "Buat permintaan laboratorium, radiologi, dan resep.", "laboratorium")}
          ${workflowStep("04", "Administrasi & pelaporan", "Catat tagihan, komunikasi internal, dan unduh ringkasan CSV.", "laporan")}
        </div>
      </article>
      <article class="panel schedule-panel"><div class="panel-heading"><div><h2>Antrean hari ini</h2><p>${todayVisits.length} kunjungan tercatat</p></div><button class="text-link" data-module-link="rawat-jalan">Daftar kunjungan</button></div><div class="schedule-list">${schedule || '<div class="empty-state">Belum ada kunjungan. Daftarkan pasien ke layanan untuk memulai.</div>'}</div></article>
    </section>
    <section class="bottom-grid">
      <button class="quick-card" data-action="add-visit"><span class="quick-icon" data-icon="calendar"></span><span class="quick-copy"><strong>Daftarkan kunjungan</strong><small>Buat antrean dan pilih poli</small></span><span class="quick-arrow">→</span></button>
      <button class="quick-card" data-module-link="integrasi"><span class="quick-icon" data-icon="network"></span><span class="quick-copy"><strong>Status integrasi & keamanan</strong><small>Lihat koneksi dan batas demo</small></span><span class="quick-arrow">→</span></button>
    </section>`;
  hydrateIcons(pageContent);
}

function workflowStep(number, title, detail, module) {
  return `<button class="workflow-step" data-module-link="${module}"><span class="workflow-number">${number}</span><span><strong>${title}</strong><small>${detail}</small></span><span class="quick-arrow">→</span></button>`;
}

function actionButton(action, id, label) {
  return `<button class="table-action" data-action="${action}" data-id="${escapeHtml(id)}">${escapeHtml(label)}</button>`;
}

function personCell(patient) {
  if (!patient) return "—";
  return `<span class="table-person">${avatar(patient.name)}${escapeHtml(patient.name)}</span>`;
}

function moduleRows(module) {
  if (module === "pasien") return state.patients.map((patient) => ({
    cells: [patient.id, personCell(patient), patient.gender, `${patient.age} tahun`, patient.phone, statusPill(patient.status)],
    actions: `${actionButton("add-visit-for-patient", patient.id, "Kunjungan")}${actionButton("open-record", patient.id, "RME")}`
  }));
  if (module === "rawat-jalan") return state.visits.filter((visit) => visit.type !== "Rawat inap").map((visit) => {
    const patient = patientFor(visit.patientId);
    return { cells: [visit.id, formatDate(visit.date), personCell(patient), visit.clinic, visit.doctor, statusPill(visit.status)], actions: actionButton("open-soap", visit.id, "SOAP") };
  });
  if (module === "rawat-inap") return state.admissions.map((item) => {
    const patient = patientFor(item.patientId);
    return { cells: [item.id, personCell(patient), `${item.ward} · ${item.room}`, item.doctor, formatDate(item.admittedAt), statusPill(item.status)], actions: item.status === "Dirawat" ? actionButton("discharge", item.id, "Pulang") : "—" };
  });
  if (module === "rme") return state.visits.map((visit) => {
    const patient = patientFor(visit.patientId);
    const latest = state.soap.find((note) => note.visitId === visit.id);
    return { cells: [visit.id, personCell(patient), visit.clinic, visit.doctor, latest ? formatDate(latest.createdAt.slice(0, 10)) : "Belum ada SOAP", statusPill(latest ? "Terdokumentasi" : "Belum lengkap")], actions: actionButton("open-soap", visit.id, latest ? "Lihat / ubah SOAP" : "Isi SOAP") };
  });
  if (module === "laboratorium" || module === "radiologi") {
    const rows = module === "laboratorium" ? state.lab : state.radiology;
    return rows.map((order) => {
      const patient = patientFor(order.patientId);
      return { cells: [order.id, personCell(patient), order.test, formatDate(order.createdAt), order.result || "Menunggu hasil", statusPill(order.status)], actions: order.status === "Selesai" ? "—" : actionButton("enter-result", order.id, "Input hasil") };
    });
  }
  if (module === "farmasi") return state.prescriptions.map((prescription) => {
    const patient = patientFor(prescription.patientId);
    return { cells: [prescription.id, personCell(patient), prescription.medicine, `${prescription.quantity} · ${prescription.dosage}`, formatMoney(prescription.total), statusPill(prescription.status)], actions: prescription.status === "Diserahkan" ? "—" : actionButton("dispense", prescription.id, "Serahkan obat") };
  });
  if (module === "keuangan") return state.charges.map((charge) => {
    const patient = patientFor(charge.patientId);
    return { cells: [charge.id, personCell(patient), charge.description, formatMoney(charge.amount), formatDate(charge.createdAt), statusPill(charge.status)], actions: charge.status === "Lunas" ? "—" : actionButton("pay", charge.id, "Tandai lunas") };
  });
  if (module === "komunikasi") return state.messages.map((message) => ({
    cells: [message.id, message.recipient, message.subject, message.author, formatDate(message.createdAt), statusPill(message.status)],
    actions: actionButton("resolve-message", message.id, message.status === "Selesai" ? "Dibuka" : "Selesaikan")
  }));
  return [];
}

const moduleColumns = {
  pasien: ["No. RM", "Nama pasien", "Jenis kelamin", "Usia", "Kontak", "Status"],
  "rawat-jalan": ["No. kunjungan", "Tanggal", "Pasien", "Poli", "Dokter", "Status"],
  "rawat-inap": ["No. rawat inap", "Pasien", "Kamar", "Dokter", "Tanggal masuk", "Status"],
  rme: ["No. kunjungan", "Pasien", "Poli", "Dokter", "Catatan SOAP", "Status"],
  laboratorium: ["No. order", "Pasien", "Pemeriksaan", "Tanggal order", "Hasil", "Status"],
  radiologi: ["No. order", "Pasien", "Pemeriksaan", "Tanggal order", "Hasil / kesan", "Status"],
  farmasi: ["No. resep", "Pasien", "Obat", "Jumlah · dosis", "Estimasi", "Status"],
  keuangan: ["No. transaksi", "Pasien", "Keterangan", "Jumlah", "Tanggal", "Status"],
  komunikasi: ["No. pesan", "Tujuan", "Subjek", "Pengirim", "Tanggal", "Status"]
};

const moduleDescriptions = {
  pasien: "Pendaftaran dan identitas pasien simulasi.",
  "rawat-jalan": "Kunjungan poli dan antrean yang dibuat di sesi ini.",
  "rawat-inap": "Admisi, ruang perawatan, dan status kepulangan.",
  rme: "Dokumentasi klinis demo dengan format Subjective, Objective, Assessment, Plan.",
  laboratorium: "Order pemeriksaan dan pencatatan hasil secara lokal.",
  radiologi: "Order pencitraan dan pencatatan hasil/kesan secara lokal.",
  farmasi: "Resep demo dan pencatatan penyerahan obat.",
  keuangan: "Tagihan demo dan pencatatan status pembayaran.",
  komunikasi: "Catatan komunikasi internal demonstrasi."
};

function renderTableModule(module) {
  const rows = moduleRows(module);
  const columns = moduleColumns[module] || [];
  const heading = module === "rme" ? "Daftar kunjungan untuk dokumentasi" : module === "komunikasi" ? "Pesan internal" : `Daftar ${moduleLabels[module].toLowerCase()}`;
  let addAction = "module-info";
  let addLabel = "Ringkasan";
  if (module === "pasien") { addAction = "add-patient"; addLabel = "Pasien baru"; }
  if (module === "rawat-jalan") { addAction = "add-visit"; addLabel = "Kunjungan baru"; }
  if (module === "rawat-inap") { addAction = "add-admission"; addLabel = "Admisi baru"; }
  if (module === "laboratorium" || module === "radiologi") { addAction = "add-order"; addLabel = "Buat order"; }
  if (module === "farmasi") { addAction = "add-prescription"; addLabel = "Buat resep"; }
  if (module === "keuangan") { addAction = "add-charge"; addLabel = "Tambah tagihan"; }
  if (module === "komunikasi") { addAction = "add-message"; addLabel = "Pesan baru"; }
  const descriptions = moduleDescriptions[module] || "Kelola data pada modul ini.";
  pageContent.innerHTML = `
    <section class="module-heading"><div><span class="eyebrow">MANAJEMEN RUMAH SAKIT · MODE DEMO</span><h1>${escapeHtml(moduleLabels[module])}</h1><p>${escapeHtml(descriptions)}</p></div><div class="module-actions"><button class="button button-secondary" data-action="${addAction}"><span data-icon="plus"></span>${escapeHtml(addLabel)}</button></div></section>
    <section class="panel table-panel"><div class="table-toolbar"><div><strong>${escapeHtml(heading)}</strong><div style="margin-top:5px"><span>${rows.length} data · penyimpanan lokal browser</span></div></div><label class="select-filter"><span data-icon="search"></span><input class="table-search" type="search" placeholder="Cari data..." aria-label="Cari data"></label></div>
      ${rows.length ? `<table class="data-table"><thead><tr>${columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}<th>Tindakan</th></tr></thead><tbody>${rows.map((row) => `<tr>${row.cells.map((cell) => `<td>${cell}</td>`).join("")}<td class="actions-cell">${row.actions}</td></tr>`).join("")}</tbody></table>` : `<div class="empty-state">Belum ada data pada modul ini. Gunakan tombol di atas atau mulai dari pendaftaran pasien.</div>`}
    </section>
    <div class="module-note"><span data-icon="info"></span>${escapeHtml(descriptions)} Fitur demo, bukan catatan pelayanan resmi.</div>`;
  hydrateIcons(pageContent);
  const tableSearch = pageContent.querySelector(".table-search");
  if (tableSearch) tableSearch.addEventListener("input", (event) => {
    const query = event.target.value.toLocaleLowerCase("id");
    pageContent.querySelectorAll(".data-table tbody tr").forEach((row) => { row.hidden = !row.textContent.toLocaleLowerCase("id").includes(query); });
  });
}

function renderReports() {
  const counts = [
    ["Pasien", state.patients.length], ["Kunjungan", state.visits.length],
    ["Rawat inap", state.admissions.length], ["Catatan SOAP", state.soap.length],
    ["Order laboratorium", state.lab.length], ["Order radiologi", state.radiology.length],
    ["Resep", state.prescriptions.length], ["Transaksi", state.charges.length]
  ];
  pageContent.innerHTML = `
    <section class="module-heading"><div><span class="eyebrow">ADMINISTRASI · MODE DEMO</span><h1>Laporan & RL</h1><p>Ringkasan agregat data simulasi yang tersimpan pada browser ini.</p></div><button class="button button-primary" data-action="export-report">Unduh laporan CSV</button></section>
    <section class="stats-grid report-stats">${counts.map(([label, count]) => `<article class="stat-card"><div class="stat-top"><span>${label}</span></div><div class="stat-value-row"><strong class="stat-value">${count}</strong></div><div class="stat-sub">Data demo lokal</div></article>`).join("")}</section>
    <section class="panel"><div class="panel-heading"><div><h2>Pelaporan eksternal</h2><p>Belum dikirim ke SIRS Online atau sistem pelaporan resmi.</p></div></div><div class="module-note"><span data-icon="info"></span>Ekspor CSV hanya untuk pengujian. Format ini bukan format RL resmi dan tidak menggantikan pelaporan wajib rumah sakit.</div></section>`;
  hydrateIcons(pageContent);
}

function renderIntegrations() {
  const connections = [
    ["SATUSEHAT / FHIR", "Interop data kesehatan nasional", "Belum dikonfigurasi"],
    ["BPJS VClaim", "Bridging eligibilitas dan SEP", "Belum dikonfigurasi"],
    ["BPJS E-Claim", "Klaim dan pengajuan layanan", "Belum dikonfigurasi"],
    ["LIS / Laboratorium", "Order dan hasil pemeriksaan", "Simulasi lokal saja"],
    ["PACS / Radiologi", "Pencitraan dan laporan radiologi", "Simulasi lokal saja"],
    ["SIRS Online / RL", "Pelaporan rumah sakit", "Belum dikonfigurasi"]
  ];
  pageContent.innerHTML = `
    <section class="module-heading"><div><span class="eyebrow">KONFIGURASI SISTEM</span><h1>Integrasi & keamanan</h1><p>Status kesiapan teknis. Tidak ada koneksi eksternal aktif.</p></div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Status koneksi</h2><p>Integrasi memerlukan backend, kredensial resmi, uji sandbox, dan validasi vendor.</p></div></div>
      <div class="integration-grid">${connections.map(([title, description, status]) => `<article class="integration-card"><div><strong>${escapeHtml(title)}</strong><small>${escapeHtml(description)}</small></div>${statusPill(status)}</article>`).join("")}</div>
    </section>
    <section class="panel security-panel"><div class="panel-heading"><div><h2>Batas keamanan prototipe</h2><p>Jangan gunakan sebagai sistem produksi atau untuk memproses data kesehatan nyata.</p></div></div>
      <ul class="security-list"><li>Tanpa autentikasi atau kontrol akses berbasis peran.</li><li>Data berada di localStorage browser dan tidak dienkripsi oleh aplikasi.</li><li>Log aktivitas demo dapat diubah/dihapus dari browser; bukan audit trail immutable.</li><li>Belum ada pengamanan fisik ruang server/perangkat, enkripsi jaringan, pengamanan server, backup, atau disaster recovery.</li><li>Belum ada validasi kepatuhan Permenkes, PDP, standar RME, SATUSEHAT, BPJS, SIRS, maupun RL.</li></ul>
    </section>
    <section class="panel security-panel"><div class="panel-heading"><div><h2>Kesiapan operasional yang perlu disiapkan</h2><p>Prasyarat sebelum pengembangan menjadi sistem rumah sakit operasional.</p></div></div>
      <ul class="security-list"><li>Infrastruktur server terkelola, jaringan internal dan internet redundan, pemantauan, backup, serta uji pemulihan bencana.</li><li>Analisis proses kerja bersama petugas klinis, administrasi, farmasi, laboratorium, radiologi, dan manajemen.</li><li>Pelatihan pengguna, SOP, dukungan teknis berkelanjutan, dan rencana perubahan operasional.</li><li>Evaluasi vendor, kontrak dukungan, uji keamanan, serta bukti kepatuhan dan interoperabilitas yang dapat diverifikasi.</li></ul>
    </section>
    <section class="panel"><div class="panel-heading"><div><h2>Log aktivitas demo</h2><p>${state.audit.length} aktivitas terakhir di perangkat ini · tidak immutable</p></div></div>
      ${state.audit.length ? `<div class="audit-list">${state.audit.slice(0, 12).map((entry) => `<div class="audit-row"><span>${escapeHtml(new Date(entry.at).toLocaleString("id-ID"))}</span><strong>${escapeHtml(entry.action)}</strong><small>${escapeHtml(entry.module)} · ${escapeHtml(entry.actor)}</small></div>`).join("")}</div>` : '<div class="empty-state">Belum ada aktivitas tersimpan.</div>'}
    </section>`;
  hydrateIcons(pageContent);
}

function renderPage() {
  document.getElementById("breadcrumb-current").textContent = moduleLabels[activeModule];
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.module === activeModule));
  if (activeModule === "dashboard") dashboard();
  else if (activeModule === "laporan") renderReports();
  else if (activeModule === "integrasi") renderIntegrations();
  else renderTableModule(activeModule);
}

function openPatientForm() {
  openDialog("Pendaftaran pasien", "Isi data fiktif untuk demonstrasi alur pendaftaran.", [
    field("Nama lengkap", "name", "text", { full: true, placeholder: "Contoh: Pasien Demo" }),
    field("ID demo", "nik", "text", { placeholder: "Contoh: DEMO-1001", pattern: "[A-Za-z0-9\\-]{4,20}" }),
    field("Tanggal lahir", "birthDate", "date"),
    field("Jenis kelamin", "gender", "select", { choices: [["Perempuan", "Perempuan"], ["Laki-laki", "Laki-laki"]] }),
    field("Nomor kontak demo", "phone", "text", { required: false, placeholder: "Opsional" }),
    field("Alamat", "address", "text", { full: true, required: false, placeholder: "Opsional" })
  ], "patient");
}

function openVisitForm(patientId = "") {
  const patientField = field("Pasien", "patientId", "select", { choices: patientOptions() }).replace(`value="${patientId}"`, `value="${patientId}" selected`);
  openDialog("Pendaftaran kunjungan", "Buat antrean rawat jalan atau admisi rawat inap.", [
    patientField,
    field("Jenis layanan", "type", "select", { choices: [["Rawat jalan", "Rawat jalan"], ["Rawat inap", "Rawat inap"]] }),
    field("Poli / bangsal", "clinic", "text", { placeholder: "Contoh: Poli Umum" }),
    field("Dokter / DPJP", "doctor", "text", { placeholder: "Contoh: dr. Demo" }),
    field("Tanggal", "date", "date"),
    field("Jam", "time", "time", { required: false }),
    field("Ruang rawat inap", "room", "text", { required: false, placeholder: "Wajib untuk rawat inap" })
  ], "visit", "Daftarkan kunjungan");
  const dateInput = modalContent.querySelector('[name="date"]');
  dateInput.value = today;
  if (patientId) modalContent.querySelector('[name="patientId"]').value = patientId;
}

function openAdmissionForm() {
  openDialog("Admisi rawat inap", "Daftarkan pasien demo ke ruang perawatan.", [
    field("Pasien", "patientId", "select", { choices: patientOptions() }),
    field("Bangsal", "ward", "text", { placeholder: "Contoh: Mawar" }),
    field("Nomor kamar", "room", "text", { placeholder: "Contoh: 101" }),
    field("Dokter penanggung jawab", "doctor", "text", { full: true })
  ], "admission", "Simpan admisi");
}

function openSoapForm(visitId) {
  const visit = visitFor(visitId);
  if (!visit) return showToast("Kunjungan tidak ditemukan.", true);
  const note = state.soap.find((entry) => entry.visitId === visitId);
  const patient = patientFor(visit.patientId);
  openDialog(`Catatan SOAP · ${patient?.name || "Pasien"}`, `${visit.id} · ${visit.clinic} · ${visit.doctor}`, [
    field("S · Subjective / keluhan", "subjective", "textarea", { full: true, rows: 3 }),
    field("O · Objective / pemeriksaan", "objective", "textarea", { full: true, rows: 3 }),
    field("A · Assessment / diagnosis kerja", "assessment", "textarea", { full: true, rows: 2 }),
    field("P · Plan / rencana tindak lanjut", "plan", "textarea", { full: true, rows: 3 })
  ], `soap:${visitId}`, note ? "Perbarui SOAP" : "Simpan SOAP");
  ["subjective", "objective", "assessment", "plan"].forEach((key) => {
    if (note) modalContent.querySelector(`[name="${key}"]`).value = note[key] || "";
  });
}

function openOrderForm(module) {
  const isLab = module === "laboratorium";
  openDialog(isLab ? "Order laboratorium" : "Order radiologi", "Buat order simulasi untuk pasien terdaftar.", [
    field("Pasien", "patientId", "select", { choices: patientOptions() }),
    field("Kunjungan terkait", "visitId", "select", { choices: visitOptions(), required: false }),
    field(isLab ? "Jenis pemeriksaan" : "Jenis pencitraan", "test", "text", { full: true, placeholder: isLab ? "Contoh: Hematologi lengkap" : "Contoh: Thorax AP" }),
    field("Catatan klinis", "notes", "textarea", { full: true, required: false })
  ], isLab ? "lab" : "radiology", "Buat order");
}

function openPrescriptionForm() {
  openDialog("Buat resep demo", "Resep dan estimasi biaya disimpan secara lokal.", [
    field("Pasien", "patientId", "select", { choices: patientOptions() }),
    field("Kunjungan terkait", "visitId", "select", { choices: visitOptions(), required: false }),
    field("Nama obat", "medicine", "text", { placeholder: "Contoh: Obat demo" }),
    field("Dosis / aturan pakai", "dosage", "text", { placeholder: "Contoh: sesuai arahan demo" }),
    field("Jumlah", "quantity", "number", { min: 1, max: 999 }),
    field("Harga total estimasi (Rp)", "total", "number", { min: 0, max: 100000000 })
  ], "prescription", "Simpan resep");
}

function openChargeForm() {
  openDialog("Tambah tagihan demo", "Catatan transaksi bukan bukti pembayaran resmi.", [
    field("Pasien", "patientId", "select", { choices: patientOptions() }),
    field("Keterangan", "description", "text", { full: true, placeholder: "Contoh: Biaya layanan demo" }),
    field("Jumlah (Rp)", "amount", "number", { min: 0, max: 100000000 })
  ], "charge", "Simpan tagihan");
}

function openMessageForm() {
  openDialog("Pesan internal demo", "Jangan mencantumkan data pasien atau informasi sensitif.", [
    field("Tujuan / unit", "recipient", "text", { placeholder: "Contoh: Farmasi" }),
    field("Subjek", "subject", "text", { full: true }),
    field("Isi pesan", "body", "textarea", { full: true, rows: 4 })
  ], "message", "Kirim pesan");
}

function handleFormSubmit(form) {
  const action = form.dataset.formAction;
  const values = Object.fromEntries(new FormData(form).entries());
  if (!form.reportValidity()) return;
  if (action === "patient") {
    const exists = state.patients.some((patient) => patient.nik.toLowerCase() === String(values.nik).toLowerCase());
    if (exists) return showToast("ID demo tersebut sudah terdaftar.", true);
    const birthDate = new Date(`${values.birthDate}T00:00:00`);
    if (birthDate > new Date()) return showToast("Tanggal lahir tidak boleh di masa depan.", true);
    const age = Math.max(0, new Date().getFullYear() - birthDate.getFullYear());
    const patient = {
      id: nextId("RM", state.patients), name: String(values.name).trim(), initials: initials(values.name),
      nik: String(values.nik).trim(), birthDate: values.birthDate, gender: values.gender, age,
      phone: values.phone || "—", address: values.address || "—", clinic: "Belum ada kunjungan",
      doctor: "Belum ditentukan", status: "Terdaftar"
    };
    commit(`Mendaftarkan pasien ${patient.id}`, (draft) => draft.patients.unshift(patient));
    closeDialog();
    showToast("Pasien demo berhasil didaftarkan.");
    return;
  }
  if (action === "visit") {
    const patient = patientFor(values.patientId);
    if (!patient) return showToast("Pilih pasien yang terdaftar.", true);
    const visit = {
      id: nextId(values.type === "Rawat inap" ? "RI" : "RJ", state.visits),
      patientId: patient.id, date: values.date, time: values.time || "—",
      clinic: String(values.clinic).trim(), doctor: String(values.doctor).trim(),
      type: values.type, status: "Menunggu"
    };
    commit(`Mendaftarkan kunjungan ${visit.id}`, (draft) => {
      draft.visits.unshift(visit);
      const target = draft.patients.find((item) => item.id === patient.id);
      target.clinic = visit.clinic;
      target.doctor = visit.doctor;
      target.status = visit.status;
      if (visit.type === "Rawat inap") draft.admissions.unshift({
        id: nextId("ADM", draft.admissions), patientId: patient.id, ward: visit.clinic,
        room: values.room || "Belum ditentukan", doctor: visit.doctor, admittedAt: visit.date, status: "Dirawat"
      });
    });
    closeDialog();
    showToast("Kunjungan berhasil dibuat.");
    return;
  }
  if (action === "admission") {
    const patient = patientFor(values.patientId);
    if (!patient) return showToast("Pilih pasien yang terdaftar.", true);
    commit(`Membuat admisi untuk ${patient.id}`, (draft) => draft.admissions.unshift({
      id: nextId("ADM", draft.admissions), patientId: patient.id, ward: String(values.ward).trim(),
      room: String(values.room).trim(), doctor: String(values.doctor).trim(), admittedAt: today, status: "Dirawat"
    }));
    closeDialog();
    showToast("Admisi rawat inap berhasil dicatat.");
    return;
  }
  if (action.startsWith("soap:")) {
    const visitId = action.slice(5);
    const note = {
      visitId, subjective: String(values.subjective).trim(), objective: String(values.objective).trim(),
      assessment: String(values.assessment).trim(), plan: String(values.plan).trim(),
      createdAt: new Date().toISOString()
    };
    commit(`Menyimpan catatan SOAP ${visitId}`, (draft) => {
      const existing = draft.soap.find((item) => item.visitId === visitId);
      if (existing) Object.assign(existing, note);
      else draft.soap.unshift(note);
      const visit = draft.visits.find((item) => item.id === visitId);
      if (visit) visit.status = "Selesai";
      const patient = visit && draft.patients.find((item) => item.id === visit.patientId);
      if (patient) patient.status = "Selesai";
    });
    closeDialog();
    showToast("Catatan SOAP demo berhasil disimpan.");
    return;
  }
  if (action === "lab" || action === "radiology") {
    if (!patientFor(values.patientId)) return showToast("Pilih pasien yang terdaftar.", true);
    const rows = state[action];
    const order = {
      id: nextId(action === "lab" ? "LAB" : "RAD", rows), patientId: values.patientId,
      visitId: values.visitId || "", test: String(values.test).trim(),
      notes: String(values.notes || "").trim(), result: "", status: "Menunggu", createdAt: today
    };
    commit(`Membuat order ${order.id}`, (draft) => draft[action].unshift(order));
    closeDialog();
    showToast("Order demo berhasil dibuat.");
    return;
  }
  if (action === "prescription") {
    if (!patientFor(values.patientId)) return showToast("Pilih pasien yang terdaftar.", true);
    const quantity = Number(values.quantity);
    const total = Number(values.total);
    if (!Number.isFinite(quantity) || quantity <= 0 || !Number.isFinite(total) || total < 0) return showToast("Jumlah dan estimasi harus berupa angka yang valid.", true);
    const prescription = {
      id: nextId("RX", state.prescriptions), patientId: values.patientId, visitId: values.visitId || "",
      medicine: String(values.medicine).trim(), dosage: String(values.dosage).trim(), quantity,
      total, status: "Menunggu", createdAt: today
    };
    commit(`Membuat resep ${prescription.id}`, (draft) => {
      draft.prescriptions.unshift(prescription);
      draft.charges.unshift({
        id: nextId("INV", draft.charges), patientId: prescription.patientId,
        description: `Resep ${prescription.id} · ${prescription.medicine}`,
        amount: prescription.total, status: "Belum dibayar", createdAt: today
      });
    });
    closeDialog();
    showToast("Resep dibuat dan tagihan demo ditambahkan.");
    return;
  }
  if (action === "charge") {
    if (!patientFor(values.patientId)) return showToast("Pilih pasien yang terdaftar.", true);
    const amount = Number(values.amount);
    if (!Number.isFinite(amount) || amount < 0) return showToast("Jumlah tagihan harus valid.", true);
    const charge = {
      id: nextId("INV", state.charges), patientId: values.patientId,
      description: String(values.description).trim(), amount, status: "Belum dibayar", createdAt: today
    };
    commit(`Membuat tagihan ${charge.id}`, (draft) => draft.charges.unshift(charge));
    closeDialog();
    showToast("Tagihan demo berhasil dicatat.");
    return;
  }
  if (action === "message") {
    const message = {
      id: nextId("MSG", state.messages), recipient: String(values.recipient).trim(),
      subject: String(values.subject).trim(), body: String(values.body).trim(),
      author: "Pengguna demo", status: "Baru", createdAt: today
    };
    commit(`Mengirim pesan internal ${message.id}`, (draft) => draft.messages.unshift(message));
    closeDialog();
    showToast("Pesan demo berhasil dicatat.");
  }
}

function downloadReport() {
  const rows = [["Jenis data", "ID", "Nama / keterangan", "Tanggal", "Status"]];
  state.patients.forEach((patient) => rows.push(["Pasien", patient.id, patient.name, patient.birthDate, patient.status]));
  state.visits.forEach((visit) => rows.push([visit.type, visit.id, `${patientFor(visit.patientId)?.name || ""} - ${visit.clinic}`, visit.date, visit.status]));
  state.admissions.forEach((item) => rows.push(["Rawat inap", item.id, `${patientFor(item.patientId)?.name || ""} - ${item.ward} ${item.room}`, item.admittedAt, item.status]));
  state.lab.concat(state.radiology).forEach((item) => rows.push(["Penunjang", item.id, `${item.test} - ${item.result}`, item.createdAt, item.status]));
  state.soap.forEach((note) => rows.push(["RME SOAP", note.visitId, `S: ${note.subjective} | O: ${note.objective} | A: ${note.assessment} | P: ${note.plan}`, note.createdAt, "Tersimpan demo"]));
  state.prescriptions.forEach((item) => rows.push(["Farmasi", item.id, `${item.medicine} · ${formatMoney(item.total)}`, item.createdAt, item.status]));
  state.charges.forEach((item) => rows.push(["Keuangan", item.id, `${item.description} · ${formatMoney(item.amount)}`, item.createdAt, item.status]));
  const csv = rows.map((row) => row.map((cell) => {
    const safe = String(cell).replace(/^[=+\-@]/, "'$&");
    return `"${safe.replace(/"/g, '""')}"`;
  }).join(",")).join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" }));
  link.download = `simrs-demo-${today}.csv`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  showToast("Laporan CSV demo diunduh.");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.module) {
    activeModule = target.dataset.module;
    document.getElementById("sidebar").classList.remove("open");
    renderPage();
    return;
  }
  if (target.dataset.moduleLink) {
    activeModule = target.dataset.moduleLink;
    document.getElementById("sidebar").classList.remove("open");
    renderPage();
    return;
  }
  const action = target.dataset.action;
  const id = target.dataset.id;
  if (action === "close-modal") closeDialog();
  else if (action === "add-patient") openPatientForm();
  else if (action === "add-visit") openVisitForm();
  else if (action === "add-visit-for-patient") openVisitForm(id);
  else if (action === "add-admission") openAdmissionForm();
  else if (action === "add-order") openOrderForm(activeModule);
  else if (action === "add-prescription") openPrescriptionForm();
  else if (action === "add-charge") openChargeForm();
  else if (action === "add-message") openMessageForm();
  else if (action === "open-soap") openSoapForm(id);
  else if (action === "open-record") {
    const visit = state.visits.find((item) => item.patientId === id);
    if (visit) openSoapForm(visit.id);
    else openVisitForm(id);
  } else if (action === "enter-result") {
    const collection = activeModule === "laboratorium" ? "lab" : "radiology";
    const order = state[collection].find((item) => item.id === id);
    if (!order) return showToast("Order tidak ditemukan.", true);
    openDialog("Input hasil pemeriksaan", `${order.id} · ${order.test}`, [
      field("Hasil / kesan", "result", "textarea", { full: true, rows: 4 })
    ], `result:${collection}:${id}`, "Simpan hasil");
  } else if (action === "dispense") {
    commit(`Menyerahkan resep ${id}`, (draft) => {
      const prescription = draft.prescriptions.find((item) => item.id === id);
      if (prescription) prescription.status = "Diserahkan";
    });
    showToast("Penyerahan obat demo dicatat.");
  } else if (action === "pay") {
    commit(`Menandai tagihan ${id} lunas`, (draft) => {
      const charge = draft.charges.find((item) => item.id === id);
      if (charge) charge.status = "Lunas";
    });
    showToast("Status tagihan demo diperbarui.");
  } else if (action === "discharge") {
    commit(`Mencatat pasien pulang ${id}`, (draft) => {
      const admission = draft.admissions.find((item) => item.id === id);
      if (admission) admission.status = "Pulang";
    });
    showToast("Status kepulangan demo dicatat.");
  } else if (action === "resolve-message") {
    commit(`Memperbarui pesan ${id}`, (draft) => {
      const message = draft.messages.find((item) => item.id === id);
      if (message) message.status = message.status === "Selesai" ? "Baru" : "Selesai";
    });
    showToast("Status pesan diperbarui.");
  } else if (action === "export-report") downloadReport();
  else if (action === "module-info") showToast("Pilih tindakan pada modul untuk mengelola data demo.");
  else if (action === "notifications") {
    const pendingVisits = state.visits.filter((visit) => visit.status === "Menunggu").length;
    const pendingOrders = state.lab.concat(state.radiology).filter((order) => order.status !== "Selesai").length;
    showToast(`${pendingVisits} kunjungan menunggu · ${pendingOrders} order penunjang belum selesai.`);
  }
  else if (target.id === "mobile-menu") document.getElementById("sidebar").classList.toggle("open");
  if (!event.target.closest(".search-box")) searchResults.hidden = true;
});

modal.addEventListener("click", (event) => { if (event.target === modal) closeDialog(); });
modal.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target.closest("form[data-form-action]");
  if (!form) return;
  const action = form.dataset.formAction;
  if (action.startsWith("result:")) {
    if (!form.reportValidity()) return;
    const [, collection, id] = action.split(":");
    const result = String(new FormData(form).get("result")).trim();
    commit(`Mencatat hasil order ${id}`, (draft) => {
      const order = draft[collection].find((item) => item.id === id);
      if (order) {
        order.result = result;
        order.status = "Selesai";
      }
    });
    closeDialog();
    showToast("Hasil pemeriksaan demo berhasil dicatat.");
    return;
  }
  handleFormSubmit(form);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDialog();
    searchResults.hidden = true;
    document.getElementById("sidebar").classList.remove("open");
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase("id");
  if (!query) {
    searchResults.hidden = true;
    return;
  }
  const matches = state.patients.filter((patient) => `${patient.name} ${patient.id} ${patient.clinic}`.toLocaleLowerCase("id").includes(query)).slice(0, 6);
  searchResults.innerHTML = matches.length
    ? matches.map((patient) => `<button class="search-result" data-search-patient="${escapeHtml(patient.id)}">${avatar(patient.name)}<span><strong>${escapeHtml(patient.name)}</strong><small>${escapeHtml(patient.id)} · ${escapeHtml(patient.clinic)}</small></span></button>`).join("")
    : '<div class="search-empty">Pasien tidak ditemukan.</div>';
  searchResults.hidden = false;
});

searchResults.addEventListener("click", (event) => {
  const result = event.target.closest("[data-search-patient]");
  if (!result) return;
  activeModule = "pasien";
  renderPage();
  const tableSearch = pageContent.querySelector(".table-search");
  if (tableSearch) {
    tableSearch.value = result.dataset.searchPatient;
    tableSearch.dispatchEvent(new Event("input"));
  }
  searchResults.hidden = true;
  searchInput.value = "";
});

document.getElementById("today-date").textContent = new Intl.DateTimeFormat("id-ID", {
  weekday: "short", day: "numeric", month: "short", year: "numeric"
}).format(new Date());
document.getElementById("footer-copyright").textContent = `© ${new Date().getFullYear()} RSU PKU Kota Delanggu`;
hydrateIcons();
renderPage();
if (storageWarning) showToast(storageWarning, true);
