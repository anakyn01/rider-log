const CarAdd = () => {
    return(
        <>
        <div className="d-flex w-1656 justify-content-center">
            <div className="content">
            <div className="w-1512">
            <h6 className="fs-18 fw-700">차량추가</h6>
            <div className="d-flex mt-40 mb-20">
                <h6 className="fs-18 fw-700">차량 정보</h6>
                <div className="form-check d-flex align-items-center ml-2">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                    <label className="form-check-label fs-14">보험에 가입된 차량</label>
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
                        <td>
                            <div className="d-flex justify-content-between">
                               <div className="">강남구점</div> 
                               <button className="btn border-success text-success w-110 h-42">소속 조직 변경</button>
                            </div>
                        </td>
                        <th>서비스 등록일</th>
                        <td>2024-05-10</td>
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
                           <div className="d-flex align-items-center ml-4">
                            <div className="d-flex align-items-center">
                                <input className="form-check-input" type="radio" id="check1" name="option1" value="something" checked/><div className="">개인</div>
                            </div>
                            <div className="d-flex align-items-center mx-4">
                                <input className="form-check-input" type="radio" id="check1" name="option1" value="something"/><div className="">법인</div>
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
                                <input type="text" name="" id="" className="form-control w254h42"/>
                                <button className="senBtn">센서번호 확인</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <h6 className="fs-22">차량 보험 정보</h6>
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
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th>보험사</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                    </tr>
                    <tr>
                        <th>보험 가입일</th>
                        <td>
                            <input type="date" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th>보험 만기일</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
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
                <a className="btn btn-light w-378 h-56 bgf7f7f7" href="http://localhost:3000/06_dash/04_car/5">
                    차량추가 완료
                </a>
            </div>
        </div>
            </div>
        </div>

        </>
    );
}
export default CarAdd;