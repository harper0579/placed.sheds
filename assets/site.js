// Mobile Navigation Toggle
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Interactive Shed Estimator
const size = document.getElementById('size');
const finish = document.getElementById('finish');
const kind = document.getElementById('kind');
const orientation = document.getElementById('orientation');
const label = document.getElementById('sizeLabel');
const range = document.getElementById('range');
const depositEst = document.getElementById('depositEst');
const deliveryNote = document.getElementById('deliveryNote');
const sendEstimateBtn = document.getElementById('sendEstimateBtn');
const addons = document.querySelectorAll('.addon');

const sizeNames = {
  80: '8×10 (80 sq ft)',
  96: '8×12 (96 sq ft)',
  112: '8×14 (112 sq ft)',
  128: '8×16 (128 sq ft)',
  144: '12×12 (144 sq ft)',
  160: '10×16 (160 sq ft)',
  176: '11×16 (176 sq ft)',
  192: '12×16 (192 sq ft)',
  208: '12×17.5 (208 sq ft)',
  224: '12×18.5 (224 sq ft)',
  240: '12×20 (240 sq ft)',
  256: '12×21.5 (256 sq ft)',
  272: '12×22.5 (272 sq ft)',
  288: '12×24 (288 sq ft)'
};

function calcEstimator() {
  if (!size) return;
  const sqft = Number(size.value);
  const rate = Number(kind.value);
  const mult = Number(finish.value);

  let addonTotal = 0;
  let selectedAddons = [];
  addons.forEach(cb => {
    if (cb.checked) {
      addonTotal += Number(cb.value);
      selectedAddons.push(cb.dataset.label);
    }
  });

  const base = (sqft * rate * mult) + addonTotal;
  const lo = Math.round((base * 0.96) / 50) * 50;
  const hi = Math.round((base * 1.06) / 50) * 50;
  const depLo = Math.round((lo * 0.30) / 10) * 10;
  const depHi = Math.round((hi * 0.30) / 10) * 10;

  const sizeText = sizeNames[sqft] || (sqft + ' sq ft');
  label.textContent = sizeText;
  range.textContent = '$' + lo.toLocaleString() + ' – $' + hi.toLocaleString() + ' CAD';
  depositEst.textContent = '30% Material Deposit: ~$' + depLo.toLocaleString() + ' – $' + depHi.toLocaleString() + ' CAD';

  if (sqft <= 128) {
    deliveryNote.textContent = 'Fits standard tilt-trailer delivery (no wide-load permit needed)';
  } else {
    deliveryNote.textContent = '10×16+ size: Delivered via flatbed or assembled on-site in 1 day from shop panels';
  }

  if (sendEstimateBtn) {
    const styleName = kind.options[kind.selectedIndex].dataset.name;
    const finishName = finish.options[finish.selectedIndex].dataset.name;
    const orientName = orientation ? orientation.value : 'End Gable';
    const summary = `Estimator Build: ${sizeText} ${styleName} (${orientName}) | Siding: ${finishName} | Add-ons: ${selectedAddons.length ? selectedAddons.join(', ') : 'None'} | Est. Cash Range: $${lo.toLocaleString()}-$${hi.toLocaleString()} CAD`;
    sendEstimateBtn.href = `contact.html?model=${encodeURIComponent('Custom Build from Estimator')}&details=${encodeURIComponent(summary)}`;
  }
}

if (size) {
  [size, finish, kind, orientation].forEach(el => { if (el) el.addEventListener('input', calcEstimator); });
  addons.forEach(cb => cb.addEventListener('change', calcEstimator));
  calcEstimator();
}

// Pre-fill Contact Form from URL Parameters
const params = new URLSearchParams(window.location.search);
const modelParam = params.get('model');
const detailsParam = params.get('details');
const modelSelect = document.getElementById('modelSelect');
const detailsBox = document.getElementById('detailsBox');

if (modelSelect && modelParam) {
  let matched = false;
  for (let i = 0; i < modelSelect.options.length; i++) {
    if (modelSelect.options[i].value.toLowerCase().includes(modelParam.toLowerCase())) {
      modelSelect.selectedIndex = i;
      matched = true;
      break;
    }
  }
  if (!matched) {
    const opt = document.createElement('option');
    opt.value = modelParam;
    opt.textContent = modelParam;
    opt.selected = true;
    modelSelect.appendChild(opt);
  }
}
if (detailsBox && detailsParam) {
  detailsBox.value = detailsParam + "\n\n";
}
