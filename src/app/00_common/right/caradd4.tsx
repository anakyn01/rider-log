import CarModal3 from "../modal/carModal3";

const CarAdd4 = () => {
    return(
        <>
        <div className="w-1512">
            <h6 className="fs-22 fw-bold my-4">차량추가</h6>
            <div className="d-flex">
                <h6 className="fs-22">차량 정보</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
                    <label className="form-check-label">보험에 가입된 차량</label>
                </div>
            </div>
            <table className="table tbale-borderd">
                <colgroup>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                </colgroup>
                <thead></thead>
                <tbody>
                    <tr className="">
                        <th className="bg-light">조직명</th>
                        <td colSpan={3}>
                            <div className="d-flex justify-content-between">
                               <div className="">강남구점</div> 
                               <button className="w-99 h-42 btn btn-success">소속 조직 변경</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">차량번호</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th className="bg-light">차대번호</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">모델명</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th className="bg-light">연식</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">배기량</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th className="bg-light">차량 소유 구분</th>
                        <td>
                           <div className="d-flex align-items-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
                                <label className="form-check-label">개인</label>
                            </div>
                            <div className="form-check mx-4">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
                                <label className="form-check-label">법인</label>
                            </div>
                           </div> 
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">센서유형</th>
                        <td>
                           -
                        </td>
                        <th className="bg-light">센서번호</th>
                        <td>
                            <div className="d-flex justify-content-between">
                                <input type="text" name="" id="" className="form-control w-254 h-42"/>
                                <button className="w-99 h-42 btn btn-outline-success fs-12">센서번호 확인</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            
            

            <div className="d-flex justify-content-end my-5">
                <button className="w-378 h-56 btn btn-success" data-bs-toggle="modal" data-bs-target="#carModal3">
                    차량추가 완료
                </button>
            </div>
            </div>
 
 <CarModal3/>
        </>
    );
}
export default CarAdd4;