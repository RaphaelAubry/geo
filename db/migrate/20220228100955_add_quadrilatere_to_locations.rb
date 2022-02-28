class AddQuadrilatereToLocations < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :quadrilatere, :st_polygon, geographic: true
  end
end
