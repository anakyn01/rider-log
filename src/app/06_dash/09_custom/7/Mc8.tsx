import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";


const Mc8 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mobile-title">
      공지사항
      </div>
     
<div className="d-flex justify-content-between align-items-center mt-20 mb-10">
  <div className="fw-400 Color77787b">
  공지
  </div>  
  <div className="fs-12 ColorC3c4c5">
  2024-06-05
  </div>
</div>



<div className="fs-14 fw-400">
업데이트 버전 안내
</div>
<hr className="mt-15 mb-25"/>

<div className="py-2 fs-14">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis neque, dictum at risus vel, feugiat accumsan magna. Suspendisse potenti. Proin bibendum ipsum nec nibh lobortis egestas. Proin tellus libero, pellentesque sed ex sed, suscipit tempor mauris. Aliquam vitae efficitur risus, quis venenatis libero. Duis imperdiet mi mauris, sit amet aliquam nibh placerat in. Nulla tincidunt urna ac felis placerat, ut ultricies neque pharetra. Sed pretium aliquam feugiat. Cras nec eros nec augue dignissim sagittis. Aliquam interdum ex ullamcorper, sollicitudin ante eget, pulvinar turpis. Morbi est urna, consequat fermentum dignissim nec, blandit ut urna. Ut eros lorem, venenatis eget urna eget, efficitur ornare eros. Suspendisse potenti. Donec volutpat fermentum sem.
</div>

<div className="d-flex fs-14 Color77787b mt-30">
다음글 <span className="ColorC3c4c5 ml-3">다음글이 없습니다</span>
</div>
<hr className="mt-10 mb-10"/>
<div className="d-flex fs-14 Color77787b mb-50">
이전글 <span className="ml-3">라이더로그 차량 관제 시스템 서버 작업 안내</span>
</div>

<MobileFooter/>
      </div>
</>
    );
}
export default Mc8