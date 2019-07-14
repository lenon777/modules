var DBconnection = (function () {
  var uniqueConection;
  function createConnection(driver, username, password, URL) {
    var uniqueConnection = new Object();
    uniqueConnection.driver = driver;
    uniqueConnection.username = username;
    uniqueConnection.password = password;
    uniqueConnection.URL = URL;

    return uniqueConnection;
  }
  return {
    setConnection: function (driver, username, password, URL) {
      if (!uniqueConection) {
        uniqueConection = createConnection(driver, username, password, URL);
      }
      return uniqueConection;
    }
  }

}());
var sql = DBconnection.setConnection("sqlDriver", "zorro", "zorro124", "http://www.zorro.com");
var mongo = DBconnection.setConnection("mongoDriver", "transformer", "transformer124", "http://www.transformer.com");
console.log(sql === mongo); //true