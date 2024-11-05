import KakaoMap from "@/app/components/KakaoMap";

const Da3 = () => {
    return(
<>
<div className="d-flex justify-content-center w-1656">
    <div className="content">
    <div className="d-flex justify-content-between align-items-center my-4">
    <h4 className="fs-18 fw-700">차량/운전자 주행 이력 상세</h4>
    <p className="fs-18 text-secondary">2024년 06월 28일</p>
</div>

<div className="d-flex justify-content-between align-items-center my-4">
    <h4 className="fs-18 fw-700">차량/운전자 정보</h4>
</div>

<table className="table table-custom-40-left w-1512">
    <colgroup>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/>
    </colgroup>
  <thead>
  </thead>
  <tbody>
<tr>
<th >조직명</th><td>강남구청</td><th >운전자명</th><td>김별따</td>
</tr>
<tr>
<th >차량번호</th><td>서울가1234</td><th >운전자 연락처</th><td>01012345678</td>
</tr>
<tr>
<th >누적 주행거리</th><td>1,234km</td><th >누적 주행시간</th><td>10시간 20분 30초</td>
</tr>
  </tbody>
</table>

<div className="d-flex justify-content-between align-items-center my-4">
    <h4 className="fs-18 fw-700">일일 주행 이력</h4>
</div>

<table className="table table-custom-40-left w-1512">
    <colgroup>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/>
    </colgroup>
  <thead>
  </thead>
  <tbody>
<tr>
<th >주행거리</th><td>123.4km</td><th >주행시간</th><td>1시간 20분 30초</td>
</tr>
<tr>
<th >평균속도</th><td>90km/h</td><th >최고속도</th><td>90km/h</td>
</tr>
<tr>
<th >안전점수(안전등급)</th><td>80점 (모범)</td><th >사고횟수</th><td>1회</td>
</tr>
  </tbody>
</table>

<div className="d-flex justify-content-between align-items-center my-4">
    <h4 className="fs-18 fw-700">일일 주행 이력 상세</h4>
</div>

<table className="table table-custom-40 w-1512">
    <colgroup>
        <col style={{width:"100px"}}/>
        <col style={{width:"353px"}}/>
        <col style={{width:"353px"}}/>
        <col style={{width:"353px"}}/>
        <col style={{width:"353px"}}/>
        <col style={{width:"353px"}}/>
    </colgroup>
  <thead>
    <tr className="table-light text-center">
        <th>번호</th><th>주행시작</th><th>주행종료</th><th>주행거리</th><th>주행시간</th><th>평균 안전점수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>1</td><td>2024-06-29 17:00:00</td><td>2024-06-29 17:00:00</td><td>123km</td><td>1시간 00분 00초</td><td>80점</td>
    </tr>
    <tr>
        <td>2</td><td>2024-06-29 17:00:00</td><td>2024-06-29 17:00:00</td><td>123km</td><td>1시간 00분 00초</td><td>80점</td>
    </tr>
    <tr>
        <td>3</td><td>2024-06-29 17:00:00</td><td>2024-06-29 17:00:00</td><td>123km</td><td>1시간 00분 00초</td><td>80점</td>
    </tr>
  </tbody>
</table>

<div className="d-flex justify-content-between align-items-center my-4">
    <h4 className="fs-18 fw-700">주행 경로</h4>
</div>
<div className="w-1512 h-937 border border-1">
<KakaoMap/>
</div>
    </div>
</div>
</>
    );
}
export default Da3;