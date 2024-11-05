import KakaoMap from "@/app/components/KakaoMap";
import CityPlace from "@/app/00_common/left/City";

export default function BodyContent() {

return (
<>
<CityPlace/>
<KakaoMap/>

<div className="toast show w-386 h-66 allDriver rounded-2">
  <div className="d-flex justify-content-between p-3">
    <div >
    <p className="fs-12">하위 조직에 소속된 모든 차량/운전자 보기<br/>
    <span className="fs-12 text-secondary">*불러올 정보가 많은 경우, 페이지가 느려질 수 있습니다.</span></p>
    </div>
    <div className="form-check form-switch fs-24">
    <input className="form-check-input bg-success" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
    </div>
  </div>
</div>
</>
);
}