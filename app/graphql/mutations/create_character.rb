class Mutations::CreateCharacter < Mutations::BaseMutation
    argument :name, String, required: true
    argument :homeplanet, String, required: true
    argument :weapon, String, required: true

    field :character, Types::CharacterType, null: false
    field :errors, [String], null: false

    def resolve(name:,homeplanet:,weapon:)
        character = Character.new(name: name, homeplanet: homeplanet, weapon: weapon)

        if (character.save) 
            {
                character: character,
                errors: []
            }
            else
            {
                character: nil,
                errors: character.errors.full_messages
            }
        end
    end
end

=begin 
mutation {
  createCharacter(
    input: {name: "Anakin Skywalker", homeplanet: "Tatooine", weapon: "lightsaber"}
  ) {
    character {
      id
      name
      homeplanet
      weapon
    }
    errors
  }
} 
=end