json.array!(@locations) do |location|
  json.extract! location, :id, :name, :description, :lat, :lng
  json.url location_url(location, format: :json)
end
