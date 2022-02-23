const express = require('express');
const mongoose = require('mongoose');
const app = express();

//미들웨어 morgan
const morgan = require('morgan');

//샘플데이터
const Employee = require('./models/employee')
// combined, dev
app.use(morgan('dev'));

//express json parser
app.use(express.json());

//미들웨어 이후에 dbconnect 를 하는것이 이상적인 코드 방식
const properties = require('./properties');
const MONGO_URI = properties.getMongoURI() + '/basemongo?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true
};

mongoose.connect(MONGO_URI, options)
  .then((connData) => {
    console.log('connect ok ...');
  })
  .catch((err) => {
    console.log('connect fail...', err);
  })



/* mongoose.connect(MONGO_URI, options, (err) => {
  if (err) console.log('err : ', err);
  console.log('connection ok...');
}); */


//직원 전체 보기 RestAPI
app.get('/employees', (req, res) => {
  Employee.find({})
    .exec((err, doc) => {
      res.send(doc);
  });
});

//직원 상세 보기
app.get('/employees/:empId', (req, res) => {
  const empId = req.params.empId;

  Employee.findOne({ _id: empId })
    .exec((err, doc) => {
      res.send(doc);
  });
});

//직원 등록
app.post('/employees', (req, res) => {
  const emp = req.body;
  console.log(emp);
  Employee.create(emp, (err, saved) => {
    if (err) console.log('err', err);
    res.send(emp);
  });
});

//직원 수정
app.put('/employees', (req, res) => {
  const emp = req.body;
  const empUdata = {
    name: emp.name,
    team: emp.team,
    salary: emp.salary
  }
  Employee.findByIdAndUpdate(emp._id, empUdata, (err) => {
    if (err) res.send(err);
    else res.send(emp);
  });
});

//직원 삭제
app.delete('/employees/:empId', (req, res) => {
  Employee.findByIdAndDelete({_id : req.params.empId}).exec((err, success) => {
    if (err) res.send(err);
    else res.send('delete ok....');
  });
});

app.listen(3000, () => {
  console.log('server ready of 3000');
});