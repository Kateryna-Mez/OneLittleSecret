/* =========================================
   OPEN INVITATION
========================================= */

const openButton = document.getElementById("openInvitation");
const intro = document.getElementById("intro");
const site = document.getElementById("site");

if (openButton && intro && site) {
        openButton.addEventListener("click", () => {
        intro.style.display = "none";
        site.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* =========================================
   PERSONAL INVITATION
========================================= */

const urlParams = new URLSearchParams(window.location.search);
const guestCode = urlParams.get("g");
const greeting = document.getElementById("guestGreeting");

if (greeting) {
    if (guestCode && guests[guestCode]) {
        greeting.textContent = guests[guestCode].greeting;
    } else {
        greeting.textContent = "🤍 Дорогие гости! 🤍";
    }
}

/* =========================================
   COUNTDOWN
========================================= */

const targetDate = new Date("2026-07-03T14:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        ["days", "hours", "minutes", "seconds"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = "00";
        });
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =========================================
   TO TOP BUTTON
========================================= */

const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {

    if (!toTop) return;

    if (window.scrollY > 500) {
        toTop.style.opacity = "1";
        toTop.style.pointerEvents = "auto";
    } else {
        toTop.style.opacity = "0";
        toTop.style.pointerEvents = "none";
    }

});

if (toTop) {
    toTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}