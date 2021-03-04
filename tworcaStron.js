const human = {
    name: 'Tom',
    surname: 'Kowalski',
    sayName() {
        console.log(`My name is ${this.name}`);
    },
    sayFullName(surname) {
        console.log(`My name is ${this.name} ${this.surname ? this.surname : surname}`); // w tej metodzie jest dodatkowe zabiezpieczenie: jeżeli kontekstem wywołania będzie obiekt human, który będzie miał właściwość 'surname', to wyświetli się this.surname nawet jeżeli podamy dodatkowy argument, jeżeli nie to metoda skorzysta z przekazanego parametru 
    }
}

const personA = {
    name: 'Artur',
}

// call()
human.sayName.call(personA)  //to wywołanie mówi: "użyj funkcji z obiektu human, ale jako kontekstu użyj obiekt personA - dzięki temu wykonsoluje nam: Artur"

// apply() - 'zastosuj' - tę metodę stosujemy jeżeli chcemy oprócz kontekstu wywołania podać jeszcze dodatkowe argumenty (podajemy je jako tablica nawet jak jest tylko jeden):
human.sayFullName.apply(personA, ['Nowak']); //Artur Nowak
human.sayFullName(); //Tom Kowalski

// bind() - działa na podobnej zasadzie co apply, ale dodatkowych parametrów nie zapisujemy w tablicy, a kolejno po sobie. CO ISTOTNE w przypadku bind musi też być dodatkowe wywołanie! można np. przypisać ją do nowej zmiennej i tą zmienną wywołać- tak będzie czytelniej
human.sayFullName.bind(personA, "Kowalewski")();
const personAData = human.sayFullName.bind(personA, 'InnySposób');
personAData();

// NIE DZIAŁA TO NA FUNKCJI STRZAŁKOWEJ, ponieważ nie tworzy ona kontekstu