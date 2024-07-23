import { TitleZone } from './TitleZone'
import { MenuZone } from './MenuZone'
import { SliderZone } from './SilderZone'

export function TopArea({setLeftMenu}) {
  return (
   
    // <!-- 상단Area시작 -->
    <div id="topArea">
      <TitleZone/>
      <MenuZone setLeftMenu = {setLeftMenu}/>
      <SliderZone/>
    </div>
  //  <!-- 상단Area끝 -->
  )
}
  
//             
//         </div>

