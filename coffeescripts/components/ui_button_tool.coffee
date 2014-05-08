###
# UIButton Tool
#
# A ui tool for button
###

Mixins = @Mixins = @Mixins ? {}
Components = @Components = @Components ? {}

UIButtonTool = React.createClass {
  mixins: [Mixins.UITool]
  displayName: "ButtonTool"
  componentType: "UIButton"
}

Components.UIButtonTool = UIButtonTool
