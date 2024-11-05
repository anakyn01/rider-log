import Safe from "../svg/6/Safe";
import AccTotal from "../svg/6/AccTotal";
import TabContent from "./TabContent";

const Admin = () => {
    return(
<div className="w-1512 p-5"> 
        <div className="p-3">
            <h6 className="fs-18 fw-700">실시간 위치 검색</h6>
            <input type="text" className="form-control input-bg h-56 mag" placeholder="차량번호 또는 운전자 이름으로 검색해 보세요"/>
        </div>

        <div className="p-3">
            <div className="d-flex mb-3 mt-4">
            <h1 className="fs-32 mr-3">별따러가자 양재점</h1><button className="btn btn-outline-success btn-outline-success-w84-h36">조직선택</button>
            </div>
            
 <div className="w-1512 h-150 d-flex justify-content-around border border-1 rounded-4 align-items-center">
            <div className="py-4 text-center ">
                <a href="#" className="btn wide-small">
                    <span className="fs-16">전체등록 차량</span> 
                    <h2 className="fs-28">2,000</h2>
                </a>
            </div>
            <div className="right-line"/>
            <div className="py-4 text-center ">
                <a href="#" className="btn wide-small">
                <span className="fs-16 text-success">주행중 차량</span> 
                <h2 className="text-success fs-28">2,000</h2>
                </a>
            </div>
            <div className="right-line"/>
            <div className="py-4 text-center ">
                <a href="#" className="btn wide-small">
                <span className="fs-16 ">미주행 차량</span>
                <h2 className="fs-28">2,000</h2>
                </a>
            </div>
            <div className="right-line"/>
            <div className="py-4 text-center ">
                <a href="#" className="btn wide-small">
                <span className="acText">오늘발생한 사고</span>   
                <h2 className="acText-Bottom">2,000</h2>
                </a>
            </div>
            <div className="right-line"/>
            <div className="py-4 text-center ">
                <a href="#" className="btn wide-small">
                <span className="fs-16 ">운휴 차량</span>
                <h2 className="fs-28">2,000</h2>
                </a>
            </div>
 </div>

 
        </div>
        <div className="d-flex justify-content-between p-3">

        <div className="p-3 border border-1 rounded-2 w-746 mr-3">
       <div className="d-flex justify-content-between my-2">
            <h5 className="fs-18 fw-700">공지사항</h5>
            <button className="btn fs-18 d-flex align-items-center">더보기
                <span className="ml-2"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="#5D5E60"/>
</svg></span> 
</button>
        </div>
        <table className="table table-borderless">
            <colgroup>
            <col style={{width:"10%"}}/>
            <col style={{width:"70%"}}/>
            <col style={{width:"20%"}}/>
            </colgroup>
            <thead>
                <tr>
                <th></th><th></th><th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="custom-text">공지</td><td>업데이트 버전 안내</td><td className="custom-text-number">2024-04-23</td>
                </tr>
                <tr>
                    <td className="custom-text">공지</td><td>업데이트 버전 안내</td><td className="custom-text-number">2024-04-23</td>
                </tr>
                <tr>
                    <td className="custom-text">공지</td><td>업데이트 버전 안내</td><td className="custom-text-number">2024-04-23</td>
                </tr>
                <tr>
                    <td className="custom-text">공지</td><td>업데이트 버전 안내</td><td className="custom-text-number">2024-04-23</td>
                </tr>
            </tbody>
        </table>
       </div>



       <div className="p-3 border border-1 rounded-2 w-746">
        <div className="d-flex justify-content-between my-2">
            <h5 className="fs-18 fw-700">계약정보</h5>
        </div>
        <table className="table table-borderless">
        <colgroup>
            <col style={{width:"20%"}}/>
            <col style={{width:"80%"}}/>
            </colgroup>
            <thead>
                <tr>
                <th></th><th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="custom-text">계약자명</td><td className="custom-text-black">별따러 가자</td>
                </tr>
                <tr>
                    <td className="custom-text">전자계약센서</td><td className="custom-text-black">2,000대</td>
                </tr>
                <tr>
                    <td className="custom-text">계약센서(LTE)</td><td className="custom-text-black">1,000대</td>
                </tr>
                <tr>
                    <td className="custom-text">계약센서(LTE)</td><td className="custom-text-black">1,000대</td>
                </tr>
            </tbody>
        </table>
        </div>

        </div>

<div className="d-flex justify-content-between p-3">
        <div className="p-3 border border-1 rounded-2 w-746 mr-3 h-340">
            <div className="d-flex justify-content-between my-2">
                <h5 className="fs-18 fw-700">운행 가동률<span>(최근 7일)</span></h5>
                <button className="btn fs-18 d-flex align-items-center">더보기
                <span className="ml-2"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="#5D5E60"/>
</svg></span> 
</button>
            </div>

            <div className="d-flex justify-content-between align-items-end">

            </div>
        </div>

        <div className="p-3 border border-1 rounded-2 w-746 h-340">
            <div className="d-flex justify-content-between my-2">
                <h5 className="fs-18 fw-700">월별 평균 안전점수</h5>
                <button className="btn fs-18">더보기 &#62;</button>
            </div>
        <Safe/>
        </div>
</div>

<div className="d-flex justify-content-between w-1512 p-3">

<div className="p-3 border border-1 rounded-2 w-746 mr-3">
            <div className="d-flex justify-content-between my-2">
                <h5 className="fw-700 fs-18">주행 리포트 (최근 30일)</h5>
                <button className="btn fs-18"></button>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-center">
                    <div className="p-2" >
                        <div className="text-center fs-16">운행 가동률</div>
                        <div className="my-3 d-flex justify-content-center">
                            <div className="border border-4 border-success rounded-circle py-5 px-5">70%</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="">최근 30일 최고</div>
                            <div className="">90%</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="">최근 30일 최저</div>
                            <div className="">50%</div>
                        </div>
                   </div>
                 </div>

                 <div className="d-flex justify-content-center">
                    <div className="p-2" >
                        <div className="text-center fs-16">운행 가동률</div>
                        <div className="my-3 d-flex justify-content-center">
                            <div className="border border-4 border-success rounded-circle py-5 px-5">70%</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="">최근 30일 최고</div>
                            <div className="">90%</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="">최근 30일 최저</div>
                            <div className="">50%</div>
                        </div>
                   </div>
                 </div>

                 <div className="d-flex justify-content-center">
                    <div className="p-2" >
                        <div className="text-center fs-16">운행 가동률</div>
                        <div className="my-3 d-flex justify-content-center">
                            <div className="border border-4 border-success rounded-circle py-5 px-5">70%</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="">최근 30일 최고</div>
                            <div className="">90%</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="">최근 30일 최저</div>
                            <div className="">50%</div>
                        </div>
                   </div>
                 </div>

                </div>
        </div>

        <div className="p-3 border border-1 rounded-2 w-746">
            <div className="d-flex justify-content-between my-2 ">
                <h5 className="fs-18 fw-700">사고 발생 건수 (최근 30일)</h5>
                <button className="btn"></button>
            </div>
            <div className="">
<AccTotal/>

            </div>

        </div>
 
</div>
 
<div className="d-flex justify-content-between p-3">
 
        <div className="p-3 border-1 rounded-2 w-746 h-340 border border-1 mr-3">
            <div className="d-flex justify-content-between my-2 ">
                <h5 className="fs-18 fw-700">조직별 평균 안전점수 순위</h5>
            </div>

            <ul className="nav nav-tabs nav-justified " id="myTab" role="tablist">
                <li className="nav-item h-45" role="presentation">
                    <button className="nav-link active tabs" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">전체기간</button>
                </li>
                <li className="nav-item h-45" role="presentation">
                    <button className="nav-link tabs" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">최근 1년</button>
                </li>
                <li className="nav-item h-45" role="presentation">
                    <button className="nav-link tabs" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">최근 30일</button>
                </li>
            </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <TabContent/>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <TabContent/>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <TabContent/>   
                    </div>
                </div>
        </div>
 
        <div className="p-3 border-1 rounded-2 w-746 h-340 border border-1">
            <div className="d-flex justify-content-between my-2 ">
                <h5 className="fs-18 fw-700">차량별 주행 순위</h5>
                <button className="btn"></button>
            </div>

            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active tabs" id="home-tab" data-bs-toggle="tab" data-bs-target="#five" type="button" role="tab" aria-controls="five" aria-selected="true">평균 주행거리</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link tabs" id="profile-tab" data-bs-toggle="tab" data-bs-target="#six" type="button" role="tab" aria-controls="six" aria-selected="false">평균 주행시간</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link tabs" id="contact-tab" data-bs-toggle="tab" data-bs-target="#seven" type="button" role="tab" aria-controls="seven" aria-selected="false">평균 안전점수</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link tabs" id="contact-tab" data-bs-toggle="tab" data-bs-target="#eight" type="button" role="tab" aria-controls="eight" aria-selected="false">사고 건수</button>
                </li>
            </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="five" role="tabpanel" aria-labelledby="five">
                    <TabContent/>
                    </div>
                    <div className="tab-pane fade" id="six" role="tabpanel" aria-labelledby="six">
                    <TabContent/>
                    </div>
                    <div className="tab-pane fade" id="seven" role="tabpanel" aria-labelledby="seven">
                    <TabContent/>
                    </div>
                    <div className="tab-pane fade" id="eight" role="tabpanel" aria-labelledby="eight">
                    <TabContent/> 
                    </div>
                </div>
        </div>
        </div>

        </div>
    );
}
export default Admin;

