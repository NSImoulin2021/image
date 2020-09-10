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
var filtreBayer;
var monimage;
var couleurs, noir, blanc, rouge, vert, bleu;

function setup() {
    createCanvas(400, 400);
    cote = 5;
    coteElement = 400 / cote;
    //
    noir = color(0, 0, 0);
    blanc = color(255, 255, 255);
    rouge = color(255, 0, 0);
    vert = color(0, 255, 0);
    bleu = color(0, 0, 255);
    //
    let ligne1FiltreBayer = [vert, rouge, vert, rouge, vert];
    let ligne2FiltreBayer = [bleu, vert, bleu, vert, bleu];
    filtreBayer = [
        ligne1FiltreBayer,
        ligne2FiltreBayer,
        ligne1FiltreBayer,
        ligne2FiltreBayer,
        ligne1FiltreBayer
    ];
    //
    let ligne1Image = [blanc, blanc, blanc, blanc, blanc];
    let ligne2Image = [blanc, noir, noir, noir, blanc];
    monimage = [
        ligne1Image,
        ligne2Image,
        ligne2Image,
        ligne2Image,
        ligne1Image
    ];
    // utilisation du filtre
    couleurs = [];
    for(let i=0; i<cote; i++) {
        couleurs[i] = [];
        for(let j=0; j<cote; j++) {
            if (red(filtreBayer[i][j]) == 255) {
                couleurs[i][j] = color(red(monimage[i][j]), 0, 0);
            } else if (green(filtreBayer[i][j]) == 255) {
                couleurs[i][j] = color(0, green(monimage[i][j]), 0);
            } else {
                couleurs[i][j] = color(0, 0, blue(monimage[i][j]));
            }
        }
    }
    //
    for(let i=0; i<cote; i++) {
        for(let j=0; j<cote; j++) {
            if (green(filtreBayer[i][j]) == 255) {

            } else if (red(filtreBayer[i][j]) == 255) {

            } else {
                
            }
        }
    }
    //
    paves = []
    for(let i=0; i<cote; i++) {
        paves[i] = [];
        for(let j=0; j<cote; j++) {
            let position = createVector(j, i);
            paves[i][j] = new Pave(position, couleurs[i][j]);
        }
    }
    
}

function draw() {
    for(let i=0; i<cote; i++) {
        for(let j=0; j<cote; j++) {
            paves[i][j].affichage();
        }
    }
}
