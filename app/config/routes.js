var React = require("react");

// Include the react-router module
var router = require("react-router");

var Route = router.Route;

var IndexRoute = router.IndexRoute;

var Router = router.Router;

var browserHistory = router.browserHistory;

var Layout = require("../components/Layout");
var Home = require("../components/Home");
var Add = require("../components/Add");

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>

      <Route path="Home" component={Home} />
      <Route path="Add" component={Add} />
      <IndexRoute component={Home} />

    </Route>
  </Router>
);