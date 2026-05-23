tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                spaceblack: '#ffffff',
                geobg: '#f8fafc',
                accentcyan: '#0891b2',
                accentamber: '#d97706',
            }
        }
    }
}

// Database of Geological Eons modified for Light Theme badges
const eonsData = {
    hadeano: {
        name: "Éon Hadeano",
        category: "Pré-Cambriano",
        period: "4.560 M.a. — 4.000 M.a.",
        colorClass: "border-rose-200 text-rose-600 bg-rose-50",
        colorHex: "#f43f5e",
        progressWidth: "15%",
        o2: "Praticamente 0% (Tóxico)",
        temp: "Extremo (Magma fervente)",
        life: "Nenhum registro estável",
        desc: "O nascimento caótico do nosso planeta. Durante o Hadeano (referência ao Hades), a Terra era um inferno coberto de oceanos de rocha derretida (magma) e bombardeada continuamente por meteoritos do jovem Sistema Solar. Nesse período ocorreu a colisão catastrófica com o planeta Theia, que originou a nossa Lua.",
        milestones: [
            "Acreção e consolidação inicial da massa terrestre.",
            "Formação da atmosfera primitiva (vapor d'água, metano e amônia).",
            "Impacto com Theia e formação do satélite lunar.",
            "Resfriamento inicial da superfície e primeiras chuvas de longa duração."
        ]
    },
    arqueano: {
        name: "Éon Arqueano",
        category: "Pré-Cambriano",
        period: "4.000 M.a. — 2.500 M.a.",
        colorClass: "border-amber-200 text-amber-600 bg-amber-50",
        colorHex: "#f59e0b",
        progressWidth: "45%",
        o2: "Vestigial (Menos de 1%)",
        temp: "Muito Alta (Oceanos quentes)",
        life: "Microbiológica (Procariontes/Bactérias)",
        desc: "Com o resfriamento parcial, formam-se os primeiros oceanos ácidos permanentes. Surgem as primeiras massas de crosta continental. É o período do alvorecer da vida: cianobactérias começam a habitar mares quentes e escuros e iniciam os primeiros ciclos de fotossíntese.",
        milestones: [
            "Primeiras bioestruturas estáveis conhecidas (Estromatólitos).",
            "Aparecimento dos primeiros organismos unicelulares procariontes.",
            "Fotossíntese primitiva convertendo luz solar em energia celular.",
            "Formação dos primeiros oceanos líquidos estáveis."
        ]
    },
    proterozoico: {
        name: "Éon Proterozoico",
        category: "Pré-Cambriano",
        period: "2.500 M.a. — 541 M.a.",
        colorClass: "border-emerald-200 text-emerald-600 bg-emerald-50",
        colorHex: "#10b981",
        progressWidth: "75%",
        o2: "Em ascensão constante (Até 15%)",
        temp: "Instável (Grandes eras do gelo)",
        life: "Células complexas (Eucariotos)",
        desc: "Um éon marcado por revoluções extremas. As cianobactérias liberam tanto oxigênio que causam a extinção em massa de organismos anaeróbicos e congelam o planeta quase que inteiramente na chamada 'Terra Bola de Neve'. No final do Proterozoico, surgem os primeiros fósseis de tecidos moles e células eucariotas com núcleo.",
        milestones: [
            "Grande Evento de Oxigenação Atmosférica (Revolução do Oxigênio).",
            "Glaciações globais severas ('Terra Bola de Neve').",
            "Evolução das células complexas com núcleo (Eucariotas).",
            "Fauna de Ediacara: primeiros tecidos moles multicelulares."
        ]
    },
    fanerozoico: {
        name: "Éon Fanerozoico",
        category: "Era Visível",
        period: "541 M.a. — Presente",
        colorClass: "border-cyan-200 text-cyan-600 bg-cyan-50",
        colorHex: "#06b6d4",
        progressWidth: "100%",
        o2: "Estabilizado (Aprox. 21%)",
        temp: "Moderado e Flutuante",
        life: "Complexa (Animais, Plantas, Humanos)",
        desc: "O éon que habitamos hoje. Caracterizado pela proliferação explosiva de fósseis com carapaças rígidas marinhas (Explosão Cambriana), consolidação dos primeiros anfíbios terrestres, florestas imensas, ascensão e queda dos dinossauros gigantes e, finalmente, a evolução da humanidade.",
        milestones: [
            "A Explosão Cambriana com diversificação total dos filos animais.",
            "Surgimento dos peixes com mandíbula e primeiros passos na terra firme.",
            "Domínio dos dinossauros durante a Era Mesozoica.",
            "Surgimento e evolução das civilizações humanas modernas."
        ]
    }
};

