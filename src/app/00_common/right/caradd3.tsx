import CarModalCancel from "../modal/5/carModalCancel";

const CarAdd3 = () => {
    return(
        <>
        <div className="w-1512">
            <h6 className="fs-18 fw-700 my-4">차량추가</h6>
            <div className="d-flex align-items-center mb-10">
                <h6 className="fs-18 fw-700">차량 정보</h6>
                <div className="form-check d-flex align-items-center ml-2">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
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
                                <button className="w-110 h-42 btn text-success border-success">센서번호 확인</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <h6 className="fs-18 fw-700 mt-20 mb-10">차량 보험 정보</h6>
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
            <div className="my-4 d-flex justify-content-between">
                <div className="">
                <h6 className="fs-18 fw-700">운전자 배정</h6>
                <p className="w-205">조직에 소속된 운전자만 배정할 수 있습니다.</p>
                </div>

                <button className="btn text-success border-success w-378 h-42" data-bs-toggle="modal" data-bs-target="#carModalCancel">
                운전자 배정 취소
                </button>
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
                <tr>
                        <th>운전자명</th>
                        <td>
                            김별따
                        </td>
                        <th>운전자 연락처</th>
                        <td>
                        01012345678
                        </td>
                </tr>
                <tr>
                        <th>나이(생년월일)</th>
                        <td>
                        43세 (1981-05-10)
                        </td>
                        <th>성별</th>
                        <td>
                        남성
                        </td>
                </tr>
                <tr>
                        <th>내외국인</th>
                        <td>
                        내국인
                        </td>
                        <th>주소</th>
                        <td>
                        (06771) 서울특별시 서초구 매헌로 16
                        </td>
                </tr>
                <tr>
                        <th>보호자 연락처</th>
                        <td>
                        01098765432
                        </td>
                        <th>보호자와의 관계</th>
                        <td>
                        친구
                        </td>
                </tr>
                <tr>
                        <th>혈액형</th>
                        <td>
                        RH+ A
                        </td>
                        <th>APP 사용 여부</th>
                        <td>
                        미사용
                        </td>
                </tr>
                <tr>
                        <th>평균 안전점수</th>
                        <td>
                        80점
                        </td>
                        <th>시간제 보험</th>
                        <td>
                        미가입
                        </td>
                </tr>
                <tr>
                        <th>건강특이사항</th>
                        <td>
                        아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 <br/>대하여, 알레르기 반응 보인 적이 있음
                        </td>
                        <th>비고</th>
                        <td>
                        아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 <br/>대하여, 알레르기 반응 보인 적이 있음
                        </td>
                </tr>
                </tbody>
            </table>


            <div className="d-flex justify-content-end my-5">
                <button className="w-378 h-56 btn btn-success">
                 
                    차량추가 완료
               
                </button>
            </div>
            </div>
 <CarModalCancel/>
        </>
    );
}
export default CarAdd3;