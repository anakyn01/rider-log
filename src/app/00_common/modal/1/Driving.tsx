import RiderMarkGreen from "../../svg/riderMarkGreen";
export default function Driving() {
    return (
        <>

  <div className="driving p-4 border-box" id="driving">
    <div className="modal-content">

    <div className="d-flex justify-content-between align-items-center mb-20">
        <h4 className="driving-title">별따러 가자</h4>
        <button type="button" className="btn-close"></button>
    </div>

    <div className="">
            <span className="text-success fs-20 fw-700 mb-10">
                <span className="mr-2"><RiderMarkGreen/></span>
                주행중</span>

                <div className="d-flex mt-2">
                    <p className="driving-title-gray">현재 속도</p>
                    <p className="mx-3 fs-14">10km/h</p>
                </div>
                <div className="d-flex mt-2 mb-20">
                    <p className="driving-title-gray">현재 위치</p>
                    <p className="mx-3 fs-14">서울특별시 서초구 매헌로 16<br/><span className="text-secondary">위도 37.46226 / 경도 127.036787</span></p>
                </div>
            <div className="d-flex justify-content-between mt-10 mb-10">
                <p className="fs-20 fw-700">
                    서울가1234
                    <div className="driving-title-gray">KMHDL41BP8A000001</div>
                </p>
                <button className="w142green">
                    차량정보확인
                </button>
            </div>

            <div className="d-flex justify-content-between mb-10">
                <p className="fs-20 fw-700">
                    김별따
                    <div className="driving-title-gray">01012345678</div>
                </p>
                <button className="w142green">
                    운전자정보확인
                </button>
            </div>

            <div className="mt-20">
                <button className="green52">주행 이력 확인</button>
            </div>

        </div>

        

    </div>
    </div>

      
        </>
    );
}

