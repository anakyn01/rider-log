import LoginTop from "../00_common/top/LoginTop"
export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (

      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <LoginTop/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
            {children}
            </div>
          </div>
        </div>       
      </section>
    )
  }