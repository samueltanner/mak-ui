"use strict";
const readline = require("readline");
const fs = require("fs");
const path = require("path");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const question1 = "Do you have a Tailwind configuration file? (yes/no): ";
const question2 = "Please enter the path to your tailwind.config.js or tailwind.config.ts: ";
rl.question(question1, (answer) => {
    if (answer.toLowerCase() === "yes") {
        rl.question(question2, (tailwindConfigPath) => {
            const config = { tailwindConfigPath };
            fs.writeFileSync(path.join(__dirname, "user-config.json"), JSON.stringify(config));
            console.log("Configuration saved.");
            rl.close();
        });
    }
    else {
        console.log("No Tailwind configuration specified.");
        rl.close();
    }
});
