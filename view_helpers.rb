module ViewHelpers
  def config
    data ||= YAML.load_file(File.join(File.dirname(__FILE__), "config.yml"))
    data
  end

  def enable_analytics?
    config['analytics']['enabled']
  end

  def analytics_code
    config['analytics']['code']
  end

  def bower_component(name)
    javascript_include_tag "/bower_components/#{name}"
  end

  def load_component(name)
    javascript_include_tag "components/#{name}"
  end

  def load_mixin(name)
    javascript_include_tag "mixins/#{name}"
  end
end
