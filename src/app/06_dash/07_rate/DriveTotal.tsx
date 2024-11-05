import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const DriveTotal = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="d-flex justify-content-between align-items-center acc">

        <div className="accHead">
            <p className="title">주행 통계</p>
            <p className="body">강남구점</p>
        </div>

        <button className="w69h32mainBtn">
        조직 선택
        </button>
      </div>

      <div className="mt-10">
        <select name="" id="" className="form-select h-50">
            <option value="">운행 가동률</option>
        </select>
      </div>

      <div className="mt-10">
        <input type="date" className="form-control h-50 rounded-3 input-bg" />
      </div>

<div className="h-246 border rounded-3 mt-10 d-flex justify-content-between align-items-center w-100">
    <div className="w-100">
        <div className="text-center">
            <div className="fs-12 fw-400">평균 운행 가동률</div>
            <div className="fs-14 fw-700">강남구점</div>
        </div>
        <div className="text-center mt-10">
        <svg width="142" height="140" viewBox="0 0 142 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="70.8125" cy="70" r="65" stroke="#F7F7F7" stroke-width="10"/>
<path d="M71.1875 5C83.175 5 94.9289 8.31496 105.15 14.5784C115.371 20.8418 123.661 29.8097 129.103 40.4906C134.545 51.1715 136.928 63.1493 135.987 75.0998C135.047 87.0503 130.82 98.508 123.774 108.206C116.728 117.904 107.137 125.465 96.0619 130.052C84.987 134.64 72.8591 136.075 61.0193 134.2C49.1794 132.324 38.0887 127.212 28.9734 119.426C19.858 111.641 13.0732 101.487 9.36883 90.0861" stroke="#019868" stroke-width="10"/>
<path d="M53.0645 76L58.4258 65.5234V65.4355H52.1855V63.2734H61.168V65.4707L55.8066 76H53.0645ZM67.584 76.1758C64.3936 76.1758 62.4688 73.8027 62.4688 69.6367C62.4688 65.4795 64.4111 63.0977 67.584 63.0977C70.7568 63.0977 72.6992 65.4795 72.6992 69.6367C72.6992 73.8203 70.7656 76.1758 67.584 76.1758ZM65.1758 69.6367C65.1582 72.5723 66.1074 73.9961 67.584 73.9961C69.0605 73.9961 70.001 72.5723 69.9922 69.6367C70.001 66.7275 69.0518 65.2686 67.584 65.2598C66.1162 65.2686 65.1758 66.7275 65.1758 69.6367ZM77.8672 69.6367C75.96 69.6367 74.9316 68.248 74.9316 66.2441C74.9316 64.2314 76.0127 62.834 77.8672 62.834C79.7744 62.834 80.7939 64.2314 80.8027 66.2441C80.7939 68.2656 79.748 69.6367 77.8672 69.6367ZM76.7246 66.2441C76.7334 67.3428 77.1289 68.0635 77.8672 68.0723C78.623 68.0635 79.001 67.3428 79.0098 66.2441C79.001 65.1455 78.6582 64.3984 77.8672 64.3984C77.1201 64.4072 76.7334 65.1631 76.7246 66.2441ZM76.7598 76L85.5137 63.2734H87.4824L78.7285 76H76.7598ZM83.5273 73.0293C83.5273 71.0166 84.6084 69.6279 86.4453 69.6191C88.3701 69.6279 89.3896 71.0166 89.3984 73.0293C89.3896 75.0508 88.3438 76.4219 86.4453 76.4219C84.5557 76.4219 83.5273 75.0332 83.5273 73.0293ZM85.3203 73.0293C85.3291 74.1279 85.7246 74.8574 86.4453 74.8574C87.2188 74.8574 87.5967 74.1279 87.6055 73.0293C87.5967 71.9307 87.2451 71.1836 86.4453 71.2012C85.707 71.1924 85.3291 71.9482 85.3203 73.0293Z" fill="#151515"/>
</svg>

        </div>

    </div>

</div>
      <div className="d-flex justify-content-between align-items-center mt-10 mb-10">
        <div className="fs-12 Color77787b">
        총21건
        </div>
        <input type="reset" className="btn fs-12 Color77787b" value="검색 초기화"/>
      </div>
      
      <div className="h-72 rounded-2 d-flex justify-content-between align-items-center px-4 py-2 border mb-10">
        <div className=" w-100">
            <div className="d-flex justify-content-between">
                <p className="fs-14 Color77787b">2024-05-13(월)</p>
                <p className="fs-14 Color77787b">전일 대비</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="fs-14 fw-700">80%</p>
                <p className="fs-14 text-danger">▼ 10%</p>
            </div>
        </div>

      </div>

      <div className="h-72 rounded-2 d-flex justify-content-between align-items-center px-4 py-2 border mb-10">
        <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <p className="fs-14 Color77787b">2024-05-13(월)</p>
                        <p className="fs-14 Color77787b">전일 대비</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="fs-14 fw-700">70%</p>
                        <p className="fs-14 text-primary">▼ 5%</p>
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
export default DriveTotal