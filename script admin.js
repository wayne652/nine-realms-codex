const panelButtons = document.querySelectorAll('.codex-nav button');
const panels = document.querySelectorAll('.admin-panel');

panelButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-panel');
    panels.forEach(p => {
      p.classList.toggle('active', p.id === `panel-${target}`);
    });
  });
});

const realmIdInput = document.getElementById('realm-id');
const realmNameInput = document.getElementById('realm-name');
const realmDescInput = document.getElementById('realm-description');
const realmIconInput = document.getElementById('realm-icon');
const realmBgInput = document.getElementById('realm-background');
const realmJsonOutput = document.getElementById('realm-json-output');
const buildRealmBtn = document.getElementById('build-realm-json');

buildRealmBtn.addEventListener('click', () => {
  const id = realmIdInput.value.trim();
  const name = realmNameInput.value.trim();
  const description = realmDescInput.value.trim();
  const icon = realmIconInput.value.trim();
  const background = realmBgInput.value.trim();

  if (!id || !name) {
    realmJsonOutput.value = 'Realm ID and name are required.';
    return;
  }

  const realmObj = {
    id,
    name,
    description,
    icon,
    background
  };

  realmJsonOutput.value = JSON.stringify(realmObj, null, 2);
});
