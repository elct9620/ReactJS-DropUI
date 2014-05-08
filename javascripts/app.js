/*
# Main APP
*/


(function() {
  var Components, phoneContainer, toolbox, _ref;

  Components = this.Components = (_ref = this.Components) != null ? _ref : {};

  phoneContainer = document.querySelector("#phone-container");

  toolbox = document.querySelector("#component-view");

  React.renderComponent(Components.Phone(), phoneContainer);

  React.renderComponent(Components.UIButtonTool(), toolbox);

}).call(this);
