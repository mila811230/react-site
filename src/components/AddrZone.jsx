import '../styles/AddrZone.css'

export function AddrZone () {
  return (
    // <!-- 주소Zone시작 -->
    <div id="addrZone">
        <div class="addr">
            <div class="addrinfo">
                <h4>About Us</h4>
                <address>상호명 : 000캠핑장&nbsp;&nbsp; 주소 : 경기도 00군 000읍 000-00 &nbsp;&nbsp; 
                        전화번호 : <span class="eng_num bold">070-0000-0000</span><br/>
                        대표 : 000 &nbsp;&nbsp; 사업자번호 : <span class="eng_num bold">000-0000-0000</span> &nbsp;&nbsp; 통신판매업번호 :
                    <span class="eng_num bold">000-0000-0000</span><br/>
                    개인정보책임자 : 000 &nbsp;&nbsp; 이메일 : <span class="eng_num bold">000000@0000.000</span>
                </address>

            </div>
            <div class="addrinfo">
                <h4>Customer</h4>
                <address>전화번호 : <span class="eng_num bold">070-0000-0000</span> &nbsp;&nbsp; 휴대폰번호 : <span
                        class="eng_num bold">010-0000-0000</span><br/>
                    계좌번호 : <span class="bold">농협</span> <span class="eng_num bold">000-0000-0000 000</span> <span
                        class="bold">예금주 : 000</span></address>    
            </div>
            <ul class="addrinfo">
                <h4>SNS link</h4>
                <li><a href="#" title="페이스북"><i class="fa fa-facebook-square fa-2x"></i></a></li>
                <li><a href="#" title="유튜브"><i class="fa fa-youtube-square fa-2x"></i></a></li>
                <li><a href="#" title="인스타그램"><i class="fa fa-instagram fa-2x"></i></a></li>
            </ul>

        </div>
    </div>
    // <!-- 주소Zone끝 --> 
  )
}