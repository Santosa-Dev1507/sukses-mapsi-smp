const fs = require('fs');

const content = fs.readFileSync('js/data.js', 'utf8');

// We will use eval to load the arrays. We can wrap the whole file in a block and add module.exports = {quizData2024, quizData2025}.
// But data.js doesn't have an export. Let's just create a temporary file.

const code = content + '\n\nfs.writeFileSync("q24.json", JSON.stringify(quizData2024.slice(0,10), null, 2)); fs.writeFileSync("q25.json", JSON.stringify(quizData2025.slice(0,10), null, 2));';
fs.writeFileSync('temp_run.js', code);
