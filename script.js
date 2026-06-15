// Weetjes per dier
const weetjes = {
    olifant: {
        emoji: "🐘",
        naam: "Olifant",
        tekst: "Olifanten zijn de enige dieren die niet kunnen springen! Een volwassen olifant weegt gemiddeld 5.000 kg en kan tot 70 jaar oud worden. Ze hebben een uitzonderlijk geheugen en herkennen zelfs oude vrienden na jaren."
    },
    haai: {
        emoji: "🦈",
        naam: "Haai",
        tekst: "Haaien hebben in hun leven wel 30.000 tanden! Ze groeien steeds nieuwe tanden aan als oude uitvallen. Haaien bestaan al meer dan 400 miljoen jaar en zwemmen al voor de dinosauriërs op aarde rondzwierven."
    },
    papegaai: {
        emoji: "🦜",
        naam: "Papegaai",
        tekst: "Sommige papegaaien kunnen meer dan 1.000 woorden leren en kunnen tot 80 jaar oud worden! Ze zijn ook heel slim: ze kunnen puzzels oplossen en gereedschap gebruiken."
    },
    krokodil: {
        emoji: "🐊",
        naam: "Krokodil",
        tekst: "Krokodillen bestaan al meer dan 200 miljoen jaar — ze leefden samen met de dinosauriërs! Ze kunnen meer dan een uur onder water blijven en hebben de sterkste bijtkracht van alle levende dieren."
    },
    pinguin: {
        emoji: "🐧",
        naam: "Pinguïn",
        tekst: "Pinguïns kunnen niet vliegen, maar zijn geweldige zwemmers! Ze kunnen tot 400 meter diep duiken en halen snelheden van 36 km/u in het water. Ze leven alleen op het zuidelijk halfrond."
    },
    leeuw: {
        emoji: "🦁",
        naam: "Leeuw",
        tekst: "Leeuwen zijn de enige katachtigen die in groepen leven, ook wel 'trots' genoemd. Een mannetjesleeuw slaapt gemiddeld 20 uur per dag. Het gebrul van een leeuw is tot 8 kilometer ver te horen!"
    }
};

// Toon popup met weetje
function toonWeetje(dier) {
    const info = weetjes[dier];
    if (!info) return;

    document.getElementById("popup-emoji").textContent = info.emoji;
    document.getElementById("popup-naam").textContent = info.naam;
    document.getElementById("popup-tekst").textContent = info.tekst;
    document.getElementById("popup").classList.remove("verborgen");
}

// Sluit popup
function sluitPopup() {
    document.getElementById("popup").classList.add("verborgen");
}

// Sluit popup bij klik buiten de inhoud
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("popup").addEventListener("click", function (e) {
        if (e.target === this) {
            sluitPopup();
        }
    });
});
