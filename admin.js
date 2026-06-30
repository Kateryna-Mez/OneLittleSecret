/* =========================================
   SETTINGS
========================================= */

const baseUrl = "https://ТВОЙ_САЙТ.com/";

const googleForm = "https://forms.gle/";

const googleSheet = "https://docs.google.com/spreadsheets/...";


/* =========================================
   GUEST LIST
========================================= */

const guestTable = document.getElementById("guestTable");

Object.entries(guests).forEach(([id, guest]) => {

    const row = document.createElement("div");

    row.className = "guest";

    row.innerHTML = `
        <span>🤍 ${guest.name}</span>
        <button onclick="copyLink('${id}', this)">
            📋 Копировать
        </button>
    `;

    guestTable.appendChild(row);

});


/* =========================================
   COPY LINK
========================================= */

function copyLink(id, button) {

    const link = `${baseUrl}?g=${id}`;

    navigator.clipboard.writeText(link);

    button.textContent = "✅ Скопировано";

    setTimeout(() => {

        button.textContent = "📋 Копировать";

    }, 2000);

}


/* =========================================
   BUTTONS
========================================= */

document.getElementById("formButton").addEventListener("click", () => {

    window.open(googleForm, "_blank");

});

document.getElementById("sheetButton").addEventListener("click", () => {

    window.open(googleSheet, "_blank");

});