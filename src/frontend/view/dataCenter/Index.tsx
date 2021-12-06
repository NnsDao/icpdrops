import React, { useEffect, useState } from "react"
import writeDownSvg from "../../assets/writeDownTriangle.svg"
import writeUpSvg from "../../assets/writeUpTriangle.svg"
import PositiveAndNegative from "./components/PositiveAndNegative"
import { Progress, Select, Tabs } from "antd"
import LinkButton from "./components/LinkButton"
import LinkWrap from "./components/LinkWrap"
import TooltipCopy from "./components/TooltipCopy"
import OverView from "./children/OverView"
import Market from "./children/Market"
import HistoricalData from "./children/HistoricalData"
import ProjectInfo from "./children/ProjectInfo"
import News from "./children/News"
import Socials from "./children/Socials"
import Ratings from "./children/Ratings"
import Analysis from "./children/Analysis"
import PriceEstimates from "./children/PriceEstimates"

export function DataCenter() {
  const [count, setCount] = useState<string>()
  const priceData = {
    "24h": {
      low: 38,
      high: 58,
    },
    "1m": {
      low: 38,
      high: 58,
    },
    "1y": {
      low: 38,
      high: 58,
    },
  }
  const { Option } = Select
  let defaultsSeclected = "24h"
  const timeSelect = [
    {
      time: "24h",
      label: "24h Low/High",
    },
    {
      time: "1m",
      label: "1m Low/High",
    },
    {
      time: "1y",
      label: "1y Low/High",
    },
  ]
  const tagsList = [
    "Platform", "Distributed Computing", "Polychain Coapital Portfolio", "Exnetwork Capital Portfolio",
  ]
  const changeSelect = (value: string) => {
    console.log(value)
  }
  let [activeTab, setActiveTab] = useState("Overview")
  const tabListArr = [
    "Overview", "Market", "Historical Data", "Project Info", "News", "Socials", "Ratings", "Analysis", "PriceEstimates",
  ]
  const changeShowTab = (val: string) => {
    setActiveTab(activeTab = val)
  }

  return (
    <>
      <div className={"w-full  mx-auto min-h-screen flex flex-col flex-wrap  items-center "}>
        <div className={"w-full max-w-1400px flex flex-wrap justify-center justify-items-center "}>
          <div className={"min-w-33"}>
            <div className={"flex items-center  my-6"}>
              <div className={"mr-7"}>
                <img className="{h-8 w-8 mx-w-100%}"
                     src={"https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png"}
                     alt="Avatar Tailwind CSS Component" />
              </div>
              <span className={"text-4xl font-bold mr-5"}>Internet Computer</span>
              <span className={"text-xs font-semibold text-gray-500 px-2.5 bg-gray-100 rounded leading-5"}>icp</span>
            </div>
            <div className={"flex "}>
              <span className={"mr-5 text-xs font-semibold text-gray-100 px-2.5  py-0.5 bg-gray-500 rounded leading-5"}>Rank #27</span>
              <span
                className={"mr-5 text-xs font-semibold text-gray-500 px-2.5  py-0.5 bg-gray-100 rounded leading-5"}>coin</span>
              <span className={"text-xs font-semibold text-gray-500 px-2.5 bg-gray-100 py-0.5 rounded leading-5"}>on 277777 watchlists</span>
            </div>
          </div>
          <div className={"min-w-33 flex flex-col"}>
            <span
              className={"text-xs font-semibold text-gray-500  rounded leading-5"}>Internet Computer Price (ICP)</span>
            <div className={"flex items-center my-3"}>
              <span className={"text-4xl font-bold mr-3 "}>$43.18</span>
              <div
                className={"flex items-center mr-7 text-xs font-semibold text-white px-2.5  py-1.5 bg-red-500 rounded leading-5"}>
                {(3.88 % 100) ? <img src={writeUpSvg} className={"w-5 h-5"} /> :
                  <img src={writeDownSvg} className={"w-5 h-5"} />}
                3.88%
              </div>
            </div>
            <div className={"flex flex-row items-center"}>
              <span
                className={" text-xs font-semibold text-gray-500 px-2.5 py-1 mr-3 bg-gray-100 rounded"}>
                0.1111111 BTC
              </span>
              <PositiveAndNegative number={3.88} />
            </div>
            <div className={"flex flex-row mt-3 mb-4 items-center"}>
              <span className={"text-xs font-semibold text-gray-500 px-2.5 py-1 mr-3 bg-gray-100 rounded"}>
                0.1111111 ETH</span>
              <PositiveAndNegative number={-3.88} />
            </div>
            <div className={"flex items-center"}>
              <span className={"text-xs font-semibold text-gray-500"}>Low: </span>
              <span className={"text-xs font-bold"}>${priceData["24h"].low}</span>
              <div className={"flex w-2/4 mx-3"}>
                <Progress percent={(priceData["24h"].low / priceData["24h"].high) * 100} size="small" status="active"
                          showInfo={false} />
              </div>
              <span className={"text-xs font-semibold text-gray-500"}>High: </span>
              <span className={"text-xs font-bold"}> ${priceData["24h"].high}</span>
              <div className={"flex justify-center items-center text-xs w-12 h-6 rounded ml-3 bg-gray-100"}>
                <Select
                  defaultValue={"24h"}
                  className={"w-18 bg-grey-100 px-0 "}
                  bordered={false}
                  optionLabelProp="label"
                  dropdownMatchSelectWidth={115}
                  onChange={changeSelect}
                >
                  {timeSelect.map((item) => (
                    <Option key={item.time} value={item.time} label={item.time}>
                      <div className={"overflow-clip"}>
                        {item.label}
                      </div>
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          <div className={"min-w-33 flex justify-end"}>
            <LinkButton href={"www.google.com"} string={"Buy"} />
            <LinkButton href={"www.google.com"} string={"Exchange"} />
            <LinkButton href={"www.google.com"} string={"Gaming"} />
            <LinkButton href={"www.google.com"} string={"Earn Crypto"} />
          </div>
          <div className={"w-1/3 max-w-33 flex flex-col"}>
            <LinkWrap type={"11"} website={"www.google.com"} explorers={"www.google.com"}
                      community={[
                        { name: "medium", href: "google.com" },
                        { name: "medium", href: "google.com" },
                        { name: "medium", href: "google.com" },
                        { name: "medium", href: "google.com" },
                      ]}
                      chat={
                        [
                          { name: "medium", href: "google.com" },
                          { name: "medium", href: "google.com" },
                          { name: "medium", href: "google.com" },
                        ]
                      }
                      sourceCode={"google.com"}
                      whitePaper={"google.com"}
            />
            <p className={"text-xs font-semibold text-gray-500"}>Tags:</p>
            <div className={"flex  flex-wrap"}>
              {
                tagsList.map((item) => {
                  return (
                    <a className={"tagA mr-2 mb-2"} href={item} key={item}>
                      <span className={""}>{item}</span>
                    </a>
                  )
                })
              }
            </div>
          </div>
          <div className={"min-w-66  border-gray-200 border-0 border-t mt-3"}>
            <div className={"flex pt-4 mt-2"}>
              <TooltipCopy title={"MarketCap"} className={"w-1/4 border-gray-200 border-0 border-r flex flex-col "} />
              <TooltipCopy title={"FullyDilutedMarketCap"}
                           className={"w-1/4 border-gray-200 border-0 border-r ml-5 "} />
              <TooltipCopy title={"Volume"} className={"w-1/4 border-gray-200 border-0 border-r ml-5"} />
              <TooltipCopy title={"CirculatingSupply"} MaxSupply={155} TotalSupply={111111} className={"w-1/4 ml-5"} />
            </div>
          </div>
        </div>
        <div
          className={"w-full border-solid border-gray-200 border-2 border-l-0 border-r-0 py-5 my-3 flex justify-center"}>
          <div className={"w-full max-w-1400px flex justify-between"}>
            {
              tabListArr.map((item) => {
                return (
                  <div onClick={() => changeShowTab(item)} className={
                    `${activeTab === item ? " px-2 py-1 rounded font-bold bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 cursor-pointer" : "" +
                      "px-2 py-1 rounded font-bold hover:bg-gray-200 hover:round cursor-pointer"
                    }`
                  } key={item}
                  >
                    {item}</div>
                )
              })
            }
          </div>
        </div>
        <div>
          <div>
            {activeTab === "Overview" ? <OverView title={'Internet Computer'} /> : ""}
            {activeTab === "Market" ? <Market /> : ""}
            {activeTab === "Historical Data" ? <HistoricalData /> : ""}
            {activeTab === "Project Info" ? <ProjectInfo /> : ""}
            {activeTab === "News" ? <News /> : ""}
            {activeTab === "Socials" ? <Socials /> : ""}
            {activeTab === "Ratings" ? <Ratings /> : ""}
            {activeTab === "Analysis" ? <Analysis /> : ""}
            {activeTab === "PriceEstimates" ? <PriceEstimates /> : ""}
          </div>
        </div>
      </div>
    </>
  )
}

export default DataCenter