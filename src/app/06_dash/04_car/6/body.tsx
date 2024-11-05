import CityPlace from "@/app/00_common/left/City";
import CarAdd3 from "@/app/00_common/right/caradd3";

export default function BodyContent() {

return (
<>
<div className="d-flex justify-content-between">
<div className="w-437 p-3">
<CityPlace/>
</div>
<div className=" p-3">
<CarAdd3/> 
</div>
</div>
</>
);
}