// Exercice Noté 1

let fighter = {
    name: "Quelqu'un",
    health: 100,
    attack: 21,
    precision: 0.37
};

let someone = {
    name: "Tki",
    health: 100,
    attack: 27,
    precision: 0.62 
};

function attack(attacker, defender) {
    let random = Math.random();

    if (random <= attacker.precision) {
        defender.health -= attacker.attack;
        console.log(attacker.name + " touche " + defender.name);
        console.log(defender.name + " a " + defender.health + " points de vie");
    } else {
        console.log(attacker.name + " rate son attaque contre " + defender.name);
    }
}

while (fighter.health > 0 && someone.health > 0) {
    attack(fighter, someone);

    if (someone.health <= 0) {
        console.log(fighter.name + " a gagné le combat");
        break;
    }

    attack(someone, fighter);

    if (fighter.health <= 0) {
        console.log(someone.name + " a gagné le combat");
        break;
    }

    console.log(" Tour suivant ");
}