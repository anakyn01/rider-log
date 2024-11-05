
import Excel from "../../button/Excel";
import CarModal1 from "../../modal/4/carModal1";
import CarModal2 from "../../modal/4/carModal2";
import CenterPagenation from "../../pagenation/centerPagenation";

const M1 = () => {
    return(
<>
<div className="w-1144 h-24 d-flex justify-content-between my-4">
    <h6 className="w-67">조직 관리</h6>
<Excel/>
</div>

<div className="w-1144 h-24 d-flex justify-content-between my-4">
    <div className="w-564 border border-1 border-success p-3 rounded-3">
        <h6 className="fs-16 fw-500 text-success">조직 유형이란?</h6>
        <table className="table table-borderless">
            <colgroup>
            <col style={{width:"100px"}}/>
            <col/>
            </colgroup>
        <thead>

        </thead>
        <tbody>
            <tr >
                <th className="fs-14 fw-500">사업계약자</th><td className="fs-14 Color77787b">RIDERLOG와의 사업 계약을 체결한 회사입니다.</td>
            </tr>
            <tr >
                <th className="fs-14 fw-500">권역센터</th><td className="fs-14 Color77787b">사업계약자의 하위 조직 유형, 지역 및 권역별 센터 또는 HUB급 규모의 조직입니다.</td>
            </tr>
            <tr >
                <th className="fs-14 fw-500">지역지사</th><td className="fs-14 Color77787b">권역센터의 하위 조직 유형, 지역 지사 규모의 조직입니다.</td>
            </tr>
            <tr >
                <th className="fs-14 fw-500">대리점</th><td className="fs-14 Color77787b">지역지사의 하위 조직 유형, 대리점 규모의 조직입니다.</td>
            </tr>
        </tbody>
    </table>
    </div>

    <div className="w-564 border border-1 border-success p-3 rounded-3">
        <h6 className="fs-16 fw-500 text-success">담당자 권한이란?</h6>
        <table className="table table-borderless">
            <colgroup>
            <col style={{width:"110px"}}/>
            <col/>
            </colgroup>
        <thead>

        </thead>
        <tbody>
            <tr >
                <th className="fs-14 fw-500">조직담당자</th><td className="fs-14 Color77787b">하나의 조직에 한 명만 지정 가능합니다. 담당 조직의 모든 정보를 확인하고 편집할 수 있습니다.</td>
            </tr>
            <tr >
                <th className="fs-14 fw-500">사고조치 담당자</th><td className="fs-14 Color77787b">하나의 조직에 여러 명 추가 가능합니다. 담당 조직 내에서 발생한 사고 조치만 가능합니다.</td>
            </tr>
        </tbody>
    </table>
    </div>

</div>

<div className="w-1144 h-24 d-flex justify-content-between mb-4">


        <input type="text" className="form-control h-56 w-564 input-bg" placeholder="담당자명, 담당자 연락처, 이메일로 검색해보세요"/>
       
   
        <a className="btn btn-outline-success mainBtn-green-a w-178 h-56" href="http://localhost:3000/06_dash/06_manager/1">검색 초기화</a>

 </div>

   {/* <div className="">
        <button className="btn btn-success w-178 h-56">조직 추가</button>
    </div>*/}

<h6 className="fs-16 my-4 ColorC3c4c5">총 21건</h6>

<table className="table table-custom-40 w-1144">
    <colgroup>
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
        <tr >
        <th>번호</th><th>차량번호</th><th>운전자명</th><th>조직명</th><th>보험가입여부</th><th>센서유형</th><th>센서번호</th><th>상세보기</th>
        </tr>
    </thead>
    <tbody>
        <tr >
            <td>1</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>2</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >
 
            <td>3</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>4</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >
  
            <td>5</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>6</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>7</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >
 
            <td>8</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>9</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >
 
            <td>10</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >
  
            <td>11</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>12</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>13</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>14</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>15</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>16</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>17</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>18</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>19</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        <tr >

            <td>20</td><td>서울가1234</td><td>김별따</td><td>서울제1권역점</td><td>가입</td><td>LTE</td><td>000000000000000</td><td><a href="http://localhost:3000/06_dash/06_manager/3" className="a-link">상세보기</a></td>
        </tr>
        
    </tbody>
</table>
<CenterPagenation/>
<CarModal1/>
<CarModal2/>
</>
    );
}
export default M1;