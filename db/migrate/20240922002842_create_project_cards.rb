class CreateProjectCards < ActiveRecord::Migration[7.0]
  def change
    create_table :project_cards do |t|
      t.string :title
      t.string :image
      t.text :description
      t.string :github_link
      t.string :modal_image
      t.text :modal_description

      t.timestamps
    end
  end
end