// Events database for Search Interface
const encyclopediaEvents = [
    { title: "Nascimento da Terra", eon: "Hadeano", age: "4.560 M.a.", desc: "Fusão gravitacional de matéria em órbita solar dando origem ao jovem planeta rochoso." },
    { title: "Colisão de Theia", eon: "Hadeano", age: "4.510 M.a.", desc: "Um protoplaneta choca-se com a Terra primitiva, ejetando detritos que se acumularam para formar a Lua." },
    { title: "Origem da Vida", eon: "Arqueano", age: "3.800 M.a.", desc: "Surgimento das primeiras moléculas orgânicas autorreplicantes em fontes hidrotermais submarinas." },
    { title: "Estromatólitos", eon: "Arqueano", age: "3.500 M.a.", desc: "Colônias rochosas produzidas por cianobactérias iniciam a atividade de oxigenação." },
    { title: "A Grande Oxigenação", eon: "Proterozoico", age: "2.400 M.a.", desc: "O acúmulo de O₂ livre oxigena o ferro marinho e se acumula na atmosfera pela primeira vez." },
    { title: "Terra Bola de Neve", eon: "Proterozoico", age: "700 M.a.", desc: "Intenso resfriamento global que cobriu o globo sob grossas camadas de gelo glacial." },
    { title: "Explosão Cambriana", eon: "Fanerozoico", age: "541 M.a.", desc: "Momento espetacular de diversificação biológica com o surgimento rápido de predadores marinhas." },
    { title: "Extinção Permiana", eon: "Fanerozoico", age: "252 M.a.", desc: "A maior crise biológica da Terra, eliminando cerca de 95% das espécies de vida do planeta." },
    { title: "Extinção dos Dinossauros", eon: "Fanerozoico", age: "66 M.a.", desc: "Queda de um asteroide gigante na Península de Yucatán, encerrando abruptamente a Era Mesozoica." },
    { title: "Aparecimento do Homo Sapiens", eon: "Fanerozoico", age: "0.3 M.a.", desc: "Evolução dos hominídeos no continente africano, marcando o início da nossa espécie." }
];

