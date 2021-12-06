// import * as echarts from 'echarts';
// import React, { useRef } from "react"
import *as echarts from "echarts"
import React from "react"
import { Charts } from "./Chats"

let base = +new Date(2020, 11, 3)
let oneDay = 24 * 3600 * 1000
let date: any = []

let data = [Math.random() * 300]

for (let i = 1; i < 365; i++) {
  let now = new Date((base += oneDay))
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"))
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
}

const Price = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      position: function(pt: any[]) {
        return [pt[0], "10%"]
      },
      axisPointer: {
        type: "cross",
      },
    },
    grid:{
      containLabel:true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: "Fake Data",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "#0fc686",
        },
        markLine: {
          symbol: ["circle", "none"],
          silent: true,
          itemStyle: {
            color: "gray",
          },
          label: {},
          data: [
            {
              yAxis: 2.75,
            },
          ],
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0fc686",
            },
            {
              offset: 0.5,
              color: "#fff",
            },
          ]),
        },
        data: data,
      },
    ],
  }

  return (
    <div className={''}>
      <Charts   option={option} />

    </div>
  )
}
export default Price