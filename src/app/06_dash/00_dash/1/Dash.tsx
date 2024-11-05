
import Circle from "@/app/00_common/svg/circle";
import GraphOne from "@/app/00_common/svg/graphone";
import RightArrow from "@/app/00_common/svg/rightArrow";
import Sound from "@/app/00_common/svg/sound";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobileTopSearch from "@/app/00_common/top/MobileTopSearch";

const Dash = () => {
    return(
<>
<div className="mobile-content">
      <MobileTopSearch/>


<div className="place">
    <div className="place-head">
        <p className="place-title">별따러가자</p>
        <button className="place-btn">조직 선택</button>
    </div>

    <div className="place-box">
        <p className="place-box-head">차량 주행 현황</p>
        <div className="place-box-content">

            <div className="d-flex  justify-content-between mb-10">     
                <div className="">전체 등록 차량</div><div className="fw-500 text-right">2,000</div>
            </div>
            <div className="d-flex  justify-content-between mb-10">  
                <div className="text-success">주행 중 차량</div><div className="fw-500 text-right">1,500</div>
            </div>
            <div className="d-flex  justify-content-between mb-10">  
                <div className="text-danger">오늘 발생한 사고</div><div className="fw-500 text-right">20</div>
            </div>
            <div className="d-flex  justify-content-between mb-10">  
                <div className="">운휴 차량</div><div className="fw-500 text-right">20</div>
            </div>                
        </div>
    </div>
</div>

<div className="bg-light h-44 rounded-3 mt-10 d-flex align-items-center px-3">
<div className="d-flex">
    <div className=""><Sound/></div>
        <span className="ml-2">업데이트 버전 안내</span>
    </div>
</div>

<div className="border rounded-3 h-312 mt-10 px-3">
<div className="d-flex justify-content-between mt-10">
    <div className="">
    운행 가동률 (최근 7일)
    </div>
    <div className="d-flex align-items-center">
        <a href="" className="more">더 보기<span className="ml-2"><RightArrow/></span></a>
    </div>
</div>

<div className="w-100 d-flex justify-content-center">
<GraphOne/>
</div>
</div>

<div className="border rounded-3 h-211 mt-10 px-3">
<div className="d-flex justify-content-between mt-10">
    <div className="fw-700">
    평균 안전점수
    </div>
    <div className="d-flex align-items-center">
        <a href="" className="more">더 보기<span className="ml-2"><RightArrow/></span></a>
    </div>
</div>

<div className="d-flex justify-content-center">
    <Circle/>
</div>
</div>

<div className="border rounded-3 h-160 mt-10 px-3">
<div className="d-flex justify-content-between mt-10">
    <div className="fw-700">
    평균 주행거리 <span className="fw-400">(최근 30일)</span>
    </div>
    <div className="d-flex align-items-center">
        <a href="" className="more">더 보기<span className="ml-2"><RightArrow/></span></a>
    </div>
</div>
<div className="d-flex justify-content-center my-28">
    <div className="km">1,234km</div>
</div>
    <div className="d-flex justify-content-between w-100">
        <div className="graySmallText">최근 30일 최고</div>   
        <div className="rightText">1,234.5km</div>
    </div>
    <div className="d-flex justify-content-between w-100 mt-2 mb-2">
        <div className="graySmallText">최근 30일 최저</div>   
        <div className="rightText">234.5km</div>
    </div>
</div>

<div className="border rounded-3 h-160 mt-10 px-3">
<div className="d-flex justify-content-between mt-10">
    <div className="fw-700">
    평균 주행거리<span className="fw-400">(최근 30일)</span>
    </div>
    <div className="d-flex align-items-center">
        <a href="" className="more">더 보기<span className="ml-2"><RightArrow/></span></a>
    </div>
</div>
<div className="d-flex justify-content-center my-28">
    <div className="km">
    12시간
    </div>
</div>
<div className="d-flex justify-content-between w-100">
        <div className="graySmallText">최근 30일 최고</div>   
        <div className="rightText">12시간</div>
    </div>
    <div className="d-flex justify-content-between w-100 mt-2">
        <div className="graySmallText">최근 30일 최저</div>   
        <div className="rightText">2시간</div>
    </div>
</div>

<div className="border rounded-3 h-160 mt-10 mb-10 px-3">
<div className="fs-14 fw-700 mt-10 mb-10">계약 정보</div>
    <div className="d-flex justify-content-between w-100 mb-2">
        <div className="graySmallText">계약자명</div>   
        <div className="rightText">별따러가자</div>
    </div>
    <div className="d-flex justify-content-between w-100 mb-2">
        <div className="graySmallText">전체 계약 센서</div>   
        <div className="rightText">2,000대</div>
    </div>
    <div className="d-flex justify-content-between w-100 mb-2">
        <div className="graySmallText">계약 센서(LTE)</div>   
        <div className="rightText">2,000대</div>
    </div>
    <div className="d-flex justify-content-between w-100 mb-2">
        <div className="graySmallText">계약 센서(BLE)</div>   
        <div className="rightText">2,000대</div>
    </div>
</div>

      </div>

<div className="mb90"></div>      
      <MobileFooter/>
</>
    );
}
export default Dash