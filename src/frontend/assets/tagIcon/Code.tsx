import Icon from "@ant-design/icons"
import React from "react"

const codeSvg = () => (
  <svg width="1rem" height="1rem" fill="currentColor" viewBox="0 0 1024 1024">
    <path
      d="M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z"
      p-id="11413"></path>
  </svg>
)
type props = {
  className: any
}
const code = (props: props) => <Icon component={codeSvg} className={props.className} />
export default code;