const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const smallLetterElement = document.getElementById("hk");

const hurufBesarBtn = document.getElementById("huruf-besar");
const hurufKecilBtn = document.getElementById("huruf-kecil");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;

    charCountElement.textContent = text.length;

    let jumlahKecil = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'a' && text[i] <= 'z') {
            jumlahKecil++;
        }
    }

    smallLetterElement.textContent = jumlahKecil;
});

hurufBesarBtn.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
});

hurufKecilBtn.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
});