// Function to update rendering of selected eon
function changeEon(eonKey) {
    const eon = eonsData[eonKey];
    if (!eon) return;
    document.getElementById("timeline-progress-bar").style.width = eon.progressWidth;
    Object.keys(eonsData).forEach(key => {
        const dot = document.getElementById(`dot-${key}`);
        const icon = document.getElementById(`icon-${key}`);
        const label = document.getElementById(`label-${key}`);
        dot.className = "w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 group-hover:border-slate-300 transition-all duration-300 shadow-sm";
        icon.className = icon.className.replace(/text-(rose|amber|emerald|cyan|slate)-(500|100|400)/g, "text-slate-400");
        label.className = "block text-[10px] font-bold text-slate-400 mt-2 text-center transition-colors";
    });
    const activeDot = document.getElementById(`dot-${eonKey}`);
    const activeIcon = document.getElementById(`icon-${eonKey}`);
    const activeLabel = document.getElementById(`label-${eonKey}`);
    let textClass = "text-cyan-600";
    let borderClass = "border-cyan-500";
    if (eonKey === 'hadeano') { textClass = "text-rose-500"; borderClass = "border-rose-500"; }
    else if (eonKey === 'arqueano') { textClass = "text-amber-500"; borderClass = "border-amber-500"; }
    else if (eonKey === 'proterozoico') { textClass = "text-emerald-500"; borderClass = "border-emerald-500"; }
    activeDot.className = `w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border-2 ${borderClass} scale-110 shadow-md`;
    activeIcon.className = activeIcon.className.replace("text-slate-400", textClass);
    activeLabel.className = `block text-[10px] font-extrabold ${textClass} mt-2 text-center transition-colors`;
    const card = document.getElementById("eon-card");
    card.classList.add("opacity-50", "translate-y-2");
    setTimeout(() => {
        document.getElementById("eon-category").innerText = eon.category;
        document.getElementById("eon-name").innerText = eon.name;
        document.getElementById("eon-period").innerText = eon.period;
        const colorBadge = document.getElementById("eon-color-badge");
        colorBadge.className = `px-3 py-1 rounded-full text-[10px] font-bold border flex items-center gap-1.5 self-start md:self-auto ${eon.colorClass}`;
        colorBadge.innerHTML = `<span class="w-2 h-2 rounded-full" style="background-color: ${eon.colorHex};"></span> ${eon.category}`;
        document.getElementById("stat-o2").innerText = eon.o2;
        document.getElementById("stat-temp").innerText = eon.temp;
        document.getElementById("stat-life").innerText = eon.life;
        document.getElementById("eon-desc").innerText = eon.desc;
        const milestonesContainer = document.getElementById("eon-milestones");
        milestonesContainer.innerHTML = "";
        eon.milestones.forEach(m => {
            const li = document.createElement("li");
            li.className = "flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100/55 dark:border-slate-700";
            li.innerHTML = `<span class="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style="background-color: ${eon.colorHex};"></span><span class="text-slate-700 dark:text-slate-300">${m}</span>`;
            milestonesContainer.appendChild(li);
        });
        card.classList.remove("opacity-50", "translate-y-2");
    }, 250);
}

function renderEvents(itemsList) {
    const container = document.getElementById("events-grid");
    container.innerHTML = "";
    if (itemsList.length === 0) {
        container.innerHTML = `<div class="sm:col-span-2 text-center py-8 text-slate-400"><i class="fa-solid fa-triangle-exclamation text-xl block mb-2"></i><span class="text-xs">Nenhum marco geológico encontrado com esse termo.</span></div>`;
        return;
    }
    itemsList.forEach(ev => {
        const badgeColor = ev.eon === "Hadeano" ? "bg-rose-50 text-rose-600 border-rose-100" : ev.eon === "Arqueano" ? "bg-amber-50 text-amber-600 border-amber-100" : ev.eon === "Proterozoico" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-cyan-50 text-cyan-600 border-cyan-100";
        const cardDiv = document.createElement("div");
        cardDiv.className = "p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-md transition-all";
        cardDiv.innerHTML = `
            <div class="flex justify-between items-start gap-2 mb-2">
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">${ev.title}</h4>
                <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${badgeColor} flex-shrink-0">${ev.age}</span>
            </div>
            <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">${ev.desc}</p>
            <span class="block text-[8px] font-bold text-slate-400 dark:text-slate-500 mt-2.5 uppercase tracking-widest">
                <i class="fa-regular fa-clock mr-1"></i> Ocorrido no Éon ${ev.eon}
            </span>
        `;
        container.appendChild(cardDiv);
    });
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

function filterEvents() {
    const query = document.getElementById("event-search").value.toLowerCase();
    const filtered = encyclopediaEvents.filter(ev => ev.title.toLowerCase().includes(query) || ev.desc.toLowerCase().includes(query) || ev.eon.toLowerCase().includes(query));
    renderEvents(filtered);
}

window.onload = function() {
    // Initialize Theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
    } else {
        updateThemeIcon(false);
    }

    changeEon("hadeano");
    renderEvents(encyclopediaEvents);
}