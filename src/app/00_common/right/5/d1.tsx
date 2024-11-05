
import CarModal1 from "../../modal/4/carModal1";
import CarModal2 from "../../modal/4/carModal2";
import CarModalCancel2 from "../../modal/6/carModalCancel2";
import CenterPagenation from "../../pagenation/centerPagenation";
import Excel from "../../button/Excel";
import DriverAddBtn from "../../button/DriverAddBtn";


const D1 = () => {
    return(
<>
<div className="w-1144 h-24 d-flex justify-content-between my-4">
    <h6 className="w-67">조직 관리</h6>
    <Excel/>
</div>
<div className="w-1144 h-24 d-flex justify-content-between mb-4">
    <div className="w-758 h-56 d-flex">
        <div className="w-564">
        <input type="text" className="form-control h-56 input-bg rounded-4 mag" placeholder="운전자명, 차량번호로 검색해보세요"/>
        </div>        
        <div className="w-178 h-56">
            <a className="btn btn-outline-success-18-a w-178 h-56 mx-2 rounded-4" href="http://localhost:3000/06_dash/05_driver/0">검색 초기화</a>
        </div>
    </div>

<DriverAddBtn/>

</div>
<h6 className="text-secondary fs-18 my-4">총 21건</h6>
<div className="w-1144 h-24 d-flex justify-content-between mb-4">
    <div className="w-372 h-46 d-flex justify-content-between">
        <button className="w-178 h-46 btn btn-outline-success rounded-4" data-bs-toggle="modal" data-bs-target="#carModalCancel2">
        선택 운전자 삭제
        </button>
    </div>

        <div className="w-304 h-46 d-flex justify-content-between border border-1 rounded-3 align-items-center">
            <div className="mx-3 fs-14 Color77787b">차량</div>
                <div className="form-check d-flex align-items-center">
                    
                    <input className="form-check-input" type="radio" name="remember"/><label className="form-check-label fs-14 fw-400">전체 
                    </label>
                    
                </div>
                <div className="form-check d-flex align-items-center">
                
                    <input className="form-check-input" type="radio" name="remember"/> <label className="form-check-label fs-14 fw-400">있음
                    </label>
                    
                </div>
                <div className="form-check d-flex align-items-center">
                    
                    <input className="form-check-input" type="radio" name="remember"/><label className="form-check-label fs-14 fw-400 mr-3">없음
                    </label>
                </div>
            </div>

        </div>
<table className="table table-custom-40 w-1144">
    <colgroup>
    <col style={{width:"50px"}}/>
    <col style={{width:"58px"}}/>
    <col style={{width:"100x"}}/>
    <col style={{width:"130px"}}/>
    <col style={{width:"230px"}}/>
    <col style={{width:"160px"}}/>
    <col style={{width:"70px"}}/>
    <col style={{width:"140px"}}/>
    <col style={{width:"106px"}}/>
    <col style={{width:"100px"}}/>
    </colgroup>
    <thead>
        <tr>
        <th>           
            <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
        </th>
        <th>번호</th><th>운전자명</th><th>차량번호</th><th>조직명</th><th>나이(생년월일)</th><th>성별</th><th>운전자 연락처</th><th>API 사용여부</th><th>상세보기</th>
        </tr>
    </thead>
    <tbody>
       <tr>
        <td>
        
            <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
 
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
       <tr>
        <td>
        <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
 
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
       <tr>
        <td>
        <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
       <tr>
        <td>
        <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
 
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
       <tr>
        <td>
        <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
 
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
       <tr>
        <td>
        <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
 
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
       <tr>
        <td>
        <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
 
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
       <tr>
        <td>
        <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
 
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
       <tr>
        <td>
        <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
 
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
       <tr>
        <td>
        <div className="form-check d-flex justify-content-center align-items-center">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
        </td>
            <td>1</td>
            <td>김별따</td>
            <td>서울가1234</td>
            <td>서울제1권역점</td>
            <td>43세 (1981-05-10)</td>
            <td>남성</td>
            <td>01012345678</td>
            <td>미사용</td>
            <td><a href="http://localhost:3000/06_dash/05_driver/5" className="a-link">상세보기</a></td>
       </tr>
    </tbody>
</table>
<CenterPagenation/>
<CarModal1/>
<CarModal2/>
<CarModalCancel2/>
</>
    );
}
export default D1;