function person(name, degreeOfKinship, id) {
    return (`
        <button class="flex flex-col border border-gray-500 text-gray-700 text-sm px-2 py-1 rounded sm:16 lg:w-32 sm:text-xs lg:text-sm hover:bg-gray-100 cursor-pointer transition duration-500 ease-in-out" id="${id}">
            <span>${name}</span>
            <span>${degreeOfKinship}</span>
        </button>
    `);
}

const family = [
    // "tag-pai", "nome", "parentesco", "id", "frase"

    [ "line1-left", "nome", "grandfather", "line1-left1", "frase" ],
    [ "line1-left", "nome", "grandmother", "line1-left2", "frase" ],
    [ "line1-right", "nome", "grandfather", "line1-right1", "frase" ],
    [ "line1-right", "nome", "grandmother", "line1-right2", "frase" ],

    [ "line2-left", "nome", "uncle", "line2-left1", "frase" ],
    [ "line2-left", "nome", "uncle", "line2-left2", "frase" ],
    [ "line2-left", "nome", "aunt", "line2-left3", "frase" ],
    [ "line2-left", "nome", "father", "line2-left4", "frase" ],
    [ "line2-right", "nome", "mother", "line2-right1", "frase" ],
    [ "line2-right", "nome", "uncle", "line2-right2", "frase" ],

    [ "line3-left", "nome", "half-sister", "line3-left1", "frase" ],
    [ "line3-left", "nome", "half-sister", "line3-left2", "frase" ],

    [ "line3-middle", "José", "my", "line3-middle1", "frase" ],

    [ "line3-right", "nome", "cousin", "line3-right1", "frase" ],

    [ "line4-left", "nome", "niece", "line4-left1", "frase" ],
    [ "line4-left", "nome", "niece", "line4-left2", "frase" ]
];

family.forEach((member) => {
    document.getElementById(member[0]).innerHTML += person(member[1], member[2], member[3]);
    document.getElementById(member[3]).addEventListener("click", () => {
        alert(member[4]);
    });
});

// document.getElementById("line1-left").innerHTML += person("vampeta", "grandfather");
// document.getElementById("line1-left").innerHTML += person("vampeta", "grandmother");

// document.getElementById("line1-right").innerHTML += person("vampeta", "grandfather");
// document.getElementById("line1-right").innerHTML += person("vampeta", "grandmother");


// document.getElementById("line2-left").innerHTML += person("vampeta", "uncle");
// document.getElementById("line2-left").innerHTML += person("vampeta", "uncle");
// document.getElementById("line2-left").innerHTML += person("vampeta", "aunt");
// document.getElementById("line2-left").innerHTML += person("vampeta", "father");

// document.getElementById("line2-right").innerHTML += person("vampeta", "mother");
// document.getElementById("line2-right").innerHTML += person("vampeta", "uncle");


// document.getElementById("line3-left").innerHTML += person("vampeta", "half-sister");
// document.getElementById("line3-left").innerHTML += person("vampeta", "half-sister");

// document.getElementById("line3-middle").innerHTML += person("vampeta", "my");

// document.getElementById("line3-right").innerHTML += person("vampeta", "cousin");


// document.getElementById("line4-left").innerHTML += person("vampeta", "niece");
// document.getElementById("line4-left").innerHTML += person("vampeta", "niece");