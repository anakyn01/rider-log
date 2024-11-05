import CenterPagenation from "../../pagenation/centerPagenation";

const TabContent2 = () => {
    return(
        <>
    <div className="my-4">
        <input type="date" className="form-control h-56"/>
    </div>

<div className="d-flex justify-content-between my-4">

    <div className="d-flex">
        <input type="text" className="form-control w-492 h-56 input-bg mag" placeholder="조직명으로 검색해보세요"/>
        <button className="w-176 h-56 btn btn-outline-success mx-2">
            검색 초기화
        </button>
    </div>

    <div className="">
        <select name="" id="" className="form-select h-56 input-bg">
            <option value="">순위 높은순</option>
        </select>
    </div>
</div>
    
 
<table className="table table-hover table-custom-40">
    <colgroup>
        <col style={{width:"152px"}}/>
        <col style={{width:"340px"}}/>
        <col style={{width:"340px"}}/>
        <col style={{width:"340px"}}/>
        <col style={{width:"340px"}}/>
    </colgroup>
  <thead>
    <tr className="text-secondary text-center table-light">
        <th>번호</th><th>날짜</th><th>전체등록차량</th><th>가동 차량</th><th>미가동 차량</th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
    <tr className="text-center">
        <td>1</td><td>신논현점</td><td>대리점</td><td>김별따</td><td>99%</td>
    </tr>
  </tbody>
 </table>
 <CenterPagenation/>


        </>
    );
}
export default TabContent2;