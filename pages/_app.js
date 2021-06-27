import "nextra-theme-blog/style.css"
import Prism from "prism-react-renderer/prism"
;(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-c")

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
