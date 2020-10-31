"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const PORT = 3000;
app_1.default.listen(PORT, () => {
    console.log("Express server running on port: " + PORT);
});
