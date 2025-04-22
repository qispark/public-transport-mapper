// Import ArcGIS map components
import '@arcgis/map-components/components/arcgis-map'
import '@arcgis/map-components/components/arcgis-legend'
import '@arcgis/map-components/components/arcgis-search'

export default function App() {
  return (
    <arcgis-map
      item-id="b9745d4721fc46c0901f104b828f6f2c"
      onarcgisViewReadyChange={event => {
        console.log('MapView ready', event)
      }}
    >
      <arcgis-search position="top-right"></arcgis-search>
      <arcgis-legend position="bottom-left"></arcgis-legend>
    </arcgis-map>
  )
}
