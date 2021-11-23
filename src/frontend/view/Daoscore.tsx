import React, { useEffect, useState } from "react"
import { counter } from "canisters/counter"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// import Header from "../components/Header";
// import Footer from "../components/Footer";
//icon 
import chaindataLogo from "../assets/daoscore/chaindata.svg"
import daoindexLogo from "../assets/daoscore/daoindex.svg"
import fireLogo from "../assets/daoscore/fire.svg"
import githubLogo from "../assets/daoscore/github.svg"
import usageLogo from "../assets/daoscore/usage.svg"
import userLogo from "../assets/daoscore/user.svg"
import teamLogo from "../assets/daoscore/team.svg"


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

export function Daoscore() {
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
        <div className="container mx-auto">

          <div className="card-body mt-3 w-3/4 h-80">
            <h2 className="card-title">DAOscore
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2> 
            {/* <h1 className="card-title" > DAOscore </h1> */}
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>


          {/* <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex   justify-center items-center">
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
              <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3>
                <div className="relative">
                  <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
                </div>
                <h1 className="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">Javascript Bootcamp for Absolute Beginners</h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                    <p>Vanilla JS</p>
                  </div>
                  <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Buy Lesson</button>
                </div>
              </div>


              <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-xl font-bold text-indigo-600">Intermediate</h3>
                <div className="relative">
                  <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$12</p>
                  <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">%20 Discount</p>
                </div>
                <h1 className="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">Write a Gatsby plugin using Typescript</h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                    <p>TypeScript</p>
                  </div>
                  <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Start Watching Now</button>
                </div>
              </div>


              <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3>
                <div className="relative">
                  <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$50</p>
                </div>
                <h1 className="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">Advanced React Native for Sustainability</h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                    <p>Vanilla JS</p>
                  </div>
                  <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Buy Lesson</button>
                </div>
              </div>
            </div>
          </div> */}



          <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
              <div className="mb-16 text-center">
                  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                      Features
                  </h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                      A better way to Evaluation ICP-Eco
                  </p>
              </div>
              <div className="flex flex-wrap my-12 dark:text-white">
                  <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                      <div className="flex items-center mb-6">
                          <img src={daoindexLogo} />
                          <div className="ml-4 text-xl">
                              DAO-Index
                          </div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                          A project that is governed and initiated based on DAO.
                      </p>
                  </div>
                  <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                      <div className="flex items-center mb-6">
                          <img src={userLogo} />
                          <div className="ml-4 text-xl">
                              User
                          </div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                          The current ecological audience and user volume.
                      </p>
                  </div>
                  <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                      <div className="flex items-center mb-6">
                          <img src={githubLogo} />
                          <div className="ml-4 text-xl">
                               GitHub
                          </div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                          The amount and quality of code contributed to the current project.
                      </p>
                  </div>
                  <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                      <div className="flex items-center mb-6">
                          <img src={teamLogo} />
                          <div className="ml-4 text-xl">
                              Team
                          </div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                          The project's team index.
                      </p>
                  </div>
                  <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                      <div className="flex items-center mb-6">
                          <img src={chaindataLogo} />
                          <div className="ml-4 text-xl">
                          ChainData
                          </div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                          The project's on-chain activity data.
                      </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                      <div className="flex items-center mb-6">
                          <img src={fireLogo} />
                          <div className="ml-4 text-xl">
                            Eco-Heat
                          </div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                          The ecology is active and promising.
                      </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                      <div className="flex items-center mb-6">
                          <img src={usageLogo} />
                          <div className="ml-4 text-xl">
                            Usage
                          </div>
                      </div>
                      <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                          Usage scenarios and future expectations of the project.
                      </p>
                  </div>
              </div>
          </div>

        </div>
        {/*<Footer />*/}
    </>
  )
}