/*
# UIButton Tool
#
# A ui tool for button
*/


(function() {
  var Components, Mixins, UIButtonTool, _ref, _ref1;

  Mixins = this.Mixins = (_ref = this.Mixins) != null ? _ref : {};

  Components = this.Components = (_ref1 = this.Components) != null ? _ref1 : {};

  UIButtonTool = React.createClass({
    mixins: [Mixins.UITool],
    displayName: "ButtonTool",
    componentType: "UIButton"
  });

  Components.UIButtonTool = UIButtonTool;

}).call(this);
