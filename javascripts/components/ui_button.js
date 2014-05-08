/*
# UIButton
*/


(function() {
  var Components, UIButton, _ref;

  Components = this.Components = (_ref = this.Components) != null ? _ref : {};

  UIButton = React.createClass({
    displayName: "UIButton",
    render: function() {
      return React.DOM.button({}, "Hello");
    }
  });

  Components.UIButton = UIButton;

}).call(this);
