// --- VARIABLES GLOBALES ---
let currentExamQuestions = []; 
let currentQuestionIndex = 0;
let userAnswers = [];
let currentExamName = ''; 
let isAnswered = false;
let selectedOption = null;

let lastExamFunction = null;
let lastExamParam = null;

const anbFiles = [
    'leccion1.json', 'leccion2.json', 'leccion3.json', 'leccion4.json', 
    'leccion5.json', 'leccion6.json', 'leccion7.json', 'leccion8.json', 
    'leccion9.json', 'leccion10.json', 'leccion11.json'
];
let screens = {};
let ui = {};

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    screens = {
        mainMenu: document.getElementById('main-menu-screen'),
        anbMenu: document.getElementById('anb-menu-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen')
    };

    ui = {
        examBadge: document.getElementById('exam-badge'),
        qNumber: document.getElementById('question-number'),
        qText: document.getElementById('question-text'),
        options: document.getElementById('options-container'),
        explanationBox: document.getElementById('explanation-box'),
        explanationText: document.getElementById('explanation-text'),
        actionBtn: document.getElementById('action-btn'),
        progressBar: document.getElementById('progress-bar'),
        scoreCircle: document.getElementById('score-circle'),
        resultTitle: document.getElementById('result-title'),
        resultMsg: document.getElementById('result-message'),
        reviewContainer: document.getElementById('review-container'),
        retryBtn: document.getElementById('retry-btn')
    };
    
    console.log("App Initialized", { screens, ui });
});

// --- 1. NAVEGACIÓN DE MENÚS ---

function showScreen(screenName) {
    if (!screens[screenName]) {
        console.error(`Screen ${screenName} not found`);
        return;
    }
    // Oculta todas las pantallas
    Object.values(screens).forEach(s => {
        if (s) {
            s.classList.add('hidden');
            s.classList.remove('active');
        }
    });
    // Muestra la solicitada
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('active');
}

function goToMainMenu() {
    showScreen('mainMenu');
}

function showAnbMenu() {
    showScreen('anbMenu');
}

// --- 2. LOGICA DE EXÁMENES ---

async function startR1Exam() {
    try {
        const response = await fetch('herramientas_chillan.json');
        if (!response.ok) throw new Error("Error al cargar herramientas_chillan.json");
        const data = await response.json();
        
        currentExamQuestions = shuffle([...data]).slice(0, 30);
        currentExamName = "Herramientas R-1";
        
        lastExamFunction = startR1Exam;
        lastExamParam = null;

        initQuizRound();
    } catch (error) {
        console.error(error);
        alert("Error cargando el archivo R-1. Asegúrate de que el servidor local esté funcionando (ej: Live Server) para evitar errores CORS.");
    }
}

async function startAnbLesson(lessonNum) {
    const filename = `leccion${lessonNum}.json`;
    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error(`Error al cargar ${filename}`);
        const data = await response.json();
        
        currentExamQuestions = shuffle([...data]);
        currentExamName = `Lección ${lessonNum}`;
        
        lastExamFunction = startAnbLesson;
        lastExamParam = lessonNum;

        initQuizRound();
    } catch (error) {
        console.error(error);
        alert(`Error al cargar la lección ${lessonNum}. Verifica si hay problemas de CORS.`);
    }
}

async function startFinalAnbExam() {
    try {
        let finalQuestions = [];
        const promises = anbFiles.map(file => fetch(file).then(res => {
            if (!res.ok) throw new Error('Error al cargar archivo');
            return res.json();
        }));
        const results = await Promise.all(promises);
        
        results.forEach((lessonQuestions) => {
            const selected = shuffle([...lessonQuestions]).slice(0, 5);
            finalQuestions = finalQuestions.concat(selected);
        });

        currentExamQuestions = shuffle(finalQuestions);
        currentExamName = "Final ANB Integrado";
        
        lastExamFunction = startFinalAnbExam;
        lastExamParam = null;

        initQuizRound();

    } catch (error) {
        console.error("Error armando examen final:", error);
        alert("Error al cargar los archivos de las lecciones.");
    }
}

