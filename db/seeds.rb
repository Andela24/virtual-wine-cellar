# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'Angela', password: 'angela')
 Winery.create([ {name: 'Argyle Winery'}, {name: 'Willamette Valley Vineyards'}, {name: 'Elk Cove Vinayards'}, {name: 'Rex Hills'}])
 Bottle.create(title: 'Vampire', wine_type: 'Red', grape_variety: 'Cabarnet Franc', vintage: '2016',user_id:4, winery_id:2 )


