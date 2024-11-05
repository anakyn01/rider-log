const OlgarTable = () => {
    return(
<>
<table className="table table-borderless">
    <colgroup>
    <col style={{width:"40%"}}/>
    <col style={{width:"35%"}}/>
    <col style={{width:"25%"}}/>
    </colgroup>
            <thead>
                <tr>
                <th></th><th></th><th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>별따러 가자</td><td>서울 1234 김별따</td><td><button className="btn btn-outline-success rounded-5">주행중</button></td>                 
                </tr>
                <tr>
                  <td>별따러 가자</td><td>서울 1234 김별따</td><td><button className="btn btn-outline-secondary rounded-5">미행중</button></td>                 
                </tr>
                <tr>
                  <td>별따러 가자</td><td>서울 1234 김별따</td><td><button className="btn btn-outline-danger rounded-5">사고</button></td>                 
                </tr>
                <tr>
                  <td>별따러 가자</td><td>서울 1234 김별따</td><td><button className="btn btn-outline-success rounded-5">주행중</button></td>                 
                </tr>
                <tr>
                  <td>별따러 가자</td><td>서울 1234 김별따</td><td><button className="btn btn-outline-warning rounded-5">운휴</button></td>                 
                </tr>
            </tbody>
        </table></>
    );
}
export default OlgarTable;