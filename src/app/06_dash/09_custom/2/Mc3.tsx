import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Mc3 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mobile-title">
      공지사항
      </div>
      <div className="input-group mt-20 mb-20">
        <input type="text" className="form-control mag h-42" placeholder="검색어를 입력해주세요"/>
      </div>

        <div className="">
          <div className="hash d-flex">
              <button className="btn bg-success text-white rounded-4 mr-2">전체</button>
              <button className="btn text-success rounded-4 border-success mr-2">공지</button>
              <button className="btn text-success rounded-4 border-success mr-2">이벤트</button>
          </div>
        </div>

<div className="count mt-15 mb-10">
‘업데이트’ 검색 결과 총 100건
</div>

<div className="rounded-2 border table-title mb-10">
  <div className="d-flex justify-content-between px-2">
    <div className="person">공지</div>
    <div className="date">2024-06-15</div>
  </div>
  <div className="d-flex justify-content-between px-2 mt-2">
    <div className="title">업데이트 버전 안내</div>
    <a className="view" href="#">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.05806 0.558058C1.30214 0.313981 1.69786 0.313981 1.94194 0.558058L6.94194 5.55806C7.18602 5.80214 7.18602 6.19786 6.94194 6.44194L1.94194 11.4419C1.69786 11.686 1.30214 11.686 1.05806 11.4419C0.813981 11.1979 0.813981 10.8021 1.05806 10.5581L5.61612 6L1.05806 1.44194C0.813981 1.19786 0.813981 0.802136 1.05806 0.558058Z" fill="#5D5E60"/>
    </svg>

    </a>
  </div>
</div>

<div className="rounded-2 border table-title mb-10">
  <div className="d-flex justify-content-between px-2">
    <div className="person">공지</div>
    <div className="date">2024-06-15</div>
  </div>
  <div className="d-flex justify-content-between px-2 mt-2">
    <div className="title">업데이트 버전 안내</div>
    <a className="view" href="#">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.05806 0.558058C1.30214 0.313981 1.69786 0.313981 1.94194 0.558058L6.94194 5.55806C7.18602 5.80214 7.18602 6.19786 6.94194 6.44194L1.94194 11.4419C1.69786 11.686 1.30214 11.686 1.05806 11.4419C0.813981 11.1979 0.813981 10.8021 1.05806 10.5581L5.61612 6L1.05806 1.44194C0.813981 1.19786 0.813981 0.802136 1.05806 0.558058Z" fill="#5D5E60"/>
    </svg>

    </a>
  </div>
</div>

<div className="rounded-2 border table-title mb-10">
  <div className="d-flex justify-content-between px-2">
    <div className="person">공지</div>
    <div className="date">2024-06-15</div>
  </div>
  <div className="d-flex justify-content-between px-2 mt-2">
    <div className="title">라이더로그 차량 관제 시스템 서버 작업 안내</div>
    <a className="view" href="#">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.05806 0.558058C1.30214 0.313981 1.69786 0.313981 1.94194 0.558058L6.94194 5.55806C7.18602 5.80214 7.18602 6.19786 6.94194 6.44194L1.94194 11.4419C1.69786 11.686 1.30214 11.686 1.05806 11.4419C0.813981 11.1979 0.813981 10.8021 1.05806 10.5581L5.61612 6L1.05806 1.44194C0.813981 1.19786 0.813981 0.802136 1.05806 0.558058Z" fill="#5D5E60"/>
    </svg>

    </a>
  </div>
</div>

<div className="rounded-2 border table-title mb-10">
  <div className="d-flex justify-content-between px-2">
    <div className="person">공지</div>
    <div className="date">2024-06-15</div>
  </div>
  <div className="d-flex justify-content-between px-2 mt-2">
    <div className="title">서버 점검으로 인한 서비스 이용 중단 안내</div>
    <a className="view" href="#">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.05806 0.558058C1.30214 0.313981 1.69786 0.313981 1.94194 0.558058L6.94194 5.55806C7.18602 5.80214 7.18602 6.19786 6.94194 6.44194L1.94194 11.4419C1.69786 11.686 1.30214 11.686 1.05806 11.4419C0.813981 11.1979 0.813981 10.8021 1.05806 10.5581L5.61612 6L1.05806 1.44194C0.813981 1.19786 0.813981 0.802136 1.05806 0.558058Z" fill="#5D5E60"/>
    </svg>

    </a>
  </div>
</div>

<div className="rounded-2 border table-title mb-10">
  <div className="d-flex justify-content-between px-2">
    <div className="person">공지</div>
    <div className="date">2024-06-15</div>
  </div>
  <div className="d-flex justify-content-between px-2 mt-2">
    <div className="title">고객센터 운영 방침 변경 안내</div>
    <a className="view" href="#">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.05806 0.558058C1.30214 0.313981 1.69786 0.313981 1.94194 0.558058L6.94194 5.55806C7.18602 5.80214 7.18602 6.19786 6.94194 6.44194L1.94194 11.4419C1.69786 11.686 1.30214 11.686 1.05806 11.4419C0.813981 11.1979 0.813981 10.8021 1.05806 10.5581L5.61612 6L1.05806 1.44194C0.813981 1.19786 0.813981 0.802136 1.05806 0.558058Z" fill="#5D5E60"/>
    </svg>

    </a>
  </div>
</div>

<div className="rounded-2 border table-title mb-10">
  <div className="d-flex justify-content-between px-2">
    <div className="person">공지</div>
    <div className="date">2024-06-15</div>
  </div>
  <div className="d-flex justify-content-between px-2 mt-2">
    <div className="title">탄소 배출 감소 이벤트</div>
    <a className="view" href="#">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.05806 0.558058C1.30214 0.313981 1.69786 0.313981 1.94194 0.558058L6.94194 5.55806C7.18602 5.80214 7.18602 6.19786 6.94194 6.44194L1.94194 11.4419C1.69786 11.686 1.30214 11.686 1.05806 11.4419C0.813981 11.1979 0.813981 10.8021 1.05806 10.5581L5.61612 6L1.05806 1.44194C0.813981 1.19786 0.813981 0.802136 1.05806 0.558058Z" fill="#5D5E60"/>
    </svg>

    </a>
  </div>
</div>

<div className="d-flex justify-content-center mt-40 mb-40">
<MobilePagenation/>
</div>

<MobileFooter/>
      </div>
</>
    );
}
export default Mc3