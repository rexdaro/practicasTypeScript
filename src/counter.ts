export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


type Persona = {
  nombre: string;
  edad: number;
};

const presentarPersonas = (personas: Persona[]): string[] => {
  return personas.map((persona) => `${persona.nombre} tiene ${persona.edad} años.`);
};

const grupo = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 35 },
  { nombre: "Lucas", edad: 28 }
];

presentarPersonas(grupo).map((frase) => console.log(frase));

const grupo2: Persona[] = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 17 },
  { nombre: "Lucas", edad: 28 },
  { nombre: "julia", edad: 18 },
]

const filtrarMayores = (personas: Persona[]): Persona[] => {
  return personas.filter((persona) => persona.edad >= 18 )
};


console.log(filtrarMayores(grupo2));