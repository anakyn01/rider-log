import CityPlace from "@/app/00_common/left/City";
import M2 from "@/app/00_common/right/6/M2";

export default function BodyContent() {

return (
<>
<div className="d-flex justify-content-between">
<div className="w-437 p-3">
<CityPlace/>
</div>
<div className=" p-3">
<M2/> 
</div>
</div>
</>
);
}