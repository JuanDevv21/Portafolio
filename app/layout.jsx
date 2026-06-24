import "./globals.css"

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <header>
          <title>Juan Gonzalez</title>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}

export default RootLayout