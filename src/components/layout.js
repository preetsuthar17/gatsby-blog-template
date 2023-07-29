import * as React from "react"
import { Link } from "gatsby"
import AdSense from "react-adsense"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 id="main-heading">
        <Link to="/">{title} </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        Home
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2501084062179551"
        crossorigin="anonymous"
      ></script>
      <header className="global-header">{header}</header>
      <AdSense.Google
        client="ca-pub-2501084062179551"
        slot="7235993891"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
      <main>{children}</main>
      <footer class="footer">
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://github.com/preetsuthar17">Preet Suthar</a>
        <div>
          <Link to="/">Go to top 👆</Link>
        </div>
      </footer>
    </div>
  )
}

export default Layout
