/**
 * Lazy load icon libraries on demand
 * This reduces initial bundle size by only loading icon sets when needed
 */

let materialIconsLoaded = false
let pe7IconsLoaded = false
let typiconsLoaded = false
let weatherIconsLoaded = false
let ioniconsLoaded = false
let remixIconLoaded = false
let featherIconsLoaded = false
let leafletCSSLoaded = false

export const loadMaterialIcons = () => {
  if (!materialIconsLoaded) {
    import('material-icons/css/material-icons.min.css')
    materialIconsLoaded = true
  }
}

export const loadPe7Icons = () => {
  if (!pe7IconsLoaded) {
    import('pe7-icon/dist/dist/pe-icon-7-stroke.css')
    pe7IconsLoaded = true
  }
}

export const loadTypicons = () => {
  if (!typiconsLoaded) {
    import('typicons.font/src/font/typicons.css')
    typiconsLoaded = true
  }
}

export const loadWeatherIcons = () => {
  if (!weatherIconsLoaded) {
    import('weathericons/css/weather-icons.css')
    weatherIconsLoaded = true
  }
}

export const loadIonicons = () => {
  if (!ioniconsLoaded) {
    import('ionicons-npm/css/ionicons.css')
    ioniconsLoaded = true
  }
}

export const loadRemixIcon = () => {
  if (!remixIconLoaded) {
    import('remixicon/fonts/remixicon.css')
    remixIconLoaded = true
  }
}

export const loadFeatherIcons = () => {
  if (!featherIconsLoaded) {
    import('@/assets/css/feather.css')
    featherIconsLoaded = true
  }
}

export const loadLeafletCSS = () => {
  if (!leafletCSSLoaded) {
    import('leaflet/dist/leaflet.css')
    leafletCSSLoaded = true
  }
}
