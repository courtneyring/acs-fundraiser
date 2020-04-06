import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map=CanvasMap({
  textContainer:document.querySelector('.text'),
  mapSrc:'img/test2.svg',
  trailVisitedColor:'#02DBB4',
  fontPresentColor:'#5D5C56',
}).appendTo('.container')
