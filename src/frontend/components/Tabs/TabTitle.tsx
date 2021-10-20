import React, { useCallback } from "react"

type Props = {
  title: string
  index: number
  selectedTab: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index,selectedTab }) => {

  const onClick = useCallback((i) => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
      <button onClick={onClick} className={`nav-link ${selectedTab === index? 'border-yellow-400 border-b-4 -mb-px opacity-100' : ''}`}  >{title}</button>
    </li>
  )
}

export default TabTitle