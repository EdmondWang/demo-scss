const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res, next) {
    const options = {
      root: path.join(__dirname, 'pages'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    };

    const fileName = 'index.html';

    res.sendFile(fileName, options, (err) => {
      if (err) {
        next(err);
      } else {
        console.log('Sent:', fileName);
      }
    });

  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
