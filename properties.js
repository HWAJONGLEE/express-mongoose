const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('test.properties');

module.exports = {
  getMongoURI() {
    return properties.get("com.mongoDB.URI");
  }
}