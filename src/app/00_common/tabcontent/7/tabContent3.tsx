import CenterPagenation from "../../pagenation/centerPagenation";

const TabContent3 = () => {
    return(
        <>
    <div className="my-4">
        <input type="date" className="form-control h-56"/>
    </div>

    <div className="d-flex justify-content-between my-4">
 
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 운행 가동률</p>
            <h6 className="fs-20 text-success fw-700">서울 제1권역점</h6>
            <div className="d-flex justify-content-center mt-3">
                <div className="w-200 h-200 border border-5 border-success rounded-circle d-flex justify-content-center align-items-center">
                    <h1 className="fw-700 fs-32 ">75%</h1>
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
                    <h1 className="fw-700 fs-32 ">85%</h1>
                </div>
            </div>
        </div>

    </div>
 
    <table className="table table-bordered table-custom-40">
    <colgroup>
        <col style={{width:"100px"}}/>
        <col style={{width:"353px"}}/>
        <col style={{width:"353px"}}/>
        <col style={{width:"353px"}}/>
        <col style={{width:"353px"}}/>
    </colgroup>
  <thead>
    <tr>
        <th>번호</th><th>날짜</th><th>평균안전점수</th><th>전일 평균 안전점수</th><th>전일 대비</th>
    </tr>
  </thead>
  <tbody>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td><span className="ColorDb121a">▲ 5점</span></td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td><span className="Color2150ca">▼ 5점</span></td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td>5점</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td>5점</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td>5점</td>
    </tr>
    <tr>
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td>5점</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td>5점</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td>5점</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td>5점</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>80점</td><td>75점</td><td>5점</td>
    </tr>

  </tbody>
 </table>
 <CenterPagenation/>


        </>
    );
}
export default TabContent3;