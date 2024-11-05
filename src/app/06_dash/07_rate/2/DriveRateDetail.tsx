import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const DriveRateDetail = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mt-50 d-flex justify-content-between align-items-center mb-30">

        <div className="">
            <p className="fs-16 fw-700">차량/운전자 주행 이력</p>
        </div>
      </div>

      <div className="fs-14 fw-500 mt-40">
      차량/운전자 정보 
      </div>

      <div className="h-168">
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">조직명</div><div className="fs-14 fw-400 ml-5">강남구점</div>    
        </div>
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">차량번호</div><div className="fs-14 fw-400 ml-5">서울가1234</div>    
        </div>
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">운전자명</div><div className="fs-14 fw-400 ml-5">김별따</div>    
        </div>
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">운전자 연락처</div><div className="fs-14 fw-400 ml-5">01012345678</div>    
        </div>
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">누적 주행거리</div><div className="fs-14 fw-400 ml-5">123.4km</div>    
        </div>
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">누적 주행시간</div><div className="fs-14 fw-400 ml-5">1시간 20분 30초</div>    
        </div>
      </div>

      <div className="fs-14 fw-500 mt-40">
      월별 주행 정보
      </div>  
      <div className="h-82 d-flex justify-content-between bg-light rounded-3 p-3">
        <div className="d-flex justify-content-between align-items-center">
            <select name="" id="" className="form-select w100 h-50 rounded-4">
                <option value="">2024</option>
            </select>
            <label htmlFor="" className="form-label fs-14 mx-3">
                년
            </label>
        </div>

        <div className="d-flex justify-content-between align-items-center">
            <select name="" id="" className="form-select w100 h-50 rounded-4">
                <option value="">6</option>
            </select>
            <label htmlFor="" className="form-label fs-14 mx-3">
                월
            </label>
        </div>
      </div>

      <div className="h-168">
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">월 주행거리</div><div className="fs-14 fw-400 ml-5">123km</div>    
        </div>
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">월 주행시간</div><div className="fs-14 fw-400 ml-5">1시간 20분 30초</div>    
        </div>
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">월 평균 안전점수</div><div className="fs-14 fw-400 ml-5">80점</div>    
        </div>
        <div className="d-flex mt-10">
            <div className="fs-12 fw-400 Color77787b w-95">월 평균 안전등급</div><div className="fs-14 fw-400 ml-5">모범</div>    
        </div>
      </div>

      <div className="fs-14 fw-500 mt-40">
      주행 이력 목록
      </div> 

      <div className="mt-10">
        <input type="date" className="form-control h-50"/>
      </div>

      <div className="fs-12 Color77787b mt-10 mb-10">
        총21건
      </div>

      <div className="h-92 border p-3 rounded-3 mt-10">
        <div className="fs-12 fw-700">2024년 6월 5일 (수)</div>
        <div className="d-flex justify-content-between">
            <div className="left">
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">123km</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">1시간 20분 30초</span>
                </div>
            </div>

            <div className="right">
                <div className="fs-12 fw-400 Color77787b">
                안점점수
                <span className="ml-3 color151515">80점</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                안전등급
                <span className="ml-3 color151515">모범</span>
                </div>
            </div>

            <div className="">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
                </svg>
            </div>
        </div>
      </div>

      
      <div className="h-92 border p-3 rounded-3 mt-10">
        <div className="fs-12 fw-700">2024년 6월 5일 (수)</div>
        <div className="d-flex justify-content-between">
            <div className="left">
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">123km</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">1시간 20분 30초</span>
                </div>
            </div>

            <div className="right">
                <div className="fs-12 fw-400 Color77787b">
                안점점수
                <span className="ml-3 color151515">80점</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                안전등급
                <span className="ml-3 color151515">모범</span>
                </div>
            </div>

            <div className="">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
                </svg>
            </div>
        </div>
      </div>

      
      <div className="h-92 border p-3 rounded-3 mt-10">
        <div className="fs-12 fw-700">2024년 6월 5일 (수)</div>
        <div className="d-flex justify-content-between">
            <div className="left">
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">123km</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">1시간 20분 30초</span>
                </div>
            </div>

            <div className="right">
                <div className="fs-12 fw-400 Color77787b">
                안점점수
                <span className="ml-3 color151515">80점</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                안전등급
                <span className="ml-3 color151515">모범</span>
                </div>
            </div>

            <div className="">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
                </svg>
            </div>
        </div>
      </div>

      
      <div className="h-92 border p-3 rounded-3 mt-10">
        <div className="fs-12 fw-700">2024년 6월 5일 (수)</div>
        <div className="d-flex justify-content-between">
            <div className="left">
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">123km</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">1시간 20분 30초</span>
                </div>
            </div>

            <div className="right">
                <div className="fs-12 fw-400 Color77787b">
                안점점수
                <span className="ml-3 color151515">80점</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                안전등급
                <span className="ml-3 color151515">모범</span>
                </div>
            </div>

            <div className="">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
                </svg>
            </div>
        </div>
      </div>

      
      <div className="h-92 border p-3 rounded-3 mt-10">
        <div className="fs-12 fw-700">2024년 6월 5일 (수)</div>
        <div className="d-flex justify-content-between">
            <div className="left">
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">123km</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">1시간 20분 30초</span>
                </div>
            </div>

            <div className="right">
                <div className="fs-12 fw-400 Color77787b">
                안점점수
                <span className="ml-3 color151515">80점</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                안전등급
                <span className="ml-3 color151515">모범</span>
                </div>
            </div>

            <div className="">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
                </svg>
            </div>
        </div>
      </div>

      
      <div className="h-92 border p-3 rounded-3 mt-10">
        <div className="fs-12 fw-700">2024년 6월 5일 (수)</div>
        <div className="d-flex justify-content-between">
            <div className="left">
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">123km</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">1시간 20분 30초</span>
                </div>
            </div>

            <div className="right">
                <div className="fs-12 fw-400 Color77787b">
                안점점수
                <span className="ml-3 color151515">80점</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                안전등급
                <span className="ml-3 color151515">모범</span>
                </div>
            </div>

            <div className="">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
                </svg>
            </div>
        </div>
      </div>

      
      <div className="h-92 border p-3 rounded-3 mt-10">
        <div className="fs-12 fw-700">2024년 6월 5일 (수)</div>
        <div className="d-flex justify-content-between">
            <div className="left">
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">123km</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">1시간 20분 30초</span>
                </div>
            </div>

            <div className="right">
                <div className="fs-12 fw-400 Color77787b">
                안점점수
                <span className="ml-3 color151515">80점</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                안전등급
                <span className="ml-3 color151515">모범</span>
                </div>
            </div>

            <div className="">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
                </svg>
            </div>
        </div>
      </div>

      
      <div className="h-92 border p-3 rounded-3 mt-10">
        <div className="fs-12 fw-700">2024년 6월 5일 (수)</div>
        <div className="d-flex justify-content-between">
            <div className="left">
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">123km</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">1시간 20분 30초</span>
                </div>
            </div>

            <div className="right">
                <div className="fs-12 fw-400 Color77787b">
                안점점수
                <span className="ml-3 color151515">80점</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                안전등급
                <span className="ml-3 color151515">모범</span>
                </div>
            </div>

            <div className="">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
                </svg>
            </div>
        </div>
      </div>

      
      <div className="h-92 border p-3 rounded-3 mt-10">
        <div className="fs-12 fw-700">2024년 6월 5일 (수)</div>
        <div className="d-flex justify-content-between">
            <div className="left">
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">123km</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                주행거리
                <span className="ml-3 color151515">1시간 20분 30초</span>
                </div>
            </div>

            <div className="right">
                <div className="fs-12 fw-400 Color77787b">
                안점점수
                <span className="ml-3 color151515">80점</span>
                </div>
                <div className="fs-12 fw-400 Color77787b">
                안전등급
                <span className="ml-3 color151515">모범</span>
                </div>
            </div>

            <div className="">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
                </svg>
            </div>
        </div>
      </div>
   
</div>
<div className="mt-30 mb-30 d-flex justify-content-center">
<MobilePagenation/>
</div>
      
      <MobileFooter/>
</>
    );
}
export default DriveRateDetail