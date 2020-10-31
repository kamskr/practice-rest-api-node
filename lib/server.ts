import app from "./config/app"
import env from "./environment";

const PORT = env.getPort();

app.listen(PORT, () => {
    console.log("Express server running on port: " + PORT);
})