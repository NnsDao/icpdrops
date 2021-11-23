import React, { useEffect, useState } from "react"
import Pandect from "./children/Pandect"
import Price from "./children/Price"
import Link from "./children/Link"
import Tags from "./children/Tags"
import Cap from "./children/Cap"
import Icon from "../../components/Icon"

export function DataCenter() {
  const [count, setCount] = useState<string>()

  return (
    <>
      <Icon name={"bus"} className={"1"}/>
      嘀嗒
      <div className={"w-full  mx-auto min-h-screen flex flex-wrap justify-center justify-items-center "}>
        <div className={"w-full max-w-1400px flex flex-wrap justify-center justify-items-center "}>
          <div className={"min-w-33"}>
            <div className={"flex items-center  my-6"}>
              <div className={"mr-7"}>
                <img className="{h-8 w-8 mx-w-100%}" src={"https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png"}
                     alt="Avatar Tailwind CSS Component" />
              </div>
              <h2 className={"text-4xl font-bold mr-5" }>Internet Computer</h2>
              <span className={"text-xs font-semibold text-gray-500 px-2.5 bg-gray-100 rounded leading-5"}>icp</span>
            </div>
            <div className={"flex "}>
              <span className={"mr-5 text-xs font-semibold text-gray-100 px-2.5  py-0.5 bg-gray-500 rounded leading-5"}>Rank #27</span>
              <span className={"mr-5 text-xs font-semibold text-gray-500 px-2.5  py-0.5 bg-gray-100 rounded leading-5"}>coin</span>
              <span className={"text-xs font-semibold text-gray-500 px-2.5 bg-gray-100 py-0.5 rounded leading-5"}>on 277777 watchlists</span>
            </div>
          </div>
          <div className={"min-w-33"}>
            <p>Internet Computer</p>
            <div>
              <span>$43.18</span>
              <div>
                上下图标 3.88%
              </div>
            </div>
            <div>
              <p>0.1111111 BTC</p>
              上下图标 3.88%
            </div>
            <div>
              <p>0.1111111 RTH</p>
              上下图标 3.88%
            </div>
            <div>LOW 到 High</div>
          </div>
          <div className={"min-w-33"}>
            <div>buy</div>
            <div>exchange</div>
            <div>gaming</div>
            <div>earn crypto</div>
          </div>
          <div className={"tags"}>
            <div>
              小图标
              文字
              小图标
            </div>
            <p>Tags:</p>
            <div>
              各种链接
            </div>
          </div>
          <div className={"cap"}>
            cap
          </div>
        </div>
      </div>

    </>
  )
}

export default DataCenter