const navButtons = document.querySelectorAll('.codex-nav button');
const sections = document.querySelectorAll('.codex-section');
const realmsList = document.getElementById('realms-list');
const realmDetail = document.getElementById('realm-detail');
const realmBack = document.getElementById('realm-back');
const realmDetailName = document.getElementById('realm-detail-name');
const realmDetailDescription = document.getElementById('realm-detail-description');
const realmDetailInner = document.querySelector('.realm-detail-inner');

let codexData = null;

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-section');
    sections.forEach(sec => {
      sec.classList.toggle('active', sec.id === `section-${target}`);
    });
    realmDetail.classList.add('hidden');
  });
});

realmBack.addEventListener('click', () => {
  realmDetail.classList.add('hidden');
  document.getElementById('section-realms').classList.add('active');
});

function renderRealms() {
  realmsList.innerHTML = '';
  if (!codexData || !codexData.realms || codexData.realms.length === 0) {
    const p = document.createElement('p');
    p.className = 'empty-msg';
    p.textContent = 'No entries yet.';
    realmsList.appendChild(p);
    return;
  }

  codexData.realms.forEach(realm => {
    const card = document.createElement('div');
    card.className = 'realm-card';

    const img = document.createElement('img');
    img.className = 'realm-icon';
    img.src = realm.icon;
    img.alt = realm.name;

    const title = document.createElement('h3');
    title.textContent = realm.name;

    const desc = document.createElement('p');
    desc.textContent = realm.description;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);

    card.addEventListener('click', () => {
      showRealmDetail(realm);
    });

    realmsList.appendChild(card);
  });
}

function showRealmDetail(realm) {
  realmDetailName.textContent = realm.name;
  realmDetailDescription.textContent = realm.description;
  realmDetailInner.style.backgroundImage = `url("${realm.background}")`;
  realmDetail.classList.remove('hidden');
  sections.forEach(sec => sec.classList.remove('active'));
}

fetch('data/codex.json')
  .then(res => res.json())
  .then(data => {
    codexData = data;
    renderRealms();
  })
  .catch(err => {
    console.error('Failed to load codex.json', err);
  });
