import Head1 from "../../table/four_1";
import InputCal from "../../input/InputCalender";
import T1 from "../../table/7/t1";
import CenterPagenation from "../../pagenation/centerPagenation";
import Excel from "../../button/Excel";
const Ac1 = () => {
    return(
<>
<div className="p-3">
        <div className="d-flex justify-content-between align-items-center">
            <h4 className="fs-18 fw-bold">사고 현황</h4>
<Excel/>
        </div>
</div>
<Head1/>

<div className="d-flex justify-content-between my-5 w-1144 h-56">
                <div className="w-856 d-flex justify-content-between">
                <input type="text" className="form-control h-56 w-420 mag" placeholder="차량번호, 운전자명으로 검색해보세요"/>
                <input type="datetime-local" className="form-control h-56 w-420"/>
                </div>

                <a className="btn btn-outline-success btn-outline-success-w178-h56" href="http://localhost:3000/06_dash/02_accident/1">검색초기화</a>
</div>
        <div className="d-flex justify-content-between align-items-center mb-10">
            <h4 className="mt60 mb-10 fs-16">총 21건</h4>
                <div className="d-flex w-393 h-20 justify-content-between">
                    <label className="form-label text-secondary">사고조치 완료 여부</label>
                    <div className="d-flex align-items-center">
                        <input type="radio" className="form-check-input border border-success" id="radio1" name="optradio" value="option1"/>
                        <label className="form-check-label mx-2" htmlFor="radio1">전체</label>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="radio" className="form-check-input border border-success" id="radio2" name="optradio" value="option2"/>
                        <label className="form-check-label mx-2" htmlFor="radio2">완료</label>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="radio" className="form-check-input border border-success" id="radio3" value="option3"/>
                        <label className="form-check-label mx-2">미완료</label>
                    </div>
                </div>

        </div>
        <table className="table table-custom-40 w-1144">
<thead>
<tr>
<th>번호</th>
<th>사고발생일시</th>
<th>조직명</th>
<th>차량번호</th>
<th>운전자명</th>
<th>운전자 연락처</th>
<th>나이</th>
<th>성별</th>
<th>사고조치완료여부</th>
<th>상세보기</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>2</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>3</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>4</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>5</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>6</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>7</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>8</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>9</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>10</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>1</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>2</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>3</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>4</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>5</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>6</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>7</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>8</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>9</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
<tr>
<td>10</td>
<td>2024-05-07 11:00</td>
<td>서울제1권역점</td>
<td>서울가1234</td>
<td>김별따</td>
<td>01012345678</td>
<td>43</td>
<td>남성</td>
<td>미완료</td>
<td><a href="http://localhost:3000/06_dash/02_accident/2" className="a-link text-dark">상세보기</a></td>
</tr>
</tbody>
</table>
<CenterPagenation/>
</>
    );
}
export default Ac1;