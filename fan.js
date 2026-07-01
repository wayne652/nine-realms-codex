/* --------------------------------------------------
   LOAD GLOBAL CODEX.JSON
-------------------------------------------------- */

async function loadCodex() {
    try {
        const response = await fetch("codex.json");
        const data = await response.json();

        displayRealms(data.realms);
        displayCharacters(data.characters);
        displayMaps(data.maps);
        displayLore(data.lore);
        displayTeasers(data.teasers);
        displayBooks(data.books);
        displayReviews(data.reviews);
        displayFanClub(data.fanclub);

    } catch (err) {
        console.error("Error loading codex.json:", err);
    }
}

document.addEventListener("DOMContentLoaded", loadCodex);

/* --------------------------------------------------
   REALMS
-------------------------------------------------- */

function displayRealms(realms) {
    const container = document.getElementById("realmsSection");
    container.innerHTML = "";

    realms.forEach(r => {
        container.innerHTML += `
            <div class="card">
                <img src="${r.realmIcon}">
                <h3>${r.realmName}</h3>
                <p>${r.realmDesc}</p>
            </div>
        `;
    });
}

/* --------------------------------------------------
   CHARACTERS
-------------------------------------------------- */

function displayCharacters(chars) {
    const container = document.getElementById("charactersSection");
    container.innerHTML = "";

    chars.forEach(c => {
        container.innerHTML += `
            <div class="card">
                <img src="${c.charImg}">
                <h3>${c.charName}</h3>
                <p>${c.charBio}</p>
            </div>
        `;
    });
}

/* --------------------------------------------------
   MAPS
-------------------------------------------------- */

function displayMaps(maps) {
    const container = document.getElementById("mapsSection");
    container.innerHTML = "";

    maps.forEach(m => {
        container.innerHTML += `
            <div class="card">
                <img src="${m.mapImg}">
                <h3>${m.mapName}</h3>
                <p>${m.mapDesc}</p>
            </div>
        `;
    });
}

/* --------------------------------------------------
   LORE
-------------------------------------------------- */

function displayLore(lore) {
    const container = document.getElementById("loreSection");
    container.innerHTML = "";

    lore.forEach(l => {
        container.innerHTML += `
            <div class="lore-block">
                <h3>${l.loreTitle}</h3>
                <p>${l.loreContent}</p>
            </div>
        `;
    });
}

/* --------------------------------------------------
   TEASERS
-------------------------------------------------- */

function displayTeasers(teasers) {
    const container = document.getElementById("teasersSection");
    container.innerHTML = "";

    teasers.forEach(t => {
        container.innerHTML += `
            <div class="card">
                <img src="${t.teaserImg}">
                <h3>${t.teaserTitle}</h3>
                <p>${t.teaserText}</p>
            </div>
        `;
    });
}

/* --------------------------------------------------
   BOOKS
-------------------------------------------------- */

function displayBooks(books) {
    const container = document.getElementById("booksSection");
    container.innerHTML = "";

    books.forEach(b => {
        container.innerHTML += `
            <div class="card book-card">
                <img src="${b.bookCover}">
                <h3>${b.bookTitle}</h3>
                <p>${b.bookSummary}</p>
            </div>
        `;
    });
}

/* --------------------------------------------------
   REVIEWS
-------------------------------------------------- */

function displayReviews(reviews) {
    const container = document.getElementById("reviewsSection");
    container.innerHTML = "";

    reviews.forEach(r => {
        container.innerHTML += `
            <div class="review-card">
                <img src="${r.reviewAvatar}">
                <h4>${r.reviewerName}</h4>
                <p>${r.reviewText}</p>
            </div>
        `;
    });
}

/* --------------------------------------------------
   FAN CLUB
-------------------------------------------------- */

function displayFanClub(fans) {
    const container = document.getElementById("fanclubSection");
    container.innerHTML = "";

    fans.forEach(f => {
        container.innerHTML += `
            <div class="fan-card">
                <img src="${f.fanAvatar}">
                <h4>${f.fanName}</h4>
                <p>${f.fanMessage}</p>
            </div>
        `;
    });
}
