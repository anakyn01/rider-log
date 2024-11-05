import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const AlertSetting = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <p className="fs-16 fw-700 mt-50">알림 설정</p>
      <div className="d-flex justify-content-between align-items-center h-54 mt-30 mb-30">
      <div className="">
                <p className="fs-16 fw-500">하위 조직에서 발생한 모든 사고 받기<br/>
                <span className="fs-14 Color77787b">※ 담당자가 없는 하위 조직에서 사고가 발생한 경우,<br/>
                설정 여부와 관계없이 사고 알림을 발송합니다</span>   
                </p>
            </div>



        <div className="form-check form-switch fs-28">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
       </div>

       <div className=" bgf7f7f7 p-3 rounded-3">
            <div className="">
                <p className="fs-16 fw-500">추가 알림 수단<br/><span className="fs-14 Color77787b">수신 설정하신 알림을 문자 또는 카카오 채널로 <br/> 받아보실 수 있습니다.</span></p>              
            </div>

            <div className="d-flex justify-content-between mt-10">
            <div className="form-check d-flex align-items-center">
            <input type="radio" className="form-check-input bg-success" id="radio1" name="optradio" value="option1" checked/>
            <label className="form-check-label fs-14 fw-500" htmlFor="radio1">없음</label>
            </div>
            <div className="form-check mx-3 d-flex align-items-center">
            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>
            <label className="form-check-label fs-14 fw-500" htmlFor="radio2">문자</label>
            </div>
            <div className="form-check d-flex align-items-center">
            <input type="radio" className="form-check-input"/>
            <label className="form-check-label fs-14 fw-500">카카오 채널</label>
            </div>
            </div>

            <hr className="mt-10 mb-10"/>

            <p className="mt-10 mb-10">일반</p>
            <div className="d-flex justify-content-between">
                <p className="fs-16 fw-400 Color77787b">사고발생 알림</p>
                

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-20">
            <p className="fs-16 fw-500">심야 시간에 사고 알림 받기<br/><span className="fs-14 Color77787b">※ 심야 시간: 오후 9시부터 다음 날 오전 9시</span> </p>
                

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>

            <hr className="mt-10 mb-10"/>

            <p className="mt-10 mb-10">일반</p>

            <div className="d-flex justify-content-between mt-20">
                <p className="fs-16 fw-400 Color77787b">사고발생 알림</p>
                

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-20">
                <p className="fs-16 fw-400 Color77787b">사고 조치 등록 알림</p>
                

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-20">
                <p className="fs-16 fw-400 Color77787b">사고 조치 완료 알림</p>
                

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-20">
                <p className="fs-16 fw-400 Color77787b">비고 등록 알림</p>
                

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-20">
                <p className="fs-16 fw-400 Color77787b">원복 감지 알림</p>
                

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-20 mb-10">
            <p className="fs-16 fw-500">심야 시간에 사고 알림 받기<br/><span className="fs-14 Color77787b">※ 심야 시간: 오후 9시부터 다음 날 오전 9시</span> </p>
                
            
                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>
        </div>
       
        


 

    

   







      </div>
      <MobileFooter/>
</>
    );
}
export default AlertSetting