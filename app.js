const express = require('express');
const app = express();


//루트로 요청이 오면
/* app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/users', (req, res) => {
  res.json({
    title:'good',
    author: 'lee'
  });
});

app.get('/users/kim', (req, res) => {
  const rtnJson = {
    title: 'good',
    author: 'kim'
  }
  res.json(rtnJson);
}); */

//직원 전체 보기 RestAPI
app.get('/employess', (req, res) => {
  const emps = [
    {
      _id: 1,
      name: 'kim',
      team: 'dev',
      salary: 120000000
    },
    {
      _id: 2,
      name: 'lee',
      team: 'dev',
      salary: 85000000
    },
    {
      _id: 3,
      name: 'park',
      team: 'op',
      salary: 90000000
    },
  ];
   res.json(emps);
});

//직원 상세 보기
app.get('/eployees/:empId', (req, res) => {

});

//직원 등록
app.post('/employess', (req, res) => {

});

//직원 수정
app.put('/employees', (req, res) => {

});

//직원 삭제
app.delete('/employees/:empId', (req, res) => {

});
app.listen(3000, () => {
  console.log('server ready of 3000');
});