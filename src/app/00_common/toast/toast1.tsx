const Toast = () => {
    return(
<>
<div className="toast show toast-absolute  bg-secondary">
    <div className="d-flex justify-content-center align-items-center">
    아직 주행 이력이 생성되지 않은 차량/운전자 입니다.<button type="button" className="btn-close text-white" data-bs-dismiss="toast"></button>
    </div>
</div>
</>
    );
}
export default Toast