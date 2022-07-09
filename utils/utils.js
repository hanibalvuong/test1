const fs = require('fs');

function readFileJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath));
}

function writeTextFile(filePath, data) {
  fs.writeFileSync(filePath, data, (err) => {
    console.error(err);
  });
}

function readTextFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  readFileJSON,
  writeTextFile,
  readTextFile,
};
