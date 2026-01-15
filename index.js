const express = require('express');
const os = require('os');
const dns = require('dns');
const { readFile } = require('./read');

const app = express();
const PORT = 3000;

// Route 1: Test route
app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

// Route 2: Read file
app.get('/readfile', (req, res) => {
  const content = readFile('Data.txt');
  res.send(content);
});

// Route 3: System details
app.get('/systemdetails', (req, res) => {
  const systemInfo = {
    platform: os.platform(),
    totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
    cpuModel: os.cpus()[0].model
  };
  res.json(systemInfo);
});

// Route 4: Get IP address
app.get('/getip', (req, res) => {
  dns.lookup('masaischool.com', (err, address) => {
    if (err) {
      res.json({ error: err.message });
    } else {
      res.json({
        hostname: 'masaischool.com',
        ipAddress: address
      });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
