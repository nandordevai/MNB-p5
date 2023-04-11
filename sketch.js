let planets = [
    {
        "name": "Mercury",
        "diameter": 4879,
        "moons": []
    },
    {
        "name": "Venus",
        "diameter": 12104,
        "moons": []
    },
    {
        "name": "Earth",
        "diameter": 12742,
        "moons": [
            "Moon"
        ]
    },
    {
        "name": "Mars",
        "diameter": 6779,
        "moons": [
            "Deimos",
            "Phobos"
        ]
    },
    {
        "name": "Ceres",
        "diameter": 950,
        "moons": []
    },
    {
        "name": "Jupiter",
        "diameter": 139822,
        "moons": [
            "Metis",
            "Adrastea",
            "Amalthea",
            "Thebe",
            "Io",
            "Europa",
            "Ganymede",
            "Callisto",
            "Themisto",
            "Leda",
            "Himalia",
            "Lysithea",
            "Elara",
            "S/2000 J11",
            "S/2003 J12",
            "Carpo",
            "Euporie",
            "S/2003 J3",
            "S/2003 J18",
            "Orthosie",
            "Euanthe",
            "Harpalyke",
            "Praxidike",
            "Thyone",
            "S/2003 J16",
            "Iocaste",
            "Mneme",
            "Hermippe",
            "Thelxinoe",
            "Helike",
            "Ananke",
            "S/2003 J15",
            "Eurydome",
            "Arche",
            "Herse",
            "Pasithee",
            "S/2003 J10",
            "Chaldene",
            "Isonoe",
            "Erinome",
            "Kale",
            "Aitne",
            "Taygete",
            "S/2003 J9",
            "Carme",
            "Sponde",
            "Megaclite",
            "S/2003 J5",
            "S/2003 J19",
            "S/2003 J23",
            "Kalyke",
            "Kore",
            "Pasiphae",
            "Eukelade",
            "S/2003 J4",
            "Sinope",
            "Hegemone",
            "Aoede",
            "Kallichore",
            "Autonoe",
            "Callirrhoe",
            "Cyllene",
            "S/2003 J2"
        ]
    },
    {
        "name": "Saturn",
        "diameter": 116464,
        "moons": [
            "Tarqeq",
            "Pan",
            "Daphnis",
            "Atlas",
            "Prometheus",
            "Pandora",
            "Epimetheus",
            "Janus",
            "Aegaeon",
            "Mimas",
            "Methone",
            "Anthe",
            "Pallene",
            "Enceladus",
            "Tethys",
            "Calypso",
            "Telesto",
            "Polydeuces",
            "Dione",
            "Helene",
            "Rhea",
            "Titan",
            "Hyperion",
            "Iapetus",
            "Kiviuq",
            "Ijiraq",
            "Phoebe",
            "Paaliaq",
            "Skathi",
            "Albiorix",
            "S/2007 S2",
            "Bebhionn",
            "Erriapo",
            "Siarnaq",
            "Skoll",
            "Tarvos",
            "Greip",
            "S/2004 S13",
            "Hyrrokkin",
            "Mundilfari",
            "S/2006 S1",
            "Jarnsaxa",
            "Narvi",
            "Bergelmir",
            "S/2004 S17",
            "Suttungr",
            "Hati",
            "S/2004 S12",
            "Bestla",
            "Farbauti",
            "Thrymr",
            "S/2007 S3",
            "Aegir",
            "S/2004 S7",
            "S/2006 S3",
            "Kari",
            "Fenrir",
            "Surtur",
            "Ymir",
            "Loge",
            "Fornjot"
        ]
    },
    {
        "name": "Uranus",
        "diameter": 50724,
        "moons": [
            "Cordelia",
            "Ophelia",
            "Bianca",
            "Cressida",
            "Desdemona",
            "Juliet",
            "Portia",
            "Rosalind",
            "Cupid",
            "Belinda",
            "Perdita",
            "Puck",
            "Mab",
            "Miranda",
            "Ariel",
            "Umbriel",
            "Titania",
            "Oberon",
            "Francisco",
            "Caliban",
            "Stephano",
            "Trinculo",
            "Sycorax",
            "Margaret",
            "Prospero",
            "Setebos",
            "Ferdinand"
        ]
    },
    {
        "name": "Neptune",
        "diameter": 49244,
        "moons": [
            "Naiad",
            "Thalassa",
            "Despina",
            "Galatea",
            "Larissa",
            "Proteus",
            "Triton",
            "Nereid",
            "Halimede",
            "Sao",
            "Laomedeia",
            "Psamathe",
            "Neso"
        ]
    },
    {
        "name": "Pluto",
        "diameter": 2374,
        "moons": [
            "Charon",
            "Styx",
            "Nix",
            "Kerberos",
            "Hydra"
        ]
    },
    {
        "name": "Haumea",
        "diameter": 1960,
        "moons": [
            "Namaka",
            "Hi'iaka"
        ]
    },
    {
        "name": "Makemake",
        "diameter": 1434,
        "moons": []
    },
    {
        "name": "Eris",
        "diameter": 2326,
        "moons": [
            "Dysnomia"
        ]
    }
];

function setup() {
    createCanvas(600, 400);
    noLoop();
}

function mouseMoved() {
    planets.forEach(function(planet, i) {
        if (mouseX > 200) {
            draw();
        } else if (mouseY < (i + 1) * 28 && mouseY > i * 28) {
            showMoonNumbers(planet.name);
        }
    });
}

function showMoonNumbers(planetName) {
    draw();
    planets.forEach(function(planet, i) {
        if (planet.name === planetName) {
            let y = (i + 1) * 28;
            noStroke();
            circle(200, y, 25);
            textAlign(CENTER, CENTER);
            fill(0);
            text(planet.moons.length, 200, y);
        }
    });
}

function draw() {
    background(color(20, 20, 20));
    planets.forEach(function(planet, i) {
        let y = (i + 1) * 28;
        let d = map(planet.diameter, 950, 139822, 3, 50);

        // label
        fill(255);
        textAlign(LEFT, BASELINE);
        text(planet.name, 10, y - 2);

        // line
        stroke(100);
        line(10, y, 200, y);

        // planet
        noStroke();
        fill(150 + ((i % 3) * 50));
        circle(200, y, d);

        // moons
        fill(200);
        planet.moons.forEach(function(moon, i) {
            let r = 2;
            if ((i + 1) % 10 == 0 && i > 0) {
                r = 4;
            }
            let x = (i + 1) * 5;
            circle(200 + (d / 2) + x, y, r);
        });
    });
}
