const express = require("express");
const app = express();
const port = 3000;

// #region CORS implementation

// setting to allow pre-flight requests
/**Un pre-flight request es cuando desde la aplicacion cliente
 * se realizara una solicitud cross-origin compleja y se envia
 * primero una solicitud llamada pre-flight con el proposito de
 * checkear cuales con las caracteristicas del servidor para ver
 * si esta habilitado para recibir la solicitud http compleja
 * NOTE: Relacionadas a la politica de CORS del navegador
 * Cuando el browser realiza una solicitud cross origin por defecto
 * no incluye ninguna informacion de cookie que pueda ser utilizada
 * para sesiones ni ningun otro proposito, para que lo haga es necesario
 * involucrar una propiedad llamada 'withCredentials' con valor a 'true'
 * lo cual activa la capacidad de enviar cookies junto con la solicitud
 * luego analiza la respuesta y si el Header 'Access-Control-Allow-Origin'
 *  tiene el valor '*' (wildcard) o si 'Access-Control-Allow-Credentials' no es true
 * el browser bloqueara el acceso a la informacion del response y notifiicara
 * en el console que se ha violado la politica CORS con una correspondiente
 * explicacion
 */
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:4200",
  credentials: true,
};

app.options("*", cors(corsOptions));

// allow all CORS requests
app.use(cors(corsOptions));

// #endregion

// #region Serve static files middleware
app.use(express.static("assets"));
// #endregion

// #region End Points
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/product", (req, res) => {
  // create dummy product for testing purpose
  var dummyProduct = {
    id: "123423412",
    name: "Fall limited edition sneakers",
    images: [
      "images/image-product-1.jpg",
      "images/image-product-2.jpg",
      "images/image-product-3.jpg",
      "images/image-product-4.jpg",
    ],
    description: `these low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.`,
    price: 125,
    oldPrice: 250,
  };

  console.log("Object sent to client");

  // return to client the dummy product
  res.json(dummyProduct);
});
// #endregion

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
