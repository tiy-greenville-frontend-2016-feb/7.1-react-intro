var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var IcecreamItem = require('./detail.jsx');

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

module.exports = IcecreamList;
