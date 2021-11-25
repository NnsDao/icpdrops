import React from "react"
import upSvg from "../../../assets/greenUpTriangle.svg"
import downSvg from "../../../assets/redDownTriangle.svg"

type props = {
  number: Number
}

const PositiveAndNegative = (props: props) => {
  const content = () => {
    return (
      props.number > 0 ?
        <img className={"w-5 h-5 "} src={upSvg} /> :
        <img className={"w-5 h-5 "} src={downSvg} />
    )
  }

  return (
    <div className={"flex items-center"}>
      {content()}
      {props.number + '%'}
    </div>
  )
}

export default PositiveAndNegative
