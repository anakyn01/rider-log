
const Alert1 = () => {
    return(
<>
<div className="d-flex justify-content-center w-1656">
    <div className="content">
    <div className="d-flex justify-content-between align-items-center my-4 w-1512 flex-column">
        <div className="text-center mb-67">
            <p className="myTitle">알림 설정</p>
            <p className="fs-16 Color77787b">Mac OS에서는 알림 기능이 정상 동작하지 않을 수 있습니다.</p>
        </div>

        
        <div className="d-flex justify-content-between border-bottom border-2 w-560 h-85">
            <div className="">
                <p className="fs-16 fw-400 Color77787b">일반<br/><span className="fs-16 fw-500">운휴 차량 발생 알림</span></p>
                   
            </div>
       
            <div className="form-check form-switch fs-28">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
        </div>

        <div className="d-flex justify-content-between border-bottom w-560 h-85 align-items-center ">

                <p className="fs-16 fw-400 Color77787b">심야 시간에 일반 알림 받기<br/><span className="fs-16">※ 심야 시간: 오후 9시부터 다음 날 오전 9시</span></p>                

            <div className="form-check form-switch fs-28">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
        </div>

        <div className="d-flex justify-content-between border-bottom border-2 w-560 py-3  flex-column h-264">
            <div className="d-flex justify-content-between w-1512">
                <p className="fs-16 fw-400 Color77787b">사고<br/><span className="fs-16 fw-500 mt-10">사고발생 알림</span></p>
                

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
            </div>

            <div className="d-flex justify-content-between w-560">
                <p className="fs-16 fw-500">사고 조치 등록 알림</p> 

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
            </div>

            <div className="d-flex justify-content-between w-560">
                <p className="fs-16 fw-500">사고 조치 완료 알림</p> 

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
            </div>

            <div className="d-flex justify-content-between w-560">
                <p className="fs-16 fw-500">비고 등록 알림</p> 

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
            </div>

            <div className="d-flex justify-content-between w-560">
                <p className="fs-16 fw-500">원복 감지 알림</p> 

                <div className="form-check form-switch fs-28">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
            </div>

        </div>

        <div className="d-flex justify-content-between border-bottom w-560 align-items-center h-106">
            <div className="">
                <p className="fs-16 fw-500">하위 조직에서 발생한 모든 사고 받기<br/>
                <span className="fs-14 Color77787b">※ 담당자가 없는 하위 조직에서 사고가 발생한 경우,<br/>
                설정 여부와 관계없이 사고 알림을 발송합니다</span>   
                </p>
            </div>

            <div className="form-check form-switch fs-28">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
        </div>

        <div className="d-flex justify-content-between border-bottom border-2 w-560 h-88 align-items-center">
            <div className="">
                <p className="fs-16 fw-500">심야 시간에 사고 알림 받기<br/><span className="fs-14 Color77787b">※ 심야 시간: 오후 9시부터 다음 날 오전 9시</span> </p>
                  
            </div>

            <div className="form-check form-switch fs-28">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
        </div>

        <div className="d-flex justify-content-between border-bottom border-2 w-560 align-items-center h-108">
            <div className="">
                <p className="fs-16 fw-500">추가 알림 수단<br/><span className="fs-14 Color77787b">수신 설정하신 알림을 문자 또는<br/> 카카오 채널로 받아보실 수 있습니다.</span></p>
                
            </div>

            <div className="d-flex">
            <div className="form-check d-flex align-items-center">
            <input type="radio" className="form-check-input" />
            <label className="form-check-label fs-16 fw-400" htmlFor="radio1">없음</label>
            </div>
            <div className="form-check d-flex align-items-center mx-3">
            <input type="radio" className="form-check-input" />
            <label className="form-check-label fs-16 fw-400" htmlFor="radio2">SMS</label>
            </div>
            <div className="form-check d-flex align-items-center">
            <input type="radio" className="form-check-input"/>
            <label className="form-check-label fs-16 fw-400">카카오 채널</label>
            </div>
            </div>
        </div>

</div>
    </div>

</div>


</>
    );
}
export default Alert1;