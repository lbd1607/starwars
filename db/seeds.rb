# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Character.create(name: 'Luke Skywalker', homeplanet: 'Tatooine', weapon: 'lightsaber, green')

Character.create(name: 'Leia Organa', homeplanet: 'Alderaan', weapon: 'blaster rifle')

Character.create(name: 'Han Solo', homeplanet: 'Corellia', weapon: 'blaster')

Character.create(name: 'Chewbacca', homeplanet: 'Kashyyyk', weapon: 'bowcaster')

Character.create(name: 'R2-D2', homeplanet: 'Naboo', weapon: 'shock arm')

Character.create(name: 'C3P0', homeplanet: 'Tatooine', weapon: 'none')

Character.create(name: 'Darth Vader', homeplanet: '?', weapon: 'lightsaber, red')
