// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const fs = require('fs');
// // const path = require('path');

// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // app.use(bodyParser.json());
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.post('/saveLogin', (req, res) => {
// //     const { username, password } = req.body;

// //     // Save credentials to logins.txt
// //     const logins = `${username}:${password}\n`;
// //     fs.appendFile('logins.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
// //         if (err) {
// //             res.json({ success: false });
// //         } else {
// //             res.json({ success: true });
// //         }
// //     });
// // });

// // app.listen(PORT, () => {
// //     console.log(`Server running on http://localhost:${PORT}`);
// // });
// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const fs = require('fs');
// // const path = require('path');

// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // app.use(bodyParser.json());
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.post('/api/saveLogin', (req, res) => {
// //     const { username, password } = req.body;
// //     fs.appendFile('logins.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
// //         if (err) {
// //             res.status(500).json({ success: false, message: 'Internal Server Error' });
// //         } else {
// //             res.status(200).json({ success: true, message: 'Login data saved successfully' });
// //         }
// //     });
// // });

// // app.listen(PORT, () => {
// //     console.log(`Server running on http://localhost:${PORT}`);
// // });
// c

const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route to serve the content of the data.txt file
app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
