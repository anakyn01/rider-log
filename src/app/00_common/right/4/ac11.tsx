

import Excel from "../../button/Excel";
import CarModal1 from "../../modal/4/carModal1";
import CarModal2 from "../../modal/4/carModal2";
import CarAddBtn from "../../button/CarAddBtn";
import AddCarComplete from "../../toast/4/AddCarComplete";

const Ac11 = () => {
    return(
<>
<div className="w-1144 h-24 d-flex justify-content-between my-4">
    <h6 className="fs-18 fw-700">조직 관리</h6>
    <AddCarComplete/>
    <Excel/>
</div>
<div className="w-1144 h-24 d-flex justify-content-between mb-4">
    <div className="w-758 h-56 d-flex">
        <div className="w-564">
        <input type="text" className="form-control h-56" placeholder="차량번호, 운전자명, 차대번호로 검색해보세요"/>
        </div>        
        <div className="w-178 h-56">
            <a className="btn btn-outline-success btn-outline-success-w178-h56 mx-2" href="http://localhost:3000/06_dash/04_car/1">검색 초기화</a>
        </div>
    </div>

    <CarAddBtn/>

</div>
<h6 className="text-secondary fs-18 my-4">총 21건</h6>
<div className="w-1144 h-24 d-flex justify-content-between mb-4">
    <div className="w-372 h-46 d-flex justify-content-between">
        <button className="btn btn-outline-success btn-outline-success-w178-h46" data-bs-toggle="modal" data-bs-target="#carModal1">
        선택 차량 소속변경
        </button>
        <button className="btn btn-outline-success btn-outline-success-w178-h46 mx-2" data-bs-toggle="modal" data-bs-target="#carModal2">
        선택 차량 삭제
        </button>
    </div>
    <div className="w-634 h-46 d-flex justify-content-between align-items-center">
        <div className="w-304 h-46 d-flex justify-content-between border border-1 rounded-3 align-items-center">
        <div className="mx-3 fs-14 fw-400 Color77787b">운전자</div>
            <div className="d-flex align-items-center">              
                <input className="form-check-input" type="radio" name="remember"/> <div className="fs-14 fw-400 mx-2">전체 </div>               
            </div>
            <div className="d-flex align-items-center">
                <input className="form-check-input " type="radio" name="remember"/> <div className="fs-14 fw-400 mx-2">있음</div>               
            </div>
            <div className="d-flex align-items-center">
                <input className="form-check-input" type="radio" name="remember"/> <div className="fs-14 fw-400 mx-2">없음</div>
            </div>
        </div>

        <div className="w-314 h-46 d-flex justify-content-between border border-1 rounded-3 align-items-center">
        <div className="mx-3 fs-14 fw-400 Color77787b">센서유형</div>
            <div className="d-flex align-items-center"> 
                <input className="form-check-input" type="radio" name="remember"/> <div className="fs-14 fw-400 mx-2">전체</div>                
            </div>
            <div className="d-flex align-items-center">
                <input className="form-check-input" type="radio" name="remember"/><div className="fs-14 fw-400 mx-2">있음</div>                 
            </div>
            <div className="d-flex align-items-center">      
                <input className="form-check-input" type="radio" name="remember"/><div className="fs-14 fw-400 mx-2">없음</div>           
            </div>
        </div>
    </div>
</div>
<table className="table table-custom-40 w-1144">
    <colgroup>
    <col style={{width:"50px"}}/>
    <col style={{width:"58x"}}/>
    <col style={{width:"150px"}}/>
    <col style={{width:"150px"}}/>
    <col style={{width:"230px"}}/>
    <col style={{width:"116px"}}/>
    <col style={{width:"100px"}}/>
    <col style={{width:"190px"}}/>
    <col style={{width:"100px"}}/>
    </colgroup>
    <thead>
        <tr>
        <th className="d-flex justify-content-center align-items-center h-40">

                <input className="form-check-input" type="checkbox" name="remember"/>
        </th>
        <th>번호</th><th>차량번호</th><th>운전자명</th><th>조직명</th><th>보험가입여부</th><th>센서유형</th><th>센서번호</th><th>상세보기</th>
        </tr>
    </thead>
    <tbody>
    <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>1</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>2</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>3</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>4</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>5</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>6</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>7</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>8</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>9</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>10</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>11</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>12</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>13</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>14</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>15</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>16</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>17</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>18</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>19</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        <tr>
            <td>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember"/>
            </div>
            </td>
            <td>20</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="#" className="a-link">상세보기</a></td>
        </tr>
        
    </tbody>
</table>
<CarModal1/>
<CarModal2/>
</>
    );
}
export default Ac11;