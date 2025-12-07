const companyDB = {
    // --- MODA Y ROPA ---
    "shein": {
        "name": "Shein",
        "url": "https://www.shein.com",
        "category": "moda",
        "source": "Good On You Directory",
        "stats": { "carbon": 10, "labor": 10, "materials": 20 },
        "reason": "Calificación 'We Avoid' (Evitar). Modelo ultra rápido, falta de transparencia y uso masivo de sintéticos.",
        "certifications": []
    },
    "patagonia": {
        "name": "Patagonia",
        "url": "https://www.patagonia.com",
        "category": "moda",
        "source": "Good On You Directory",
        "stats": { "carbon": 90, "labor": 85, "materials": 95 },
        "reason": "Líder en la industria. 'Great'. Usa materiales reciclados y audita a proveedores.",
        "certifications": [{ name: "B Corp", url: "https://www.bcorporation.net/" }]
    },
    "zara": {
        "name": "Zara",
        "url": "https://www.zara.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 50, "labor": 40, "materials": 50 },
        "reason": "Clasificada como 'It's a start'. Tiene objetivos climáticos, pero el modelo Fast Fashion genera demasiados residuos.",
        "certifications": []
    },
    "hm": {
        "name": "H&M",
        "url": "https://www2.hm.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 55, "labor": 50, "materials": 45 },
        "reason": "Tiene programas de reciclaje, pero el volumen de producción sigue siendo insostenible. Paga salarios dignos en pocas fábricas.",
        "certifications": []
    },
    "forever21": {
        "name": "Forever 21",
        "url": "https://www.forever21.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 15, "labor": 10, "materials": 15 },
        "reason": "Calificación 'We Avoid'. No divulga suficiente información sobre su impacto ambiental o condiciones laborales.",
        "certifications": []
    },
    "nike": {
        "name": "Nike",
        "url": "https://www.nike.com",
        "category": "moda",
        "source": "Good On You / Fashion Revolution",
        "stats": { "carbon": 50, "labor": 45, "materials": 50 },
        "reason": "Buenas políticas de reducción de carbono, pero críticas persistentes sobre salarios en la cadena de suministro.",
        "certifications": []
    },
    "adidas": {
        "name": "Adidas",
        "url": "https://www.adidas.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 65, "labor": 55, "materials": 60 },
        "reason": "Usa plástico oceánico reciclado (Parley). Buen progreso en reducción de agua y químicos.",
        "certifications": [{ name: "Parley", url: "https://www.parley.tv/" }]
    },
    "levis": {
        "name": "Levi's",
        "url": "https://www.levi.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 70, "labor": 60, "materials": 75 },
        "reason": "Clasificada como 'Good'. Fuerte programa 'Water<Less' para reducir el uso de agua en la producción de jeans.",
        "certifications": [{ name: "Better Cotton", url: "https://bettercotton.org/" }]
    },
    "veja": {
        "name": "Veja",
        "url": "https://www.veja-store.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 85, "labor": 85, "materials": 80 },
        "reason": "Zapatillas sostenibles. Usan caucho silvestre del Amazonas y algodón orgánico. Alta transparencia.",
        "certifications": [{ name: "B Corp", url: "https://www.bcorporation.net/" }]
    },
    "urbanoutfitters": {
        "name": "Urban Outfitters",
        "url": "https://www.urbanoutfitters.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 20, "labor": 20, "materials": 25 },
        "reason": "Clasificada como 'Not Good Enough'. Falta evidencia de minimización de residuos textiles.",
        "certifications": []
    },
    "tentree": {
        "name": "TenTree",
        "url": "https://www.tentree.com",
        "category": "moda",
        "source": "B Corp Directory",
        "stats": { "carbon": 95, "labor": 90, "materials": 90 },
        "reason": "Plantan 10 árboles por compra. Carbono neutral certificado.",
        "certifications": [{ name: "B Corp", url: "https://www.bcorporation.net/" }]
    },

    // --- TECNOLOGÍA ---
    "apple": {
        "name": "Apple",
        "url": "https://www.apple.com",
        "category": "hardware",
        "source": "Yahoo Finance ESG",
        "stats": { "carbon": 75, "labor": 60, "materials": 70 },
        "reason": "Operaciones corporativas carbono neutrales. Alto uso de aluminio reciclado, pero difícil reparabilidad.",
        "certifications": []
    },
    "microsoft": {
        "name": "Microsoft",
        "url": "https://www.microsoft.com",
        "category": "software",
        "source": "MSCI ESG Ratings",
        "stats": { "carbon": 90, "labor": 85, "materials": 80 },
        "reason": "Objetivo ambicioso: 'Carbon Negative' para 2030. Líderes en tecnología verde.",
        "certifications": []
    },
    "samsung": {
        "name": "Samsung",
        "url": "https://www.samsung.com",
        "category": "hardware",
        "source": "Greenpeace Guide",
        "stats": { "carbon": 50, "labor": 60, "materials": 55 },
        "reason": "Dependencia alta de combustibles fósiles en manufactura, aunque ha mejorado sus compromisos recientes.",
        "certifications": []
    },
    "sony": {
        "name": "Sony",
        "url": "https://www.sony.com",
        "category": "hardware",
        "source": "CSRHub",
        "stats": { "carbon": 70, "labor": 70, "materials": 65 },
        "reason": "Plan 'Road to Zero' para huella ambiental cero en 2050. Buenos avances en reciclaje.",
        "certifications": []
    },
    "hp": {
        "name": "HP",
        "url": "https://www.hp.com",
        "category": "hardware",
        "source": "Newsweek Green Rankings",
        "stats": { "carbon": 80, "labor": 75, "materials": 75 },
        "reason": "Líder en uso de plásticos reciclados en impresoras y laptops. Transparencia alta.",
        "certifications": [{ name: "Energy Star", url: "https://www.energystar.gov/" }]
    },

    // --- BELLEZA Y CUIDADO PERSONAL ---
    "thebodyshop": {
        "name": "The Body Shop",
        "url": "https://www.thebodyshop.com",
        "category": "belleza",
        "source": "B Corp Directory",
        "stats": { "carbon": 85, "labor": 90, "materials": 85 },
        "reason": "Pioneros en Cruelty-Free y Comercio Justo Comunitario. Certificada B Corp.",
        "certifications": [{ name: "B Corp", url: "https://www.bcorporation.net/" }, { name: "Cruelty Free", url: "https://www.leapingbunny.org/" }]
    },
    "loreal": {
        "name": "L'Oréal",
        "url": "https://www.loreal.com",
        "category": "belleza",
        "source": "CDP Score",
        "stats": { "carbon": 70, "labor": 65, "materials": 60 },
        "reason": "Puntuación 'A' en cambio climático por CDP, pero críticas por envases plásticos y testeo animal en ciertos mercados.",
        "certifications": []
    },
    "unilever": {
        "name": "Unilever (Dove/Axe)",
        "url": "https://www.unilever.com",
        "category": "belleza",
        "source": "Sustainalytics",
        "stats": { "carbon": 75, "labor": 70, "materials": 60 },
        "reason": "Compromisos fuertes para reducir plástico virgen, aunque siguen siendo grandes contaminantes de plásticos.",
        "certifications": []
    },
    "lush": {
        "name": "Lush",
        "url": "https://www.lush.com",
        "category": "belleza",
        "source": "Ethical Consumer",
        "stats": { "carbon": 85, "labor": 80, "materials": 90 },
        "reason": "Muchos productos 'desnudos' (sin empaque). Lucha activa contra el testeo animal.",
        "certifications": []
    },

    // --- ALIMENTOS Y BEBIDAS ---
    "cocacola": {
        "name": "Coca-Cola",
        "url": "https://www.coca-colacompany.com",
        "category": "alimentos",
        "source": "Break Free From Plastic",
        "stats": { "carbon": 40, "labor": 50, "materials": 20 },
        "reason": "Nombrada la mayor contaminadora de plástico del mundo repetidamente, a pesar de sus campañas de reciclaje.",
        "certifications": []
    },
    "nestle": {
        "name": "Nestlé",
        "url": "https://www.nestle.com",
        "category": "alimentos",
        "source": "Oxfam Behind the Brands",
        "stats": { "carbon": 45, "labor": 40, "materials": 30 },
        "reason": "Críticas históricas sobre uso de agua y plásticos de un solo uso. Mejorando lentamente.",
        "certifications": []
    },
    "oatly": {
        "name": "Oatly",
        "url": "https://www.oatly.com",
        "category": "alimentos",
        "source": "Sustainalytics",
        "stats": { "carbon": 90, "labor": 80, "materials": 85 },
        "reason": "Alternativa láctea con huella de carbono muy inferior a la leche de vaca. Transparencia radical.",
        "certifications": []
    },
    "starbucks": {
        "name": "Starbucks",
        "url": "https://www.starbucks.com",
        "category": "alimentos",
        "source": "CSRHub",
        "stats": { "carbon": 55, "labor": 50, "materials": 40 },
        "reason": "Promesas de eliminar vasos desechables, pero el progreso es lento. Uso masivo de plástico.",
        "certifications": [{ name: "LEED Stores", url: "https://www.usgbc.org/leed" }]
    },
    "pepsico": {
        "name": "PepsiCo",
        "url": "https://www.pepsico.com",
        "category": "alimentos",
        "source": "MSCI ESG",
        "stats": { "carbon": 45, "labor": 50, "materials": 25 },
        "reason": "Gran generador de residuos plásticos. Objetivos de agricultura regenerativa en proceso.",
        "certifications": []
    },

    // --- HOGAR Y RETAIL ---
    "ikea": {
        "name": "IKEA",
        "url": "https://www.ikea.com",
        "category": "hogar",
        "source": "Sustainalytics",
        "stats": { "carbon": 75, "labor": 70, "materials": 70 },
        "reason": "Invierte masivamente en energía renovable. Madera certificada FSC, pero fomenta consumo masivo.",
        "certifications": [{ name: "FSC", url: "https://fsc.org/" }]
    },
    "amazon": {
        "name": "Amazon",
        "url": "https://www.amazon.com",
        "category": "hogar",
        "source": "Climate Action 100+",
        "stats": { "carbon": 40, "labor": 30, "materials": 20 },
        "reason": "Críticas severas por emisiones logísticas, destrucción de devoluciones y condiciones laborales.",
        "certifications": []
    },
    // --- AUTOMOTRIZ (Nueva Categoría) ---
    "tesla": {
        "name": "Tesla",
        "url": "https://www.tesla.com",
        "category": "automotriz",
        "source": "MSCI ESG Ratings",
        "stats": { "carbon": 90, "labor": 50, "materials": 70 },
        "reason": "Líder indiscutible en reducción de emisiones vehiculares, pero críticas constantes sobre derechos laborales en sus fábricas.",
        "certifications": []
    },
    "toyota": {
        "name": "Toyota",
        "url": "https://www.toyota.com",
        "category": "automotriz",
        "source": "InfluenceMap",
        "stats": { "carbon": 40, "labor": 60, "materials": 55 },
        "reason": "Pioneros en híbridos, pero criticados recientemente por retrasar la transición total a vehículos eléctricos y cabildeo anti-clima.",
        "certifications": []
    },
    "volkswagen": {
        "name": "Volkswagen",
        "url": "https://www.vw.com",
        "category": "automotriz",
        "source": "Sustainalytics",
        "stats": { "carbon": 55, "labor": 70, "materials": 60 },
        "reason": "Invirtiendo masivamente en eléctricos tras el escándalo 'Dieselgate', aunque sigue dependiendo mucho de motores de combustión.",
        "certifications": []
    },
    "bmw": {
        "name": "BMW",
        "url": "https://www.bmw.com",
        "category": "automotriz",
        "source": "Dow Jones Sustainability Index",
        "stats": { "carbon": 65, "labor": 80, "materials": 70 },
        "reason": "Líder en economía circular automotriz y uso de materiales reciclados en interiores, con buenas prácticas laborales.",
        "certifications": []
    },
    "ford": {
        "name": "Ford",
        "url": "https://www.ford.com",
        "category": "automotriz",
        "source": "CDP Climate Change",
        "stats": { "carbon": 60, "labor": 75, "materials": 65 },
        "reason": "Compromisos sólidos de electrificación para 2030 y buenas relaciones sindicales en comparación con la competencia.",
        "certifications": []
    },

    // --- MÁS MODA Y DEPORTE ---
    "puma": {
        "name": "Puma",
        "url": "https://www.puma.com",
        "category": "moda",
        "source": "Business of Fashion Index",
        "stats": { "carbon": 75, "labor": 70, "materials": 65 },
        "reason": "Nombrada la marca más sostenible del sector en 2022. Transparencia alta en su cadena de suministro.",
        "certifications": []
    },
    "thenorthface": {
        "name": "The North Face",
        "url": "https://www.thenorthface.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 60, "labor": 50, "materials": 65 },
        "reason": "Usa plumón reciclado y garantiza bienestar animal (RDS), pero necesita mejorar en salarios dignos.",
        "certifications": [{ name: "RDS", url: "https://textileexchange.org/" }]
    },
    "gap": {
        "name": "GAP",
        "url": "https://www.gap.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 45, "labor": 40, "materials": 45 },
        "reason": "Clasificación 'Not Good Enough'. Progreso lento en objetivos de agua y falta de evidencia sobre pago de salarios dignos.",
        "certifications": []
    },
    "asos": {
        "name": "ASOS",
        "url": "https://www.asos.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 40, "labor": 45, "materials": 35 },
        "reason": "Modelo de 'Fast Fashion' dirigido a jóvenes con alto impacto ambiental y rotación de prendas.",
        "certifications": []
    },
    "reebok": {
        "name": "Reebok",
        "url": "https://www.reebok.com",
        "category": "moda",
        "source": "Fashion Transparency Index",
        "stats": { "carbon": 55, "labor": 50, "materials": 50 },
        "reason": "Esfuerzos medios. Lanzó zapatillas basadas en plantas, pero es una fracción pequeña de su producción.",
        "certifications": []
    },

    // --- MÁS TECNOLOGÍA ---
    "dell": {
        "name": "Dell",
        "url": "https://www.dell.com",
        "category": "hardware",
        "source": "EPEAT Registry",
        "stats": { "carbon": 80, "labor": 75, "materials": 85 },
        "reason": "Excelente uso de plásticos del océano en empaques y programas de reciclaje de hardware antiguos.",
        "certifications": [{ name: "EPEAT Gold", url: "https://www.epeat.net/" }]
    },
    "nintendo": {
        "name": "Nintendo",
        "url": "https://www.nintendo.com",
        "category": "hardware",
        "source": "Greenpeace Guide to Greener Electronics",
        "stats": { "carbon": 20, "labor": 40, "materials": 30 },
        "reason": "Históricamente la peor calificada en guías ecológicas. Cero transparencia sobre químicos o emisiones.",
        "certifications": []
    },
    "canon": {
        "name": "Canon",
        "url": "https://www.canon.com",
        "category": "hardware",
        "source": "Clean Energy Ranking",
        "stats": { "carbon": 65, "labor": 70, "materials": 60 },
        "reason": "Buen programa de reciclaje de cartuchos, pero rezagada en la transición a energías renovables.",
        "certifications": []
    },

    // --- MÁS ALIMENTOS Y COMIDA RÁPIDA ---
    "danone": {
        "name": "Danone",
        "url": "https://www.danone.com",
        "category": "alimentos",
        "source": "B Corp Directory",
        "stats": { "carbon": 85, "labor": 80, "materials": 75 },
        "reason": "Una de las multinacionales más grandes con certificación B Corp. Fuerte enfoque en agricultura regenerativa.",
        "certifications": [{ name: "B Corp", url: "https://www.bcorporation.net/" }]
    },
    "beyondmeat": {
        "name": "Beyond Meat",
        "url": "https://www.beyondmeat.com",
        "category": "alimentos",
        "source": "Univ. of Michigan LCA",
        "stats": { "carbon": 90, "labor": 75, "materials": 85 },
        "reason": "Sus hamburguesas usan 99% menos agua y generan 90% menos emisiones que la carne de res.",
        "certifications": [{ name: "Non-GMO", url: "https://www.nongmoproject.org/" }]
    },
    "mcdonalds": {
        "name": "McDonald's",
        "url": "https://www.mcdonalds.com",
        "category": "alimentos",
        "source": "Coller FAIRR Protein Index",
        "stats": { "carbon": 30, "labor": 35, "materials": 25 },
        "reason": "Enorme huella de carbono por carne vacuna. Críticas constantes por salarios bajos y envases de un solo uso.",
        "certifications": []
    },
    "burgerking": {
        "name": "Burger King",
        "url": "https://www.bk.com",
        "category": "alimentos",
        "source": "Restaurant Brands Intl Report",
        "stats": { "carbon": 30, "labor": 35, "materials": 25 },
        "reason": "Puntaje bajo en sostenibilidad de la carne y deforestación asociada a la soja para el ganado.",
        "certifications": []
    },

    // --- MÁS RETAIL Y BELLEZA ---
    "walmart": {
        "name": "Walmart",
        "url": "https://www.walmart.com",
        "category": "supermercado",
        "source": "Sustainability Consortium",
        "stats": { "carbon": 40, "labor": 25, "materials": 35 },
        "reason": "Proyecto Gigatón en marcha, pero su modelo de bajo costo presiona a proveedores a bajar estándares laborales.",
        "certifications": []
    },
    "etsy": {
        "name": "Etsy",
        "url": "https://www.etsy.com",
        "category": "hogar",
        "source": "Etsy Impact Report",
        "stats": { "carbon": 90, "labor": 85, "materials": 80 },
        "reason": "Primera gran plataforma de comercio electrónico en compensar el 100% de las emisiones de envío.",
        "certifications": []
    },
    "natura": {
        "name": "Natura",
        "url": "https://www.naturabrasil.com",
        "category": "belleza",
        "source": "B Corp Directory",
        "stats": { "carbon": 95, "labor": 95, "materials": 95 },
        "reason": "Gigante brasileño ejemplar. Protege la Amazonía y tiene certificación B Corp desde hace años.",
        "certifications": [{ name: "B Corp", url: "https://www.bcorporation.net/" }, { name: "UEBT", url: "https://www.ethicalbiotrade.org/" }]
    },
    // --- SERVICIOS DIGITALES Y STREAMING ---
    "netflix": {
        "name": "Netflix",
        "url": "https://www.netflix.com",
        "category": "software",
        "source": "Sustainalytics",
        "stats": { "carbon": 75, "labor": 80, "materials": 90 },
        "reason": "Promesa de emisiones netas cero ('Net Zero + Nature'). Invierte mucho en conservación para compensar el streaming.",
        "certifications": []
    },
    "spotify": {
        "name": "Spotify",
        "url": "https://www.spotify.com",
        "category": "software",
        "source": "Company Impact Report",
        "stats": { "carbon": 70, "labor": 85, "materials": 90 },
        "reason": "Modelo de negocio digital con baja huella física, aunque el almacenamiento en servidores consume mucha energía.",
        "certifications": []
    },
    "google": {
        "name": "Google",
        "url": "https://www.google.com",
        "category": "software",
        "source": "Greenpeace Clicking Clean",
        "stats": { "carbon": 90, "labor": 85, "materials": 80 },
        "reason": "Carbono neutral desde 2007. Uno de los mayores compradores corporativos de energía renovable del mundo.",
        "certifications": []
    },
    "meta": {
        "name": "Meta (Facebook/Instagram)",
        "url": "https://about.meta.com",
        "category": "software",
        "source": "MSCI ESG",
        "stats": { "carbon": 80, "labor": 60, "materials": 80 },
        "reason": "Alcanzó emisiones netas cero en operaciones globales, pero enfrenta fuertes críticas éticas y sociales.",
        "certifications": []
    },
    "uber": {
        "name": "Uber",
        "url": "https://www.uber.com",
        "category": "software",
        "source": "Fairwork Ratings",
        "stats": { "carbon": 40, "labor": 20, "materials": 50 },
        "reason": "Críticas severas por la precarización laboral ('Gig Economy') y aumento de congestión vehicular.",
        "certifications": []
    },
    "airbnb": {
        "name": "Airbnb",
        "url": "https://www.airbnb.com",
        "category": "software",
        "source": "Ethical Consumer",
        "stats": { "carbon": 65, "labor": 70, "materials": 60 },
        "reason": "Promueve turismo local, pero criticada por desplazar residentes y gentrificación en ciudades turísticas.",
        "certifications": []
    },

    // --- AEROLÍNEAS Y TRANSPORTE (Sector muy contaminante) ---
    "ryanair": {
        "name": "Ryanair",
        "url": "https://www.ryanair.com",
        "category": "transporte",
        "source": "Transport & Environment",
        "stats": { "carbon": 30, "labor": 25, "materials": 40 },
        "reason": "A menudo citada entre las 10 empresas más contaminantes de Europa. Historial de relaciones laborales tensas.",
        "certifications": []
    },
    "delta": {
        "name": "Delta Airlines",
        "url": "https://www.delta.com",
        "category": "transporte",
        "source": "S&P Global ESG",
        "stats": { "carbon": 55, "labor": 70, "materials": 60 },
        "reason": "Inversiones masivas en compensación de carbono, aunque críticos dicen que es 'greenwashing' si no reducen vuelos.",
        "certifications": []
    },
    "lufthansa": {
        "name": "Lufthansa",
        "url": "https://www.lufthansa.com",
        "category": "transporte",
        "source": "CDP Climate",
        "stats": { "carbon": 50, "labor": 80, "materials": 55 },
        "reason": "Uso pionero de combustible sostenible de aviación (SAF), pero sigue siendo una industria de alto impacto.",
        "certifications": []
    },

    // --- MÁS MODA Y LUJO ---
    "primark": {
        "name": "Primark",
        "url": "https://www.primark.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 30, "labor": 30, "materials": 20 },
        "reason": "Modelo de ultra bajo costo que fomenta la cultura de 'usar y tirar'. Transparencia limitada.",
        "certifications": []
    },
    "gucci": {
        "name": "Gucci",
        "url": "https://www.gucci.com",
        "category": "moda",
        "source": "Fashion Transparency Index",
        "stats": { "carbon": 70, "labor": 65, "materials": 60 },
        "reason": "Parte del grupo Kering. Ha eliminado pieles animales y es carbono neutral en operaciones propias.",
        "certifications": []
    },
    "prada": {
        "name": "Prada",
        "url": "https://www.prada.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 40, "labor": 40, "materials": 50 },
        "reason": "Clasificada 'Not Good Enough'. Usa nylon regenerado (Re-Nylon), pero falta transparencia en cadena de suministro.",
        "certifications": []
    },
    "louisvuitton": {
        "name": "Louis Vuitton",
        "url": "https://www.louisvuitton.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 35, "labor": 40, "materials": 30 },
        "reason": "Mala calificación ambiental ('Not Good Enough'). Poca evidencia de reducción de químicos peligrosos.",
        "certifications": []
    },
    "ralphlauren": {
        "name": "Ralph Lauren",
        "url": "https://www.ralphlauren.com",
        "category": "moda",
        "source": "Good On You",
        "stats": { "carbon": 45, "labor": 50, "materials": 40 },
        "reason": "Objetivos de sostenibilidad establecidos, pero progreso lento en comparación con sus competidores.",
        "certifications": []
    },

    // --- HIGIENE Y HOGAR ---
    "colgate": {
        "name": "Colgate-Palmolive",
        "url": "https://www.colgatepalmolive.com",
        "category": "belleza",
        "source": "Dow Jones Sustainability",
        "stats": { "carbon": 75, "labor": 70, "materials": 65 },
        "reason": "Lanzó el primer tubo de pasta dental reciclable. Buenos objetivos de reducción de agua.",
        "certifications": [{ name: "TRUE Zero Waste", url: "https://true.gbci.org/" }]
    },
    "gillette": {
        "name": "Gillette (P&G)",
        "url": "https://gillette.com",
        "category": "belleza",
        "source": "Ethical Consumer",
        "stats": { "carbon": 60, "labor": 60, "materials": 50 },
        "reason": "Programas de reciclaje de cuchillas (TerraCycle), pero el modelo de negocio depende de desechables.",
        "certifications": []
    },
    "johnson": {
        "name": "Johnson & Johnson",
        "url": "https://www.jnj.com",
        "category": "belleza",
        "source": "Newsweek Green Rankings",
        "stats": { "carbon": 65, "labor": 75, "materials": 55 },
        "reason": "Uso significativo de energía solar, pero historial de demandas por seguridad de ingredientes (talco).",
        "certifications": []
    },

    // --- COMIDA RÁPIDA Y BEBIDAS ---
    "kfc": {
        "name": "KFC",
        "url": "https://www.kfc.com",
        "category": "alimentos",
        "source": "World Animal Protection",
        "stats": { "carbon": 35, "labor": 40, "materials": 30 },
        "reason": "Baja calificación en bienestar animal (pollos) y cadena de suministro de soja vinculada a deforestación.",
        "certifications": []
    },
    "dominos": {
        "name": "Domino's Pizza",
        "url": "https://www.dominos.com",
        "category": "alimentos",
        "source": "Coller FAIRR Index",
        "stats": { "carbon": 25, "labor": 35, "materials": 20 },
        "reason": "Rezagada en compromisos climáticos comparada con rivales. Poca transparencia en proteínas.",
        "certifications": []
    },
    "subway": {
        "name": "Subway",
        "url": "https://www.subway.com",
        "category": "alimentos",
        "source": "Green America",
        "stats": { "carbon": 45, "labor": 40, "materials": 40 },
        "reason": "Acusaciones pasadas sobre calidad del atún y pan. Mejorando lentamente en bienestar animal.",
        "certifications": []
    },
    "heineken": {
        "name": "Heineken",
        "url": "https://www.heineken.com",
        "category": "alimentos",
        "source": "CDP Water Security",
        "stats": { "carbon": 75, "labor": 70, "materials": 80 },
        "reason": "Estrategia 'Brew a Better World'. Muy eficiente en uso de agua y agricultura sostenible.",
        "certifications": []
    },
    "corona": {
        "name": "Cerveza Corona (AB InBev)",
        "url": "https://www.corona.com",
        "category": "alimentos",
        "source": "Sustainalytics",
        "stats": { "carbon": 65, "labor": 60, "materials": 75 },
        "reason": "Primera marca global de bebidas en lograr huella de plástico neta cero (recuperan más del que generan).",
        "certifications": []
    },
    "kelloggs": {
        "name": "Kellogg's",
        "url": "https://www.kelloggs.com",
        "category": "alimentos",
        "source": "Oxfam Behind the Brands",
        "stats": { "carbon": 60, "labor": 55, "materials": 50 },
        "reason": "Progreso medio. Compromisos para eliminar deforestación por aceite de palma, pero ejecución lenta.",
        "certifications": []
    },
    "generalmills": {
        "name": "General Mills",
        "url": "https://www.generalmills.com",
        "category": "alimentos",
        "source": "Newsweek Green Rankings",
        "stats": { "carbon": 70, "labor": 75, "materials": 65 },
        "reason": "Fuerte impulso a la agricultura regenerativa para combatir el cambio climático desde el suelo.",
        "certifications": []
    },

    // --- BANCA Y FINANZAS (Nuevo Sector: ¿Quién financia el petróleo?) ---
    "jpmorgan": {
        "name": "JPMorgan Chase",
        "url": "https://www.jpmorganchase.com",
        "category": "finanzas",
        "source": "Banking on Climate Chaos",
        "stats": { "carbon": 20, "labor": 60, "materials": 50 },
        "reason": "El mayor financiador de combustibles fósiles del mundo. Calificación ambiental muy baja.",
        "certifications": []
    },
    "hsbc": {
        "name": "HSBC",
        "url": "https://www.hsbc.com",
        "category": "finanzas",
        "source": "ShareAction",
        "stats": { "carbon": 40, "labor": 65, "materials": 50 },
        "reason": "Compromiso de dejar de financiar nuevas minas de carbón, pero sigue invirtiendo en petróleo y gas.",
        "certifications": []
    },
    "triodos": {
        "name": "Triodos Bank",
        "url": "https://www.triodos.com",
        "category": "finanzas",
        "source": "B Corp Directory",
        "stats": { "carbon": 95, "labor": 95, "materials": 90 },
        "reason": "Banca ética referente mundial. Solo financia proyectos sociales, culturales y ecológicos.",
        "certifications": [{ name: "B Corp", url: "https://www.bcorporation.net/" }]
    },
    "paypal": {
        "name": "PayPal",
        "url": "https://www.paypal.com",
        "category": "finanzas",
        "source": "CDP Climate",
        "stats": { "carbon": 80, "labor": 85, "materials": 80 },
        "reason": "Comprometido con emisiones netas cero para 2040. Inversiones en justicia económica.",
        "certifications": []
    },
    "visa": {
        "name": "Visa",
        "url": "https://www.visa.com",
        "category": "finanzas",
        "source": "Sustainalytics",
        "stats": { "carbon": 85, "labor": 80, "materials": 75 },
        "reason": "Alcanzó la neutralidad de carbono en operaciones en 2020. Transición total a renovables.",
        "certifications": []
    },
    "mastercard": {
        "name": "Mastercard",
        "url": "https://www.mastercard.com",
        "category": "finanzas",
        "source": "DJSI",
        "stats": { "carbon": 85, "labor": 80, "materials": 75 },
        "reason": "Creó la 'Coalición Priceless Planet' para restaurar 100 millones de árboles.",
        "certifications": []
    },
    // --- JUGUETES Y ENTRETENIMIENTO ---
    "lego": {
        "name": "LEGO",
        "url": "https://www.lego.com",
        "category": "hogar",
        "source": "Reptrak Sustainability",
        "stats": { "carbon": 85, "labor": 90, "materials": 80 },
        "reason": "Invirtiendo 400M en eliminar plásticos de un solo uso. Ladrillos hechos de caña de azúcar en aumento.",
        "certifications": []
    },
    "mattel": {
        "name": "Mattel (Barbie/Hot Wheels)",
        "url": "https://corporate.mattel.com",
        "category": "hogar",
        "source": "Newsweek Green Rankings",
        "stats": { "carbon": 60, "labor": 65, "materials": 55 },
        "reason": "Objetivo de materiales plásticos 100% reciclados o bio-basados para 2030. Progreso moderado.",
        "certifications": []
    },
    "hasbro": {
        "name": "Hasbro",
        "url": "https://shop.hasbro.com",
        "category": "hogar",
        "source": "3BL Media Best Corporate Citizens",
        "stats": { "carbon": 75, "labor": 70, "materials": 70 },
        "reason": "Eliminó casi todo el plástico de sus empaques (ventanas de cajas). Líder en su sector.",
        "certifications": []
    },
    "disney": {
        "name": "Disney",
        "url": "https://thewaltdisneycompany.com",
        "category": "hogar",
        "source": "CDP Climate",
        "stats": { "carbon": 65, "labor": 60, "materials": 50 },
        "reason": "Parques temáticos con grandes granjas solares, pero enorme generación de residuos de merchandising.",
        "certifications": []
    },

    // --- ENERGÍA (Para contrastar con ROJO intenso) ---
    "shell": {
        "name": "Shell",
        "url": "https://www.shell.com",
        "category": "automotriz",
        "source": "Carbon Majors Report",
        "stats": { "carbon": 10, "labor": 40, "materials": 20 },
        "reason": "Una de las empresas con mayores emisiones históricas. Acusada de 'greenwashing' en campañas de energía limpia.",
        "certifications": []
    },
    "exxon": {
        "name": "ExxonMobil",
        "url": "https://corporate.exxonmobil.com",
        "category": "automotriz",
        "source": "InfluenceMap",
        "stats": { "carbon": 5, "labor": 35, "materials": 15 },
        "reason": "Historial documentado de financiar negacionismo climático. Resistencia a la transición energética.",
        "certifications": []
    },
    "bp": {
        "name": "BP (British Petroleum)",
        "url": "https://www.bp.com",
        "category": "automotriz",
        "source": "Oil and Gas Benchmark",
        "stats": { "carbon": 15, "labor": 45, "materials": 25 },
        "reason": "Inventaron el término 'Huella de Carbono' para culpar al individuo. Siguen invirtiendo masivamente en fósiles.",
        "certifications": []
    },
    "total": {
        "name": "TotalEnergies",
        "url": "https://totalenergies.com",
        "category": "automotriz",
        "source": "Sustainalytics",
        "stats": { "carbon": 30, "labor": 50, "materials": 30 },
        "reason": "Invierte en sol y viento, pero continúa abriendo nuevos proyectos de extracción de petróleo en África.",
        "certifications": []
    },

    // --- LOGÍSTICA Y ENVÍOS ---
    "fedex": {
        "name": "FedEx",
        "url": "https://www.fedex.com",
        "category": "transporte",
        "source": "Newsweek Green Rankings",
        "stats": { "carbon": 50, "labor": 60, "materials": 40 },
        "reason": "Objetivo de operaciones neutras para 2040. Renovando flota a eléctrica, pero depende de la aviación.",
        "certifications": []
    },
    "ups": {
        "name": "UPS",
        "url": "https://www.ups.com",
        "category": "transporte",
        "source": "Barron's Most Sustainable",
        "stats": { "carbon": 55, "labor": 80, "materials": 45 },
        "reason": "Sindicatos fuertes (buen puntaje laboral). Gran inversión en camiones eléctricos y optimización de rutas.",
        "certifications": []
    },
    "dhl": {
        "name": "DHL",
        "url": "https://www.dhl.com",
        "category": "transporte",
        "source": "Dow Jones Sustainability World Index",
        "stats": { "carbon": 60, "labor": 70, "materials": 50 },
        "reason": "Pioneros en logística verde ('GoGreen'). Objetivo de cero emisiones para 2050.",
        "certifications": []
    },

    // --- SUPERMERCADOS Y RETAIL GRANDE ---
    "costco": {
        "name": "Costco",
        "url": "https://www.costco.com",
        "category": "supermercado",
        "source": "Ethical Consumer",
        "stats": { "carbon": 50, "labor": 85, "materials": 40 },
        "reason": "Conocida por pagar excelentes salarios (Laboral alto), pero lenta en compromisos climáticos y empaques.",
        "certifications": []
    },
    "target": {
        "name": "Target",
        "url": "https://www.target.com",
        "category": "supermercado",
        "source": "CDP Climate A List",
        "stats": { "carbon": 75, "labor": 70, "materials": 65 },
        "reason": "Edificios muy eficientes. Objetivo de que el 100% de sus marcas propias sean sostenibles para 2040.",
        "certifications": []
    },
    "bestbuy": {
        "name": "Best Buy",
        "url": "https://www.bestbuy.com",
        "category": "hardware",
        "source": "Barron's",
        "stats": { "carbon": 85, "labor": 75, "materials": 80 },
        "reason": "Líder en retail por su enorme programa de recolección y reciclaje de basura electrónica de clientes.",
        "certifications": []
    },
    "carrefour": {
        "name": "Carrefour",
        "url": "https://www.carrefour.com",
        "category": "supermercado",
        "source": "Dow Jones Sustainability",
        "stats": { "carbon": 65, "labor": 60, "materials": 60 },
        "reason": "Campaña 'Act for Food' promueve lo orgánico, pero sigue vendiendo grandes volúmenes de plásticos.",
        "certifications": []
    },

    // --- SOFTWARE Y TECH EMPRESARIAL ---
    "adobe": {
        "name": "Adobe",
        "url": "https://www.adobe.com",
        "category": "software",
        "source": "CDP A List",
        "stats": { "carbon": 90, "labor": 90, "materials": 85 },
        "reason": "Operaciones con gran porcentaje de renovables. Productos digitales que reducen el uso de papel físico.",
        "certifications": []
    },
    "salesforce": {
        "name": "Salesforce",
        "url": "https://www.salesforce.com",
        "category": "software",
        "source": "Sustainalytics",
        "stats": { "carbon": 95, "labor": 95, "materials": 90 },
        "reason": "Empresa Net Zero. Financia la reforestación y exige sostenibilidad a sus propios proveedores.",
        "certifications": []
    },
    "intel": {
        "name": "Intel",
        "url": "https://www.intel.com",
        "category": "hardware",
        "source": "Barron's",
        "stats": { "carbon": 80, "labor": 85, "materials": 70 },
        "reason": "Recicla el 90% de sus residuos de fabricación. Gran uso de energía verde en fábricas de chips.",
        "certifications": []
    },
    "nvidia": {
        "name": "Nvidia",
        "url": "https://www.nvidia.com",
        "category": "hardware",
        "source": "Newsweek Green",
        "stats": { "carbon": 85, "labor": 90, "materials": 75 },
        "reason": "Sus chips hacen los servidores más eficientes. Muy alta puntuación en gobernanza y trato al empleado.",
        "certifications": []
    },

    // --- LUJO Y RELOJES (Opacidad) ---
    "rolex": {
        "name": "Rolex",
        "url": "https://www.rolex.com",
        "category": "moda",
        "source": "WWF Watch Report",
        "stats": { "carbon": 20, "labor": 40, "materials": 10 },
        "reason": "Calificada como 'Opaque' por WWF. No publican casi ninguna información sobre su impacto o suministro de oro.",
        "certifications": []
    },
    "swatch": {
        "name": "Swatch Group",
        "url": "https://www.swatchgroup.com",
        "category": "moda",
        "source": "WWF Watch Report",
        "stats": { "carbon": 30, "labor": 50, "materials": 30 },
        "reason": "Falta de transparencia significativa en la trazabilidad de materias primas preciosas.",
        "certifications": []
    },

    // --- OTROS GIGANTES ---
    "boeing": {
        "name": "Boeing",
        "url": "https://www.boeing.com",
        "category": "transporte",
        "source": "Sustainalytics",
        "stats": { "carbon": 40, "labor": 50, "materials": 45 },
        "reason": "Problemas de seguridad recientes y alto impacto ambiental de sus productos, pese a pruebas con biocombustibles.",
        "certifications": []
    },
    "3m": {
        "name": "3M",
        "url": "https://www.3m.com",
        "category": "hogar",
        "source": "Toxic 100 Air Polluters",
        "stats": { "carbon": 50, "labor": 65, "materials": 40 },
        "reason": "Innovación constante, pero historial legal complejo por contaminación de agua (PFAS/químicos eternos).",
        "certifications": []
    },
    "mars": {
        "name": "Mars (M&Ms/Snickers)",
        "url": "https://www.mars.com",
        "category": "alimentos",
        "source": "Oxfam",
        "stats": { "carbon": 60, "labor": 50, "materials": 45 },
        "reason": "Inversión de $1B en sostenibilidad, pero cadena de suministro de cacao sigue teniendo riesgos de trabajo infantil.",
        "certifications": []
    },
    "ferrero": {
        "name": "Ferrero (Nutella)",
        "url": "https://www.ferrero.com",
        "category": "alimentos",
        "source": "WWF Palm Oil Scorecard",
        "stats": { "carbon": 65, "labor": 60, "materials": 75 },
        "reason": "Líder en uso de aceite de palma sostenible certificado (100% RSPO), a diferencia de sus competidores.",
        "certifications": [{ name: "RSPO", url: "https://rspo.org/" }]
    },
    // --- NUEVAS AGREGADAS (Temu y Famosas) ---
    "temu": {
        "name": "Temu",
        "url": "https://www.temu.com",
        "category": "moda",
        "source": "US Congressional Report / Good On You",
        "stats": { "carbon": 5, "labor": 5, "materials": 10 },
        "reason": "CRÍTICO. Modelo de negocio basado en envíos aéreos individuales (altísimo CO2). Riesgo extremo de trabajo forzoso en cadena de suministro.",
        "certifications": []
    },
    "tiktok": {
        "name": "TikTok (ByteDance)",
        "url": "https://www.tiktok.com",
        "category": "software",
        "source": "Greenpeace Clicking Clean",
        "stats": { "carbon": 45, "labor": 50, "materials": 60 },
        "reason": "Crecimiento masivo de centros de datos con menor transparencia energética que competidores como Google o Meta.",
        "certifications": []
    },
    "redbull": {
        "name": "Red Bull",
        "url": "https://www.redbull.com",
        "category": "alimentos",
        "source": "Ethical Consumer",
        "stats": { "carbon": 40, "labor": 60, "materials": 30 },
        "reason": "Vende 12 mil millones de latas de aluminio al año. Aunque es reciclable, la extracción de bauxita y la huella de transporte son enormes.",
        "certifications": []
    },
    "chanel": {
        "name": "Chanel",
        "url": "https://www.chanel.com",
        "category": "moda",
        "source": "Fashion Transparency Index",
        "stats": { "carbon": 30, "labor": 40, "materials": 40 },
        "reason": "Históricamente una de las marcas de lujo más opacas. No publica lista de proveedores ni datos detallados de impacto.",
        "certifications": []
    },
    "ferrari": {
        "name": "Ferrari",
        "url": "https://www.ferrari.com",
        "category": "automotriz",
        "source": "Sustainalytics",
        "stats": { "carbon": 20, "labor": 70, "materials": 60 },
        "reason": "Muy rezagada en electrificación. Sus vehículos tienen emisiones per cápita extremadamente altas comparadas con la industria.",
        "certifications": []
    },
    "tacobell": {
        "name": "Taco Bell",
        "url": "https://www.tacobell.com",
        "category": "alimentos",
        "source": "Yum! Brands ESG Report",
        "stats": { "carbon": 55, "labor": 50, "materials": 45 },
        "reason": "Mejor que las hamburgueserías por su menú basado en frijoles (menor CO2), pero genera toneladas de residuos de empaques.",
        "certifications": []
    },

    // --- EMPRESAS PANAMEÑAS ---
    "canalpanama": {
        "name": "Canal de Panamá",
        "category": "transporte",
        "source": "Reporte de Sostenibilidad",
        "stats": { "carbon": 85, "labor": 90, "materials": 80 },
        "reason": "Líder nacional en gestión hídrica y carbono neutralidad. Programa de incentivos económicos ambientales.",
        "certifications": [],
        "url": "https://pancanal.com",
        "country": "PA"
    },
    "copa": {
        "name": "Copa Airlines",
        "category": "transporte",
        "source": "S&P Global ESG",
        "stats": { "carbon": 60, "labor": 75, "materials": 65 },
        "reason": "Flota moderna y eficiente, pero pertenece a un sector de altas emisiones. Buenos programas de formación.",
        "certifications": [],
        "url": "https://www.copaair.com",
        "country": "PA"
    },
    "bgeneral": {
        "name": "Banco General",
        "category": "finanzas",
        "source": "Informe RSE",
        "stats": { "carbon": 90, "labor": 90, "materials": 85 },
        "reason": "Edificios con certificación LEED, gran apoyo a la comunidad y financiamiento de proyectos verdes.",
        "certifications": [],
        "url": "https://www.bgeneral.com"
    },
    "cervecerianacional": {
        "name": "Cervecería Nacional",
        "category": "alimentos",
        "source": "Reporte de Sostenibilidad",
        "stats": { "carbon": 80, "labor": 75, "materials": 70 },
        "reason": "Uso de energía solar en producción y flota eléctrica. Gestión de residuos post-consumo.",
        "certifications": [],
        "url": "https://www.cerveceria-nacional.com",
        "country": "PA"
    },
    "ribasmith": {
        "name": "Supermercados Riba Smith",
        "category": "supermercado",
        "source": "Reputación Local",
        "stats": { "carbon": 70, "labor": 80, "materials": 75 },
        "reason": "Producción local propia (Rimith) reduce huella de transporte. Buenas prácticas de manejo de alimentos.",
        "certifications": [],
        "url": "https://www.rimith.com",
        "country": "PA"
    },
    "super99": {
        "name": "Super 99",
        "category": "supermercado",
        "source": "Contexto Nacional",
        "stats": { "carbon": 40, "labor": 50, "materials": 40 },
        "reason": "Poca información pública sobre sostenibilidad. Uso intensivo de bolsas plásticas y empaques.",
        "certifications": [],
        "url": "https://www.super99.com",
        "country": "PA"
    },
    "ensa": {
        "name": "Ensa",
        "category": "energia",
        "source": "Reporte Anual",
        "stats": { "carbon": 65, "labor": 70, "materials": 60 },
        "reason": "Impulso a la movilidad eléctrica y redes inteligentes, pero distribuye energía de fuentes mixtas.",
        "certifications": [],
        "url": "https://www.ensa.com.pa",
        "country": "PA"
    },
    "naturgy": {
        "name": "Naturgy Panamá",
        "category": "energia",
        "source": "Reporte Corporativo",
        "stats": { "carbon": 60, "labor": 65, "materials": 60 },
        "reason": "Inversiones en modernización, pero críticas recurrentes por servicio y apagones.",
        "certifications": [],
        "url": "https://www.naturgy.com.pa",
        "country": "PA"
    },
    "minera": {
        "name": "Minera Panamá / First Quantum",
        "category": "hogar",
        "source": "Corte Suprema / Noticias",
        "stats": { "carbon": 10, "labor": 40, "materials": 10 },
        "reason": "CRÍTICO. Cierre ordenado por inconstitucionalidad. Daño ambiental masivo documentado y protestas nacionales.",
        "certifications": [],
        "url": "https://www.first-quantum.com",
        "country": "PA"
    },
    "casabaterias": {
        "name": "La Casa de las Baterías",
        "category": "automotriz",
        "source": "Programa de Reciclaje",
        "stats": { "carbon": 85, "labor": 80, "materials": 90 },
        "reason": "Excelente programa de recolección y reciclaje de baterías usadas. Instalación de paneles solares.",
        "certifications": [],
        "url": "https://www.casabaterias.com",
        "country": "PA"
    },
    "arrocha": {
        "name": "Farmacias Arrocha",
        "category": "belleza",
        "source": "Reputación Local",
        "stats": { "carbon": 50, "labor": 60, "materials": 50 },
        "reason": "Gran variedad de productos, pero uso excesivo de bolsas plásticas y aire acondicionado.",
        "certifications": [],
        "url": "https://www.arrocha.com",
        "country": "PA"
    },
    "doitcenter": {
        "name": "Doit Center",
        "category": "hogar",
        "source": "Reputación Local",
        "stats": { "carbon": 55, "labor": 60, "materials": 50 },
        "reason": "Iniciativas puntuales de reciclaje, pero venta masiva de productos de bajo costo y corta vida útil.",
        "certifications": [],
        "url": "https://www.doitcenter.com.pa",
        "country": "PA"
    },
    "panafoto": {
        "name": "Panafoto",
        "category": "hardware",
        "source": "Reputación Local",
        "stats": { "carbon": 50, "labor": 60, "materials": 50 },
        "reason": "Recolección ocasional de e-waste, pero falta una política integral de sostenibilidad visible.",
        "certifications": [],
        "url": "https://www.panafoto.com",
        "country": "PA"
    },
    "felix": {
        "name": "Felix B. Maduro",
        "category": "moda",
        "source": "Reputación Local",
        "stats": { "carbon": 50, "labor": 65, "materials": 55 },
        "reason": "Tienda departamental tradicional. Esfuerzos moderados en eficiencia energética en sucursales.",
        "certifications": [],
        "url": "https://www.felix.com.pa",
        "country": "PA"
    },
    "globalbank": {
        "name": "Global Bank",
        "category": "finanzas",
        "source": "Informe RSE",
        "stats": { "carbon": 75, "labor": 80, "materials": 70 },
        "reason": "Signatario de principios de banca responsable. Financiamiento de energías renovables.",
        "certifications": [],
        "url": "https://www.globalbank.com.pa"
    },
    "cajadeahorros": {
        "name": "Caja de Ahorros",
        "category": "finanzas",
        "source": "Banco de la Familia Panameña",
        "stats": { "carbon": 80, "labor": 85, "materials": 75 },
        "reason": "Huertos escolares y programas de educación financiera. Enfoque social fuerte.",
        "certifications": [],
        "url": "https://www.cajadeahorros.com.pa"
    },
    "tigo": {
        "name": "Tigo Panamá",
        "category": "telecom",
        "source": "Informe Millicom ESG",
        "stats": { "carbon": 70, "labor": 75, "materials": 65 },
        "reason": "Programas de conectividad rural y educación digital. Reducción de huella de carbono en red.",
        "certifications": [],
        "url": "https://www.tigo.com.pa",
        "country": "PA"
    },
    "masmovil": {
        "name": "Cable & Wireless / +Móvil",
        "category": "telecom",
        "source": "Liberty Latin America ESG",
        "stats": { "carbon": 70, "labor": 75, "materials": 65 },
        "reason": "Compromisos de energía renovable y reciclaje de equipos electrónicos.",
        "certifications": [],
        "url": "https://www.masmovilpanama.com",
        "country": "PA"
    },
    "toledano": {
        "name": "Productos Toledano",
        "category": "alimentos",
        "source": "Certificaciones Locales",
        "stats": { "carbon": 65, "labor": 70, "materials": 60 },
        "reason": "Mejoras en tratamiento de aguas y bienestar animal en granjas avícolas.",
        "certifications": [],
        "url": "https://www.toledano.com",
        "country": "PA"
    },
    "melo": {
        "name": "Alimentos Melo",
        "category": "alimentos",
        "source": "Reputación Local",
        "stats": { "carbon": 60, "labor": 70, "materials": 60 },
        "reason": "Grupo diversificado con iniciativas de responsabilidad social, pero impacto ambiental industrial considerable.",
        "certifications": [],
        "url": "https://www.alimentosmelo.com",
        "country": "PA"
    },


    "organica": {
        "name": "Organica Store",
        "url": "https://organicastore.com",
        "category": "supermercado",
        "source": "Reputación Local",
        "stats": { "carbon": 90, "labor": 85, "materials": 95 },
        "reason": "Enfoque total en productos orgánicos, locales y saludables. Promueve estilo de vida sostenible.",
        "certifications": [],
        "country": "PA"
    },
    "wipet": {
        "name": "Wipet",
        "url": "https://wipet.com",
        "category": "telecom",
        "source": "Sitio Web Corporativo",
        "stats": { "carbon": 80, "labor": 75, "materials": 70 },
        "reason": "Infraestructura digital ligera y enfoque en conectividad residencial eficiente.",
        "certifications": [],
        "country": "PA"
    },


    "banistmo": {
        "name": "Banistmo",
        "category": "finanzas",
        "source": "Reporte de Sostenibilidad",
        "stats": { "carbon": 85, "labor": 80, "materials": 75 },
        "reason": "Fuerte enfoque en igualdad de género y financiamiento sostenible. Parte del Grupo Bancolombia (líder en sostenibilidad).",
        "certifications": [],
        "url": "https://www.banistmo.com",
        "country": "PA"
    },

    // --- MINERÍA (Casos Especiales Panamá) ---
    "first-quantum": {
        "name": "First Quantum Minerals",
        "category": "tecnologia", 
        "url": "https://www.first-quantum.com",
        "source": "Contexto Nacional / Corte Suprema",
        "stats": { "carbon": 5, "labor": 30, "materials": 0 },
        "reason": "Matriz de Minera Panamá. Fallo de Inconstitucionalidad por la CSJ de Panamá (2023) debido a daños ambientales y conflictos sociales.",
        "certifications": []
    },
    "cobrepanama": {
        "name": "Minera Panamá (Cobre)",
        "category": "tecnologia",
        "url": "https://cobrepanama.com",
        "source": "Noticias Nacionales / Protestas 2023",
        "stats": { "carbon": 5, "labor": 30, "materials": 0 },
        "reason": "Matriz de Minera Panamá. Fallo de Inconstitucionalidad por la CSJ de Panamá (2023) debido a daños ambientales y conflictos sociales.",
        "certifications": []
    },

    // --- MÁS SUPERMERCADOS DE PANAMÁ ---
    "smrey": {
        "name": "Supermercados Rey",
        "category": "supermercado",
        "url": "https://www.smrey.com",
        "source": "Grupo Rey RSE / Reputación Local",
        "stats": { "carbon": 60, "labor": 70, "materials": 55 },
        "reason": "Esfuerzos visibles con puntos de reciclaje en sucursales y programas de desperdicio cero.",
        "certifications": []
    },
    "superxtra": {
        "name": "Super Xtra",
        "category": "supermercado",
        "url": "https://www.superxtra.com",
        "source": "Reputación Local",
        "stats": { "carbon": 40, "labor": 50, "materials": 30 },
        "reason": "Enfoque en precios bajos. Poca información pública sobre gestión de residuos o eficiencia energética en tiendas.",
        "certifications": []
    },
    "machetazo": {
        "name": "El Machetazo",
        "category": "supermercado",
        "url": "https://machetazo.com",
        "source": "Historia Corporativa Local",
        "stats": { "carbon": 50, "labor": 60, "materials": 45 },
        "reason": "Empresa familiar con buen trato al empleado, pero rezagada en eliminación de plásticos de un solo uso.",
        "certifications": []
    },
    "pricesmart": {
        "name": "PriceSmart Panamá",
        "category": "supermercado",
        "url": "https://www.pricesmart.com/site/pa/es",
        "source": "PriceSmart ESG Report",
        "stats": { "carbon": 75, "labor": 70, "materials": 65 },
        "reason": "Modelo de venta al por mayor reduce empaques unitarios. Alta eficiencia logística y buenos beneficios laborales.",
        "certifications": []
    },
    "foodie": {
        "name": "Foodie Market",
        "category": "supermercado",
        "url": "https://foodie.com.pa",
        "source": "Nicho de Mercado / Reputación",
        "stats": { "carbon": 85, "labor": 80, "materials": 90 },
        "reason": "Enfoque en productos orgánicos, locales y saludables. Menor huella de carbono por priorizar proveedores nacionales.",
        "certifications": []
    }

};