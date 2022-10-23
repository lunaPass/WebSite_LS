import  express, { response }  from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();
const PORT = 3310;
app.use(express.static("public"));
/*np
app.get("/contato", (request, response) => {
  response.sendFile(path.resolve(path.join(__dirname, '/public/contato.html')));
})
*/
 
app.listen(PORT,() => console.log(`Server is running on Port ${PORT}`));