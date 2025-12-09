// ==========================================
// BANCO MAESTRO DE 90 PREGUNTAS (R-1)
// ==========================================
const masterQuestionBank = [
    // --- MÓDULO 1: COJINES VETTER Y NEUMÁTICA (1-12) ---
    {
        "id": 1,
        "category": "Levantamiento Neumático",
        "question": "¿Cuál es la presión de trabajo de los cojines Vetter de ALTA presión?",
        "options": ["10 bar.", "1 bar.", "8 bar.", "720 bar."],
        "answer": "10 bar.",
        "explanation": "Los cojines de alta presión trabajan a 10 bar. [Fuente: Material convencional Pág 1]"
    },
    {
        "id": 2,
        "category": "Levantamiento Neumático",
        "question": "¿Con qué botella se alimentan los cojines de ALTA presión?",
        "options": ["Botella de 4500 psi.", "Botella de 2200 psi.", "Compresor del carro.", "Botella de oxígeno médico."],
        "answer": "Botella de 4500 psi.",
        "explanation": "El sistema de alta presión utiliza botellas de 4500 psi. [Fuente: Material convencional Pág 1]"
    },
    {
        "id": 3,
        "category": "Levantamiento Neumático",
        "question": "En el kit de alta presión, ¿cuáles son las capacidades exactas de los 3 cojines incluidos?",
        "options": ["21.8 ton, 11.6 ton y 6 ton.", "20 ton, 10 ton y 5 ton.", "30 ton, 20 ton y 10 ton.", "12 ton, 6 ton y 3 ton."],
        "answer": "21.8 ton, 11.6 ton y 6 ton.",
        "explanation": "El inventario detalla: 1 cojín de 21.8t, 1 de 11.6t y 1 de 6t. [Fuente: Material convencional Pág 1]"
    },
    {
        "id": 4,
        "category": "Levantamiento Neumático",
        "question": "¿Hasta qué porcentaje de su capacidad se recomienda trabajar los cojines de alta presión para evitar inestabilidad?",
        "options": ["Hasta el 40%.", "Hasta el 80%.", "Hasta el 90%.", "Hasta el 100%."],
        "answer": "Hasta el 40%.",
        "explanation": "Se recomienda el 40% debido a la inestabilidad que conlleva superar este valor. [Fuente: Material convencional Pág 1]"
    },
    {
        "id": 5,
        "category": "Levantamiento Neumático",
        "question": "¿Cuál es la 'Regla de Oro' de seguridad al levantar cargas con cojines?",
        "options": ["Priorizar la protección zócalo-cojín.", "Inflar rápido para ganar tiempo.", "No usar madera.", "Usar siempre dos cojines juntos."],
        "answer": "Priorizar la protección zócalo-cojín.",
        "explanation": "Se debe proteger el cojín tanto en contacto con madera como con el vehículo, priorizando zócalo-cojín. [Fuente: Material convencional Pág 1]"
    },
    {
        "id": 6,
        "category": "Levantamiento Neumático",
        "question": "¿Cuál es la presión de trabajo de los cojines Vetter de BAJA presión?",
        "options": ["1 bar.", "10 bar.", "0.5 bar.", "700 bar."],
        "answer": "1 bar.",
        "explanation": "Los cojines de baja presión operan a 1 bar. [Fuente: Material convencional Pág 2]"
    },
    {
        "id": 7,
        "category": "Levantamiento Neumático",
        "question": "¿Cuál es la carga admisible de los cojines de BAJA presión?",
        "options": ["12 toneladas.", "6 toneladas.", "21.8 toneladas.", "2 toneladas."],
        "answer": "12 toneladas.",
        "explanation": "La carga admisible para los cojines de baja es de 12 toneladas. [Fuente: Material convencional Pág 2]"
    },
    {
        "id": 8,
        "category": "Levantamiento Neumático",
        "question": "¿Con qué botella se alimentan los cojines de BAJA presión?",
        "options": ["Botella de 2200 psi.", "Botella de 4500 psi.", "Botella de 3000 psi.", "Directo del camión."],
        "answer": "Botella de 2200 psi.",
        "explanation": "Los cojines de baja se alimentan con una botella de 2200 psi. [Fuente: Material convencional Pág 2]"
    },
    {
        "id": 9,
        "category": "Levantamiento Neumático",
        "question": "¿Dónde se ubican físicamente las bolsas (cojines) de baja presión?",
        "options": ["Parte superior del móvil (techo).", "Cortina D-1.", "Cortina 1-1.", "Bajo los asientos."],
        "answer": "Parte superior del móvil (techo).",
        "explanation": "Ubicación: Parte superior del móvil. [Fuente: Material convencional Pág 2]"
    },
    {
        "id": 10,
        "category": "Levantamiento Neumático",
        "question": "¿Cuántos operadores se requieren MÍNIMO para bajar los cojines de baja presión del techo?",
        "options": ["2 operadores.", "1 operador.", "3 operadores.", "4 operadores."],
        "answer": "2 operadores.",
        "explanation": "Se requieren mínimo dos operadores para bajar los cojines desde el techo. [Fuente: Material convencional Pág 2]"
    },
    {
        "id": 11,
        "category": "Levantamiento Neumático",
        "question": "Si usa un sistema de levantamiento con cojines múltiples, la capacidad del sistema la determina:",
        "options": ["El cojín de menor capacidad.", "La suma de todos los cojines.", "El cojín de mayor capacidad.", "El promedio de los cojines."],
        "answer": "El cojín de menor capacidad.",
        "explanation": "Se considera factor de seguridad el cojín de menor capacidad que se está utilizando. [Fuente: Material convencional Pág 1]"
    },
    {
        "id": 12,
        "category": "Levantamiento Neumático",
        "question": "¿En qué cortina se encuentra el monomando y manorreductor de los cojines de BAJA presión?",
        "options": ["Cortina D-1.", "Cortina D-2.", "Cortina 1-1.", "En el techo."],
        "answer": "Cortina D-1.",
        "explanation": "Aunque los cojines están en el techo, los mandos están en la Cortina D-1. [Fuente: Material convencional Pág 2]"
    },

    // --- MÓDULO 2: HOLMATRO (13-27) ---
    {
        "id": 13,
        "category": "Extricación Holmatro",
        "question": "¿Cuál es la presión de trabajo de las herramientas Holmatro (Cizalla/RAM)?",
        "options": ["720 bar.", "700 bar.", "10 bar.", "5000 psi."],
        "answer": "720 bar.",
        "explanation": "Ficha técnica Holmatro: Presión de trabajo 720 bar. [Fuente: Equipos_extricación Pág 1]"
    },
    {
        "id": 14,
        "category": "Extricación Holmatro",
        "question": "¿En qué cortina se encuentran ubicadas las herramientas Holmatro (Cizalla, RAM, Separador)?",
        "options": ["Cortina D1.", "Cortina D2.", "Cortina 11.", "Cortina 12."],
        "answer": "Cortina D1.",
        "explanation": "Ubicación: Cortina D1. [Fuente: Equipos_extricación Pág 1]"
    },
    {
        "id": 15,
        "category": "Extricación Holmatro",
        "question": "¿En qué cortina se encuentran las MANGUERAS hidráulicas Holmatro?",
        "options": ["Cortina D2.", "Cortina D1.", "Cortina 11.", "Conectadas a la bomba."],
        "answer": "Cortina D2.",
        "explanation": "Las mangueras hidráulicas se encuentran en la cortina D2. [Fuente: Equipos_extricación Pág 1]"
    },
    {
        "id": 16,
        "category": "Extricación Holmatro",
        "question": "¿Cuál es la apertura de cuchillas de la Cizalla Holmatro CU 4040 C?",
        "options": ["282 mm.", "185 mm.", "200 mm.", "350 mm."],
        "answer": "282 mm.",
        "explanation": "Apertura de cuchillas: 282 mm. [Fuente: Equipos_extricación Pág 1]"
    },
    {
        "id": 17,
        "category": "Extricación Holmatro",
        "question": "¿Cuál es el peso 'lista para uso' de la Cizalla Holmatro CU 4040 C?",
        "options": ["17.6 kg.", "21.3 kg.", "15.0 kg.", "24.4 kg."],
        "answer": "17.6 kg.",
        "explanation": "Peso: 17.6 kg. [Fuente: Equipos_extricación Pág 1]"
    },
    {
        "id": 18,
        "category": "Extricación Holmatro",
        "question": "Sobre el RAM Holmatro TR 4350 C: ¿Cuál es su longitud MÁXIMA extendida?",
        "options": ["1275 mm.", "533 mm.", "750 mm.", "1000 mm."],
        "answer": "1275 mm.",
        "explanation": "Longitud extendida: 1275 mm. [Fuente: Equipos_extricación Pág 2]"
    },
    {
        "id": 19,
        "category": "Extricación Holmatro",
        "question": "Sobre el RAM Holmatro TR 4350 C: ¿Cuál es su longitud RETRAÍDA?",
        "options": ["533 mm.", "450 mm.", "600 mm.", "388 mm."],
        "answer": "533 mm.",
        "explanation": "Longitud retraído: 533 mm. [Fuente: Equipos_extricación Pág 2]"
    },
    {
        "id": 20,
        "category": "Extricación Holmatro",
        "question": "¿Cuál es la fuerza del PRIMER tramo del RAM Holmatro?",
        "options": ["22.1 toneladas (217 kN).", "8.3 toneladas (81 kN).", "13.7 toneladas.", "16 toneladas."],
        "answer": "22.1 toneladas (217 kN).",
        "explanation": "Fuerza máx. tramo 1°: 217 kN / 22.1 t. [Fuente: Equipos_extricación Pág 2]"
    },
    {
        "id": 21,
        "category": "Extricación Holmatro",
        "question": "¿Cuál es la fuerza del SEGUNDO tramo del RAM Holmatro?",
        "options": ["8.3 toneladas (81 kN).", "22.1 toneladas.", "5 toneladas.", "10 toneladas."],
        "answer": "8.3 toneladas (81 kN).",
        "explanation": "Fuerza máx. tramo 2°: 81 kN / 8.3 t. [Fuente: Equipos_extricación Pág 2]"
    },
    {
        "id": 22,
        "category": "Extricación Holmatro",
        "question": "¿Cuál es la separación máxima del Separador Holmatro SP 4240 C?",
        "options": ["686 mm.", "720 mm.", "500 mm.", "800 mm."],
        "answer": "686 mm.",
        "explanation": "Máx. separación: 686 mm. [Fuente: Equipos_extricación Pág 3]"
    },
    {
        "id": 23,
        "category": "Extricación Holmatro",
        "question": "¿Cuántas herramientas se pueden conectar a la Bomba Dual Holmatro PU 30 C?",
        "options": ["2 herramientas.", "4 herramientas.", "1 herramienta.", "3 herramientas."],
        "answer": "2 herramientas.",
        "explanation": "N° de herramientas que se pueden conectar: 2. [Fuente: Equipos_extricación Pág 4]"
    },
    {
        "id": 24,
        "category": "Extricación Holmatro",
        "question": "¿Qué tipo de aceite usa el motor de la bomba Holmatro?",
        "options": ["Gasolina 4 tiempos (Honda).", "Diesel.", "Mezcla 2 tiempos.", "Eléctrico solamente."],
        "answer": "Gasolina 4 tiempos (Honda).",
        "explanation": "Motor: Honda, gasolina, 3.0 hp, 4 tiempos. [Fuente: Equipos_extricación Pág 4]"
    },
    {
        "id": 25,
        "category": "Extricación Holmatro",
        "question": "¿Cuál es la longitud y peso de las mangueras Holmatro?",
        "options": ["10 metros / 4.7 kg.", "20 metros / 18 kg.", "5 metros / 2 kg.", "15 metros / 10 kg."],
        "answer": "10 metros / 4.7 kg.",
        "explanation": "Longitud 10 metros, Peso 4.7 kg. [Fuente: Equipos_extricación Pág 5]"
    },
    {
        "id": 26,
        "category": "Extricación Holmatro",
        "question": "En la Cizalla Holmatro, ¿dónde se encuentra la zona de mayor potencia de corte?",
        "options": ["En la base (donde convergen las hojas).", "En la punta.", "En el centro.", "Es igual en toda la hoja."],
        "answer": "En la base (donde convergen las hojas).",
        "explanation": "Zona de mayor potencia de corte se encuentra en la zona donde convergen las hojas (base). [Fuente: Equipos_extricación Pág 1]"
    },
    {
        "id": 27,
        "category": "Extricación Holmatro",
        "question": "¿Qué accesorio del Separador Holmatro se menciona para traccionar?",
        "options": ["Cadenas de tracción y puntas.", "Cable de acero.", "Cinta tubular.", "No puede traccionar."],
        "answer": "Cadenas de tracción y puntas.",
        "explanation": "Cuenta con accesorios como: puntas para tracción, cadenas de tracción... [Fuente: Equipos_extricación Pág 3]"
    },

    // --- MÓDULO 3: LUKAS (28-42) ---
    {
        "id": 28,
        "category": "Extricación Lukas",
        "question": "¿Cuál es la presión de trabajo de las herramientas Lukas?",
        "options": ["700 bar (70 MPa).", "720 bar.", "10 bar.", "500 bar."],
        "answer": "700 bar (70 MPa).",
        "explanation": "Ficha Lukas: Presión de trabajo 700 bar / 70 MPa. [Fuente: Equipos_extricación Pág 6]"
    },
    {
        "id": 29,
        "category": "Extricación Lukas",
        "question": "¿En qué cortina se ubican las herramientas Lukas?",
        "options": ["Cortina 11 (I-1).", "Cortina D1.", "Cortina D2.", "Cortina Trasera."],
        "answer": "Cortina 11 (I-1).",
        "explanation": "Ubicación: Cortina 11. [Fuente: Equipos_extricación Pág 6]"
    },
    {
        "id": 30,
        "category": "Extricación Lukas",
        "question": "¿Cuál es la fuerza máxima de corte de la Cizalla Lukas S 700?",
        "options": ["47.9 toneladas (470 kN).", "100 toneladas.", "20 toneladas.", "30 toneladas."],
        "answer": "47.9 toneladas (470 kN).",
        "explanation": "Fuerza máxima de corte: 470 kN / 47.9 t. [Fuente: Equipos_extricación Pág 8]"
    },
    {
        "id": 31,
        "category": "Extricación Lukas",
        "question": "¿Cuál es el peso 'lista para uso' de la Cizalla Lukas S 700?",
        "options": ["21.3 kg.", "17.6 kg.", "15 kg.", "25 kg."],
        "answer": "21.3 kg.",
        "explanation": "Peso: 21.3 kg (Más pesada que la Holmatro). [Fuente: Equipos_extricación Pág 8]"
    },
    {
        "id": 32,
        "category": "Extricación Lukas",
        "question": "¿Cuál es la apertura de cuchillas de la Cizalla Lukas S 700?",
        "options": ["185 mm.", "282 mm.", "200 mm.", "150 mm."],
        "answer": "185 mm.",
        "explanation": "Apertura de cuchillas: 185 mm. [Fuente: Equipos_extricación Pág 8]"
    },
    {
        "id": 33,
        "category": "Extricación Lukas",
        "question": "Sobre el RAM Lukas R 410: ¿Cuál es su longitud extendida?",
        "options": ["750 mm.", "1275 mm.", "1000 mm.", "500 mm."],
        "answer": "750 mm.",
        "explanation": "Longitud extendido: 750 mm. [Fuente: Equipos_extricación Pág 9]"
    },
    {
        "id": 34,
        "category": "Extricación Lukas",
        "question": "Sobre el RAM Lukas R 410: ¿Cuál es su longitud retraída?",
        "options": ["450 mm.", "533 mm.", "300 mm.", "600 mm."],
        "answer": "450 mm.",
        "explanation": "Longitud retraído: 450 mm. [Fuente: Equipos_extricación Pág 9]"
    },
    {
        "id": 35,
        "category": "Extricación Lukas",
        "question": "¿Cuántas herramientas pueden trabajar SIMULTÁNEAMENTE con la bomba Lukas P650-4E?",
        "options": ["4 herramientas.", "2 herramientas.", "1 herramienta.", "3 herramientas."],
        "answer": "4 herramientas.",
        "explanation": "N° de herramientas que pueden trabajar simultáneamente: 4. [Fuente: Equipos_extricación Pág 9]"
    },
    {
        "id": 36,
        "category": "Extricación Lukas",
        "question": "¿Cuál es la capacidad de llenado de aceite hidráulico de la bomba Lukas?",
        "options": ["5.5 Litros.", "2 Litros.", "10 Litros.", "1.5 Litros."],
        "answer": "5.5 Litros.",
        "explanation": "Capacidad de llenado aceite hidráulico: 5.5L. [Fuente: Equipos_extricación Pág 9]"
    },
    {
        "id": 37,
        "category": "Extricación Lukas",
        "question": "La bomba manual Lukas LH2/1.8-70 permite conectar:",
        "options": ["1 herramienta.", "2 herramientas.", "3 herramientas.", "4 herramientas."],
        "answer": "1 herramienta.",
        "explanation": "N° de herramientas que se pueden conectar: 1. [Fuente: Equipos_extricación Pág 12]"
    },
    {
        "id": 38,
        "category": "Extricación Lukas",
        "question": "¿Cuál es la longitud del carrete hidráulico Lukas SHR 20?",
        "options": ["20 metros.", "10 metros.", "30 metros.", "50 metros."],
        "answer": "20 metros.",
        "explanation": "Largo: 20 mts. [Fuente: Equipos_extricación Pág 11]"
    },
    {
        "id": 39,
        "category": "Extricación Lukas",
        "question": "La herramienta combinada Lukas S 120 (espacios confinados) corta barra circular de hasta:",
        "options": ["2.2 cm.", "3 cm.", "4 cm.", "1 cm."],
        "answer": "2.2 cm.",
        "explanation": "Capacidad de corte (barra circular): 2.2 cm. [Fuente: Equipos_extricación Pág 6]"
    },
    {
        "id": 40,
        "category": "Extricación Lukas",
        "question": "La base RAM LRS 120 tiene una carga nominal de:",
        "options": ["120 kN.", "240 kN.", "100 kN.", "50 kN."],
        "answer": "120 kN.",
        "explanation": "Carga Nominal: 120 KN. [Fuente: Equipos_extricación Pág 10]"
    },
    {
        "id": 41,
        "category": "Extricación Lukas",
        "question": "La base RAM LRS-C tiene una carga nominal de:",
        "options": ["296 kN.", "120 kN.", "300 kN.", "150 kN."],
        "answer": "296 kN.",
        "explanation": "Carga Nominal: 296 KN. [Fuente: Equipos_extricación Pág 10]"
    },
    {
        "id": 42,
        "category": "Extricación Lukas",
        "question": "Respecto a las mangueras Lukas conectadas a la bomba, si quiero más distancia:",
        "options": ["Existen extensiones en la cortina D2.", "Debo mover la bomba.", "No existen extensiones.", "Uso las mangueras Holmatro."],
        "answer": "Existen extensiones en la cortina D2.",
        "explanation": "En caso de querer llegar a mayor distancia, se encuentran las extensiones en la cortina D2. [Fuente: Equipos_extricación Pág 6]"
    },

    // --- MÓDULO 4: ESTABILIZACIÓN (43-57) ---
    {
        "id": 43,
        "category": "Estabilización",
        "question": "¿En qué cortina se encuentra el material de madera (Cuartones, cuñas)?",
        "options": ["Cortina D-3.", "Cortina D-1.", "Cortina 1-1.", "Techo."],
        "answer": "Cortina D-3.",
        "explanation": "Ubicación: Cortina D-3. [Fuente: Material de estabilización Pág 1]"
    },
    {
        "id": 44,
        "category": "Estabilización",
        "question": "¿Qué indica el número '1' pintado en algunos cuartones de madera?",
        "options": ["Su correcto posicionamiento.", "Su longitud.", "Su peso.", "Que es material nuevo."],
        "answer": "Su correcto posicionamiento.",
        "explanation": "Parte del material se encuentra pintado con un numero 1, lo que indica su correcto posicionamiento. [Fuente: Material de estabilización Pág 1]"
    },
    {
        "id": 45,
        "category": "Estabilización",
        "question": "¿Cuál es la cantidad aproximada de Cuartones en el R-1?",
        "options": ["50 Cuartones.", "20 Cuartones.", "100 Cuartones.", "10 Cuartones."],
        "answer": "50 Cuartones.",
        "explanation": "Cantidad aproximada: 50 Cuartones. [Fuente: Material de estabilización Pág 1]"
    },
    {
        "id": 46,
        "category": "Estabilización",
        "question": "¿En qué cortina se encuentra el Kit Stab-Pack?",
        "options": ["Cortina 1-1.", "Cortina D-3.", "Cortina D-2.", "Cortina 1-2."],
        "answer": "Cortina 1-1.",
        "explanation": "Ubicación: Cortina 1-1. [Fuente: Material de estabilización Pág 1]"
    },
    {
        "id": 47,
        "category": "Estabilización",
        "question": "¿Cuál es la carga admisible del Stab-Pack cuando se usa en toda su superficie?",
        "options": ["> 3 toneladas.", "1 tonelada.", "5 toneladas.", "10 toneladas."],
        "answer": "> 3 toneladas.",
        "explanation": "Carga admisible: > 3 toneladas con uso en toda su superficie. [Fuente: Material de estabilización Pág 1]"
    },
    {
        "id": 48,
        "category": "Estabilización",
        "question": "¿Cuál es la principal ventaja operativa del Stab-Pack descrita en el manual?",
        "options": ["Complementa en caso de faltar material de estabilización.", "Es indestructible.", "Soporta más peso que la madera.", "Se ajusta automáticamente."],
        "answer": "Complementa en caso de faltar material de estabilización.",
        "explanation": "Ventajas: Complementa en caso de faltar material de estabilización. [Fuente: Material de estabilización Pág 1]"
    },
    {
        "id": 49,
        "category": "Estabilización",
        "question": "¿Cuál es la carga máxima de los estabilizadores Weber Stab Fast (MK 2)?",
        "options": ["1750 kg.", "3000 kg.", "1000 kg.", "5000 kg."],
        "answer": "1750 kg.",
        "explanation": "Carga máxima 1750 kg. [Fuente: Material de estabilización Pág 3]"
    },
    {
        "id": 50,
        "category": "Estabilización",
        "question": "¿Cuál es la longitud de la cinta del estabilizador MK 2?",
        "options": ["5.5 metros.", "10 metros.", "2 metros.", "8 metros."],
        "answer": "5.5 metros.",
        "explanation": "Longitud de la cinta: 5.5 m. [Fuente: Material de estabilización Pág 3]"
    },
    {
        "id": 51,
        "category": "Estabilización",
        "question": "Si necesita más altura o configuración con el MK 2, ¿qué permite su diseño?",
        "options": ["Unir 2 estabilizadores por su parte inferior.", "Conectarlo al Airshore.", "Usar una extensión de madera.", "No se puede modificar."],
        "answer": "Unir 2 estabilizadores por su parte inferior.",
        "explanation": "Podemos unir 2 estabilizadores mediante su parte inferior... [Fuente: Material de estabilización Pág 3]"
    },
    {
        "id": 52,
        "category": "Estabilización",
        "question": "¿En qué cortina se encuentra el puntal Airshore?",
        "options": ["Cortina D-2.", "Cortina 1-1.", "Cortina D-3.", "Cortina 1-2."],
        "answer": "Cortina D-2.",
        "explanation": "Ubicación: Cortina D-2. [Fuente: Material de estabilización Pág 3]"
    },
    {
        "id": 53,
        "category": "Estabilización",
        "question": "¿Cuál es la capacidad de carga del puntal Airshore?",
        "options": ["3000 kg.", "1750 kg.", "5000 kg.", "1000 kg."],
        "answer": "3000 kg.",
        "explanation": "Capacidad de carga 3000 kg. [Fuente: Material de estabilización Pág 3]"
    },
    {
        "id": 54,
        "category": "Estabilización",
        "question": "¿Dónde se realizan las uniones de las cintas en el Airshore?",
        "options": ["Parte inferior del puntal.", "Parte superior.", "Al medio.", "No usa cintas."],
        "answer": "Parte inferior del puntal.",
        "explanation": "Las uniones de las cintas de tracción se realizan por la parte inferior del puntal. [Fuente: Material de estabilización Pág 3]"
    },
    {
        "id": 55,
        "category": "Estabilización",
        "question": "¿Qué material compone el Kit de estabilización rápida (Cortina D-2)?",
        "options": ["Material que no absorbe sangre ni fluidos.", "Madera tratada.", "Acero inoxidable.", "Goma reciclada."],
        "answer": "Material que no absorbe sangre ni fluidos.",
        "explanation": "Fabricadas de un material que no absorbe sangre, combustibles, ni liquido en general. [Fuente: Material de estabilización Pág 2]"
    },
    {
        "id": 56,
        "category": "Estabilización",
        "question": "¿Dónde se encuentran los martillos para las cuñas?",
        "options": ["Parte inferior de la Cortina D-3.", "En el bolso de herramientas.", "En la cabina.", "Junto al Airshore."],
        "answer": "Parte inferior de la Cortina D-3.",
        "explanation": "Los martillos se encuentran ubicados en la misma cortina (D-3), en la parte inferior. [Fuente: Material de estabilización Pág 1]"
    },
    {
        "id": 57,
        "category": "Estabilización",
        "question": "¿Cuántas cuñas escalonadas de madera hay aproximadamente?",
        "options": ["8 Escalonadas.", "50 Escalonadas.", "2 Escalonadas.", "20 Escalonadas."],
        "answer": "8 Escalonadas.",
        "explanation": "Inventario: 8 Escalonadas. [Fuente: Material de estabilización Pág 1]"
    },

    // --- MÓDULO 5: WINCHE Y TIRFOR (58-67) ---
    {
        "id": 58,
        "category": "Tracción",
        "question": "¿Cuál es la tracción MÁXIMA del Winche frontal?",
        "options": ["5400 kgf.", "3400 kgf.", "10000 kgf.", "2000 kgf."],
        "answer": "5400 kgf.",
        "explanation": "Tracción Máxima: 5400 kgf. [Fuente: Material de estabilización Pág 2]"
    },
    {
        "id": 59,
        "category": "Tracción",
        "question": "¿Hasta qué distancia es eficiente la tracción máxima (5400 kgf) del winche?",
        "options": ["7 metros.", "36.9 metros.", "20 metros.", "40 metros."],
        "answer": "7 metros.",
        "explanation": "Distancia eficiente de tracción máxima (5400kgf): 7 metros. [Fuente: Material de estabilización Pág 2]"
    },
    {
        "id": 60,
        "category": "Tracción",
        "question": "¿Cuál es la capacidad de tracción del winche a los 36.9 metros?",
        "options": ["3400 kgf.", "5400 kgf.", "1000 kgf.", "4500 kgf."],
        "answer": "3400 kgf.",
        "explanation": "Capacidad de tracción a los 36.9 metros: 3400 kgf. [Fuente: Material de estabilización Pág 2]"
    },
    {
        "id": 61,
        "category": "Tracción",
        "question": "¿Cuál es el largo aproximado del cable del winche?",
        "options": ["40 metros.", "50 metros.", "30 metros.", "20 metros."],
        "answer": "40 metros.",
        "explanation": "Largo aproximado actual del cable acerado: 40 metros. [Fuente: Material de estabilización Pág 2]"
    },
    {
        "id": 62,
        "category": "Tracción",
        "question": "¿Qué implica 'traccionar' vs 'sostener' para el winche?",
        "options": ["Traccionar demanda mayor fuerza por el roce.", "Sostener gasta más batería.", "Es lo mismo.", "Traccionar es más seguro."],
        "answer": "Traccionar demanda mayor fuerza por el roce.",
        "explanation": "Traccionar implica oponerse a la fuerza de roce, lo que demanda mayor fuerza del motor. [Fuente: Material de estabilización Pág 2]"
    },
    {
        "id": 63,
        "category": "Tracción",
        "question": "¿En qué cortina se ubica el Tirfor?",
        "options": ["Cortina 1-1.", "Cortina D-1.", "Cortina D-2.", "Cortina 1-2."],
        "answer": "Cortina 1-1.",
        "explanation": "Ubicación: Cortina 1-1. [Fuente: Material de estabilización Pág 4]"
    },
    {
        "id": 64,
        "category": "Tracción",
        "question": "¿Cuál es la capacidad de tracción nominal del Tirfor T 532 D?",
        "options": ["3200 kg.", "5400 kg.", "1600 kg.", "5000 kg."],
        "answer": "3200 kg.",
        "explanation": "Capacidad de tracción nominal: 3200 kg. [Fuente: Material de estabilización Pág 4]"
    },
    {
        "id": 65,
        "category": "Tracción",
        "question": "¿Cuál es el diámetro de cable FUNDAMENTAL para el Tirfor?",
        "options": ["16.3 mm.", "12 mm.", "20 mm.", "10 mm."],
        "answer": "16.3 mm.",
        "explanation": "Si cable original es de 16.3 mm de diámetro (fundamental). [Fuente: Material de estabilización Pág 4]"
    },
    {
        "id": 66,
        "category": "Tracción",
        "question": "¿El cable del Tirfor se guarda junto o separado del equipo?",
        "options": ["Por separado, debe ensamblarse.", "Junto, viene instalado.", "En el techo.", "No usa cable, usa cinta."],
        "answer": "Por separado, debe ensamblarse.",
        "explanation": "Su cable acerado se encuentra por separado del equipo, debe ensamblarse. [Fuente: Material de estabilización Pág 4]"
    },
    {
        "id": 67,
        "category": "Tracción",
        "question": "¿Cuánto avanza el cable del Tirfor por ciclo?",
        "options": ["18/36 mm.", "50/60 mm.", "10/20 mm.", "100 mm."],
        "answer": "18/36 mm.",
        "explanation": "El avance del cable es de 18/36mm por ciclo. [Fuente: Material de estabilización Pág 4]"
    },

    // --- MÓDULO 6: CUERDAS Y ALTURA (68-80) ---
    {
        "id": 68,
        "category": "Cuerdas y Altura",
        "question": "¿Cuál es la carga máxima del Trípode?",
        "options": ["500 kg (o máx 2 personas).", "1000 kg.", "250 kg.", "150 kg."],
        "answer": "500 kg (o máx 2 personas).",
        "explanation": "Carga máxima: 500kg (al utilizar todos los puntos de anclaje) o máximo 2 personas. [Fuente: Polipasto Pág 1]"
    },
    {
        "id": 69,
        "category": "Cuerdas y Altura",
        "question": "¿Cuál es la altura regulable del trípode?",
        "options": ["146 cm - 241 cm.", "100 cm - 200 cm.", "200 cm - 300 cm.", "Fija en 250 cm."],
        "answer": "146 cm - 241 cm.",
        "explanation": "Altura: Regulable... entre 146 cm - 241 cm. [Fuente: Polipasto Pág 1]"
    },
    {
        "id": 70,
        "category": "Cuerdas y Altura",
        "question": "Al usar el trípode en un puente (desnivel), ¿cómo se debe asegurar?",
        "options": ["Fijar patas a la estructura y a un punto contrario (carro).", "Solo fijar las patas al suelo.", "No se debe usar en puentes.", "Sostenerlo manualmente."],
        "answer": "Fijar patas a la estructura y a un punto contrario (carro).",
        "explanation": "Se debe fijar el trípode a la estructura que se descenderá... y a un punto de anclaje en un punto contrario al descenso. [Fuente: Polipasto Pág 1]"
    },
    {
        "id": 71,
        "category": "Cuerdas y Altura",
        "question": "¿Dónde se ubica el Polipasto 4:1?",
        "options": ["Pre cabina, bajo asiento.", "Cortina 1-1.", "Cortina D-3.", "Techo."],
        "answer": "Pre cabina, bajo asiento.",
        "explanation": "Ubicación: Pre cabina, debajo del asiento. [Fuente: Polipasto Pág 2]"
    },
    {
        "id": 72,
        "category": "Cuerdas y Altura",
        "question": "¿Qué componentes forman el Polipasto 4:1 del R-1?",
        "options": ["Cuerda 50m, 2 poleas dobles, 3 mosquetones.", "Cuerda 100m, 1 polea simple.", "Cuerda 30m, ID, Jumar.", "Cinta tubular y ocho."],
        "answer": "Cuerda 50m, 2 poleas dobles, 3 mosquetones.",
        "explanation": "Conformado por una cuerda de 50 mts, 2 poleas dobles y 3 mosquetones. [Fuente: Polipasto Pág 2]"
    },
    {
        "id": 73,
        "category": "Cuerdas y Altura",
        "question": "¿Cuál es la altura MÁXIMA efectiva de descenso del polipasto 4:1?",
        "options": ["12.5 metros.", "50 metros.", "25 metros.", "10 metros."],
        "answer": "12.5 metros.",
        "explanation": "Altura máxima efectiva de descenso de 12.5 mts. [Fuente: Polipasto Pág 2]"
    },
    {
        "id": 74,
        "category": "Cuerdas y Altura",
        "question": "¿Cómo se deben dejar los mosquetones del polipasto por seguridad?",
        "options": ["Cerrados a tope y soltar media vuelta.", "Abiertos.", "Apretados con herramienta.", "Solo cerrados a tope."],
        "answer": "Cerrados a tope y soltar media vuelta.",
        "explanation": "Mosquetones se cierran a tope y luego se sueltan media vuelta. [Fuente: Polipasto Pág 2]"
    },
    {
        "id": 75,
        "category": "Cuerdas y Altura",
        "question": "¿Qué poleas contiene el bolso de ferretería?",
        "options": ["2 simples y 2 dobles.", "4 simples.", "1 doble.", "3 triples."],
        "answer": "2 simples y 2 dobles.",
        "explanation": "Inventario: 2 Poleas simples CMC Rescue, 2 Poleas dobles. [Fuente: Polipasto Pág 3]"
    },
    {
        "id": 76,
        "category": "Cuerdas y Altura",
        "question": "¿Qué descensores hay en el bolso de ferretería?",
        "options": ["2 Descendedores CMC Rescue.", "2 ID.", "2 Grigri.", "1 Stop."],
        "answer": "2 Descendedores CMC Rescue.",
        "explanation": "Inventario: 2 Descendedores CMC Rescue. [Fuente: Polipasto Pág 3]"
    },
    {
        "id": 77,
        "category": "Cuerdas y Altura",
        "question": "¿Cuántos Yumars hay en el bolso y de qué tipo?",
        "options": ["1 Izquierdo y 1 Derecho.", "2 Derechos.", "2 Izquierdos.", "No hay."],
        "answer": "1 Izquierdo y 1 Derecho.",
        "explanation": "1 Yumar izquierdo, 1 Yumar derecho. [Fuente: Polipasto Pág 3]"
    },
    {
        "id": 78,
        "category": "Cuerdas y Altura",
        "question": "¿Qué ocho se encuentra en el bolso de ferretería?",
        "options": ["1 Ocho deportivo Kong.", "1 Ocho de rescate acero.", "2 Ochos.", "No hay ocho."],
        "answer": "1 Ocho deportivo Kong.",
        "explanation": "1 Ocho deportivo Kong. [Fuente: Polipasto Pág 3]"
    },
    {
        "id": 79,
        "category": "Cuerdas y Altura",
        "question": "¿De qué color son las anillas de 22kN en el bolso?",
        "options": ["Rojas y Celestes.", "Negras y Amarillas.", "Verdes.", "Blancas."],
        "answer": "Rojas y Celestes.",
        "explanation": "3 Anillas... color rojo, 3 Anillas... color celeste. [Fuente: Polipasto Pág 3]"
    },
    {
        "id": 80,
        "category": "Cuerdas y Altura",
        "question": "¿Se debe armar el polipasto con guantes gruesos?",
        "options": ["No, sin guantes o con delgados.", "Sí, siempre guantes estructurales.", "Da igual.", "Solo con guantes de cuero."],
        "answer": "No, sin guantes o con delgados.",
        "explanation": "Armado sin guantes o con unos delgados debido a la manipulación del material. [Fuente: Polipasto Pág 2]"
    },

    // --- MÓDULO 7: GENERADOR Y MISCELÁNEOS (81-90) ---
    {
        "id": 81,
        "category": "Generador",
        "question": "¿Cuál es el modelo del Generador Eléctrico del R-1?",
        "options": ["Rosenbauer RS 14.", "Honda EU20.", "Yamaha.", "Caterpillar."],
        "answer": "Rosenbauer RS 14.",
        "explanation": "Generador eléctrico RS 14 Rosenbauer. [Fuente: Equipos_extricación Pág 12]"
    },
    {
        "id": 82,
        "category": "Generador",
        "question": "¿Cuál es el rendimiento (potencia) del Generador RS 14?",
        "options": ["13.6 kVA.", "5 kVA.", "20 kVA.", "10 kVA."],
        "answer": "13.6 kVA.",
        "explanation": "Rendimiento: 13.6 kVA. [Fuente: Equipos_extricación Pág 12]"
    },
    {
        "id": 83,
        "category": "Generador",
        "question": "¿Cuánto pesa el generador RS 14?",
        "options": ["144 kg.", "100 kg.", "50 kg.", "200 kg."],
        "answer": "144 kg.",
        "explanation": "Peso: 144 kg. [Fuente: Equipos_extricación Pág 12]"
    },
    {
        "id": 84,
        "category": "Generador",
        "question": "¿Cuál es la capacidad de combustible del generador?",
        "options": ["12 Litros.", "5 Litros.", "20 Litros.", "10 Litros."],
        "answer": "12 Litros.",
        "explanation": "Capacidad de llenado combustible: 12 L. [Fuente: Equipos_extricación Pág 12]"
    },
    {
        "id": 85,
        "category": "Generador",
        "question": "¿Cuánto tiempo funciona a plena carga el generador?",
        "options": ["Aprox. 2 horas.", "5 horas.", "30 minutos.", "8 horas."],
        "answer": "Aprox. 2 horas.",
        "explanation": "Funcionamiento a plena carga: Aprox. 2 horas. [Fuente: Equipos_extricación Pág 13]"
    },
    {
        "id": 86,
        "category": "Generador",
        "question": "¿Qué precaución de posicionamiento tiene el generador?",
        "options": ["Tubo de escape no apuntando al carro.", "Siempre sobre el carro.", "A sotavento.", "En altura."],
        "answer": "Tubo de escape no apuntando al carro.",
        "explanation": "Posicionar de tal forma que el tubo de escape no este apuntando hacia el carro. [Fuente: Equipos_extricación Pág 13]"
    },
    {
        "id": 87,
        "category": "Levantamiento Mecánico",
        "question": "¿Cuál es la capacidad del Hi-Lift ubicado en D-1?",
        "options": ["Hasta 2 toneladas.", "3.5 toneladas.", "5 toneladas.", "1 tonelada."],
        "answer": "Hasta 2 toneladas.",
        "explanation": "Capacidad: Hasta 2 toneladas aproximadamente. [Fuente: Material convencional Pág 2]"
    },
    {
        "id": 88,
        "category": "Levantamiento Hidráulico",
        "question": "¿Qué frase nemotécnica aplica al Porta Power (Set H2)?",
        "options": ["Espacio ganado, espacio asegurado.", "Lento es suave, suave es rápido.", "Seguridad ante todo.", "Levantar y calzar."],
        "answer": "Espacio ganado, espacio asegurado.",
        "explanation": "Recordar: ESPACIO GANADO, ESPACIO ASEGURADO. [Fuente: Material convencional Pág 3]"
    },
    {
        "id": 89,
        "category": "Levantamiento Hidráulico",
        "question": "¿Cuál es la fuerza de elevación del Porta Power (Set H2)?",
        "options": ["13.7 toneladas.", "20 toneladas.", "10 toneladas.", "5 toneladas."],
        "answer": "13.7 toneladas.",
        "explanation": "Fuerza de elevación hasta 137 kN = 13.7 toneladas. [Fuente: Material convencional Pág 3]"
    },
    {
        "id": 90,
        "category": "Seguridad",
        "question": "En herramientas hidráulicas, la trilogía de seguridad es:",
        "options": ["Auto-Herramienta-Operador.", "Casco-Guantes-Lentes.", "Evaluación-Acción-Revisión.", "Víctima-Rescatista-Entorno."],
        "answer": "Auto-Herramienta-Operador.",
        "explanation": "SIEMPRE SE DEBE RECORDAR, Auto-Herramienta-Operador. [Fuente: Equipos_extricación]"
    }
];

