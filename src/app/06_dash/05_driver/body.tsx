import CityPlace from "@/app/00_common/left/City";
import D1 from "@/app/00_common/right/5/d1";

export default function BodyContent() {

return (
<>
<div className="d-flex justify-content-between">
<div className="w-437 p-3">
<CityPlace/>
</div>
<div className=" p-3">
<D1/>
</div>
</div>
</>
);
}