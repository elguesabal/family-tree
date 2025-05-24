const family = [
    // {  tagFather: "tag-pai", name: "nome", kinship: "parentesco", id: "id", text: "frase" },

    {  tagFather: "line1-left", name: "Antonio", kinship: "grandfather", id: "line1-left1", text: "Antonio is my grandfather on my father's side." },
    {  tagFather: "line1-left", name: "???", kinship: "grandmother", id: "line1-left2", text: "??? is my grandmother on my father's side." },
    {  tagFather: "line1-right", name: "José", kinship: "grandfather", id: "line1-right1", text: "José is my grandfather on my mother's side." },
    {  tagFather: "line1-right", name: "???", kinship: "grandmother", id: "line1-right2", text: "??? is my grandmother on my mother's side."},

    {  tagFather: "line2-left", name: "Jaime", kinship: "uncle", id: "line2-left1", text: "Jaime is my uncle on my father's side." },
    {  tagFather: "line2-left", name: "Carlos", kinship: "uncle", id: "line2-left2", text: "Carlos is my uncle on my father's side." },
    {  tagFather: "line2-left", name: "???", kinship: "aunt", id: "line2-left3", text: "??? is my aunt on my father's side." },
    {  tagFather: "line2-left", name: "Julio", kinship: "father", id: "line2-left4", text: "Julio is my father." },
    {  tagFather: "line2-right", name: "Theresa", kinship: "mother", id: "line2-right1", text: "Theresa is my mother."},
    {  tagFather: "line2-right", name: "Marcos", kinship: "uncle", id: "line2-right2", text: "Marcos is my uncle on my mother's side." },

    {  tagFather: "line3-left", name: "Alessandra", kinship: "half-sister", id: "line3-left1", text: "Alessandra is my half-sister on my father's side." },
    {  tagFather: "line3-left", name: "Renata", kinship: "half-sister", id: "line3-left2", text: "Renata is my half-sister on my father's side." },

    {  tagFather: "line3-middle", name: "José", kinship: "my", id: "line3-middle1", text: "It's me! José." },

    {  tagFather: "line3-right", name: "???", kinship: "cousin", id: "line3-right1", text: "??? is my cousin on my mother's side." },

    {  tagFather: "line4-left", name: "Sarah", kinship: "niece", id: "line4-left1", text: "Sarah is my niece on my father's side." },
    {  tagFather: "line4-left", name: "Isabela", kinship: "niece", id: "line4-left2", text: "Isabela is my niece on my father's side." }
];

function person(name, degreeOfKinship, id) {
    return (`
        <button class="flex flex-col border border-gray-500 text-gray-700 text-sm px-2 py-1 rounded sm:16 lg:w-32 sm:text-xs lg:text-sm hover:bg-gray-100 cursor-pointer transition duration-500 ease-in-out" id="${id}">
            <span>${name}</span>
            <span>${degreeOfKinship}</span>
        </button>
    `);
}

family.forEach((member) => {
    document.getElementById(member.tagFather).innerHTML += person(member.name, member.kinship, member.id);
});

family.forEach((member) => {
    document.getElementById(member.id).addEventListener("click", () => {
        document.getElementById("detail").innerText = member.text;
        document.getElementById("kinship-detail").classList.toggle("hidden");
    });
});

document.getElementById("kinship-detail").addEventListener("click", () => {
    document.getElementById("kinship-detail").classList.toggle("hidden");
});