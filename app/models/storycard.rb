class Storycard < ActiveRecord::Base
  has_many :items, through: :storycard_items
  has_many :storycard_items

  has_many :removable_items, through: :storycard_removable_items, class_name: "Item"
  has_many :storycard_removable_items, foreign_key: :removable_storycard_id

  has_many :parents, through: :parent_choices, source: :parent
  has_many :parent_choices, foreign_key: :child_id, class_name: "Choice"

  has_many :children, through: :child_choices, source: :child
  has_many :child_choices, foreign_key: :parent_id, class_name: "Choice"
end
