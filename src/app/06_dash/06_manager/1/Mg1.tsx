import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Mg1 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mt-50 d-flex justify-content-between align-items-center mb-30">

        <div className="">
            <p className="fs-16 fw-700">담당자 관리</p>
            <p>강남구점</p>
        </div>

        <button className="btn btn-success fs-12 text-white rounded-5 h-32">
        조직 선택
        </button>
      </div>

      <div className="mt-10">
        <input type="text" className="form-control h-50 rounded-3 input-bg mag" placeholder="담당자명, 연락처, 이메일로 검색해보세요"/>
      </div>

<div className="d-flex w-100 justify-content-between align-items-center mt-10 mb-10">
    <div className="fs-12 Color77787b">총 0건<br/>도움말
    <span>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.1875C3.34213 1.1875 1.1875 3.34213 1.1875 6C1.1875 8.65787 3.34213 10.8125 6 10.8125C8.65787 10.8125 10.8125 8.65787 10.8125 6C10.8125 3.34213 8.65787 1.1875 6 1.1875ZM0.3125 6C0.3125 2.85888 2.85888 0.3125 6 0.3125C9.14112 0.3125 11.6875 2.85888 11.6875 6C11.6875 9.14112 9.14112 11.6875 6 11.6875C2.85888 11.6875 0.3125 9.14112 0.3125 6Z" fill="#77787B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.28267 2.78007C5.62587 2.6461 6.00216 2.6114 6.36495 2.6794C6.72781 2.74742 7.06446 2.91587 7.33108 3.16712C7.59798 3.41864 7.78297 3.74232 7.85822 4.09881C7.93351 4.45554 7.89459 4.82499 7.74768 5.15924C7.60092 5.49311 7.35432 5.77424 7.04316 5.97016C6.85667 6.08759 6.65144 6.17168 6.43734 6.22017V7.16634C6.43734 7.40797 6.24146 7.60384 5.99984 7.60384C5.75821 7.60384 5.56234 7.40797 5.56234 7.16634V5.83155C5.56234 5.71552 5.60843 5.60424 5.69048 5.52219C5.77252 5.44014 5.8838 5.39405 5.99984 5.39405C6.20732 5.39405 6.40821 5.33595 6.57693 5.22972C6.74542 5.12363 6.87264 4.9755 6.94664 4.80714C7.02048 4.63915 7.03932 4.45596 7.00208 4.27953C6.96479 4.10285 6.87199 3.9368 6.73099 3.80392C6.58971 3.67079 6.40666 3.57746 6.20374 3.53942C6.00075 3.50138 5.7906 3.5211 5.60084 3.59517C5.41123 3.66918 5.25331 3.79291 5.14417 3.94683C5.03528 4.10039 4.979 4.27799 4.979 4.45728C4.979 4.6989 4.78313 4.89478 4.5415 4.89478C4.29988 4.89478 4.104 4.6989 4.104 4.45728C4.104 4.09295 4.21878 3.73915 4.43039 3.44072C4.64174 3.14265 4.93933 2.91409 5.28267 2.78007Z" fill="#77787B"/>
</svg>

    </span>
    </div>
    <input type="reset" value="검색 초기화" className="btn fs-12 Color77787b"/>
</div>

<div className="w-100 h-300 d-flex justify-content-center align-items-center">
    <div className="ColorC3c4c5">
    표시할 내용이 없습니다.
    </div>
</div>




      </div>

      
      <MobileFooter/>
</>
    );
}
export default Mg1