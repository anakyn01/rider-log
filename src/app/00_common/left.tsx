import Icon1 from "./svg/nav/Icon1";
import Icon2 from "./svg/nav/Icon2";
import Icon3 from "./svg/nav/Icon3";
import Icon4 from "./svg/nav/Icon4";
import Icon5 from "./svg/nav/Icon5";
import Icon6 from "./svg/nav/Icon6";


export default function Lnb() {
  return (
    <>
<div className="pc w-264 left-nav" id="accordionSidebar accordionExample">

<div id="accordion" className="accordion accordion-flush">

  <div className="accordion-item border-0">
    <div className="accordion-header border-0 bgfdfdfd">
      <a className="fs-16 fw-700 text-decoration-none" data-bs-toggle="collapse" href="#collapseOne">
        <div className="d-flex align-items-center h-48">
          <div className="w-32"><Icon1/></div><div className="">대쉬보드</div>
        </div>
      </a>
    </div>
    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
      <div className="">
      <a className="collapse-item" href="http://localhost:3000/06_dash/00_dash/1">대쉬보드</a>
      </div>
    </div>
  </div>

  <div className="accordion-item border-0">
    <div className="accordion-header border-0 bgfdfdfd">
      <a className="collapsed fs-16 fw-700 text-decoration-none" data-bs-toggle="collapse" href="#collapseTwo">
      <div className="d-flex align-items-center h-48">
          <div className="w-32"><Icon2/></div><div className="">차량현황</div>
        </div>
      </a>
    </div>
    <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
      <div className="">

        <a className="collapse-item" href="http://localhost:3000/06_dash/01_map/1">실시간 지도</a>
        <a className="collapse-item" href="http://localhost:3000/06_dash/02_accident">사고 현황</a>

      </div>
    </div>
  </div>

  <div className="accordion-item border-0">
    <div className="accordion-header border-0 bgfdfdfd ">
      <a className="collapsed fs-16 fw-700 text-decoration-none" data-bs-toggle="collapse" href="#collapseThree">
      <div className="d-flex align-items-center h-48">
          <div className="w-32"><Icon3/></div><div className="">소속관리</div>
        </div>
      </a>
    </div>
    <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
      <div className="">

                        <a className="collapse-item" href="http://localhost:3000/06_dash/03_orgar">조직 관리</a>
                        <a className="collapse-item" href="http://localhost:3000/06_dash/04_car">차량 관리</a>
                        <a className="collapse-item" href="http://localhost:3000/06_dash/05_driver">운전자 관리</a>

      </div>
    </div>
  </div>

  <div className="accordion-item border-0">
    <div className="accordion-header border-0 bgfdfdfd">
      <a className="collapsed fs-16 fw-700 text-decoration-none" data-bs-toggle="collapse" href="#collapseFour">
        <div className="d-flex align-items-center h-48">
          <div className="w-32"><Icon4/></div><div className="">주행정보</div>
        </div>
      </a>
    </div>
    <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
      <div className="">

                        <a className="collapse-item" href="http://localhost:3000/06_dash/07_rate">주행 정보</a>
                        <a className="collapse-item" href="http://localhost:3000/06_dash/07_rate/1">주행 통계</a>
                        <a className="collapse-item" href="http://localhost:3000/06_dash/07_rate/2">주행 이력</a>

      </div>
    </div>
  </div>

  <div className="accordion-item border-0">
    <div className="accordion-header border-0 bgfdfdfd">
      <a className="collapsed fs-16 fw-700 text-decoration-none" data-bs-toggle="collapse" href="#collapseFive">
         <div className="d-flex align-items-center h-48">
          <div className="w-32"><Icon5/></div><div className="">환경설정</div>
        </div>
        </a>
    </div>
    <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
      <div className=" ">

            <a className="collapse-item" href="http://localhost:3000/06_dash/08_board">대시보드 설정</a>
            <a className="collapse-item" href="http://localhost:3000/06_dash/08_board/2">알림 설정</a>
            <a className="collapse-item" href="http://localhost:3000/06_dash/08_board/3">내 정보</a>
            <a className="collapse-item" href="http://localhost:3000/06_dash/08_board/4">보안 센터</a>

      </div>
    </div>
  </div>

  <div className="accordion-item border-0">
    <div className="accordion-header border-0 bgfdfdfd">
      <a className="collapsed fs-16 fw-700 text-decoration-none" data-bs-toggle="collapse" href="#collapseSix">
        <div className="d-flex align-items-center h-48">
          <div className="w-32"><Icon6/></div><div className="">고객지원</div>
        </div>     
      </a>
    </div>
    <div id="collapseSix" className="collapse" data-bs-parent="#accordion">
      <div className="">

        <a className="collapse-item" href="http://localhost:3000/06_dash/09_custom">고객지원</a>
        <a className="collapse-item" href="http://localhost:3000/06_dash/09_custom/2">공지사항</a>
        <a className="collapse-item" href="http://localhost:3000/06_dash/09_custom/3">이용방법</a>
        <a className="collapse-item" href="http://localhost:3000/06_dash/09_custom/4">자주 묻는 질문</a>
        <a className="collapse-item" href="http://localhost:3000/06_dash/09_custom/5">문의 하기</a>
        <a className="collapse-item" href="http://localhost:3000/06_dash/09_custom/6">약관 및 정책</a>

      </div>
    </div>
  </div>

</div>

</div>
    </>
  );
}
