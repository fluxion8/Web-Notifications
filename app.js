const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.use(express.json()) 

app.use('/public', express.static(path.join(__dirname, 'public')))

let subInfo=""


const webPush = require("web-push");
const vapidKeys = {
  publicKey: "BKzZVuQH6nXRCJ5tx_-PQ9UUAKyg-WUyc-Xzl1Rsj4HqT_7IK0TjAkRGLao6rKGsbC2oe67GLlgKliuc0Bkaw0c",
  privateKey: "y4sqmuohkw5fRGWZSr8m9pgk69jUVhX9cyCF_bWVrug",
};
webPush.setVapidDetails("https://swiftcrm.com/", vapidKeys.publicKey, vapidKeys.privateKey);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})


app.post('/sendNotification', (req, res) => {



    webPush.sendNotification(subInfo, "Hello");
    res.send('POST request to the notification')
  });
app.post('/saveSubInfo', (req, res) => {

    console.log(req.body)
    subInfo = req.body
    
    res.send(req.body)
  });
app.listen(port);