// --- 3. UTILIDADES ---
function shuffle(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

// --- 4. MOTOR DEL QUIZ ---

function initQuizRound() {
    currentQuestionIndex = 0;
    userAnswers = [];
    
    if (ui.retryBtn) {
        ui.retryBtn.onclick = () => {
            if (lastExamParam) lastExamFunction(lastExamParam);
            else lastExamFunction();
        };
    }

    showScreen('quiz');
    if (ui.examBadge) ui.examBadge.innerText = currentExamName;
    loadQuestionUI();
}

function loadQuestionUI() {
    const q = currentExamQuestions[currentQuestionIndex];
    
    isAnswered = false;
    selectedOption = null;
    ui.explanationBox.classList.add('hidden');
    ui.actionBtn.innerText = "Verificar";
    ui.actionBtn.disabled = true;
    ui.actionBtn.className = "btn btn-primary";

    ui.qText.innerText = q.question;
    ui.qNumber.innerText = `${currentQuestionIndex + 1}/${currentExamQuestions.length}`;
    
    const percent = ((currentQuestionIndex) / currentExamQuestions.length) * 100;
    ui.progressBar.style.width = `${percent}%`;

    ui.options.innerHTML = '';
    const shuffledOptions = shuffle([...q.options]);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => selectOption(btn, opt);
        ui.options.appendChild(btn);
    });
}

function selectOption(btnElement, text) {
    if (isAnswered) return;
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    selectedOption = text;
    ui.actionBtn.disabled = false;
}

// Event listener for action button
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'action-btn') {
        handleActionClick();
    }
});

function handleActionClick() {
    const q = currentExamQuestions[currentQuestionIndex];

    if (!isAnswered) {
        isAnswered = true;
        const isCorrect = (selectedOption === q.answer);
        
        userAnswers.push({
            question: q.question,
            selected: selectedOption,
            correct: q.answer,
            isCorrect: isCorrect,
            explanation: q.explanation
        });

        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.innerText === q.answer) btn.classList.add('correct');
            else if (btn.innerText === selectedOption && !isCorrect) btn.classList.add('incorrect');
        });

        ui.explanationText.innerText = q.explanation;
        ui.explanationBox.classList.remove('hidden');

        if (currentQuestionIndex === currentExamQuestions.length - 1) {
            ui.actionBtn.innerText = "Ver Resultados";
            ui.actionBtn.className = "btn btn-finish";
        } else {
            ui.actionBtn.innerText = "Siguiente";
        }

    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentExamQuestions.length) {
            loadQuestionUI();
        } else {
            showResults();
        }
    }
}

// --- 5. RESULTADOS ---

function showResults() {
    showScreen('result');
    ui.progressBar.style.width = '100%';

    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const total = currentExamQuestions.length;
    const score = Math.round((correctCount / total) * 100);

    ui.scoreCircle.innerText = `${score}%`;
    ui.scoreCircle.className = `score-circle ${score >= 60 ? 'pass' : 'fail'}`;
    
    if (score >= 90) {
        ui.resultTitle.innerText = "¡EXCELENTE!";
        ui.resultTitle.style.color = "var(--success)";
    } else if (score >= 60) {
        ui.resultTitle.innerText = "APROBADO";
        ui.resultTitle.style.color = "var(--warning)";
    } else {
        ui.resultTitle.innerText = "REPROBADO";
        ui.resultTitle.style.color = "var(--error)";
    }
    ui.resultMsg.innerText = `${correctCount} correctas de ${total}.`;

    renderReview();
}

function renderReview() {
    ui.reviewContainer.innerHTML = '';
    userAnswers.forEach((ans, i) => {
        const card = document.createElement('div');
        card.className = `review-card ${ans.isCorrect ? 'correct' : 'incorrect'}`;
        
        card.innerHTML = `
            <div class="review-header">
                <span class="q-num">#${i+1}</span>
                <p>${ans.question}</p>
            </div>
            <div class="review-body">
                <div class="your-ans">
                    <span>Tú:</span> <strong class="${ans.isCorrect ? 'text-success' : 'text-error'}">${ans.selected}</strong>
                </div>
                ${!ans.isCorrect ? `<div class="correct-ans"><span>Correcta:</span> <strong class="text-success">${ans.correct}</strong></div>` : ''}
                <div class="explanation"><em>ℹ ${ans.explanation}</em></div>
            </div>
        `;
        ui.reviewContainer.appendChild(card);
    });
}
