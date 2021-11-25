import Icon from "@ant-design/icons"
import React from "react"

const chatSvg = () => (
  <svg width="1rem" height="1rem" fill="currentColor" viewBox="0 0 1024 1024">
    <path
      d="M936.204421 473.434659c0 202.330148-189.920514 366.357945-424.204421 366.357945-40.033785 0-78.766948-4.78191-115.502617-13.726629 0 0-73.40073 91.390453-193.008852 90.855264 57.864896-82.089623 57.770751-147.948587 57.770751-147.948587-105.185644-66.677609-173.46268-174.21481-173.46268-295.53697 0-202.330148 189.901071-366.357945 424.204421-366.357945C746.283908 107.076714 936.204421 271.104511 936.204421 473.434659z"
      p-id="10601">
    </path>
  </svg>
)
type props = {
  className: any
}
const chat = (props: props) => <Icon component={chatSvg} className={props.className} />
export default chat