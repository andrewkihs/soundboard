# Load the Rails application.
require_relative 'application'

# conver to camelCase
Jbuilder.key_format camelize: :lower

# Initialize the Rails application.
Rails.application.initialize!
