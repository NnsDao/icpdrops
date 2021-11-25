import React from "react"
import writeDownSvg from "../../../assets/writeDownTriangle.svg"
type props = {
  href: any,
  string: string
}
const LinkButton = (props: props) => {

  return (
    <a href={props.href}>
      <div className={'ml-3 h-8 flex justify-around items-center bg-blue-600 hover:bg-blue-800 rounded-md px-2'}>
        <span className={'text-s text-white'}>{props.string}</span>
        <img src={writeDownSvg} className={"w-3 h-3"} />
      </div>
    </a>
  )
}

export default LinkButton