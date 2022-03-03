class Location < ApplicationRecord

def to_feature
  feature = {
              'type': 'geojson',
              'data': {
                'type': 'Feature',
                'geometry': {
                  'type': 'Polygon',
                  'coordinates':
                     quadrilatere&.coordinates
                }
              }
            }
  return feature
end



end
