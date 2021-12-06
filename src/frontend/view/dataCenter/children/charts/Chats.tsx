import React, { useEffect, useRef } from "react"
// import echarts, { ECharts } from "echarts"
import * as echarts from "echarts"
//let echarts = require("echarts")

type Props = {
  option: Object,
}
const Charts: React.FC<Props> = (props) => {
  const container = useRef<HTMLDivElement>(null)
  const chart = useRef<any>(null)
  const { option }: any = props
  useEffect(() => {
    const width = document.documentElement.clientWidth
    console.log(container,'container')
    container.current!.style.width = `${width * 0.660 }px`
    container.current!.style.height = `${width * 0.402}px`
    // @ts-ignore
    chart.current = echarts.init(container.current)
  }, [])
  useEffect(() => {
    chart.current!.setOption(option)
  }, [option])
  return (
    <div className={"w-66"} ref={container} />
  )
}
export { Charts }
