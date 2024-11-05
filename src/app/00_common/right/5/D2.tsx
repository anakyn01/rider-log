import CarModalCancel from "../../modal/5/carModalCancel";
import Driver from "../../modal/5/driver";
import DriverAdd from "../../modal/5/driverAdd";

const D2 = () => {
    return(
        <>
<div className="d-flex justify-content-center w-1656">
    <div className="content">
    <div className="w-1512">
            <h6 className="fs-18 fw-700 d-flex align-items-center mb-4 mt-2">운전자 추가<span className="fs-12 Color77787b ml-3"><span className="fs-12 ColorDb121a">※</span> 필수 입력 항목</span></h6>
            <div className="d-flex">
                <h6 className="fs-18 fw-700 mb-3">운전자 정보</h6>
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
                               <div className="">강남구점</div> 
                        </td>
                        <th>운전자 연락처<span className="fs-12 ColorDb121a ml-2">※</span></th>
                        <td>
                        <input type="text" className="form-control" placeholder="숫자만 최대 11자 입력 가능"/>
                        </td>
                    </tr>
                    <tr>
                        <th>운전자명<span className="fs-12 ColorDb121a ml-2">※</span></th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th>생년월일<span className="fs-12 ColorDb121a ml-2">※</span></th>
                        <td>
                            <input type="date" className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <th>성별<span className="fs-12 ColorDb121a ml-2">※</span></th>
                        <td>
                        <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center mx-4">
                                    <input className="form-check-input" type="radio" id="" name="" value="something" />
                                    <label className="form-check-label ml-2">남성</label>
                                </div>
                                <div className="d-flex align-items-center mx-4">
                                    <input className="form-check-input" type="radio" id="" name="" value="something" />
                                    <label className="form-check-label ml-2">여성</label>
                                </div>
                           </div>
                        </td>
                        <th>내외국인<span className="fs-12 ColorDb121a ml-2">※</span></th>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center mx-4">
                                    <input className="form-check-input" type="radio" id="" name="" value="something" />
                                    <label className="form-check-label ml-2">내국인</label>
                                </div>
                                <div className="d-flex align-items-center mx-4">
                                    <input className="form-check-input" type="radio" id="" name="" value="something" />
                                    <label className="form-check-label ml-2">외국인</label>
                                </div>
                           </div> 
                        </td>
                    </tr>
                    <tr>
                        <th>보호자 연락처</th>
                        <td>
                            <input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/>
                        </td>
                        <th>보호자와의 관계</th>
                        <td>
                        <input type="text" className="form-control" placeholder="최대 20자 입력 가능"/>
                        </td>
                    </tr>
                    <tr>
                        <th>혈액형<span className="fs-12 ColorDb121a ml-2">※</span></th>
                        <td>
                            <div className="d-flex">
                                <select name="" id="" className="form-select w-175 h-42">
                                    <option value="선택"></option>
                                </select>
                                <div className="d-flex align-items-center mx-5">
                                    <input type="checkbox" className="form-check-input"/>
                                    <div>
                                        Rh-
                                    </div>
                                </div>
                            </div>

                        </td>
                        <th>시간제 보험</th>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center mx-4">
                                    <input className="form-check-input" type="radio" id="" name="" value="something" />
                                    <label className="form-check-label ml-2">미가입</label>
                                </div>
                                <div className="d-flex align-items-center mx-4">
                                    <input className="form-check-input" type="radio" id="" name="" value="something" />
                                    <label className="form-check-label ml-2">가입</label>
                                </div>
                           </div> 
                        </td>
                    </tr>
                    <tr>
                        <th>건강특이사항</th>
                        <td>
                        <textarea className="form-control w-360 h-140" placeholder="공백 포함 최대 200자 입력 가능"></textarea>
                        </td>
                        <th>주소</th>
                        <td className="">
                            <div className="d-flex justify-content-between my-1">
                                <input type="text" name="" id="" className="form-control w270h42" placeholder="우편번호"/>
                                <button className="senBtn8442">주소 검색</button>
                            </div>
                            <input type="text" name="" id="" className="form-control w-362 h-42" placeholder="기본 주소"/>
                            <input type="text" name="" id="" className="form-control w-362 h-42 my-1" placeholder="상세 주소"/>
                        </td>
                    </tr>
                    <tr>
                        <th>건강특이사항</th>
                        <td colSpan={3}>
                        <input type="text" className="form-control w-1118 h-42 input-bg" placeholder="공백 포함 최대 200자 입력 가능"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            {/*<h6 className="fs-18 fw-700 my-4">차량 보험 정보</h6>
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
            </table>*/}
           
            <div className="mt-40 mb-20">
                <h6 className="fs-18 fw-700">차량 배정</h6>
                <div className="fs-12 fw-400">
                    조직에 소속된 운전자만 배정할 수 있습니다.
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <a className="btn btn-outline-success mainBtn-outline-w748-h112" data-bs-toggle="modal" data-bs-target="#driver">
                    <div className="">
                        <div className="mb-10"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.6665 0.417969C2.35686 0.417969 2.9165 0.977613 2.9165 1.66797V6.834C5.53682 2.96464 9.97028 0.417969 14.9998 0.417969C22.4376 0.417969 28.5732 5.98488 29.4704 13.18C29.5558 13.865 29.0697 14.4896 28.3847 14.575C27.6996 14.6605 27.075 14.1744 26.9896 13.4893C26.2465 7.53001 21.1608 2.91797 14.9998 2.91797C10.6157 2.91797 6.77532 5.2522 4.65614 8.75129L9.99984 8.7513C10.6902 8.7513 11.2498 9.31095 11.2498 10.0013C11.2498 10.6917 10.6902 11.2513 9.99984 11.2513L1.6665 11.2513C0.976147 11.2513 0.416504 10.6916 0.416504 10.0013V1.66797C0.416504 0.977613 0.976148 0.417969 1.6665 0.417969ZM1.61499 15.4276C2.30004 15.3421 2.92463 15.8282 3.01005 16.5133C3.75317 22.4726 8.83886 27.0846 14.9998 27.0846C19.384 27.0846 23.2244 24.7504 25.3435 21.2513H19.9998C19.3095 21.2513 18.7498 20.6917 18.7498 20.0013C18.7498 19.3109 19.3095 18.7513 19.9998 18.7513H28.3332C29.0235 18.7513 29.5832 19.3109 29.5832 20.0013V28.3346C29.5832 29.025 29.0235 29.5846 28.3332 29.5846C27.6428 29.5846 27.0832 29.025 27.0832 28.3346V23.1686C24.4629 27.038 20.0294 29.5846 14.9998 29.5846C7.56209 29.5846 1.42648 24.0177 0.529267 16.8226C0.443843 16.1376 0.929935 15.513 1.61499 15.4276Z" fill="#019868"/>
</svg>
</div>
등록된 운전자 정보 불러오기
                    </div>
                
                </a>
                <a className="btn btn-outline-success mainBtn-outline-w748-h112" data-bs-toggle="modal" data-bs-target="#driverAdd">
                    <div className="">
                        <div className="mb-10">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.25C9.40608 3.25 3.25 9.40608 3.25 17C3.25 24.5939 9.40608 30.75 17 30.75C24.5939 30.75 30.75 24.5939 30.75 17C30.75 9.40608 24.5939 3.25 17 3.25ZM0.75 17C0.75 8.02537 8.02537 0.75 17 0.75C25.9746 0.75 33.25 8.02537 33.25 17C33.25 25.9746 25.9746 33.25 17 33.25C8.02537 33.25 0.75 25.9746 0.75 17Z" fill="#019868"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 17C9.5 16.3096 10.0596 15.75 10.75 15.75H23.25C23.9404 15.75 24.5 16.3096 24.5 17C24.5 17.6904 23.9404 18.25 23.25 18.25H10.75C10.0596 18.25 9.5 17.6904 9.5 17Z" fill="#5D5E60"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 9.5C17.6904 9.5 18.25 10.0596 18.25 10.75V23.25C18.25 23.9404 17.6904 24.5 17 24.5C16.3096 24.5 15.75 23.9404 15.75 23.25V10.75C15.75 10.0596 16.3096 9.5 17 9.5Z" fill="#5D5E60"/>
</svg>

                        </div>
                        새로운 운전자 추가하기
                    </div>
                
                </a>
            </div>

            <div className="d-flex justify-content-end my-5">
                <a className="btn btn-light mainBtn-gray-w378-h56" href="http://localhost:3000/06_dash/05_driver/2">
                    운전자 추가 완료
                </a>
            </div>
            </div>
 <CarModalCancel/>
 <Driver/>
 <DriverAdd/>
    </div>
</div>
        </>
    );
}
export default D2;