{/*
<table className="table table-borderless">
                <colgroup>
                <col style={{width:"25%"}}/>
                <col style={{width:"30%"}}/>
                <col style={{width:"50%"}}/>
                </colgroup>
            <thead>
                <tr>
                    <th></th><th></th><th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan={5}>
                        <div className="border border-4 border-success rounded-circle py-5 px-5 d-flex justify-content-center align-items-center w-140 h-140">전체<br/>24건</div>
                    </td>
                    <td><div className="d-flex"><div className="bg-success rounded-circle" style={{width:"18px", height:"18px"}}></div>&nbsp;역삼점 8건</div></td>
                    <td><div className="border-2 border-success"></div><sup>33.3%</sup></td>                   
                </tr>
                <tr><td><div className="d-flex"><div className="bg-success rounded-circle" style={{width:"18px", height:"18px"}}></div>&nbsp;논현점 8건</div></td><td><div className="border-2 border-success"></div><sup>33.3%</sup></td></tr>
                <tr><td><div className="d-flex"><div className="bg-success rounded-circle" style={{width:"18px", height:"18px"}}></div>&nbsp;신사점 8건</div></td><td><div className="border-2 border-success"></div><sup>33.3%</sup></td></tr>
                <tr><td><div className="d-flex"><div className="bg-success rounded-circle" style={{width:"18px", height:"18px"}}></div>&nbsp;8건</div></td><td><div className="border-2 border-success"></div><sup>33.3%</sup></td></tr>
                <tr> <td><div className="d-flex"><div className="bg-success rounded-circle" style={{width:"18px", height:"18px"}}></div>&nbsp;기타 8건</div></td><td><div className="border-2 border-success"></div><sup>33.3%</sup></td></tr>
            </tbody>
        </table>  
        
        <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="fs-16">52%</p>
                        <svg width="20" height="100" viewBox="0 0 20 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V100H0V4Z" fill="#DDDEDE"/>
</svg>

                        <p className="fs-16 text-danger mt-3">21(일)</p>
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="fs-16">52%</p>
                        <svg width="20" height="130" viewBox="0 0 20 130" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V130H0V4Z" fill="#DDDEDE"/>
</svg>

                        <p className="fs-16  mt-3">21(월)</p>
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="fs-16">52%</p>
                        <svg width="20" height="130" viewBox="0 0 20 130" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V130H0V4Z" fill="#DDDEDE"/>
</svg>

                        <p className="fs-16  mt-3">21(화)</p>
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="fs-16">52%</p>
                        <svg width="20" height="78" viewBox="0 0 20 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V78H0V4Z" fill="#DDDEDE"/>
</svg>

                        <p className="fs-16  mt-3">21(수)</p>
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="fs-16">52%</p>
                        <svg width="20" height="180" viewBox="0 0 20 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V180H0V4Z" fill="#019868"/>
</svg>

                        <p className="fs-16  mt-3">21(목)</p>
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="fs-16">52%</p>
                        <svg width="20" height="38" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V38H0V4Z" fill="#DDDEDE"/>
</svg>

                        <p className="fs-16  mt-3">21(금)</p>
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="fs-16">52%</p>
                        <div className="">0%</div>
                        <p className="fs-16 text-primary mt-3">21(토)</p>
                </div>
            </div>
        </div>
*/}