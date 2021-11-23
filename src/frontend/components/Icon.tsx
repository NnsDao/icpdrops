// let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
// try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
// console.log(importAll, 'all')
import React from "react"
import cs from "classnames"

const modules = import.meta.globEager("./icons/*.svg")
let svgList: Array<string> = []
Object.entries(modules).forEach(([_, v]) => {
  svgList.push(...v.default)
})

console.log(Object, "obj")
// for (const path in modules) {
//   modules[path].then(() => {
//     // return modules[(`./icons/${path}.svg`)]
//     // svgList.push(path)
//     //const svgPath = modules[path]()
//   })
// }
// console.log(svgList, "list")
type Props = {
  name: string
  className: string
} & React.SVGAttributes<SVGElement>
const Icon = (props: Props) => {
  const { name, className, ...rest } = props
  console.log(modules[(`./icons/${name}.svg`)].default)
  if (modules[(`./icons/${name}.svg`)]) {
    const nameKey = modules[(`./icons/${name}.svg`)].default
    return (
      <svg className={cs("icon", className)} {...rest}>
        <use xlinkHref={"#" + `${nameKey}`} />
      </svg>
    )
  } else {
    console.log("not found svg")
    return null
  }
}
// console.log(`./icons/${name}.svg`, "name")
// console.log(svgList.includes(`./icons/${name}.svg`))

// if (svgList.includes(`./icons/${name}.svg`)) {
//   return (
//     <svg className={cs("icon", className)} {...rest}>
//       <use xlinkHref={"#" + `${modules[`./icons/${name}.svg`]}`} />
//     </svg>
//   )
// } else {
//   console.log("not found svg")
//   return null
// }

// }
export default Icon