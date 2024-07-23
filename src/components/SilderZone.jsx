import { useState, useEffect } from 'react'

import '../styles/SilderZone.css'
import left_btnImg from '../img/left_btn.png'
import right_btnImg from '../img/left_btn.png'
import slider1 from '../img/1.jpg'
import slider2 from '../img/2.jpg'
import slider3 from '../img/3.jpg'



export function SliderZone() {
    const [currentIndex, setCurrentIndex] = useState(1)
    const sliders = [slider1, slider2, slider3]
    const handleArrowClick = (direction) => {
        let _index = currentIndex + direction
        if (_index < 0) {
            _index = 0
        } else if (_index > sliders.length -1){
            _index = sliders.length -1
        }
        setCurrentIndex(_index)
    }

    useEffect (
        () => {
            const interval = setInterval(
                () => {
                    setCurrentIndex((idx) => (idx + 1) % sliders.length)
                }, 3000
            )
            return () => clearInterval(interval)
        }, [sliders.length]
    )
  return (
   
// <!-- 슬라이더Zone시작 -->
    <div id="sliderZone">
        <div id="sub_photo_bg">
    {/* // $sliderPanel.css('left', `-${index * 100}%`); */}
        <ul className="slider_panel"
        style = {{left:`-${currentIndex * 100}%`}}>
            {
                sliders.map(
                    (slider, index) => (
                        <li key = {index} className="slider_image"><img src={slider} alt=""/></li>
                    )
                )
            }
            {/* <li className="slider_image"><img src={slider1}/></li>           
            <li className="slider_image"><img src={slider2}/></li>
            <li className="slider_image"><img src={slider3}/></li> */}
        </ul>
        <div className="control_panel">
            {
                sliders.map((slider, index) => {
                    return (
                        <div className={`control_btn ${currentIndex === index ? 'active' : ''}`} 
                             onClick = {() => setCurrentIndex(index)}></div>
                    )
                })
            }
            {/* <div className={`control_btn ${currentIndex === 0 ? 'active' : ''}`} 
            onClick = {() => setCurrentIndex(0)}></div>
            <div className={`control_btn ${currentIndex === 1 ? 'active' : ''}`} 
            onClick = {() => setCurrentIndex(1)}></div>
            <div className={`control_btn ${currentIndex === 2 ? 'active' : ''}`} 
            onClick = {() => setCurrentIndex(2)}></div> */}
        </div>
        <div className="direct_btn">
            <div className="left_btn" onClick = {() =>handleArrowClick(-1)}><img src={left_btnImg}/></div>
            <div className="right_btn" onClick = {() =>handleArrowClick(1)}><img src={right_btnImg}/></div>
        </div>
        </div>
    </div>
// <!-- 슬라이더Zone끝 --> 

  )
}

    
//             <script>
//                 $(function(){
//                     const $sliderPanel = $('.slider_panel');
//                     const $controlBtns = $('.control_btn');
//                     const $leftBtn     = $('.left_btn img');
//                     const $rightBtn    = $('.right_btn img');

//                     let currentIndex = 0;
//                     function updateSlider(index){
//                         $sliderPanel.css('left', `-${index * 100}%`);
//                         $controlBtns.removeClass('active');
//                         $controlBtns.eq(index).addClass('active');
//                     }

//                     $leftBtn.on('click',function(){
//                         currentIndex--;
//                         if(currentIndex<0){
//                             currentIndex=0;
//                         }
//                         updateSlider(currentIndex);
//                     });
//                     $rightBtn.on('click', function(){
//                         currentIndex++;
//                         if(currentIndex>2){
//                             currentIndex=2;
//                         }
//                         updateSlider(currentIndex);
//                     });

//                     $controlBtns.on('click',function(){
//                         currentIndex = parseInt($(this).data('index'));
//                         updateSlider(currentIndex);

//                     });
//                     setInterval(function(){
//                         currentIndex=(currentIndex+1) % $controlBtns.length;
//                         updateSlider(currentIndex);
//                     }, 3000);
//                 });
//             </script>