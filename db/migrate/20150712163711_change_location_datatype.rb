class ChangeLocationDatatype < ActiveRecord::Migration
  def change
    change_column :locations, :lat,  :string
    change_column :locations, :lng,  :string
  end
end
