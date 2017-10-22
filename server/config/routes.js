var players = require('../controllers/players.js');
const path = require('path');

module.exports = function(app) {
    app.get('/players',players.show);
    app.post('/players',players.create);
    app.delete('/players/:id', players.remove);
    app.put('/players/:id', players.update);
    app.all("*", (req,res, next) => {
        res.sendFile(path.resolve("./team-manager/dist/index.html"));
    });
}