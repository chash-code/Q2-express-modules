const fs = require('fs');

// Function to read file content
function readFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return data;
  } catch (error) {
    return `Error reading file: ${error.message}`;
  }
}

// Export the function
module.exports = { readFile };
