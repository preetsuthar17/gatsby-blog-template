// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
// import "prismjs/themes/prism.css"
export const onInitialClientRender = () => {
  const storedTheme = localStorage.getItem("theme")
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme)
  }
}
require("./prism-one-dark.css")
