export function hitungHuruf(teks) {
  if (typeof teks !== "string") return 0;

  const hurufOnly = teks.match(/[a-z]/gi);
  return hurufOnly ? hurufOnly.length : 0;
}

export function hitungKata(teks) {
  if (typeof teks !== "string") return 0;

  const kataOnly = teks.match(/\b[a-zA-Z]+\b/g);
  return kataOnly ? kataOnly.length : 0;
}