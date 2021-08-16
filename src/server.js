// instancia da class App chamando a função lista para subir o servidor na porta
// desejada
const app = require("./app");
app.listen(8080, () => {
  console.log("Serviço rodando na porta 8080!");
});
