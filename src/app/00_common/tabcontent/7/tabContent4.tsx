import CenterPagenation from "../../pagenation/centerPagenation";

const TabContent4 = () => {
    return(
        <>
    <div className="my-4">
        <input type="date" className="form-control h-56"/>
    </div>

<div className="d-flex justify-content-between my-4">

    <div className="d-flex">
        <input type="text" className="form-control w-492 h-56 input-bg mag" placeholder="조직명으로 검색해보세요"/>
        <button className="w-176 h-56 btn btn-outline-success mx-2 ">
            검색 초기화
        </button>
    </div>

    <div className="">
        <select name="" id="" className="form-select h-56 input-bg">
            <option value="">순위 높은순</option>
        </select>
    </div>
</div>
    
 
<table className="table table-custom-40 table-hover">
    <colgroup>
        <col style={{width:"152px"}}/>
        <col style={{width:"340px"}}/>
        <col style={{width:"340px"}}/>
        <col style={{width:"340px"}}/>
        <col style={{width:"340px"}}/>
    </colgroup>
  <thead>
    <tr className="text-secondary text-center table-light">
        <th>순위</th><th>조직명</th><th>조직유형</th><th>담당자명</th><th>안전점수</th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99점</td>
    </tr>
  </tbody>
 </table>
 <CenterPagenation/>


        </>
    );
}
export default TabContent4;