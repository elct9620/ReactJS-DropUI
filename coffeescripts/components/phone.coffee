###
# Phone Component
#
# The base container for place objects
###

Mixins = @Mixins = @Mixins ? {}
Components = @Components = @Components ? {}

Phone = React.createClass {
  displayName: "Phone"
  mixins: [Mixins.Container]
}

Components.Phone = Phone
