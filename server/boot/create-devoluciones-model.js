module.exports = function(app) {
    
    if(process.env.AUTOMIGRATE == 'true') {
        //data sources
        var mysqlDs = app.dataSources.mysqlDs;
        var db = app.dataSources.db;

          mysqlDs.automigrate('Devoluciones', function(err) {
            if (err) throw(err);

          });
          db.automigrate(null, function(err) {
            if (err) throw(err);

          });
          mysqlDs.autoupdate('Clientes', function(err){
            if (err) throw(err);
          });
    }
};
