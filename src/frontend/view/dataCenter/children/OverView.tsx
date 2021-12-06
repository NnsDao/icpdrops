import React, { useState } from "react"
import Price from "./charts/Price"
import * as echarts from "echarts"

type Props = {
  title: string
}

const OverView: React.FC<Props> = (props) => {
  const clickZoom = () => {
    console.log("1")
  }
  const typeList = ["Price", "MarketCap", "TradingView", "History"]
  let [activeType, setActiveType] = useState("Price")
  const changeShowType = (val: string) => {
    setActiveType(activeType = val)
  }
  const timeList = ["1D", "7D", "1M", "3M", "1Y", "YTD", "ALL"]

  let [timeType, setTimeType] = useState("1D")
  const changeShowTime = (val: string) => {
    setTimeType(activeType = val)
  }
  return (
    <div className={"w-full min-w-1400px flex justify-center  "}>
      <div className={"min-w-66 max-w-66 flex flex-col"}>
        <div>
          <div className={"flex justify-between my-5"}>
            <span className={"text-xl font-bold"}>{props.title + " to USD Chart"}</span>
            <span onClick={() => clickZoom}>zoom</span>
          </div>
          <div>
            <div className={"flex justify-between"}>
              <div className={"flex justify-around rounded-lg font-bold bg-gray-100 px-2 py-1 text-xs text-gray-500"}>
                {typeList.map((item) => {
                  return (
                    <span onClick={() => changeShowType(item)} key={item} className={
                      `${activeType === item ? "px-1.5 py-1.5 rounded  bg-white font-bold cursor-pointer " : "" +
                        "px-1.5 py-1.5 rounded font-bold  cursor-pointer"
                      }`
                    }>{item}</span>
                  )
                })}
              </div>
              <div className={"flex justify-around rounded-lg font-bold bg-gray-100 px-2 py-1 text-xs text-gray-500"}>
                {timeList.map((item) => {
                  return (
                    <span onClick={() => changeShowTime(item)} key={item} className={
                      `${timeType === item ? "px-1.5 py-1.5 rounded  bg-white font-bold cursor-pointer " : "" +
                        "px-1.5 py-1.5 rounded font-bold  cursor-pointer"
                      }`
                    }>{item}</span>
                  )
                })}
              </div>
            </div>
            <div>

            </div>

          </div>
        </div>

        <div className={'border min-w-66 max-w-66'}>
          <Price/>
        </div>

      </div>
      <div className={"w-full ml-8"}>
        <p>ICP to USD Converter</p>
        <div>
          <div>
            <div>
              <div>
                logo
              </div>
              <div>
                <span>icp</span>
                <span>Internet computer</span>
              </div>
            </div>
            <div>
              1
            </div>
          </div>
          <div>
            <div>
              <div>
                logo
              </div>
              <div>
                <span>icp</span>
                <span>Internet computer</span>
              </div>
            </div>
            <div>
              1
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default OverView