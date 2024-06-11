let usuario;
const aleatorio = Math.floor(Math.random() * 200 + 1);

console.log("Adivinhe um número");
process.stdin.on("data", function (data) {
  usuario = Number(data.toString().trim());
  if (usuario == aleatorio) {
    console.log("O seu número está correto");
  } else if (usuario != aleatorio) {
    console.log("O seu número não está correto, tente outra vez.");
  }
});
