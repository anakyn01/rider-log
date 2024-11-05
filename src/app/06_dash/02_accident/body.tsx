import CityPlace from "@/app/00_common/left/City";
import Ac1 from "@/app/00_common/right/2/ac1";

export default function BodyContent() {

return (
<>
<div className="d-flex justify-content-center">
    <div className="d-flex justify-content-between">
    <div className="w-437 p-3">
    <CityPlace/>
    </div>
    <div className=" p-3">
    <Ac1/> 
    </div>
    </div>
</div>
</>
);
}