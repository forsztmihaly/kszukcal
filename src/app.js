/*
File: app.js
Author: Forszt Mihály
Copyright: 2022, Forszt Mihály
Group: Szoft I/2/E
Date: 2022-04-05
Github: https://github.com/forsztmihaly
Licenc: GNU GPL
*/

const testZsirInput = document.querySelector("#testZsir");
const testTomegInput = document.querySelector("#testTomeg");
const kaloriaOutput = document.querySelector("#kaloria");
const szamitasGomb = document.querySelector("#szamitas");

szamitasGomb.addEventListener("click", () => {
  let testZsirSzazalek = Number(testZsirInput.value);
  let testTomeg = Number(testTomegInput.value);
  let osszKaloria = 370 + 21.6 + Math.abs(1 - testZsirSzazalek) * testTomeg;
  kaloriaOutput.value = osszKaloria;
});