const Toggle = () => {
    return(
<>

    <div className="d-flex justify-content-between rtoggle align-items-center">
        <div className="">
            하위 조직에 소속된 모든 차량/운전자 보기<br/>
            <span className="text-secondary">*불러올 정보가 많은 경우, 페이지가 느려질 수 있습니다</span>    
        </div>

        <div className="form-check form-switch fs-5">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
    </div>

</>
    );
}
export default Toggle;