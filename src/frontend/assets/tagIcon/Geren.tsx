import Icon from "@ant-design/icons"
import React from "react"

const gerenSvg = () => (
  <svg width="1rem" height="1rem" fill="currentColor" viewBox="0 0 1024 1024">
    <path
      d="M386.048 502.443a227.556 227.556 0 1 1 251.876 0c174.222 53.731 300.743 215.978 300.743 407.78a28.444 28.444 0 0 1-28.445 28.444H113.778a28.444 28.444 0 0 1-28.445-28.445c0-191.8 126.578-354.048 300.715-407.78z"
       p-id="8970"></path>
  </svg>
)
type props = {
  className: any
}
const geren = (props: props) => <Icon component={gerenSvg} className={props.className} />
export default geren

