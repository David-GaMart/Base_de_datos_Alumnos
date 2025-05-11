
let login = document.querySelector("#login");
let registrationForm = document.querySelector("#registrationForm");
let board = document.getElementById("bodyBoard");
let career = document.getElementById("registrationCareer");
let studentClass = document.getElementById("registerClass");
let registrationClass = document.getElementById("enrollClass");
let studentScore = document.getElementById("registerScore");


const registerUsers = [
    {
        username:"daGarcia",
        password:"daGar2025",
        fullName:"David Garcia"
    },
    {
        username:"frGarcia",
        password:"frGar2025",
        fullName:"Frine Garcia"
    }
];

const carreras = {
"Ingenieria en Ciencia de Datos": [
    "Fundamentos de Estadística Aplicada",
    "Minería y Limpieza de Datos",
    "Modelos Predictivos y Regresión",
    "Big Data y Sistemas Distribuidos",
    "Visualización de Datos e Inteligencia de Negocios"
],
"Inteligencia en Inteligencia Artificial": [
    "Redes Neuronales y Deep Learning",
    "Fundamentos de Aprendizaje Automático",
    "Procesamiento de Lenguaje Natural",
    "Ética y Sesgos en Inteligencia Artificial",
    "Sistemas Expertos y Agentes Inteligentes"
],
"Ingenieria en Ciberseguridad": [
    "Criptografía y Seguridad de la Información",
    "Arquitectura de Seguridad en Redes",
    "Hacking Ético y Pruebas de Penetración",
    "Gestión de Riesgos y Respuesta a Incidentes",
    "Legislación y Cumplimiento en Seguridad Digital"
],
"Ingenieria en Desarrollo de Software y Apoptioncaciones": [
    "Ingeniería de Requisitos y Modelado UML",
    "Desarrollo Web Full Stack",
    "Programación Orientada a Objetos",
    "Pruebas de Software y Control de Calidad",
    "DevOps y Entrega Continua"
],
"Ingenieria en Internet de las Cosas (IoT)": [
    "Arquitectura y Protocolos de IoT",
    "Diseño de Sistemas Embebidos",
    "Sensores y Actuadores Inteligentes",
    "Conectividad y Computación en la Nube",
    "Ciberseguridad para IoT"
],
"Ingenieria en Robotica y Automatizacion": [
    "Fundamentos de Robótica",
    "Controladores Lógicos Programables (PLCs)",
    "Mecánica y Cinemática de Robots",
    "Automatización Industrial 4.0",
    "Visión por Computadora y Navegación Autónoma"
],
"Desarrollo de Videojuegos y Realidad Extendida": [
    "Diseño Narrativo y Experiencia del Jugador",
    "Motores Gráficos (Unity/Unreal Engine)",
    "Programación de Juegos y Física Interactiva",
    "Realidad Aumentada y Realidad Virtual",
    "Arte Digital, Animación y Modelado 3D"
],
"Ingenieria en Energias Renovables y Sostenibilidad": [
    "Fundamentos de Energía Solar y Fotovoltaica",
    "Sistemas Eólicos y de Biomasa",
    "Gestión Energética y Eficiencia",
    "Diseño de Redes Inteligentes (Smart Grids)",
    "Impacto Ambiental y Normativas Internacionales"
]
};

const verifyLogin  = (username, password) =>{
    for(let i = 0; i < registerUsers.length; i++){
        if(username === registerUsers[i].username && password == registerUsers[i].password){
            return i;
        };
    };
    return registerUsers.length + 1;
};

const formHandler = (event) => {
    event.preventDefault();
    let messageDiv = document.querySelector("#login-message");
    console.log(username.value,password.value);
    let numberUser = parseInt(verifyLogin(username.value,password.value));
    if(numberUser <= registerUsers.length){
        messageDiv.innerHTML = `<h1>Bienvenido ${registerUsers[numberUser].fullName}</h1>`;
    }else{
        messageDiv.innerHTML = `<h3>El usuario o contraseña son incorrectos</h3>`;
    }
};

class alumno{
    constructor (nombre,apellidos,edad,carrera,materias,calificaciones){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
        this.carrera=carrera;
        this.materias=materias;
        this.calificaciones=calificaciones;
    }

    toJSON(){
        return{
            nombre: this.nombre,
            apellidos: this.apellidos,
            edad: this.edad,
            carrera: this.carrera,
            materias: this.materias,
            calificaciones: this.calificaciones
        }
    }
};

