const fs = require('fs');
let content = fs.readFileSync('js/materi.js', 'utf8');

// The faulty string used in Bab 2 and Bab 3
const badString1 = "bg-gradient-to-br from-secondary to-secondary-container p-10 rounded-[3rem] text-on-secondary-container shadow-lg flex flex-col md:flex-row items-center gap-8 mb-12";
const badString2 = "bg-gradient-to-br from-secondary to-secondary-container p-10 rounded-[3rem] text-on-secondary-container shadow-lg flex flex-col md:flex-row items-center gap-8";

// The better contrasting string
const goodString = "bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col md:flex-row items-center gap-8 mb-12";
const goodString2 = "bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col md:flex-row items-center gap-8";

// Additional fix for inner circle
const textOnSec = "text-on-secondary-container shadow-lg";

let newContent = content.replaceAll(badString1, goodString)
                        .replaceAll(badString2, goodString2);

fs.writeFileSync('js/materi.js', newContent, 'utf8');
console.log('Fixed contrast for summary blocks.');
