// --- VARIABLES GLOBALES ---
let currentExamQuestions = []; 
let currentQuestionIndex = 0;
let userAnswers = [];
let currentExamName = ''; 
let isAnswered = false;
let selectedOption = null;

// Configuración de reintento (guarda qué función llamar al reiniciar)
let retryFunction = null; 
let retryParams = null;

// Lista de archivos para el examen final
const anbFiles = [
    'leccion1.json', 'leccion2.json', 'leccion3.json', 'leccion4.json', 
    'leccion5.json', 'leccion6.json', 'leccion7.json', 'leccion8.json', 
    'leccion9.json', 'leccion10.json', 'leccion11.json'
];

// --- ELEMENTOS DOM ---
const screens = {
    mainMenu: document.getElementById('main-menu-screen'),
    anbMenu: document.getElementById('anb-menu-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const ui = {
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

// --- 1. NAVEGACIÓN ---

function showScreen(screenName) {
    Object.values(screens).forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('active');
}

function showAnbMenu() {
    showScreen('anbMenu');
}

function goToMainMenu() {
    showScreen('mainMenu');
}

// --- 2. MODOS DE EXAMEN ---

// MODO A: HERRAMIENTAS R-1 (30 de 90 al azar)
async function startR1Exam() {
    try {
        const response = await fetch('herramientas_chillan.json');
        if (!response.ok) throw new Error("Error HTTP");
        const data = await response.json();
        
        // Mezclar y tomar 30
        currentExamQuestions = shuffle([...data]).slice(0, 30);
        currentExamName = "Técnica R-1";
        
        // Configurar reintento
        retryFunction = startR1Exam;
        retryParams = null;
        
        initQuizRound();
    } catch (error) {
        console.error(error);
        alert("Error cargando R-1. Usa Live Server.");
    }
}

// MODO B: LECCIÓN INDIVIDUAL ANB (Todas las preguntas de la lección)
async function startAnbLesson(lessonNum) {
    const filename = `leccion${lessonNum}.json`;
    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error("Error HTTP");
        const data = await response.json();
        
        // Usar TODAS las preguntas de la lección, pero mezcladas
        currentExamQuestions = shuffle([...data]);
        currentExamName = `Lección ${lessonNum}`;
        
        // Configurar reintento
        retryFunction = startAnbLesson;
        retryParams = lessonNum;

        initQuizRound();
    } catch (error) {
        console.error(error);
        alert(`Error cargando ${filename}.`);
    }
}

// MODO C: FINAL ANB (5 preguntas de cada uno de los 11 archivos)
async function startFinalAnbExam() {
    try {
        let finalQuestions = [];
        
        // Cargar los 11 archivos en paralelo
        const promises = anbFiles.map(file => fetch(file).then(res => res.json()));
        const results = await Promise.all(promises);
        
        // Extraer 5 de cada uno
        results.forEach((lessonQuestions) => {
            const selected = shuffle([...lessonQuestions]).slice(0, 5);
            finalQuestions = finalQuestions.concat(selected);
        });

        // Mezclar todo el examen
        currentExamQuestions = shuffle(finalQuestions);
        currentExamName = "Final ANB Integrada";
        
        // Configurar reintento
        retryFunction = startFinalAnbExam;
        retryParams = null;

        initQuizRound();

    } catch (error) {
        console.error("Error armando final:", error);
        alert("Falta algún archivo de lección (leccion1.json ... leccion11.json)");
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

// --- 4. MOTOR DEL QUIZ (Común para todos) ---

function initQuizRound() {
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // Configurar botón de reintento en la pantalla de resultados
    ui.retryBtn.onclick = () => {
        if (retryParams) retryFunction(retryParams);
        else retryFunction();
    };

    showScreen('quiz');
    ui.examBadge.innerText = currentExamName;
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
    // Mezclar opciones para que no siempre la A sea la correcta
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

ui.actionBtn.addEventListener('click', () => {
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
});

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
    ui.resultMsg.innerText = `${correctCount} correctas de ${total} preguntas.`;

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