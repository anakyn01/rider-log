
import DashModal from "../../modal/8/DashModal";
import Add from "../../toast/8/Add";

const Dash2 = () => {
    return(
<>
<div className="d-flex justify-content-center w-1656">
    <div className="content">
    <div className="d-flex justify-content-between align-items-center my-4 w-1512">

<div className="">
    <h4 className="fs-18 fw-700 ">대시보드 설정</h4>
    <div className="fs-16 Color77787b fw-500">
    * 대시보드에서 표시할 콘텐츠를 설정할 수 있습니다.<br/>
    * 대시보드 콘텐츠는 4개 이상이어야 합니다.<br/>
    * 대시보드 콘텐츠를 드래그하여, 위치를 변경할 수 있습니다.<br/>
    * 공지사항과 계약 현황은 삭제 또는 변경할 수 없습니다.<br/>
    </div>
</div>   

<Add/>

<div className="">
    <button className="w-240 h-56 btn btn-success mainBtn h-56 rounded-3" data-bs-toggle="modal" data-bs-target="#dashModal">
<span className="mr-10">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.625 6.875C10.625 6.52982 10.3452 6.25 10 6.25C9.65482 6.25 9.375 6.52982 9.375 6.875V9.375H6.875C6.52982 9.375 6.25 9.65482 6.25 10C6.25 10.3452 6.52982 10.625 6.875 10.625H9.375V13.125C9.375 13.4702 9.65482 13.75 10 13.75C10.3452 13.75 10.625 13.4702 10.625 13.125V10.625H13.125C13.4702 10.625 13.75 10.3452 13.75 10C13.75 9.65482 13.4702 9.375 13.125 9.375H10.625V6.875Z" fill="white"/>
</svg>
</span>
대시보드 콘텐츠 추가하기
    </button>
</div>

</div>

<div className="d-flex justify-content-between align-items-center my-4 w-1512">
<div className="w-746 h-236 border border-1 p-3">
    <div className="d-flex justify-content-between align-items-center w-706 my-2">
        <h6 className="fs-18 fw-700">공지사항</h6>
        <a href="#" className="a-link fs-18 text-dark">더보기</a>
    </div>
    <table className="table table-borderless w-746">
        <colgroup>
        <col style={{width:"7%"}}/>
        <col style={{width:"78%"}}/>
        <col style={{width:"15%"}}/>
        </colgroup>
        <thead>

        </thead>
        <tbody>
            <tr>
                <td className="fs-16 text-left fw-400 Color77787b">공지</td>
                <td>라이더로그 차량 관제 시스템 서버 작업 안내</td>
                <td className="text-secondary">2024-04-23</td>
            </tr>
            <tr>
                <td className="text-secondary">공지</td>
                <td>라이더로그 차량 관제 시스템 서버 작업 안내</td>
                <td className="text-secondary">2024-04-23</td>
            </tr>
            <tr>
                <td className="text-secondary">공지</td>
                <td>라이더로그 차량 관제 시스템 서버 작업 안내</td>
                <td className="text-secondary">2024-04-23</td>
            </tr>
            <tr>
                <td className="text-secondary">공지</td>
                <td>라이더로그 차량 관제 시스템 서버 작업 안내</td>
                <td className="text-secondary">2024-04-23</td>
            </tr>
        </tbody>
    </table>
</div>

<div className="w-746 h-236 border border-1 p-3">
    <div className="d-flex justify-content-between align-items-center w-706 my-2">
        <h6 className="fs-18 fw-700">계약정보</h6>
        
    </div>
    <table className="table table-borderless w-746">
        <colgroup>
        <col style={{width:"15%"}}/>
        <col style={{width:"70%"}}/>
        <col style={{width:"15%"}}/>
        </colgroup>
        <thead>

        </thead>
        <tbody>
            <tr>
                <td className="text-secondary">계약자명</td>
                <td></td>
                <td className="">별따러가자</td>
            </tr>
            <tr>
                <td className="text-secondary">계약자명</td>
                <td></td>
                <td className="">별따러가자</td>
            </tr>
            <tr>
                <td className="text-secondary">계약자명</td>
                <td></td>
                <td className="">별따러가자</td>
            </tr>
            <tr>
                <td className="text-secondary">계약자명</td>
                <td></td>
                <td className="">별따러가자</td>
            </tr>
        </tbody>
    </table>
</div>
</div>

<div className="d-flex justify-content-between align-items-center my-4 w-1512">
<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">이번주 운행 가동률</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>

<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">올해 주행 리포트</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>
</div>

<div className="d-flex justify-content-between align-items-center my-4 w-1512">
<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">올해 평균 안전 점수</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>

<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">이번달 사고 발생 건수</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>
</div>

<div className="d-flex justify-content-between align-items-center my-4 w-1512">
<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">이번주 운행 가동률</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>

<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">올해 주행 리포트</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>
</div>

<div className="d-flex justify-content-between align-items-center my-4 w-1512">
<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">올해 평균 안전점수</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>

<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">이번달 사고 발생 건수</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>
</div>

<div className="d-flex justify-content-between align-items-center my-4 w-1512">
<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">조직별 평균 안전점수 순위</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>

<div className="w-746 h-340 window d-flex justify-content-center align-items-center rounded-3 flex-column">
    <p className="text-white fs-32">이번달 차량별 주행 순위</p>
    <button className="btn btn-danger w-120 h-48">삭제하기</button>
</div>
</div>

<DashModal/>
    </div>
</div>
</>
    );
}
export default Dash2;