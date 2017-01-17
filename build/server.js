'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import config from 'config.local';
var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('dev'));

//fix this later...
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('app listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map