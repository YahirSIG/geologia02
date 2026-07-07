// app.js
const quizData = [
    {
        question: "¿Cuál es la importancia de los geomateriales en una obra de ingeniería civil?",
        options: [
            "Garantizan estructuras seguras, funcionales, duraderas y económicas.",
            "Solamente sirven para mejorar el aspecto estético del edificio.",
            "Son útiles solo para reducir los costos de transporte de materiales.",
            "Son una fase opcional en proyectos de pequeña escala."
        ],
        correct: 0
    },
    {
        question: "¿Qué es la exploración y muestreo de los geomateriales?",
        options: [
            "El estudio de la flora y fauna de la región antes de construir.",
            "Proceso para definir la textura, compacidad y estructura del subsuelo para diseño geotécnico.",
            "El proceso de diseño arquitectónico y cálculo estructural.",
            "Una técnica exclusiva para encontrar corrientes de agua subterránea."
        ],
        correct: 1
    },
    {
        question: "¿Cuáles son algunas etapas fundamentales de la exploración?",
        options: [
            "Diseño, presupuesto, licitación, contratación y ejecución.",
            "Topografía, hidrología, meteorología, biología y química.",
            "Excavación, cimentación, estructura, acabados y entrega.",
            "Planeación, reconocimiento del sitio, muestreo, ensayos de campo y de laboratorio."
        ],
        correct: 3
    },
    {
        question: "¿Cuál es la diferencia principal entre una muestra alterada y una inalterada?",
        options: [
            "La alterada modifica su estructura natural, la inalterada la conserva lo mejor posible.",
            "La alterada se usa para ensayos mecánicos, la inalterada para clasificación.",
            "La alterada requiere tubo Shelby, la inalterada se toma con pala.",
            "No hay diferencia, ambas sirven para los mismos ensayos de laboratorio."
        ],
        correct: 0
    },
    {
        question: "¿Cuáles son las características de los métodos indirectos de exploración?",
        options: [
            "Requieren perforaciones costosas y son sumamente precisos.",
            "Son rápidos, económicos, abarcan grandes extensiones y no requieren excavar.",
            "Permiten obtener muestras inalteradas del subsuelo profundo.",
            "Son lentos y solo se aplican en áreas muy pequeñas."
        ],
        correct: 1
    },
    {
        question: "¿Cuáles son los principales tipos de esfuerzos geológicos?",
        options: [
            "Gravedad, magnetismo y fricción.",
            "Elástica, plástica y frágil.",
            "Compresión, tensión y cizallación.",
            "Charnela, flancos y plano axial."
        ],
        correct: 2
    },
    {
        question: "¿Cuáles son los principales tipos de deformaciones en las rocas?",
        options: [
            "Elástica, plástica y frágil.",
            "Compresión, tensión y cizallación.",
            "Normal, inversa y de desgarre.",
            "Alterada e inalterada."
        ],
        correct: 0
    },
    {
        question: "¿Por qué se presentan los pliegues en las rocas?",
        options: [
            "Ocurren por fracturas donde hay desplazamiento relativo de bloques.",
            "Se forman debido a esfuerzos de tensión extrema en la corteza.",
            "Son producto exclusivo de la erosión provocada por el agua.",
            "Se forman a partir de la deformación de las rocas de manera dúctil sin llegar a fracturarse."
        ],
        correct: 3
    },
    {
        question: "¿Qué son las fallas geológicas?",
        options: [
            "Superficies de debilidad donde no existe interrupción del material.",
            "Fracturas en la corteza terrestre donde ocurre un desplazamiento relativo entre los bloques de roca.",
            "Deformaciones elásticas que siempre recuperan su forma original.",
            "Errores técnicos durante la planeación de la exploración de geomateriales."
        ],
        correct: 1
    },
    {
        question: "¿Cuáles son algunos métodos innovadores para medir estructuras geológicas?",
        options: [
            "Tubo Shelby, granulometría y límites de Atterberg.",
            "Sondeos manuales, inspección visual y excavación con pala.",
            "Escaneo láser, fotogrametría, levantamiento con drones y sistemas GNSS.",
            "Ensayo Proctor, CBR y contenido de humedad."
        ],
        correct: 2
    },
    {
        question: "¿Por qué es importante la planeación de la exploración?",
        options: [
            "Sirve únicamente para obtener permisos de construcción más rápido.",
            "Reduce la incertidumbre geológica, optimiza el presupuesto y previene fallas.",
            "Permite saltarse la fase de ensayos de laboratorio.",
            "Garantiza que el terreno no sufrirá sismos en el futuro."
        ],
        correct: 1
    },
    {
        question: "¿Qué objetivos principales tiene la exploración de los geomateriales?",
        options: [
            "Determinar el valor comercial del predio.",
            "Diseñar exclusivamente la estética de los cimientos.",
            "Evaluar propiedades físicas y mecánicas para determinar la capacidad de carga del terreno.",
            "Buscar minerales preciosos bajo la zona de construcción."
        ],
        correct: 2
    },
    {
        question: "Selecciona 5 ejemplos de ensayos de laboratorio comunes:",
        options: [
            "Granulometría, Límites de Atterberg, Contenido de humedad, Proctor y CBR.",
            "Cizallamiento, Compresión, Flexión, Torsión y Magnetismo.",
            "Fotogrametría, Escaneo láser, Drones, GNSS y Radar.",
            "Tubo Shelby, Pala, Pico, Barreta y Perforadora."
        ],
        correct: 0
    },
    {
        question: "¿Qué son los métodos directos de exploración?",
        options: [
            "Métodos geofísicos que evalúan el suelo sin necesidad de excavar.",
            "Mediciones exclusivas de la atmósfera y el clima del sitio.",
            "Técnicas que permiten la observación visual y física del subsuelo mediante excavaciones.",
            "Técnicas fotográficas usando drones a gran altura."
        ],
        correct: 2
    },
    {
        question: "En cuanto a precisión y costo, ¿cómo se caracterizan los métodos directos?",
        options: [
            "Son más rápidos, económicos y menos precisos.",
            "Son más precisos, pero también más costosos y lentos.",
            "Son económicos pero sumamente precisos.",
            "No tienen costo y se hacen de manera instantánea."
        ],
        correct: 1
    },
    {
        question: "¿Qué son las discontinuidades en un macizo rocoso?",
        options: [
            "Zonas donde la roca es perfectamente sólida y uniforme.",
            "Fracturas donde ha ocurrido un desplazamiento tectónico considerable.",
            "Tipos de rocas que cambian de color debido a la humedad.",
            "Superficies de debilidad donde existe una interrupción en la continuidad del material."
        ],
        correct: 3
    },
    {
        question: "¿Cuáles son los principales elementos en los pliegues geológicos?",
        options: [
            "Charnela, flancos, plano axial y eje de pliegue.",
            "Tensión, compresión y cizallación.",
            "Grava, arena, limo y arcilla.",
            "Tubo Shelby, CBR, Proctor y Granulometría."
        ],
        correct: 0
    },
    {
        question: "¿Por qué ocurre típicamente la falla 'normal'?",
        options: [
            "Por esfuerzos de compresión donde las placas chocan.",
            "Por fuerzas de cizallamiento laterales.",
            "Por esfuerzos de tensión en regiones donde la corteza terrestre se está expandiendo.",
            "Por cambios bruscos de temperatura ambiental en el terreno."
        ],
        correct: 2
    },
    {
        question: "¿Por qué es fundamental conocer las estructuras geológicas en ingeniería civil?",
        options: [
            "Para saber de qué color pintar las estructuras exteriores.",
            "Porque lo exige el sindicato de topógrafos sin razón técnica.",
            "Solo es útil en la industria minera, no en la construcción urbana.",
            "Para reducir riesgos, optimizar costos y asegurar obras estables durante su vida útil."
        ],
        correct: 3
    },
    {
        question: "¿En qué caso se suelen emplear principalmente los métodos indirectos de exploración?",
        options: [
            "Para extraer muestras inalteradas de alta calidad en arcillas blandas.",
            "Para cimentaciones profundas donde se requiere precisión milimétrica en cada metro.",
            "Para exploraciones preliminares sobre grandes extensiones de terreno, de forma rápida y económica.",
            "Cuando se necesita observar visualmente el perfil estratigráfico directo."
        ],
        correct: 2
    }
];

