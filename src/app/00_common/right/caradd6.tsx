import CarModalCancel from "../modal/5/carModalCancel";

const CarAdd6 = () => {
    return(
        <>
        <div className="w-1512">
            <h6 className="fs-18 fw-700 my-4">차량 정보 수정 </h6>
            <div className="d-flex mb-10">
                <h6 className="fs-18 fw-700">차량 정보</h6>
                <div className="form-check d-flex align-items-center ml-2">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                    <label className="form-check-label">보험에 가입된 차량</label>
                </div>
            </div>
            <table className="table table-custom-40-left">
                <colgroup>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                </colgroup>
                <thead></thead>
                <tbody>
                    <tr className="">
                        <th>조직명</th>
                        <td colSpan={3}>
                            <div className="d-flex justify-content-between">
                               <div className="">강남구점</div> 
                               <button className="w-110 h-42 btn btn-success">소속 조직 변경</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>차량번호</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th>차대번호</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                    </tr>
                    <tr>
                        <th>모델명</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th>연식</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                    </tr>
                    <tr>
                        <th>배기량</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th>차량 소유 구분</th>
                        <td>
                           <div className="d-flex align-items-center">
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                                <label className="form-check-label">개인</label>
                            </div>
                            <div className="form-check d-flex align-items-center mx-4">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                                <label className="form-check-label">법인</label>
                            </div>
                           </div> 
                        </td>
                    </tr>
                    <tr>
                        <th>센서유형</th>
                        <td>
                           -
                        </td>
                        <th>센서번호</th>
                        <td>
                            <div className="d-flex justify-content-between">
                                <input type="text" name="" id="" className="form-control w-254 h-42"/>
                                <button className="w-120 h-42 btn text-success border-success">센서번호 확인</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <h6 className="fs-18 fw-700 my-4">차량 보험 정보</h6>
            <table className="table table-custom-40-left">
                <colgroup>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                </colgroup>
                <thead></thead>
                <tbody>
                <tr>
                        <th>보험종류</th>
                        <td>
                        <select name="" id="" className="form-select">
                            <option value="">책임보험</option>
                            <option value="">책임보험</option>
                            <option value="">책임보험</option>
                        </select>
                        </td>
                        <th>보험사</th>
                        <td>
                        <select name="" id="" className="form-select">
                            <option value="">선택</option>
                            <option value="">책임보험</option>
                            <option value="">책임보험</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <th>보험 가입일</th>
                        <td>
                            <input type="date" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th>보험 만기일</th>
                        <td>
                            <input type="date" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                    </tr>
                    <tr>
                        <th>보험 상품명</th>
                        <td colSpan={3}>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                    </tr>                    
                </tbody>
            </table>
           

            <div className="d-flex justify-content-end my-5">
                <button className="w-378 h-56 btn btn-light">
                    차량 정보 수정 완료
                </button>
            </div>
            </div>
 <CarModalCancel/>
        </>
    );
}
export default CarAdd6;