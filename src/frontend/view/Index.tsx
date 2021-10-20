import React, { useEffect, useState } from "react"
import { counter } from "canisters/counter"
import {
  Link,
} from "react-router-dom";
import logo from "./assets/logo-dark.svg"
import tailwindlogo from "./assets/tailwindcss.svg"

import Tabs from "../components/Tabs/Tabs";
import Tab from "../components/Tabs/Tab";
import Header from "../components/Header";
import Footer from "../components/Footer";


export function Index() {
  const [count, setCount] = useState<string>()

  const refreshCounter = async () => {
    const res = await counter.getValue()
    setCount(res.toString())
  }

  useEffect(() => {
    refreshCounter()
  }, [])

  const onIncrementClick = async () => {
    await counter.increment()
    refreshCounter()
  }

  return (
    <>
        {/* <button className="demo-button" onClick={onIncrementClick}>
          Count is: {count}
        </button> */}
        <Header title="Icpdrops" />
        <div className="container mx-auto min-h-screen">
          <div className="flex items-center">
            <Tabs>
              <Tab title="Ongoing">
                <div className="flex text-left  mb-3">
                  <h2 className="text-size font-extrabold tracking-tight text-gray-900">Ongoing Airdrops</h2>
                </div>
                <div className="container flex  mx-auto mb-5">
                    <Link to="/detail">
                      <div className="flex flex-col">
                          <div className="w-full">
                              <div className="border-b border-gray-200 shadow">
                                  <table className="divide-y divide-gray-300 ">
                                      <thead className="bg-gray-50">
                                          <tr>
                                              <th className="px-6 py-2 text-xs text-gray-500">
                                                Project
                                              </th>
                                              <th className="px-6 py-2 text-xs text-gray-500">
                                                Participated
                                              </th>
                                              <th className="px-6 py-2 text-xs text-gray-500">
                                                Type
                                              </th>
                                              <th className="px-6 py-2 text-xs text-gray-500">
                                                DAOScore
                                              </th>
                                              <th className="px-6 py-2 text-xs text-gray-500">
                                                Number of Winners
                                              </th>
                                              <th className="px-6 py-2 text-xs text-gray-500">
                                                Total Airdrop Amount
                                              </th>
                                              <th className="px-6 py-2 text-xs text-gray-500">
                                                Ends in
                                              </th>
                                          </tr>
                                      </thead>
                                      <tbody className="bg-white divide-y divide-gray-300">
                                          <tr className="whitespace-nowrap">
                                              <td className="px-6 py-4 text-sm text-gray-500">
                                                <div className="flex items-center space-x-3">
                                                  <div className="avatar">
                                                    <div className="w-12 h-12 mask mask-squircle">
                                                      <img src="https://daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                  </div> 
                                                  <div>
                                                  <div className="font-bold">
                                                          Hart Hagerty
                                                        </div> 
                                                    <div className="text-sm opacity-50">
                                                          United States
                                                        </div>
                                                  </div>
                                                </div>
                                              </td>
                                              <td className="px-6 py-4">
                                                  475,122
                                              </td>
                                              <td className="px-6 py-4">
                                                  <div className="text-sm text-gray-500">NFTs</div>
                                              </td>
                                              <td className="px-6 py-4 text-sm text-gray-500">
                                                  78
                                              </td>
                                              <td className="px-6 py-4">
                                                  20
                                              </td>
                                              <td className="px-6 py-4">
                                                  100000
                                              </td>
                                              <td className="px-6 py-4">
                                                <div className="flex items-center space-x-2">
                                                  <div>
                                                  <div className="font-bold">
                                                    4 days left
                                                  </div> 
                                                  <div className="text-sm opacity-50">
                                                    Oct 21, 2021
                                                  </div>
                                                  </div>
                                                </div>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                    </Link>
                </div>
              </Tab>
              <Tab title="Upcoming">
                  <div className="flex text-left  mb-3">
                    <h2 className="text-size font-extrabold tracking-tight text-gray-900">Upcoming Airdrops</h2>
                  </div>
                  <div className="container flex  mx-auto mb-5">
                        <div className="flex flex-col">
                            <div className="w-full">
                                <div className="border-b border-gray-200 shadow">
                                    <table className="divide-y divide-gray-300 ">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Project
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Participated
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Type
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  DAOScore
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Number of Winners
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Total Airdrop Amount
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Ends in
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-300">
                                            <tr className="whitespace-nowrap">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                  <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                      <div className="w-12 h-12 mask mask-squircle">
                                                        <img src="https://daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                                      </div>
                                                    </div> 
                                                    <div>
                                                    <div className="font-bold">
                                                            Hart Hagerty
                                                          </div> 
                                                      <div className="text-sm opacity-50">
                                                            United States
                                                          </div>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    475,122
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">NFTs</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    78
                                                </td>
                                                <td className="px-6 py-4">
                                                    20
                                                </td>
                                                <td className="px-6 py-4">
                                                    100000
                                                </td>
                                                <td className="px-6 py-4">
                                                  <div className="flex items-center space-x-2">
                                                    <div>
                                                    <div className="font-bold">
                                                      4 days left
                                                    </div> 
                                                    <div className="text-sm opacity-50">
                                                      Oct 21, 2021
                                                    </div>
                                                    </div>
                                                  </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                      </div>
                  </div>
              </Tab>
              <Tab title="Ended">
                  <div className="flex text-left  mb-3">
                    <h2 className="text-size font-extrabold tracking-tight text-gray-900">Ended Airdrops</h2>
                  </div>
                  <div className="container flex  mx-auto mb-5">
                        <div className="flex flex-col">
                            <div className="w-full">
                                <div className="border-b border-gray-200 shadow">
                                    <table className="divide-y divide-gray-300 ">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Project
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Participated
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Type
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  DAOScore
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Number of Winners
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Total Airdrop Amount
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                  Ends in
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-300">
                                            <tr className="whitespace-nowrap">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                  <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                      <div className="w-12 h-12 mask mask-squircle">
                                                        <img src="https://daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                                      </div>
                                                    </div> 
                                                    <div>
                                                    <div className="font-bold">
                                                            Hart Hagerty
                                                          </div> 
                                                      <div className="text-sm opacity-50">
                                                            United States
                                                          </div>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    475,122
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">NFTs</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    78
                                                </td>
                                                <td className="px-6 py-4">
                                                    20
                                                </td>
                                                <td className="px-6 py-4">
                                                    100000
                                                </td>
                                                <td className="px-6 py-4">
                                                  <div className="flex items-center space-x-2">
                                                    <div>
                                                    <div className="font-bold">
                                                      4 days left
                                                    </div> 
                                                    <div className="text-sm opacity-50">
                                                      Oct 21, 2021
                                                    </div>
                                                    </div>
                                                  </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                      </div>
                  </div>
              </Tab>
            </Tabs>
          </div>
      
        </div>
        <Footer />
    </>
  )
}