import React, { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { counter } from "canisters/counter"
import Countdown from 'react-countdown';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// import Header from "../components/Header";
// import Footer from "../components/Footer";


const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`


const data = [
  {
    subject: 'User',
    A: 20,
    B: 88,
    fullMark: 150,
  },
  {
    subject: 'Github',
    A: 44,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Team',
    A: 22,
    B: 77,
    fullMark: 150,
  },
  {
    subject: 'ChainData',
    A: 66,
    B: 80,
    fullMark: 150,
  },
  {
    subject: 'Eco-Heat',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Usage',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'DAO-Index',
    A: 22,
    B: 130,
    fullMark: 150,
  },
];

const Completionist = () => <span>Ended Airdrops!</span>;


export function Detail() {
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
        {/*<Header title="Icpdrops" />*/}
        <div className="container mx-auto ">
            <div className="text-sm breadcrumbs ">
                  <ul>
                    <li>
                      <a className="link link-primary">Home</a>
                    </li> 
                    <li className="text-xs">detail</li>
                  </ul>
            </div>

            <div className="bg-gray-50 bordered">
              <div className="card-body">
                  <h2 className="card-title flex-row flex align-middle">
                    <div className="avatar">
                        <div className="mb-2 rounded-full w-10 h-10">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </div>
                    </div>
                    <div className="mt-2 ml-3">GFT</div>
                  </h2>

                  <div className="break-all mb-3">
                    <p> Texas Token GFT farm</p>
                    <p>Texas Hold'em is a very skillful game that combines luck, patience, perseverance, and wisdom together. It tests each person's character, ability and determines the ultimate winner through chips. Developed by DAOs, Texas is completely built on IC and controls all settlements through Motoko Actor smart contract, all codes, contracts, and algorithms are publicly visible, it features decentralization and opens up a new game of life.</p> 
                  </div>

                  <div className="card-actions mt-3">
                    <h2 className="card-title">Tags
                      <div className="badge inset-0  bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 mx-2">NFTs</div> 
                      <div className="badge inset-0  bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700">dApp</div>
                    </h2> 
                  </div>

                  <div className="card-actions mt-3 w-2/3 h-60">
                    <h1 className="card-title" > DAOscore </h1>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-3">
                    <h2 className="text-2xl mb-3 card-title"> Social links </h2>
                    <a className="p-2 leading-none rounded-full font-medium mt-3 bg-purple-400 text-xs uppercase text-white text-opacity-90 mr-3" href="#">Website</a>
                    <a className="p-2 leading-none rounded-full font-medium mt-3 bg-purple-400 text-xs uppercase text-white text-opacity-90 mr-3" href="#">Twitter</a>
                    <a className="p-2 leading-none rounded-full font-medium mt-3 bg-purple-400 text-xs uppercase text-white text-opacity-90 mr-3" href="#">Telegram</a>
                    <a className="p-2 leading-none rounded-full font-medium mt-3 bg-purple-400 text-xs uppercase text-white text-opacity-90" href="#">DSCVR</a>
                  </div>
                  {/*  time */}
                  <div className="mt-10">
                      <h4 className="text-2xl font-semibold">Time remaining</h4>
                        <div className="text-green-300">
                            <p className="text-6xl text-center flex w-full items-left justify-between"> 
                            <Countdown date={Date.now() + 1000000} >
                              <Completionist />
                            </Countdown>
                            </p>
                            <div className="text-6xl text-center flex w-full items-left justify-left ">
                                <div className="w-20  p-2 bg-white text-yellow-700 rounded-lg">
                                    <div className="font-mono uppercase text-sm leading-none">Days</div>
                                </div>
                                <div className="w-20 p-2 bg-white text-yellow-600 rounded-lg">
                                    <div className="font-mono uppercase text-sm leading-none">Hours</div>
                                </div>
                                <div className="w-20 p-2 bg-white text-yellow-700 rounded-lg">
                                    <div className="font-mono uppercase text-sm leading-none">Mins</div>
                                </div>
                                <div className="w-20  p-2 bg-white text-yellow-600 rounded-lg">
                                    <div className="font-mono uppercase text-sm leading-none">Secs</div>
                                </div>
                            </div>
                        </div>
                   
                  </div>

                </div>
              
            </div>


            <div className="container mx-auto flex flex-row mt-5 w-screen min-h-screen break-all">
                
                <div className="flex-initial w-3/4 mr-5 ">
                    <div className="card lg:card-side bordered shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title">
                          Step Hero NFTs Airdrop (Total prize pool ~ $11,500)
                          <div className="badge badge-primary ml-3 p-3">Ongoing</div>  
                          <div className="flex flex-row pl-5 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-xs pl-1 mt-1">Oct 1, 2021 - Oct 21, 2021 , Ends in 12 hours</p> 
                          </div>
                        </h2>

                        <div className="mt-5 border-t">
                          <div className="flex justify-between items-start p-2 py- border-b">
                            <div className="flex space-x-2 items-center">
                              <p>Total Airdrop Amount</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                              <p>100 NFT</p> 
                            </div>
                          </div>

                          <div className="flex justify-between items-start p-2 py- border-b">
                            <div className="flex space-x-2 items-center">
                              <p>Number of Winners</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                              <p>10</p> 
                            </div>
                          </div>

                          <div className="mt-5">

                            <p>How to Participate? </p>

                            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />

                          </div>
                        </div> 

                         
                    </div>
                    </div>
                </div>
               
            </div>
        </div>
        {/*<Footer />*/}
    </>
  )
}