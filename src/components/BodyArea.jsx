import '../styles/BodyArea.css'
import { LeftmenuZone } from './LeftmenuZone'
import { ContentsZone } from './ContentsZone'


export function BodyArea() {
  return (
    <div id="bodyArea">
      <LeftmenuZone/>
      <ContentsZone/>
    </div>
  )
}

