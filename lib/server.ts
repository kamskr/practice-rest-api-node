import app from "./config/app"
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Express server running on port: " + PORT);
})