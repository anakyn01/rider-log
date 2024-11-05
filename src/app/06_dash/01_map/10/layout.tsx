export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="p-0">
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>


            {children}
  
      </section>
    )
  }