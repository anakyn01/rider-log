
import CarModal4 from "../modal/carModal4";
import CarModal5 from "../modal/carModal5";

const CarAdd2 = () => {
    return(
        <>
        <div className="w-1512">
            <h6 className="fs-18 fw-700 mt-20 mb-10">차량추가</h6>
            <div className="d-flex mt-40 mb-10">
                <h6 className="fs-18 fw-700 ">차량 정보</h6>
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
                               <button className="w-110 h-42 btn text-success border-success">소속 조직 변경</button>
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
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                <label className="form-check-label">개인</label>
                            </div>
                            <div className="form-check d-flex align-items-center mx-4">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
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
                                <button className="w-110 h-42 btn text-success border-success ">센서번호 확인</button>
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
            <div className="my-4">
            <h6 className="fs-18 fw-700">운전자 배정</h6>
            <p className="w-205">조직에 소속된 운전자만 배정할 수 있습니다.</p>
            </div>

            <div className="d-flex justify-content-between w-1512">
                <button className="w-748 h-122 btn btn-outline-success rounded-4 text-center" data-bs-toggle="modal" data-bs-target="#carModal4">
                    <div className="w-190">

                        <div className="d-flex justify-content-center mt-10 mb-10">
                            <div className="w-30 h-30 mb-10">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.66699 0.417969C2.35735 0.417969 2.91699 0.977613 2.91699 1.66797V6.834C5.5373 2.96464 9.97077 0.417969 15.0003 0.417969C22.4381 0.417969 28.5737 5.98488 29.4709 13.18C29.5563 13.865 29.0702 14.4896 28.3852 14.575C27.7001 14.6605 27.0755 14.1744 26.9901 13.4893C26.247 7.53001 21.1613 2.91797 15.0003 2.91797C10.6162 2.91797 6.77581 5.2522 4.65663 8.75129L10.0003 8.7513C10.6907 8.7513 11.2503 9.31095 11.2503 10.0013C11.2503 10.6917 10.6907 11.2513 10.0003 11.2513L1.66699 11.2513C0.976635 11.2513 0.416992 10.6916 0.416992 10.0013V1.66797C0.416992 0.977613 0.976636 0.417969 1.66699 0.417969ZM1.61547 15.4276C2.30052 15.3421 2.92512 15.8282 3.01054 16.5133C3.75366 22.4726 8.83935 27.0846 15.0003 27.0846C19.3845 27.0846 23.2248 24.7504 25.344 21.2513H20.0003C19.31 21.2513 18.7503 20.6917 18.7503 20.0013C18.7503 19.3109 19.31 18.7513 20.0003 18.7513H28.3337C29.024 18.7513 29.5837 19.3109 29.5837 20.0013V28.3346C29.5837 29.025 29.024 29.5846 28.3337 29.5846C27.6433 29.5846 27.0837 29.025 27.0837 28.3346V23.1686C24.4634 27.038 20.0299 29.5846 15.0003 29.5846C7.56258 29.5846 1.42697 24.0177 0.529755 16.8226C0.444331 16.1376 0.930424 15.513 1.61547 15.4276Z" fill="#019868"/>
</svg>

                            </div>
                        </div>
                      

                        <div className="h-20 text-success fs-16 fw-400">
                        등록된 운전자 정보 불러오기    
                        </div>
                    </div>
                </button>

                <button className="w-748 h-122 btn btn-outline-success rounded-4" data-bs-toggle="modal" data-bs-target="#carModal5">
                    <div className="w-190">

                        <div className="d-flex justify-content-center mt-10 mb-10">
                            <div className="w-30 h-30 mb-10">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.25C9.40608 3.25 3.25 9.40608 3.25 17C3.25 24.5939 9.40608 30.75 17 30.75C24.5939 30.75 30.75 24.5939 30.75 17C30.75 9.40608 24.5939 3.25 17 3.25ZM0.75 17C0.75 8.02537 8.02537 0.75 17 0.75C25.9746 0.75 33.25 8.02537 33.25 17C33.25 25.9746 25.9746 33.25 17 33.25C8.02537 33.25 0.75 25.9746 0.75 17Z" fill="#019868"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 17C9.5 16.3096 10.0596 15.75 10.75 15.75H23.25C23.9404 15.75 24.5 16.3096 24.5 17C24.5 17.6904 23.9404 18.25 23.25 18.25H10.75C10.0596 18.25 9.5 17.6904 9.5 17Z" fill="#5D5E60"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 9.5C17.6904 9.5 18.25 10.0596 18.25 10.75V23.25C18.25 23.9404 17.6904 24.5 17 24.5C16.3096 24.5 15.75 23.9404 15.75 23.25V10.75C15.75 10.0596 16.3096 9.5 17 9.5Z" fill="#5D5E60"/>
</svg>

                            </div>
                        </div>

                        <div className="h-20 text-success fs-16 fw-400">
                        새로운 운전자 추가하기   
                        </div>
                    </div>
                </button>
        </div>



            <div className="d-flex justify-content-end my-5">
                <a  className="w-378 h-56 btn btn-light bgf7f7f7" href="http://localhost:3000/06_dash/04_car/6">차량추가 완료</a>
            </div>
            </div>
<CarModal4/>
<CarModal5/>
        </>
    );
}
export default CarAdd2;