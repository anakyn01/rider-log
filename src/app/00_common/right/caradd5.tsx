import CarModal6 from "../modal/carModal6";
import CarModal7 from "../modal/carModal7";
import CarModalCancel from "../modal/carModalCancel";
import CenterPagenation from "../pagenation/centerPagenation";

const CarAdd5 = () => {
    return(
        <>
        <div className="w-1512">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex h-26">
                <h6 className="fs-22 fw-bold">차량상세</h6>
                <button className="btn btn-success">실시간 지도에서 위치확인</button>
                </div>
            
            <div className="d-flex w-370 h-42">
                <button className="w-179 h-42 btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#carModal6">
                    차량삭제
                </button>
                <button className="w-179 h-42 btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#carModal7">
                    차량정보수정
                </button>
            </div>
            </div>
            
            <div className="d-flex my-4">
                <h6 className="fs-22">차량 정보</h6>
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
                        <td>
                            <div className="d-flex justify-content-between">
                               <div className="">강남구점</div> 
                               <button className="w-99 h-42 btn btn-success">소속 조직 변경</button>
                            </div>
                        </td>
                        <th className="bg-light">
                            서비스 등록일
                        </th>
                        <td>
                            2024-05-10
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">차량번호</th>
                        <td>
                        서울가 1234
                        </td>
                        <th className="bg-light">차대번호</th>
                        <td>
                        MHDL41BP8A000001
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">모델명</th>
                        <td>
                            오토바이
                        </td>
                        <th className="bg-light">연식</th>
                        <td>
                            2024
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">배기량</th>
                        <td>
                            125cc
                        </td>
                        <th className="bg-light">차량 소유 구분</th>
                        <td>
                           개인
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">센서유형</th>
                        <td>
                        LTE
                        </td>
                        <th className="bg-light">센서번호</th>
                        <td>
                        000000000000000
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">누적주행거리</th>
                        <td>
                        1,234km
                        </td>
                        <th className="bg-light">센서번호</th>
                        <td>
                        123시간 12분 24초
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <h6 className="fs-22 fw-bold my-4">차량 보험 정보</h6>
            <table className="table tbale-borderd">
                <colgroup>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                </colgroup>
                <thead></thead>
                <tbody>
                <tr>
                        <th className="bg-light">보험종류</th>
                        <td>
                        책임보험
                        </td>
                        <th className="bg-light">보험사</th>
                        <td>
                        DB손해보험  
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">보험 가입일</th>
                        <td>
                        2024-05-09
                        </td>
                        <th className="bg-light">보험 만기일</th>
                        <td>
                        2024-05-16
                        </td>
                    </tr>
                    <tr>
                        <th className="bg-light">보험 상품명</th>
                        <td colSpan={3}>
                        무배당 프로미라이프 다이렉트 참좋은라이더+보험2311(CM)
                        </td>
                    </tr>                    
                </tbody>
            </table>
            <div className="my-4 d-flex justify-content-between">
                <div className="">
                <h6 className="fs-22 fw-bold">운전자 배정</h6>
                <p className="w-205">조직에 소속된 운전자만 배정할 수 있습니다.</p>
                </div>

                <button className="btn btn-outline-success w-378 h-42" data-bs-toggle="modal" data-bs-target="#carModalCancel">
                운전자 배정 취소
                </button>
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
                <tr>
                        <th className="bg-light">운전자명</th>
                        <td>
                            김별따
                        </td>
                        <th className="bg-light">운전자 연락처</th>
                        <td>
                        01012345678
                        </td>
                </tr>
                <tr>
                        <th className="bg-light">나이(생년월일)</th>
                        <td>
                        43세 (1981-05-10)
                        </td>
                        <th className="bg-light">성별</th>
                        <td>
                        남성
                        </td>
                </tr>
                <tr>
                        <th className="bg-light">내외국인</th>
                        <td>
                        내국인
                        </td>
                        <th className="bg-light">주소</th>
                        <td>
                        (06771) 서울특별시 서초구 매헌로 16
                        </td>
                </tr>
                <tr>
                        <th className="bg-light">보호자 연락처</th>
                        <td>
                        01098765432
                        </td>
                        <th className="bg-light">보호자와의 관계</th>
                        <td>
                        친구
                        </td>
                </tr>
                <tr>
                        <th className="bg-light">혈액형</th>
                        <td>
                        RH+ A
                        </td>
                        <th className="bg-light">APP 사용 여부</th>
                        <td>
                        미사용
                        </td>
                </tr>
                <tr>
                        <th className="bg-light">평균 안전점수</th>
                        <td>
                        80점
                        </td>
                        <th className="bg-light">시간제 보험</th>
                        <td>
                        미가입
                        </td>
                </tr>
                <tr>
                        <th className="bg-light">건강특이사항</th>
                        <td>
                        아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 <br/>대하여, 알레르기 반응 보인 적이 있음
                        </td>
                        <th className="bg-light">비고</th>
                        <td>
                        아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 <br/>대하여, 알레르기 반응 보인 적이 있음
                        </td>
                </tr>
                </tbody>
            </table>

            <div className="my-4 d-flex justify-content-between">
                <h6 className="fs-22 fw-bold">운전자 배정 이력</h6>
            </div>

            <table className="table tbale-borderd">
                <colgroup>
                <col style={{width:"189px"}}/>
                <col style={{width:"189px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                <col style={{width:"378px"}}/>
                </colgroup>
                <thead>
                   <tr className="table-light text-center">
                   <th>번호</th><th>운전자명</th><th>조직명</th><th>배정일시</th><th>운전자연락처</th>
                    </tr> 
                    
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td><td>김별따</td><td>강남구청</td><td>2024-05-24 09:00</td><td>01012345678</td>
                    </tr>
                </tbody>
            </table>
            <CenterPagenation/>
            </div>
 <CarModalCancel/>
 <CarModal6/>
 <CarModal7/>
        </>
    );
}
export default CarAdd5;