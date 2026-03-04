const kotaDikunjungi = ["Jakarta", "Bandung", "Surabaya"];

kotaDikunjungi.unshift("Medan");
kotaDikunjungi.push("Yogyakarta");
kotaDikunjungi.pop();
// kotaDikunjungi.reverse();
kotaDikunjungi.splice(0, 1);
kotaDikunjungi[1] = "Banjarnegara";
console.log(kotaDikunjungi);