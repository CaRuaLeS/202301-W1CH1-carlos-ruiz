const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let actualIndex = 0;
let ranking = [];
let finish = false;

const lettersOnly = (input) => {
  const regex = /[^A-Za-zÑñ]/gi;
  if (input.value != 'ñ') {
    input.value = input.value.replace(regex, "");
  }

};

document.body.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    wordInserted(document.querySelector('.input-field').value)
    console.log('enter presse')
  }
});
const wordInserted = (word) => {
  if (finish) {
    return;
  } else {
    if (word === null || word === "") {
      return;
    }
    else {
      finalWord = word.toLowerCase();
      checkWord(finalWord);
      roundResults();
      matchStatus();
      document.querySelector('.input-field').value = '';
      document.querySelector(".input-field").focus();
    }
  }
};
const nextWord = () => {
  if (finish) {
    return;
  } else {
    actualIndex++;
    matchStatus();
    document.querySelector(".input-field").focus();
  }

}
const stopPlaying = () => {
  finish = true;
  document.querySelector('.reset-button').style.display = 'inline-block';
};
const playAgain = () => {
  actualIndex = 0;
  finish = false;
  questions.forEach((element) => {
    element.status = 0;
  });
  for (let i = 0; i < questions.length; i++) {
    document.getElementsByClassName('letters').item(i).style.backgroundColor = 'rgb(65, 75, 207)';
  }
  document.querySelector('.question').innerHTML = questions[actualIndex].question;
  document.querySelector('.input-field').value = '';
  document.querySelector('.result').innerHTML = `Llevas 0 palabras acertadas! Y falladas 0.`;
  document.querySelector(".input-field").focus();
  timeLeft = 400;

  document.querySelector('.reset-button').style.display = 'none';

};
const askWords = (myWord) => {
  if (myWord === null || myWord === "") {
    return;
  }
  else {
    return myWord.toLowerCase();
  }
};
const checkWord = (w) => {
  const letter = document.getElementsByClassName('letters');
  //si se equivoca de palabra, se pone como fallo (status 2)
  if (w !== questions[actualIndex].answer) {
    questions[actualIndex].status = 2;
    letter.item(actualIndex).style.backgroundColor = 'rgb(207, 65, 65)';
    console.log(`Incorrecto!, la palabra correcta era: ${questions[actualIndex].answer.toUpperCase()}`);
    //si acierta se pone como acierto (status 1)
  } else {
    questions[actualIndex].status = 1;
    letter.item(actualIndex).style.backgroundColor = 'green';
  }
};

const roundResults = () => {
  //const round = {}
  let wrong = 0;
  let right = 0;
  let none = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].status == 0) {
      none++;
    } else if (questions[i].status == 1) {
      right++;
    } else {
      wrong++;
    }
  }
  //round.name = userName;
  document.querySelector('.result').innerHTML = `Llevas ${right} palabras acertadas! Y falladas ${wrong}.`;

  //round.guesses = right;
  //ranking.push(round);
};
const matchStatus = () => {
  const resultQuestions = questions.every(element => {
    if (element.status != 0) {
      return true;
    }
  });
  if (resultQuestions) {
    stopPlaying();
  } else {
    if (actualIndex == questions.length) {
      actualIndex = 0;
    }
    if (questions[actualIndex].status != 0) {
      actualIndex++;
      matchStatus();
    }
    document.querySelector('.question').innerHTML = questions[actualIndex].question;
    console.log(document.querySelector('.question').innerHTML)
  }
  console.log(actualIndex);
};

const countdown = () => {
  if (finish) {
    return;
  } else {
    if (timeLeft == -1) {
      //clearTimeout(timeId);
      stopPlaying();
    } else {
      timerElement.innerHTML = timeLeft;
      timeLeft--;
      console.log * (timeLeft);
    }
  }

};
let timeLeft = 400;
const timerElement = document.querySelector('.timer');
let timeId = setInterval(countdown, 1000);