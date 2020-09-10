class Pave {
    constructor(position, couleur) {
        this.position = position;
        this.couleur = couleur;
    }
    
    affichage() {
        stroke(0);
        fill(this.couleur);
        rect(this.position.x * coteElement,
             this.position.y * coteElement,
             coteElement, coteElement);
    }
}

var cote;
var coteElement;
var paves;


function setup() {
    createCanvas(400, 400);
    cote = 5;
    coteElement = 400 / cote;
    let couleurs = [
        color(255, 255, 0),
        color(255, 255, 0),
        color(255, 255, 0),
        color(255, 255, 0),
        color(0, 255, 0),
        //
        color(255, 0, 255),
        color(255, 0, 0),
        color(255, 0, 0),
        color(255, 0, 255),
        color(0, 0, 255),
        //
        color(0, 255, 255),
        color(0, 0, 0),
        color(0, 0, 0),
        color(0, 255, 255),
        color(0, 255, 255),
        //
        color(0, 0, 255),
        color(0, 0, 0),
        color(0, 0, 0),
        color(0, 0, 255),
        color(0, 0, 255),
        //
        color(255, 255, 255),
        color(255, 255, 0),
        color(255, 255, 0),
        color(255, 255, 255),
        color(0, 255, 255)
    ];
    paves = []
    for(let i=0; i<cote*cote; i++) {
        let x = ;
        let y = ;
        let position = createVector( );
        paves[i] = new Pave(position, couleurs[i]);
    }
    
}

function draw() {
}
