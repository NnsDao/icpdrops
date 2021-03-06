import Icon from "@ant-design/icons"
import React from "react"

const magnifierSvg = () => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5578" width="32" height="32">
    <defs>
      <style type="text/css"></style>
    </defs>
    <path
      d="M703.722 643.895c36.472-58.77 57.825-129.217 57.825-205.042 0-205.042-155.362-371.317-347.017-371.317-191.655 0-347.017 166.275-347.017 371.317 0 204.998 155.363 371.295 347.017 371.295 101.925 0 193.32-47.34 256.792-122.22l-3.442 4.838 247.657 263.7 40.905-43.808-252.72-268.762zM414.552 747.688c-159.705 0-289.17-138.24-289.17-308.835 0-170.617 129.465-308.858 289.17-308.858 159.683 0 289.192 138.24 289.192 308.857-0.023 170.595-129.51 308.835-289.192 308.835z"
      p-id="5579">

    </path>
  </svg>
)
type props = {
  className: any
}
const magnifier = (props: props) => <Icon component={magnifierSvg} className={props.className} />
export default magnifier




