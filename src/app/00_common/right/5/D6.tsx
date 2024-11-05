import CarModalCancel from "../../modal/5/carModalCancel";
import Driver from "../../modal/5/driver";
import DriverAdd from "../../modal/5/driverAdd";
import DriverDelete from "../../modal/5/DriverDelete";

const D6 = () => {
    return(
        <>
<div className="d-flex justify-content-center w-1656">
    <div className="content">
    <div className="w-1512">
        <div className="d-flex justify-content-between w-1512">
            
            <div className="d-flex align-items-center mb-4 mt-2">
                <h6 className="fs-18 fw-700">운전자 상세</h6>
                <button className="btn btn-success btn-success-w178-h26 mx-2">
<span>
<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.375C4.27513 3.375 3.6875 3.96263 3.6875 4.6875C3.6875 5.41237 4.27513 6 5 6C5.72487 6 6.3125 5.41237 6.3125 4.6875C6.3125 3.96263 5.72487 3.375 5 3.375ZM2.8125 4.6875C2.8125 3.47938 3.79188 2.5 5 2.5C6.20812 2.5 7.1875 3.47938 7.1875 4.6875C7.1875 5.89562 6.20812 6.875 5 6.875C3.79188 6.875 2.8125 5.89562 2.8125 4.6875Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99984 1.1875C2.95724 1.1875 1.354 2.72544 1.354 4.5599C1.354 6.2573 2.42622 8.25068 4.49415 10.6232C4.76249 10.9311 5.23718 10.9311 5.50552 10.6232C7.57346 8.25068 8.64567 6.2573 8.64567 4.5599C8.64567 2.72544 7.04243 1.1875 4.99984 1.1875ZM0.479004 4.5599C0.479004 2.18606 2.53211 0.3125 4.99984 0.3125C7.46757 0.3125 9.52067 2.18606 9.52067 4.5599C9.52067 6.59657 8.25477 8.8007 6.16513 11.1982C5.54806 11.9061 4.45161 11.9061 3.83454 11.1982C1.74491 8.8007 0.479004 6.59657 0.479004 4.5599Z" fill="#5D5E60"/>
</svg>

                    </span>
                    실시간 지도에서 위치확인
                    </button>
            </div>

            <div className="d-flex justify-content-between w-370 h-42">
                <a href="" className="btn text-success border-success w-179 h-42 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#driverdelete">운전자 삭제</a>
                <a href="http://localhost:3000/06_dash/05_driver/6" className="btn bg-success w-179 h-42 text-white d-flex justify-content-center align-items-center">운전자 정보수정</a>
            </div>
        

        </div>
            
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
                        <th>운전자 등록일</th>
                        <td>
                        2024-05-10
                        </td>
                    </tr>
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
                        (06771) 서울특별시 서초구 매헌로 16, 12층
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
                        Rh+ A
                        </td>
                        <th>APP 사용 여부</th>
                        <td className="">
                        미사용
                        </td>
                    </tr>
                    <tr>
                        <th>평균 안전점수</th>
                        <td>
                        80점
                        </td>
                        <th>시간제 보험</th>
                        <td className="">
                        미가입
                        </td>
                    </tr>
                    <tr>
                        <th>건강특이사항</th>
                        <td>
                        아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 대하여, 알레르기 반응 보인 적이 있음
                        </td>
                        <th>비고</th>
                        <td className="">
                        아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 대하여, 알레르기 반응 보인 적이 있음
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center">
                <div className="">
                    <h6 className="fs-18 fw-700 my-4">차량 배정</h6>
                    
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
                <tr>
                        <th>차량번호</th>
                        <td>
                        서울가1234
                        </td>
                        <th>차대번호</th>
                        <td>
                        KMHDL41BP8A000001
                        </td>
                    </tr>
                    <tr>
                        <th>모델명</th>
                        <td>
                        오토바이
                        </td>
                        <th>연식</th>
                        <td>
                        2024
                        </td>
                    </tr>
                    <tr>
                        <th>배기량</th>
                        <td>
                        125cc
                        </td>
                        <th>차량 소유 구분</th>
                        <td>
                        개인
                        </td>
                    </tr>
                    <tr>
                        <th>센서유형</th>
                        <td>
                        LTE
                        </td>
                        <th>센서번호</th>
                        <td>
                        000000000000000
                        </td>
                    </tr>                  
                </tbody>
            </table>

<div className="d-flex">
    <h6 className="fs-18 fw-700 mb-3 mt-45">차량 배정 이력</h6>
</div>          

<table className="table table-custom-40">
<colgroup>
<col style={{width:"189px"}}/>
<col style={{width:"189px"}}/>
<col style={{width:"378px"}}/>
<col style={{width:"378px"}}/>
<col style={{width:"378px"}}/>
</colgroup>
    <thead>
<tr>
    <th>번호</th><th>차량번호</th><th>조직명</th><th>배정일시</th><th>차대번호</th>
</tr>
    </thead>
    <tbody>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
<tr>
    <td>1</td><td>서울가1234</td><td>강남구점</td><td>2024-05-24 09:00</td><td>KMHDL41BP8A000001</td>
</tr>
    </tbody>
</table>
 



            </div>
 <CarModalCancel/>
 <Driver/>
 <DriverAdd/>
 <DriverDelete/>
    </div>
</div>
        </>
    );
}
export default D6;
{/*
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

                        <div className="mt-40 mb-20">
                <h6 className="fs-18 fw-700">차량 배정</h6>
                <div className="fs-12 fw-400">
                    조직에 소속된 운전자만 배정할 수 있습니다.
                </div>
            </div>
    */}