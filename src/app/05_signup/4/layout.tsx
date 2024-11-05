import LoginTop from "../../00_common/top/LoginTop"
export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            {children}
            </div>
          </div>
        </div>       
      </section>
    )
  }