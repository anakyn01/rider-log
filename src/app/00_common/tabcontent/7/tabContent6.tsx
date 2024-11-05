import CenterPagenation from "../../pagenation/centerPagenation";

const TabContent6 = () => {
    return(
        <>
    <div className="my-4">
        <input type="date" className="form-control h-56"/>
    </div>

    <div className="d-flex justify-content-between my-4">
 
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 주행시간</p>
            <h6 className="fs-20 text-success fw-700">서울 제1권역점</h6>
            <div className="d-flex justify-content-center mt-3">
                
                    <h1 className="fw-700 fs-32">5시간 00분</h1>
               
            </div>

            
        </div>
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 주행시간</p>
            <h6 className="fs-20 fw-500">별따러 가자</h6>
            <div className="d-flex justify-content-center mt-3">
                
                    <h1 className="fw-700 fs-32 ">5시간 00분</h1>
   
            </div>
        </div>
        <div className="w-488 h-406 border border-1 rounded-3 text-center p-5">
            <p className="fs-14 fw-400">평균 주행시간</p>
            <h6 className="fs-20 fw-500">전국</h6>
            <div className="d-flex justify-content-center mt-3">
       
                    <h1 className="fw-700 fs-32">5시간 00분</h1>
         
            </div>
        </div>

    </div>
 
    <table className="table table-hover table-custom-40">
    <colgroup>
        <col style={{width:"153px"}}/>
        <col style={{width:"453px"}}/>
        <col style={{width:"453px"}}/>
        <col style={{width:"453px"}}/>
    </colgroup>
  <thead>
    <tr className="text-secondary text-center table-light">
        <th>번호</th><th>날짜</th><th>평균 주행거리</th><th>전일대비</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>1</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td><span className="ColorDb121a">▲ 1시간 00분</span></td>
    </tr>
    <tr>
        <td>2</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td><span className="Color2150ca">▼ 1시간 00분</span></td>
    </tr>
    <tr>
        <td>3</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td><span className="Color2150ca">▼ 1시간 00분</span></td>
    </tr>
    <tr>
        <td>4</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td><span className="ColorDb121a">▲ 1시간 00분</span></td>
    </tr>
    <tr>
        <td>5</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td><span className="Color2150ca">▼ 1시간 00분</span></td>
    </tr>
    <tr>
        <td>6</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td><span className="Color2150ca">▼ 1시간 00분</span></td>
    </tr>
    <tr>
        <td>7</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td><span className="ColorDb121a">▲ 1시간 00분</span></td>
    </tr>
    <tr>
        <td>8</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td><span className="Color2150ca">▼ 1시간 00분</span></td>
    </tr>
    <tr>
        <td>9</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td><span className="Color2150ca">▼ 1시간 00분</span></td>
    </tr>
    <tr>
        <td>10</td><td>2023-05-13 (월)</td><td>5시간 00분</td><td>- 0시간 00분</td>
    </tr>
  </tbody>
 </table>
 <CenterPagenation/>


        </>
    );
}
export default TabContent6;