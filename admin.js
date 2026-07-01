/* --------------------------------------------------
   TAB SWITCHING
-------------------------------------------------- */

document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        document.querySelectorAll(".tab-section").forEach(sec => sec.style.display = "none");
        document.getElementById(btn.dataset.tab).style.display = "block";

        saveActiveTab(btn.dataset.tab);
    });
});

/* Load last active tab */
function saveActiveTab(tab) {
    localStorage.setItem("activeTab", tab);
}

const lastTab = localStorage.getItem("activeTab") || "realms";
document.querySelector(`[data-tab="${lastTab}"]`).click();

/* --------------------------------------------------
   LOCAL STORAGE HELPERS
-------------------------------------------------- */

function saveField(id) {
    localStorage.setItem(id, document.getElementById(id).value);
}

function loadField(id) {
    const saved = localStorage.getItem(id);
    if (saved) document.getElementById(id).value = saved;
}

/* Load all fields on page load */
[
    "realmName","realmDesc","realmIcon","realmBg",
    "charName","charBio","charImg",
    "mapName","mapDesc","mapImg",
    "loreTitle","loreContent",
    "teaserTitle","teaserText","teaserImg",
    "bookTitle","bookSummary","bookCover",
    "reviewerName","reviewText","reviewAvatar",
    "fanName","fanMessage","fanAvatar"
].forEach(loadField);

/* Save on typing */
document.querySelectorAll("input, textarea").forEach(el => {
    el.addEventListener("input", () => saveField(el.id));
});

/* --------------------------------------------------
   IMAGE PREVIEW UPDATES (Circular)
-------------------------------------------------- */

function updatePreview(inputId, imgId) {
    const url = document.getElementById(inputId).value;
    document.getElementById(imgId).src = url;
}

[
    ["realmIcon", "realmIconPreview"],
    ["realmBg", "realmBgPreview"],
    ["charImg", "charImgPreview"],
    ["mapImg", "mapImgPreview"],
    ["teaserImg", "teaserImgPreview"],
    ["bookCover", "bookCoverPreview"],
    ["reviewAvatar", "reviewAvatarPreview"],
    ["fanAvatar", "fanAvatarPreview"]
].forEach(([inputId, imgId]) => {
    document.getElementById(inputId).addEventListener("input", () => updatePreview(inputId, imgId));
});

/* --------------------------------------------------
   JSON BUILDERS FOR EACH TAB
-------------------------------------------------- */

function buildJSON(fields) {
    const obj = {};
    fields.forEach(id => obj[id] = document.getElementById(id).value);
    return JSON.stringify(obj, null, 4);
}

/* REALMS */
document.getElementById("buildRealmJSON").addEventListener("click", () => {
    const json = buildJSON(["realmName","realmDesc","realmIcon","realmBg"]);
    document.getElementById("realmJSONOutput").value = json;
});

/* CHARACTERS */
document.getElementById("buildCharJSON").addEventListener("click", () => {
    const json = buildJSON(["charName","charBio","charImg"]);
    document.getElementById("charJSONOutput").value = json;
});

/* MAPS */
document.getElementById("buildMapJSON").addEventListener("click", () => {
    const json = buildJSON(["mapName","mapDesc","mapImg"]);
    document.getElementById("mapJSONOutput").value = json;
});

/* LORE */
document.getElementById("buildLoreJSON").addEventListener("click", () => {
    const json = buildJSON(["loreTitle","loreContent"]);
    document.getElementById("loreJSONOutput").value = json;
});

/* TEASERS */
document.getElementById("buildTeaserJSON").addEventListener("click", () => {
    const json = buildJSON(["teaserTitle","teaserText","teaserImg"]);
    document.getElementById("teaserJSONOutput").value = json;
});

/* BOOKS */
document.getElementById("buildBookJSON").addEventListener("click", () => {
    const json = buildJSON(["bookTitle","bookSummary","bookCover"]);
    document.getElementById("bookJSONOutput").value = json;
});

/* REVIEWS */
document.getElementById("buildReviewJSON").addEventListener("click", () => {
    const json = buildJSON(["reviewerName","reviewText","reviewAvatar"]);
    document.getElementById("reviewJSONOutput").value = json;
});

/* FAN CLUB */
document.getElementById("buildFanJSON").addEventListener("click", () => {
    const json = buildJSON(["fanName","fanMessage","fanAvatar"]);
    document.getElementById("fanJSONOutput").value = json;
});
