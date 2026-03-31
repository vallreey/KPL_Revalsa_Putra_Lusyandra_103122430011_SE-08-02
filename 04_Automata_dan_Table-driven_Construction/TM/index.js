const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const smallLetterElement = document.getElementById("hk");
const hurufBesarBtn = document.getElementById("huruf-besar");
const hurufKecilBtn = document.getElementById("huruf-kecil");

const buttonDarkElement = document.getElementById("tombol-gelap");
const buttonLightElement = document.getElementById("tombol-terang");
const buttonSepiaElement = document.getElementById("tombol-sepia");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    charCountElement.textContent = text.length;

    let jumlahKecil = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'a' && text[i] <= 'z') jumlahKecil++;
    }
    smallLetterElement.textContent = jumlahKecil;
});

hurufBesarBtn.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
});

hurufKecilBtn.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
});

buttonLightElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap");
    document.documentElement.classList.remove("mode-sepia");
});

buttonDarkElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-sepia");
    document.documentElement.classList.add("mode-gelap");
});

buttonSepiaElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap");
    document.documentElement.classList.add("mode-sepia");
});