class AddLonlatToLocations < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :lonlat, :st_point, geographic: true
  end
end
