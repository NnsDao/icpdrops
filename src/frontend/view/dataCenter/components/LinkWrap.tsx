import React from "react"
import Chat from "../../../assets/tagIcon/Chat"
import Code from "../../../assets/tagIcon/Code"
import Geren from "../../../assets/tagIcon/Geren"
import Link from "../../../assets/tagIcon/Link"
import LinkTo from "../../../assets/tagIcon/LinkTo"
import Text from "../../../assets/tagIcon/Text"
import Magnifier from "../../../assets/tagIcon/Magnifier"
import { Dropdown, Menu } from "antd"

type props = {
  type: string
  website: string,
  explorers: string,
  community: Array<{ name: string, href: string }>,
  chat: Array<{ name: string, href: string }>,
  sourceCode: string,
  whitePaper: string
}

const LinkWrap = (props: props) => {
  const clickCommunityMenu = (e: any) => {
    console.log("click", e)
  }
  const clickChatMenu = (e: any) => {
    console.log("click", e)
  }
  const communityMenu = (
    <Menu onClick={clickCommunityMenu}>
      <div>
        {/*{props.community}*/}
        {props.community.map((item, index) => {
            return (
              <Menu.Item key={index} icon={<LinkTo className={" w-4 h-4  "} />}>
                <a href={item.href}>
                  {item.name}
                </a>
              </Menu.Item>
            )
          },
        )}
      </div>

    </Menu>
  )
  const chatMenu = (
    <Menu onClick={clickChatMenu}>
      <div>
        {/*{props.community}*/}
        {props.chat.map((item, index) => {
            return (
              <Menu.Item key={index} icon={<LinkTo className={" w-4 h-4  "} />}>
                <a href={item.href}>
                  {item.name}
                </a>
              </Menu.Item>
            )
          },
        )}
      </div>

    </Menu>
  )
  return (
    <div className={""}>
      <div className={"flex flex-wrap"}>
        <a className={"tagA mr-2 mb-2"} href={props.website}>
          <Link className={"w-4 h-4 "} />
          <span className={"mx-1"}>{"Website"}</span>
          <LinkTo className={" w-4 h-4  "} />
        </a>
        <a className={"tagA mr-2 mb-2"} href={props.explorers}>
          <Link className={"w-4 h-4 "} />
          <span className={"mx-1"}>{"Explorers"}</span>
          <LinkTo className={" w-4 h-4  "} />
        </a>
        <Dropdown overlay={communityMenu} placement="bottomCenter" arrow>
          <div className={"tagA mr-2 mb-2"}>
            <Geren className={"w-4 h-4 "} />
            <span className={"mx-1"}>{"community"}</span>
            <LinkTo className={" w-4 h-4  "} />
          </div>
        </Dropdown>
        <Dropdown overlay={chatMenu} placement="bottomCenter" arrow>
          <div className={"tagA mr-2 mb-2"}>
            <Chat className={"w-4 h-4 "} />
            <span className={"mx-1"}>{"Chat"}</span>
            <LinkTo className={" w-4 h-4  "} />
          </div>
        </Dropdown>
        <a className={"tagA mr-2 mb-2"} href={props.whitePaper}>
          <Code className={"w-4 h-4 "} />
          <span className={"mx-1"}>{"SourceCode"}</span>
          <LinkTo className={" w-4 h-4  "} />
        </a>
        <a className={"tagA mr-2 mb-2"} href={props.whitePaper}>
          <Text className={"w-4 h-4 "} />
          <span className={"mx-1"}>{"WhitePaper"}</span>
          <LinkTo className={" w-4 h-4  "} />
        </a>
      </div>

    </div>

  )
}
export default LinkWrap