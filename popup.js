document.addEventListener('DOMContentLoaded', function () {

    // --- 1. DEFINICIÓN DE ICONOS SVG ---
    const leafFull = '<svg class="leaf-icon leaf-green" viewBox="0 0 24 24"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.73C7.09,14.37,11.45,7.55,17,8Z"/></svg>';
    const leafHalf = '<svg class="leaf-icon leaf-green" viewBox="0 0 24 24"><defs><clipPath id="half"><rect x="0" y="0" width="12" height="24"/></clipPath></defs><path clip-path="url(#half)" d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.73C7.09,14.37,11.45,7.55,17,8Z"/></svg>';
    const leafEmpty = '<svg class="leaf-icon leaf-gray" viewBox="0 0 24 24"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.73C7.09,14.37,11.45,7.55,17,8Z"/></svg>';
    const leafMini = '<svg class="mini-leaf" viewBox="0 0 24 24"><path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.73C7.09,14.37,11.45,7.55,17,8Z"/></svg>';

    // --- 2. DETECCIÓN DE LA URL Y LÓGICA PRINCIPAL ---
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let url = new URL(tabs[0].url);
        let domain = url.hostname.toLowerCase();

        let currentKey = null;
        let company = null;

        // Buscar coincidencia en la Base de Datos
        for (let key in companyDB) {
            if (domain.includes(key)) {
                currentKey = key;
                company = companyDB[key];
                break;
            }
        }

        const loading = document.getElementById('loading');
        const content = document.getElementById('content');

        if (!company) {
            loading.innerText = "No se detectó ninguna empresa registrada en esta página.";
            return;
        }

        // Mostrar contenido y ocultar carga
        loading.style.display = 'none';
        content.style.display = 'block';

        // --- 3. CÁLCULOS MATEMÁTICOS ---
        // Promedio (0 a 100)
        let avgStats = (company.stats.carbon + company.stats.labor + company.stats.materials) / 3;
        // Escala (0 a 5)
        let finalScore = (avgStats / 20).toFixed(1);

        // Definir colores (Solo texto y barras)
        let textClass = "text-red";
        if (finalScore >= 4) textClass = "text-green";
        else if (finalScore >= 3) textClass = "text-yellow";

        // --- 4. RENDERIZADO DE DATOS ---
        document.getElementById('company-name').innerText = company.name;
        document.getElementById('category-badge').innerText = company.category;

        // Mostrar la fuente de los datos
        let sourceText = company.source ? company.source : "Base de datos interna";
        document.getElementById('data-source').innerText = "Fuente: " + sourceText;

        // Puntuación Numérica
        let scoreEl = document.getElementById('score-number');
        scoreEl.innerText = finalScore;
        scoreEl.className = "score-text " + textClass;

        document.getElementById('reason-text').innerText = company.reason;

        // --- 5. GENERAR HOJAS (Visual) ---
        const leavesBox = document.getElementById('leaves-box');
        let htmlLeaves = "";
        let scoreTemp = finalScore;

        for (let i = 0; i < 5; i++) {
            if (scoreTemp >= 1) {
                htmlLeaves += leafFull;
                scoreTemp -= 1;
            } else if (scoreTemp >= 0.5) {
                htmlLeaves += leafHalf;
                scoreTemp = 0;
            } else {
                htmlLeaves += leafEmpty;
            }
        }
        leavesBox.innerHTML = htmlLeaves;

        // --- 6. GENERAR BARRAS DE PROGRESO ---
        const createBar = (label, val) => {
            let barClass = 'bg-red';
            if (val >= 80) barClass = 'bg-green';
            else if (val >= 60) barClass = 'bg-yellow';

            return `
                <div class="bar-row">
                    <div class="bar-label"><span>${label}</span><span>${val}/100</span></div>
                    <div class="bar-bg"><div class="bar-fill ${barClass}" style="width:${val}%;"></div></div>
                </div>`;
        };

        const barsContainer = document.getElementById('bars-container');
        barsContainer.innerHTML = createBar("Huella de Carbono", company.stats.carbon) +
            createBar("Derechos Laborales", company.stats.labor) +
            createBar("Materiales y Salud", company.stats.materials);

        // Evento Click para desplegar detalles
        document.getElementById('score-container').addEventListener('click', () => {
            const panel = document.getElementById('details-panel');
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        });

        // --- 7. CERTIFICACIONES ---
        if (company.certifications && company.certifications.length > 0) {
            document.getElementById('certs-section').style.display = 'block';
            const certList = document.getElementById('certs-list');
            company.certifications.forEach(c => {
                certList.innerHTML += `<a href="${c.url}" target="_blank" class="cert-btn">${c.name}</a>`;
            });
        }

        // --- 8. RECOMENDACIONES INTELIGENTES ---
        let recommendations = [];
        const strictLocalCategories = ['supermercado', 'finanzas', 'telecom', 'energia', 'servicios'];

        // Detectar si la empresa actual es de Panamá
        let isPanama = company.source && (company.source.includes("RSE") || company.source.includes("Nacional") || company.source.includes("Local"));

        for (let key in companyDB) {
            let c = companyDB[key];

            // Filtro 1: Misma Categoría
            if (c.category !== company.category) continue;

            // Filtro 2: No mostrar la misma empresa
            if (key === currentKey) continue;

            // Filtro 3 (Opcional): Si estoy viendo una empresa panameña, tratar de mostrar panameñas
            if (isPanama && strictLocalCategories.includes(company.category)) {
                // Si descomentas la siguiente linea, filtra estrictamente
                // if (!c.source.includes("RSE") && !c.source.includes("Nacional")) continue; 
            }

            // Calcular score del candidato
            let s = ((c.stats.carbon + c.stats.labor + c.stats.materials) / 3 / 20);

            // Asegurar que existe URL, si no, poner #
            let link = c.url ? c.url : "#";

            recommendations.push({ name: c.name, score: s.toFixed(1), url: link });
        }

        // Ordenar mejores primero
        recommendations.sort((a, b) => b.score - a.score);
        let top3 = recommendations.slice(0, 3);

        if (top3.length > 0) {
            document.getElementById('recs-section').style.display = 'block';
            const recList = document.getElementById('recs-list');
            recList.innerHTML = ''; // Limpiar

            top3.forEach(rec => {
                let recColor = rec.score >= 4 ? '#27ae60' : (rec.score >= 3 ? '#f1c40f' : '#e74c3c');

                recList.innerHTML += `
                    <div class="rec-item">
                        <a href="${rec.url}" target="_blank" style="text-decoration:none; color:inherit; font-weight:bold; cursor:pointer;">
                            ${rec.name} 🔗
                        </a>
                        <div style="display:flex; align-items:center;">
                            <span style="color:${recColor}; font-weight:bold; margin-right:5px;">${rec.score}</span>
                            ${leafMini}
                        </div>
                    </div>`;
            });
        }
    });

    // --- 9. FIX PARA ABRIR LINKS (Reporte, Certificaciones y Recomendaciones) ---
    // Esto es necesario porque las extensiones a veces bloquean enlaces directos en popups.
    window.addEventListener('click', function (e) {
        // Busca si lo que clickeaste es un link (etiqueta 'a') o está dentro de uno
        let link = e.target.closest('a');

        if (link && link.href) {
            // Evita el comportamiento por defecto y fuerza la apertura de pestaña
            e.preventDefault();
            chrome.tabs.create({ url: link.href });
        }
    });

});