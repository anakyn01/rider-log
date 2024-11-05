import Head1 from "../../table/four_1";
import InputCal from "../../input/InputCalender";
import T2 from "../../table/t2";
import CenterPagenation from "../../pagenation/centerPagenation";

const Ac6 = () => {
    return(
<>
<div className="d-flex justify-content-between h-26 my-3">
    <div className="d-flex">
    <h6 className="fw-bold h-26 fs-18 mr-3">사고 상세</h6>
    <button className="btn btn-outline-danger h-26 w-114 fs-12 line13"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.375C4.27513 3.375 3.6875 3.96263 3.6875 4.6875C3.6875 5.41237 4.27513 6 5 6C5.72487 6 6.3125 5.41237 6.3125 4.6875C6.3125 3.96263 5.72487 3.375 5 3.375ZM2.8125 4.6875C2.8125 3.47938 3.79188 2.5 5 2.5C6.20812 2.5 7.1875 3.47938 7.1875 4.6875C7.1875 5.89562 6.20812 6.875 5 6.875C3.79188 6.875 2.8125 5.89562 2.8125 4.6875Z" fill="#DB121A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00033 1.1875C2.95773 1.1875 1.35449 2.72544 1.35449 4.5599C1.35449 6.2573 2.42671 8.25068 4.49464 10.6232C4.76298 10.9311 5.23767 10.9311 5.50601 10.6232C7.57394 8.25068 8.64616 6.2573 8.64616 4.5599C8.64616 2.72544 7.04292 1.1875 5.00033 1.1875ZM0.479492 4.5599C0.479492 2.18606 2.53259 0.3125 5.00033 0.3125C7.46806 0.3125 9.52116 2.18606 9.52116 4.5599C9.52116 6.59657 8.25526 8.8007 6.16562 11.1982C5.54855 11.9061 4.4521 11.9061 3.83503 11.1982C1.74539 8.8007 0.479492 6.59657 0.479492 4.5599Z" fill="#5D5E60"/>
</svg>사고 위치 확인</button>
    </div>
    
    <div className="toast show rounded-5 h-48 bg-secondary">
    <div className="toast-body text-center">
      <p className="text-white">비고 등록이 완료 되었습니다</p>
    </div>

  </div>

  <div className="w-107"></div>
</div>
<h6 className="mb-3 fw-bold">운전자 정보</h6>

<table className="table table-custom-40-left w-1512 h-396">
    <thead></thead>
    <tbody>
        <tr className="h-40">
            <th >조직명</th><td className="w-536">강남구점</td>
            <th >내외국인</th><td className="w-536">내국인</td>
        </tr>
        <tr className="h-40">
            <th >운전자명</th><td>김별따</td>
            <th >운전자 연락처</th><td>01012345678</td>
        </tr>
        <tr className="h-40">
            <th >차량번호</th><td>서울거1234</td>
            <th >나이</th><td>43세</td>
        </tr>
        <tr className="h-40">
            <th >성별</th><td>남성</td>
            <th >혈액형</th><td>Rh+ A</td>
        </tr>
        <tr className="h-40">
            <th >보호자연락처</th><td>01098765432</td>
            <th >보호자와의 관계</th><td>친구</td>
        </tr>
        <tr className="h-40">
            <th >주소</th>
            <td>(06771) 서울특별시 서초구 매헌로 16, 12층</td>
            <th >건강특이사항</th>
            <td>
                <div className="w-504 h-72">
                아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 대하여, 알레르기 반응 보인 적이 있음아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 대하여, 알레르기 반응 보인 적이 있음아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 대하여, 알레르기 반응 보인 적이 있음아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)
                </div>
            </td>
        </tr>
    </tbody>
</table>
<h6 className="my-4 fw-bold">사고 정보</h6>
<table className="table table-custom-40-left w-1512 h-120">
    <thead>
    </thead>
    <tbody>
        <tr className="h-40">
            <th >사고발생일시</th>
            <td>2024-05-07 11:00</td>
        </tr>
        <tr className="h-40">
            <th >사고발생위치</th>
            <td >
                <div className="d-flex">
                서울특별시 서초구 매헌로 16, 12층<button className="btn btn-success-small bg-success text-white rounded-5 mx-2">사고위치공유</button>
                </div>
            </td>
        </tr>
        <tr className="h-40">
            <th >사고조치 완료 여부</th>
            <td><span className="text-success fw-bold">사고조치 완료 (2024-05-07 11:08)</span></td>
        </tr>
    </tbody>
</table>
<h6 className="my-4 fw-bold">사고 조치 내역</h6>
<table className="table table-custom-40 w-1512 h-160">
    <thead>
        <tr>
            <th >사고 조치 일시</th>
            <th >구분</th>
            <th >내용</th>
            <th >조직명</th>
            <th >담당자명</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td >2024-05-07 11:08</td>
            <td >조치 중</td>
            <td >운전자에게 유선 연락</td>
            <td >강남구점</td>
            <td >김별따</td>
        </tr>
        <tr>
            <td >2024-05-07 11:08</td>
            <td >조치 중</td>
            <td >운전자에게 유선 연락</td>
            <td >[시스템]</td>
            <td >[시스템]</td>
        </tr>
        <tr>
            <td >2024-05-07 11:08</td>
            <td >조치 중</td>
            <td >사고발생위치 : 37.462226 / 127.036787</td>
            <td >[시스템]</td>
            <td >[시스템]</td>
        </tr>
    </tbody>
</table>
<h6 className="my-4 fw-bold">사고 조치 등록</h6>
<div className="bg-light rounded-3 p-3">
    <div className="d-flex justify-content-between my-3 h-48 w-1472">

            <input type="text" className="form-control w-1144 h-56" placeholder="비고 내용을 입력해주세요. (공백 포함 최대 50자)"/>
            <button className="btn btn-success w-308 h-56 rounded-3" data-bs-toggle="modal" data-bs-target="#myModal">비고등록</button>
  </div>
</div>

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content w-440 p-3">



      <div className="modal-body text-center">
        <h6 className="fs-24 fw-bold">사고 조치 등록</h6>
        <p className="fs-22">
        입력하신 내용으로<br/>
        비고를 등록하시겠습니까?
        </p>
      </div>

      <div className="d-flex w-400 justify-content-between">
        <button type="button" className="btn btn-secondary w-190 h-52" data-bs-dismiss="modal">취소</button>
        <button type="button" className="btn btn-success w-190 h-52" >등록</button>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default Ac6;