// State variables
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;
let studentName = "";

// DOM Elements
const userNameInput = document.getElementById('user-name');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');

const studentNameDisplay = document.getElementById('student-name-display');
const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const scoreCircle = document.querySelector('.score-circle');

// Initialization
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
userNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') startQuiz();
});

function startQuiz() {
    const name = userNameInput.value.trim();
    if (!name) {
        alert("Por favor, ingresa tu nombre para comenzar.");
        userNameInput.focus();
        return;
    }
    
    studentName = name;
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    hasAnswered = false;
    nextBtn.disabled = true;
    
    const currentQ = quizData[currentQuestionIndex];
    questionText.textContent = currentQ.question;
    
    // Update progress
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${quizData.length}`;
    const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Clear and render options
    optionsContainer.innerHTML = '';
    
    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span style="font-weight: 600; margin-right: 15px; color: var(--primary-color);">
                ${String.fromCharCode(65 + index)}.
            </span> 
            ${option}
        `;
        button.addEventListener('click', () => selectOption(button, index));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedBtn, index) {
    if (hasAnswered) return;
    
    hasAnswered = true;
    nextBtn.disabled = false;
    
    const currentQ = quizData[currentQuestionIndex];
    const isCorrect = index === currentQ.correct;
    
    if (isCorrect) {
        score++;
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('wrong');
        // Highlight the correct one
        const correctBtn = optionsContainer.children[currentQ.correct];
        correctBtn.classList.add('correct');
    }
    
    // Disable all options
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        if (!btn.classList.contains('correct') && !btn.classList.contains('wrong')) {
            btn.style.opacity = '0.5';
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Calculate grade on a 0 to 10 scale
    const finalGrade = (score / quizData.length) * 10;
    // Format to 1 decimal place if needed, else whole number
    const gradeFormatted = finalGrade % 1 === 0 ? finalGrade : finalGrade.toFixed(1);
    
    studentNameDisplay.textContent = studentName;
    scoreText.textContent = gradeFormatted;
    correctCount.textContent = score;
    incorrectCount.textContent = quizData.length - score;
    
    const percentage = Math.round((score / quizData.length) * 100);
    scoreCircle.style.setProperty('--progress', `${percentage}%`);
    
    if (finalGrade === 10) {
        feedbackText.textContent = "¡Excelente! Calificación perfecta. 🪨✨";
    } else if (finalGrade >= 7) {
        feedbackText.textContent = "¡Buen trabajo! Has aprobado el examen. 📚👍";
    } else if (finalGrade >= 4) {
        feedbackText.textContent = "Necesitas repasar más los conceptos. 📖";
    } else {
        feedbackText.textContent = "Sigue estudiando. ¡Tú puedes mejorar! ⛏️💪";
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    scoreCircle.style.setProperty('--progress', '0%');
    userNameInput.value = '';
    userNameInput.focus();
}
