import { createGlobalStyle } from 'styled-components'
export const IconFontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1588902646184'); /* IE9 */
    src: url('./iconfont.eot?t=1588902646184#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1588902646184') format('woff'),
    url('./iconfont.ttf?t=1588902646184') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1588902646184#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: inherit;
    font-weight: 400 !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