// ==========================================
// LÓGICA DE SELECCIÓN ALEATORIA (30 de 90)
// ==========================================

let currentQuizQuestions = []; // Aquí guardaremos las 30 seleccionadas
let currentQuestionIndex = 0;
let userAnswers = [];
let selectedOption = null;
let isAnswered = false;

// Referencias DOM
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const questionCategory = document.getElementById('question-category');
const optionsContainer = document.getElementById('options-container');
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');
const actionBtn = document.getElementById('action-btn');
const progressBar = document.getElementById('progress-bar');
const reviewContainer = document.getElementById('review-container');

// Función para mezclar arrays (Fisher-Yates)
function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// INICIAR QUIZ
function initQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    isAnswered = false;
    selectedOption = null;
    
    // 1. Mezclar las 90 preguntas maestras
    const shuffledMaster = shuffleArray(masterQuestionBank);
    
    // 2. Seleccionar solo las primeras 30
    currentQuizQuestions = shuffledMaster.slice(0, 30);
    
    // Resetear UI
    quizScreen.classList.add('active');
    quizScreen.classList.remove('hidden');
    resultScreen.classList.remove('active');
    resultScreen.classList.add('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuizQuestions[currentQuestionIndex];
    isAnswered = false;
    selectedOption = null;
    
    // UI Reset
    explanationBox.classList.add('hidden');
    actionBtn.innerText = "Verificar";
    actionBtn.disabled = true;
    
    // Textos
    questionText.innerText = q.question;
    questionNumber.innerText = `Pregunta ${currentQuestionIndex + 1}/30`; // Siempre muestra /30
    questionCategory.innerText = q.category;
    
    // Barra de progreso
    const percent = ((currentQuestionIndex) / 30) * 100;
    progressBar.style.width = `${percent}%`;

    // Opciones (Mezcladas)
    optionsContainer.innerHTML = '';
    const shuffledOptions = shuffleArray(q.options);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        
        btn.addEventListener('click', function() {
            selectOption(this, opt);
        });
        
        optionsContainer.appendChild(btn);
    });
}

