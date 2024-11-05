import Head1 from "../../table/four_1";
import InputCal from "../../input/InputCalender";
import T1 from "../../table/7/t1";
import CenterPagenation from "../../pagenation/centerPagenation";
const Da2 = () => {
    return(
<>
<div className="d-flex justify-content-center w-1656">
    <div className="content">
    <div className="d-flex justify-content-between align-items-center my-4">
    <h4 className="fs-20">차량/운전자 주행 이력</h4>
    {/*<h4 className="fs-20"><a href="#" className="a-link text-success"><b>엑셀파일 다운로드</b></a></h4>*/}
</div>

<div className="d-flex justify-content-between align-items-center my-4">
    <h4 className="fs-20">차량/운전자 정보</h4>
</div>

<table className="table table-custom-40-left">
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
<th className="bg-light">조직명</th><td>강남구청</td><th className="bg-light">운전자명</th><td>김별따</td>
</tr>
<tr>
<th className="bg-light">차량번호</th><td>서울가1234</td><th className="bg-light">운전자 연락처</th><td>01012345678</td>
</tr>
<tr>
<th className="bg-light">누적 주행거리</th><td>1,234km</td><th className="bg-light">누적 주행시간</th><td>10시간 20분 30초</td>
</tr>
  </tbody>
</table>
{/*<div className="d-flex justify-content-between">
    <div className="">
<input type="text" placeholder="차량번호, 운전자명으로 검색해보세요" className="w-564 form-control h-56"/>
    </div>
    <div className="">

    </div>
</div>

        <div className="d-flex justify-content-between align-items-center">
            <h4 className="my-3 w-49 h-20 text-secondary fs-16">총 21건</h4>
                <div className="d-flex w-393 h-20 justify-content-between">
                    <label className="form-label text-secondary">사고조치 완료 여부</label>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked/>전체
                        <label className="form-check-label" htmlFor="radio1"></label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>완료
                        <label className="form-check-label" htmlFor="radio2"></label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" disabled/>미완료
                        <label className="form-check-label"></label>
                    </div>
                </div>

        </div>*/}
<div className="d-flex justify-content-between align-items-center my-4">
    <h4 className="fs-20">월별 주행 정보</h4>
</div>

<div className="w-1512 h-138 border border-1 d-flex justify-content-around align-items-center rounded-3">

    <div className="w-261 h-52 d-flex align-items-center">
        <select name="" id="" className="form-select w-107 h-52">
            <option value="">2024</option>
        </select>
        <label htmlFor="" className="form-label mx-2">년</label>
        <select name="" id="" className="form-select w-78 h-52 ml-3">
            <option value="">5</option>
        </select>
        <label htmlFor="" className="form-label mx-2">월</label>
    </div>

    <div className="w-1 h-50"></div>

    <div className="w-172 h-58 text-center">
        <p className="fs-14 fw-400">월 주행거리</p>
        <br/>
        <p className="fs-16 fw-500">123.4km</p>
    </div>
    <div className="w-1 h-50"></div>

    <div className="w-172 h-58 text-center">
        <p className="fs-14 fw-400">월 주행시간</p>
        <br/>
        <p className="fs-16 fw-500">1시간 20분 30초</p>
    </div>

    <div className="w-1 h-50"></div>

    <div className="w-172 h-58 text-center">
        <p className="fs-14 fw-400">월 평균 안전점수</p>
        <br/>
        <p className="fs-16 fw-500">80점</p>
    </div>

    <div className="w-1 h-50"></div>

    <div className="w-172 h-58 text-center">
        <p className="fs-14 fw-400">월 평균 안전등급</p>
        <br/>
        <p className="fs-16 fw-500">모범</p>
    </div>


</div>

<div className="d-flex justify-content-between align-items-center my-4">
    <h4 className="fs-20">주행 이력 목록</h4>
</div>

<div className="d-flex justify-content-between align-items-center my-4">
    <input type="date" className="form-control w-1512 h-52" />
</div>

<table className="table table-bordered table-custom-40">
    <colgroup>
    <col style={{width:"100px"}}/>
    <col style={{width:"180px"}}/>
    <col style={{width:"200px"}}/>
    <col style={{width:"200px"}}/>
    <col style={{width:"200px"}}/>
    <col style={{width:"200px"}}/>
    <col style={{width:"150px"}}/>
    <col style={{width:"150px"}}/>
    <col style={{width:"132px"}}/>
    </colgroup>
    <thead>
        <tr>
        <th>번호</th><th>차량번호</th><th>운전자명</th><th>조직명</th><th>보험가입여부</th><th>센서유형</th><th>센서번호</th><th>상세보기</th><th>상세보기</th>
        </tr>
    </thead>
    <tbody>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr>
       <tr >
        <td>1</td><td>2024-05-27</td><td>123km</td><td>1시간 20분</td><td>90km/h</td><td>90km/h</td><td>80점</td><td>모범</td><td><a href="http://localhost:3000/06_dash/07_rate/3" className="text-dark">상세보기</a></td>
       </tr> 
    </tbody>
</table>

<CenterPagenation/>
    </div>
</div>


</>
    );
}
export default Da2;