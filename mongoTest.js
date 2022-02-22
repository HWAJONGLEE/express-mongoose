const { MongoClient, ServerApiVersion } = require('mongodb');
const properties = require('./properties');

const MONGO_URI = properties.getMongoURI();
const dbURI = MONGO_URI + '/basemongo?retryWrites=true&w=majority';

const client = new MongoClient(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  if (err) throw err;
  const coll = client.db("sample_mflix").collection("movies");
  
  //test 용 쿼리 정리
  const testFilterObj = {
    or : { $or: [{ year: 2000 }, { year: 2001 }]},
    in : { year: { $in: [2000, 2001] }},
    imdb : { imdb: { rating: 6.4 }},
    test : { rating: 6.4 },
    cast : {cast:'Leonardo DiCaprio'}
  }

  const filterQuery = testFilterObj.cast;
  const options = { title : 0 } // select title form movies 원하는 컬럼만 조회 가능

  coll
    .find(filterQuery, options)
    .limit(10)
    .toArray((err, docs) => {
      if (err) throw err;

      //docs type Array
      docs.forEach((doc) => {
        console.log(doc);
      });

      client.close();
    })
});
