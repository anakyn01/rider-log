import RiderMark from "../../svg/riderMark";
export default function Danger() {
    return (
        <>

  <div className="danger p-4 border-box" id="danger">
    <div className="">

    <div className="d-flex justify-content-between align-items-center mb-20">
        <h4 className="driving-title">강남구점</h4>
        <button type="button" className="btn-close"></button>
    </div>

    <div className="">
            <span className="text-danger fs-20 fw-700 mb-10">
                <span className="mr-2"><RiderMark/></span>
                사고</span>

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
                <button className="w142red">
                    차량정보확인
                </button>
            </div>

            <div className="d-flex justify-content-between mb-10">
                <p className="fs-20 fw-700">
                    김별따
                    <div className="driving-title-gray">01012345678</div>
                </p>
                <button className="w142red">
                    운전자정보확인
                </button>
            </div>

            <div className="mt-20">
                <button className="red52">주행 이력 확인</button>
            </div>

        </div>

        

    </div>
    </div>

      
        </>
    );
}

