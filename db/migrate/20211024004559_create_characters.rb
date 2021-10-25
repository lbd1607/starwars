class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :homeplanet
      t.string :weapon
      t.[] :friends

      t.timestamps
    end
  end
end
