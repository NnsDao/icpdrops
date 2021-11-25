import React from "react"
import Chat from "../../../assets/tagIcon/Chat"
import Code from "../../../assets/tagIcon/Code"
import Geren from "../../../assets/tagIcon/Geren"
import Link from "../../../assets/tagIcon/Link"
import LinkTo from "../../../assets/tagIcon/LinkTo"
import Magnifier from "../../../assets/tagIcon/Magnifier"

type props = {
  type: string
  website: string,
  explorers: string,
  community: Array<{ name: string, href: string }>,
  chat: Array<{ name: string, href: string }>,
  sourceCode: string,
  whitePaper: string
}

const LinkTag = (props: props) => {
  return (
    <div>
      <div className={"flex justify-around"}>
        <a  className={"tagA"}>
            <Link className={"w-4 h-4 "} />
            <span className={" "}>{props.website}</span>
            <LinkTo className={" w-4 h-4  "} />
        </a>
      </div>

    </div>

  )
}
export default LinkTag