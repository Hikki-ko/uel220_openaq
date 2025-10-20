const http = require("http"); // Appel au modul natif http

// Création du serveur et de sa fonction de réponse aux requêtes
const server = http.createServer((requete, result) => {
  result.statusCode = 200;
  result.setHeader("Content-Type", "text/html");
  result.end("Coucou, je suis votre serveur web !");
  console.log(requete.method + "" + requete.url);
  console.log("" + requete.headers["user-agent"]);
});

const hostname = "127.0.0.5"; // Déclaration de l'adresse IP du serveur
const port = 1000; // Déclaration du numéro du port du serveur web

// Lancement de l'écoute du serveur
server.listen(port, hostname, () => {
  console.log(
    `ᓚᘏᗢ Serveux web NODE.JS lancé à l'adresse http://${hostname}:${port}/`
  );
});
