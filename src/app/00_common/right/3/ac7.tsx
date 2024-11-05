import Head1 from "../../table/four_1";
import InputCal from "../../input/InputCalender";
import T2 from "../../table/t2";
import CenterPagenation from "../../pagenation/centerPagenation";
import Excel from "../../button/Excel";
import OrlAddBtn from "../../button/OrlAddBtn";

const Ac7 = () => {
    return(
<>
<div className="w-1144 h-24 d-flex justify-content-between my-4">
    <h6 className="fs-18 fw-bold">조직 관리</h6>
<Excel/>
</div>
<div className="w-1144 h-24 d-flex justify-content-between mb-4">
    <div className="w-758 h-56 d-flex">
        <div className="w-564">
        <input type="text" className="form-control h-56 input-bg rounded-3 mag" placeholder="조직명, 담당자명으로 검색해보세요"/>
        </div>        

            <a className="btn btn-outline-success btn-outline-success-w178-h56 mx-2" href="http://localhost:3000/06_dash/03_orgar/1">검색 초기화</a>
    </div>

<OrlAddBtn/>

</div>
<h6 className="fs-16 mt-40 mb-20 Color77787b">총 21건</h6>
<table className="table table-custom-40 ">
    <colgroup>
    <col style={{width:"50px"}}/>
    <col style={{width:"200px"}}/>
    <col style={{width:"180px"}}/>
    <col style={{width:"110px"}}/>
    <col style={{width:"116px"}}/>
    <col style={{width:"100px"}}/>
    <col style={{width:"138px"}}/>
    <col style={{width:"150px"}}/>
    <col style={{width:"100px"}}/>
    </colgroup>
    <thead>
        <tr className="">
            <th>번호</th>
            <th>조직명</th>
            <th>소속 조직</th>
            <th>조직 유형</th>
            <th>등록 차량수</th>
            <th>하위 조직수</th>
            <th>담당자명</th>
            <th>담당자 연락처</th>
            <th>상세보기</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>2</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>3</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>4</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>5</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>6</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>7</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>8</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>9</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>10</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr> 
        <tr>
            <td>11</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>12</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>13</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>14</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>15</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>16</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>17</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>18</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>19</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>
        <tr>
            <td>20</td><td>서울 제1권역점</td><td>별따러가자</td><td>권역센터</td><td>1,000대</td><td>2개</td><td>김별따</td><td>01012345678</td><td><a href="#" className="a-link text-dark">상세보기</a></td>
        </tr>    
    </tbody>
</table>
<CenterPagenation/>
</>
    );
}
export default Ac7;