
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>La Carto'Nomades | L'application pensée par des nomades</title>

        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<       link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body className='' >
          {children}
        </body>
    </html>
  )
}

