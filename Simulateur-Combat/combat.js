// Exercice Noté 1

let fighter = {
    name: "Quelqu'un",
    health: 100,
    attack: 21,
    precision: 0.47
};

let someone = {
    name: "Tki",
    health: 100,
    attack: 27,
    precision: 0.62 
};

function updateHealth() {
  document.getElementById('health1').style.width = fighter.health + '%';
  document.getElementById('health2').style.width = someone.health + '%';
}

function log(msg) {
  document.getElementById('log').innerText = msg;
}

function attack(attacker, defender) {
  let random = Math.random();
  if (random <= attacker.precision) {
    defender.health = Math.max(0, defender.health - attacker.attack);
    log(attacker.name + " touche " + defender.name + " (-" + attacker.attack + ")");
  } else {
    log(attacker.name + " rate son attaque ");
  }
  updateHealth();
}


document.getElementById('startBtn').addEventListener('click', () => {
  let interval = setInterval(() => {
    if (fighter.health <= 0 || someone.health <= 0) {
      clearInterval(interval);
      log(fighter.health <= 0 ? someone.name + " a gagné !" : fighter.name + " a gagné ");
      return;
    }
    attack(fighter, someone);
    if (someone.health > 0) {
      setTimeout(() => attack(someone, fighter), 500);
    }
  }, 1500);
});

updateHealth();
