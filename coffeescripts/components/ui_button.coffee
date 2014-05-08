###
# UIButton
###

Components = @Components = @Components ? {}

UIButton = React.createClass {
  displayName: "UIButton"
  render: ->
    React.DOM.button {}, "Hello"
}

Components.UIButton = UIButton
