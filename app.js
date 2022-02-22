const express = require('express');
const app = express();


//루트로 요청이 오면
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/users', (req, res) => {
  res.json({
    title:'good',
    author: 'lee'
  });
});

app.get('/users/kim', (req, res) => {
  res.json({
    title: 'good',
    author: 'kim'
  });
});

app.listen(3000, () => {
  console.log('server ready of 3000');
});