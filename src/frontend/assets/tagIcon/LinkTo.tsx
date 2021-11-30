import Icon from "@ant-design/icons"
import React from "react"

const linkToSvg = () => (
  <svg  viewBox="0 0 1025 1024" version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
        width="100%" height="100%">
    <path d="M864 640a32 32 0 0 1 64 0v224.096A63.936 63.936 0 0 1 864.096 928H159.904A63.936 63.936 0 0 1 96 864.096V159.904C96 124.608 124.64 96 159.904 96H384a32 32 0 0 1 0 64H192.064A31.904 31.904 0 0 0 160 192.064v639.872A31.904 31.904 0 0 0 192.064 864h639.872A31.904 31.904 0 0 0 864 831.936V640z m-485.184 52.48a31.84 31.84 0 0 1-45.12-0.128 31.808 31.808 0 0 1-0.128-45.12L815.04 166.048l-176.128 0.736a31.392 31.392 0 0 1-31.584-31.744 32.32 32.32 0 0 1 31.84-32l255.232-1.056a31.36 31.36 0 0 1 31.584 31.584L924.928 388.8a32.32 32.32 0 0 1-32 31.84 31.392 31.392 0 0 1-31.712-31.584l0.736-179.392L378.816 692.48z" >
    </path>
  </svg>
)
type props = {
  className: any
}
const linkTo = (props: props) => <Icon component={linkToSvg} className={props.className} />
export default linkTo

