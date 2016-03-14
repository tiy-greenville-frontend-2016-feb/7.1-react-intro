var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./models');

var IcecreamItem = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <li>{this.props.model.get("name")}: {this.props.model.popularity()}</li>
    )
  }
});

var IcecreamList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var flavorList = this.props.collection.map(function(model){
      return (
        <IcecreamItem model={model} key={model.get('name')}/>
      );
    });

    return (
      <ul className="flavors">
        {flavorList}
      </ul>
    )
  }
});

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
