import { Tooltip } from "antd"
import React from "react"
import Tool from "../../../assets/tagIcon/Tool"
import PositiveAndNegative from "./PositiveAndNegative"

type props = {
  title: "MarketCap" | "FullyDilutedMarketCap" | "Volume" | "CirculatingSupply",
  className: string,
  MaxSupply?:number,
  TotalSupply?:number
}

const infoList = {
  MarketCap: "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.\n" +
    "\n" +
    "Market OverView = Current ProjectInfo x Circulating Supply.",
  FullyDilutedMarketCap: "The market cap if the max supply was in circulation.\n" +
    "\n" +
    "Fully-diluted market cap (FDMC) = price x max supply. If max supply is null, FDMC = price x total supply. if max supply and total supply are infinite or not available, fully-diluted market cap shows - -.",
  Volume: "A measure of how much of a cryptocurrency was traded in the last 24 hours.",
  CirculatingSupply: "The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.",
  MaxSupply:'The maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. It is analogous to the fully diluted shares in the stock market.\n' +
    '\n' +
    'If this data has not been submitted by the project or verified by the CMC team, max supply shows - -.',
  TotalSupply:'The amount of coins that have been already created, minus any coins that have been burned. It is analogous to the outstanding shares in the stock market.\n' +
    '\n' +
    'If this data has not been submitted by the project or verified by the CMC team, total supply shows - -.'
}

const TooltipCopy = (props: props) => {
  const info = <div className={"mx-4 mt-6 mb-2 "}>
    <p>
      {infoList[(props.title)]}
    </p>
  </div>

  const maxSupply = <div className={"mx-4 mt-6 mb-2 "}>
    <p>
      {infoList.MaxSupply}
    </p>
  </div>
  const totalSupply = <div className={"mx-4 mt-6 mb-2 "}>
    <p>
      {infoList.TotalSupply}
    </p>
  </div>

  return (
    <div className={props.className}>
      <Tooltip placement="top" title={info} className={"flex items-center"}>
        <span className={'text-xs font-semibold text-gray-500  leading-5'}>{props.title}</span>
        <Tool className={" w-4 h-4  bg-grey-200 ml-2"} />
      </Tooltip>
      <p className={"text-xs font-bold my-2"}>$7,381,410,175</p>
      {props.title === 'CirculatingSupply' ? '':<PositiveAndNegative number={3.88} />}
      <div>
        {props.title !== 'Volume'?'':(
          <div className={'mt-4'}>
            <span className={'text-xs font-semibold text-gray-500  leading-5'}>Volume / Market Cap</span>
            <br/>
            <span className={'text-xs font-bold'}>0.02956</span>
          </div>
        )}
      </div>
      {props.title === 'CirculatingSupply'?      <div>
        <Tooltip placement="top" title={maxSupply} className={"flex justify-between items-center mt-10"}>
          <div className={'flex items-center'}>
            <span className={'text-xs font-semibold text-gray-500  leading-5'}>{'MaxSupply'}</span>
            <Tool className={" w-4 h-4  bg-grey-200 ml-2"} />
          </div>
          <span>{props.MaxSupply}</span>
        </Tooltip>
        <Tooltip placement="top" title={totalSupply} className={"flex justify-between items-center"}>
          <div className={'flex items-center'}>
            <span className={'text-xs font-semibold text-gray-500  leading-5'}>{'TotalSupply'}</span>
            <Tool className={" w-4 h-4  bg-grey-200 ml-2"} />
          </div>
          <span>{props.TotalSupply}</span>
        </Tooltip>
      </div>:''}


    </div>

  )

}
export default TooltipCopy