function selectOption(btnElement, textOption) {
    if (isAnswered) return; 

    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    
    btnElement.classList.add('selected');
    selectedOption = textOption;
    
    actionBtn.disabled = false;
}

actionBtn.addEventListener('click', () => {
    const q = currentQuizQuestions[currentQuestionIndex];

    if (!isAnswered) {
        // FASE 1: VERIFICAR
        isAnswered = true; 
        const isCorrect = (selectedOption === q.answer);

        userAnswers.push({
            questionText: q.question,
            userSelected: selectedOption,
            correctAnswer: q.answer,
            isCorrect: isCorrect,
            explanation: q.explanation
        });

        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(btn => {
            btn.disabled = true; 
            if (btn.innerText === q.answer) {
                btn.classList.add('correct');
            } else if (btn.innerText === selectedOption && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        explanationText.innerText = q.explanation;
        explanationBox.classList.remove('hidden');

        if (currentQuestionIndex === 29) { // 29 es el índice de la pregunta 30
            actionBtn.innerText = "Ver Resultados";
        } else {
            actionBtn.innerText = "Siguiente";
        }
    } else {
        // FASE 2: AVANZAR
        currentQuestionIndex++;
        if (currentQuestionIndex < 30) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    }
});

function finishQuiz() {
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');
    
    progressBar.style.width = '100%';

    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const percentage = Math.round((correctCount / 30) * 100);

    const scoreCircle = document.getElementById('score-circle');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');

    scoreCircle.innerText = `${percentage}%`;

    if (percentage >= 90) {
        scoreCircle.style.borderColor = '#2e7d32';
        scoreCircle.style.color = '#2e7d32';
        resultTitle.innerText = "¡NIVEL EXPERTO!";
        resultMessage.innerText = `Lograste ${correctCount} de 30. Excelente.`;
    } else if (percentage >= 60) {
        scoreCircle.style.borderColor = '#fdd835';
        scoreCircle.style.color = '#fdd835';
        resultTitle.innerText = "APROBADO";
        resultMessage.innerText = `Lograste ${correctCount} de 30. Aprobado.`;
    } else {
        scoreCircle.style.borderColor = '#c62828';
        scoreCircle.style.color = '#c62828';
        resultTitle.innerText = "NO APROBADO";
        resultMessage.innerText = `Lograste ${correctCount} de 30. Estudia más.`;
    }

    generateReview();
}

function generateReview() {
    reviewContainer.innerHTML = '';
    
    userAnswers.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `review-item ${item.isCorrect ? 'good' : 'bad'}`;
        
        div.innerHTML = `
            <span class="review-q">${index + 1}. ${item.questionText}</span>
            <div><strong>Tú:</strong> <span class="${item.isCorrect ? 'txt-green' : 'txt-red'}">${item.userSelected}</span></div>
            ${!item.isCorrect ? `<div><strong>Correcta:</strong> <span class="txt-green">${item.correctAnswer}</span></div>` : ''}
            <div class="txt-gray"><em>${item.explanation}</em></div>
        `;
        
        reviewContainer.appendChild(div);
    });
}

function restartQuiz() {
    initQuiz(); // Vuelve a mezclar y elegir otras 30
}

// Arrancar
initQuiz();