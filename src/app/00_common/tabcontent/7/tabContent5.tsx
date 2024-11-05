import CenterPagenation from "../../pagenation/centerPagenation";

const TabContent5 = () => {
    return(
        <>
    <div className="my-4">
        <input type="date" className="form-control h-56"/>
    </div>

    <div className="d-flex justify-content-between my-4">
 
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 운행 가동률</p>
            <h6 className="fs-20 text-success">서울 제1권역점</h6>
            <div className="d-flex justify-content-center mt-3">
                
                    <h1 className="fs-32 fw-700 ">1,234km</h1>
               
            </div>

            
        </div>
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 운행 가동률</p>
            <h6 className="fs-20">별따러 가자</h6>
            <div className="d-flex justify-content-center mt-3">
                
                    <h1 className="fs-32 fw-700">1,234km</h1>
   
            </div>
        </div>
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 운행 가동률</p>
            <h6 className="fs-20">전국</h6>
            <div className="d-flex justify-content-center mt-3">
       
                    <h1 className="fs-32 fw-700 ">1,234km</h1>
         
            </div>
        </div>

    </div>
 
    <table className="table table-hover table-custom-40 ">
    <colgroup>
        <col style={{width:"153px"}}/>
        <col style={{width:"453px"}}/>
        <col style={{width:"453px"}}/>
        <col style={{width:"453px"}}/>
    </colgroup>
  <thead>
    <tr >
        <th>번호</th><th>날짜</th><th>평균 주행거리</th><th>전일대비</th>
    </tr>
  </thead>
  <tbody>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td><span className="ColorDb121a">▲ 34km</span></td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td><span className="Color2150ca">▼ 34km</span></td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td>34km</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td>34km</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td>34km</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td>34km</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td>34km</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td>34km</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td>34km</td>
    </tr>
    <tr >
        <td>1</td><td>2023-05-13 (월)</td><td>1,234km</td><td>34km</td>
    </tr>
  </tbody>
 </table>
 <CenterPagenation/>


        </>
    );
}
export default TabContent5;