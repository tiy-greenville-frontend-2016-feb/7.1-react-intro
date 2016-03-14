var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./models');
var IcecreamList = require('./components/list.jsx');


var flavors = new models.IcecreamCollection();
flavors.add([
    {'name': 'Chocolate', upVotes: 10, totalVotes: 25}
    , {'name': 'Vinilla', upVotes: 5, totalVotes: 20}
    , {'name': 'Peanut Butter', upVotes: 50, totalVotes: 85}
    , {'name': 'Strawberry', upVotes: 30, totalVotes: 55}
  ]);

ReactDOM.render(
  <IcecreamList collection={flavors}/>,
  document.getElementById('app')
);

// ============================================================
// ============= DEMO HELPERS =================================
// ============================================================
function randomizeVotes(){
    flavors.each(function(model){
      var numUpVotes = _.random(0, 10);
      var numTotalVotes = _.random(numUpVotes, 10);

      var newUp = model.get("upVotes") + numUpVotes;
      var newTot = model.get("totalVotes") + numTotalVotes;

      model.set({'upVotes': newUp, 'totalVotes': newTot});
    });
  }

  setInterval(randomizeVotes, 3000);
