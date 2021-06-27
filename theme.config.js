import React from "react"
import styled from "styled-components"
import { GitHub, Twitter } from "components/icons"

const Icons = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin: 0 8px;
    :hover {
      path {
        fill: lightgray;
      }
    }
    path {
      fill: gray;
    }
  }
`
// theme.config.js
export default {
  darkMode: false,
  footer: (
    <Icons>
      <Twitter />
      <GitHub />
    </Icons>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Matt Crowder's blog" />
      <meta name="og:title" content="Matt Crowder's blog" />
    </>
  ),
}
