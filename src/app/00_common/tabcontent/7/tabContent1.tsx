import CenterPagenation from "../../pagenation/centerPagenation";

const TabContent1 = () => {
    return(
        <>
    <div className="my-4">
        <input type="date" className="form-control h-56"/>
    </div>

    <div className="d-flex justify-content-between my-4">
 
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 운행 가동률</p>
            <h6 className="fs-20 fw-700 text-success">서울 제1권역점</h6>
            <div className="d-flex justify-content-center mt-3">
                <div className="w-200 h-200 border border-5 border-success rounded-circle d-flex justify-content-center align-items-center">
                    <h1 className="fw-700 fs-32">75%</h1>
                </div>
            </div>

            
        </div>
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 운행 가동률</p>
            <h6 className="fs-20 fw-500">별따러 가자</h6>
            <div className="d-flex justify-content-center mt-3">
                <div className="w-200 h-200 border border-5 border-success rounded-circle d-flex justify-content-center align-items-center">
                    <h1 className="fw-700 fs-32 ">65%</h1>
                </div>
            </div>
        </div>
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 운행 가동률</p>
            <h6 className="fs-20 fw-500">전국</h6>
            <div className="d-flex justify-content-center mt-3">
                <div className="w-200 h-200 border border-5 border-success rounded-circle d-flex justify-content-center align-items-center">
                    <h1 className="fw-700 fs-32">85%</h1>
                </div>
            </div>
        </div>

    </div>
 
<table className="table table-bordered table-custom-40">
    <colgroup>
        <col style={{width:"100px"}}/>
        <col style={{width:"292px"}}/>
        <col style={{width:"200px"}}/>
        <col style={{width:"180px"}}/>
        <col style={{width:"180px"}}/>
        <col style={{width:"180px"}}/>
        <col style={{width:"180px"}}/>
        <col style={{width:"200px"}}/>
    </colgroup>
  <thead>
    <tr>
        <th>번호</th><th>날짜</th><th>전체등록차량</th><th>가동 차량</th><th>미가동 차량</th><th>운휴 차량</th><th>운행 가동률</th><th>전일 대비</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>1</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td><span className="ColorDb121a">▲ 10%</span></td>
    </tr>
    <tr>
        <td>2</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td><span className="Color2150ca">▼ 10%</span></td>
    </tr>
    <tr>
        <td>3</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td>-0%</td>
    </tr>
    <tr>
        <td>4</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td>-0%</td>
    </tr>
    <tr>
        <td>5</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td>-0%</td>
    </tr>
    <tr>
        <td>6</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td>-0%</td>
    </tr>
    <tr>
        <td>7</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td>-0%</td>
    </tr>
    <tr>
        <td>8</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td>-0%</td>
    </tr>
    <tr>
        <td>9</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td>-0%</td>
    </tr>
    <tr>
        <td>10</td><td>2023-05-13 (월)</td><td>2,000대</td><td>1,600대</td><td>1,000대</td><td>20대</td><td>80%</td><td>-0%</td>
    </tr>
  </tbody>
 </table>
 <CenterPagenation/>


        </>
    );
}
export default TabContent1;