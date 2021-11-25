import Icon from "@ant-design/icons"
import React from "react"

const linkToSvg = () => (
  <svg version="1.1" viewBox="0 0 24 24" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
      stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
      stroke-linejoin="round"></path>
  </svg>
)
type props = {
  className: any
}
const linkTo = (props: props) => <Icon component={linkToSvg} className={props.className} />
export default linkTo