const alumnos = []; 


// Cargar usuarios desde localStorage al iniciar
    window.addEventListener("DOMContentLoaded", () => {
        const guardados = JSON.parse(localStorage.getItem("usuarios")) || [];
        guardados.forEach(data => {
            let usuario;
            usuario = new alumno(data.nombre,data.apellidos,data.edad,data.carrera,data.materias,data.calificaciones);
            alumnos.push(usuario);
            });
            addToBoard();
        });


const register = (e) =>{
    e.preventDefault();

    const nombre = document.getElementById("name").value;
    const apellidos = document.getElementById("lastName").value;
    const edad = document.getElementById("age").value;
    const carrera = "";
    const materias = "";
    const calificaciones = "";
    console.log(nombre,apellidos,edad,carrera,materias,calificaciones);
    let nuevoAlumno;
    nuevoAlumno = new alumno(nombre,apellidos,edad,carrera,materias,calificaciones);
    alumnos.push(nuevoAlumno);
    saveLocalStorage();
    addToBoard();
    console.log(alumnos);
    
    registrationForm.reset();
};


function saveLocalStorage() {
    const serializados = alumnos.map(u => u.toJSON());
    localStorage.setItem("usuarios", JSON.stringify(serializados));
};

function addToBoard(){
    console.log("se añade a addToBoard");
    let addToTable = document.getElementById("bodyBoard");
    let htmlBoard = "";
    for(let i = 0; i < alumnos.length; i++){
        htmlBoard += `
        <tr>
        <td>${alumnos[i].nombre}</td>
        <td>${alumnos[i].apellidos}</td>
        <td>${alumnos[i].edad}</td>
        <td>${alumnos[i].carrera}</td>
        <td>${alumnos[i].materias}</td>
        <td>${alumnos[i].calificaciones}</td>
        </tr>`;
        addToTable.innerHTML = htmlBoard;
    }
};

const regisCareer = (e) => {
    let addToSelection = document.getElementById("registerSubjets");
    let selection = registrationCareer.value;
    
    addToSelection.innerHTML = `
        <option value="0">${carreras[selection][0]}</option>
        <option value="1">${carreras[selection][1]}</option>
        <option value="2">${carreras[selection][2]}</option>
        <option value="3">${carreras[selection][3]}</option>
        <option value="4">${carreras[selection][4]}</option>
        `;

};


const registerButton = (e) =>{
    e.preventDefault();
    let selectionCareer = registrationCareer.value;
    let selectionSubjets = registerSubjets.value;
    let className = document.getElementById("registrationClassName");
    let classLastName = document.getElementById("registrationClassLastName");
    let messageDiv = document.getElementById("classMessage");
    for(let i = 0; i < alumnos.length; i++ ){
        if(className.value == alumnos[i].nombre && classLastName.value == alumnos[i].apellidos){
            alumnos[i].carrera = selectionCareer;
            alumnos[i].materias = carreras[selectionCareer][selectionSubjets];
            saveLocalStorage();
            addToBoard();
            registrationClass.reset();
            messageDiv.innerHTML = `<p>Los cambios se registraron con exito!!</p>`;
            return alumnos;
        }
    }
    return messageDiv.innerHTML = `<p>El nobre del alumno a registrar es incorrecto, por favor reviselo antes de continuar</p>`;
};

const scoreButton = (e) =>{
    e.preventDefault();
    let score = parseInt(registrationScore.value);
    let className = document.getElementById("registrationScoreName");
    let classLastName = document.getElementById("registrationScoreLastName");
    let messageDiv = document.getElementById("scoreMessage");
    for(let i = 0; i < alumnos.length; i++ ){
        if(className.value == alumnos[i].nombre && classLastName.value == alumnos[i].apellidos){
            alumnos[i].calificaciones = score;
            saveLocalStorage();
            addToBoard();
            scoreForm.reset();
            messageDiv.innerHTML = `<p>Los cambios se registraron con exito!!</p>`; 
            return alumnos;
        }
    }
    return messageDiv.innerHTML = `<p>El nobre del alumno a registrar es incorrecto, por favor reviselo antes de continuar</p>`; 
}

login.addEventListener("submit", (event) => formHandler(event));
registrationForm.addEventListener("submit", (e) => register(e));
career.addEventListener("change", (e) => regisCareer(e));
studentClass.addEventListener("click", (e) => registerButton(e));
studentScore.addEventListener("click", (e) => scoreButton(e));