import React, { useEffect, useState } from "react"
import { counter } from "canisters/counter"

import Header from "../components/Header";
import Footer from "../components/Footer";


export function About() {
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
        <Header title="Icpdrops" />
        <div>
            
            <div className="bg-lightblue py-20 px-4">
                <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                    <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
                        <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3">About</button>
                    </h2>
                    <dl className="w-full md:w-2/3">
                        <dt className="mb-4">
                            <h3 className="text-xl font-semibold">
                                What is NnsDAO Protocol?
                            </h3>
                        </dt>
                        <dd className="mb-10">
                            <p className="font-sans font-medium text-sm align-baseline subpixel-antialiased" >
                                NnsDAO is a boundaryless autonomous organization, which provides some basic modular programmable services for building the world of DAOn.
                            </p>
                        </dd>
                        <dt className="mb-4">
                            <h3 className="text-xl font-semibold">
                                What is Icpdrops?
                            </h3>
                        </dt>
                        <dd className="mb-10">
                            <p className="font-sans font-medium text-sm align-baseline subpixel-antialiased" >
                                Icpdrops is an integrated airdrop platform for the IC ecosystem. After each authorized Nnsdao user can obtain different rights and interests, then participate in the airdrop within the IC ecosystem.
                            </p>
                        </dd>
                        <dt className="mb-4">
                            <h3 className="text-xl font-semibold">
                                How to use Icpdrops?
                            </h3>
                        </dt>
                        <dd className="mb-10">
                            <p className="font-sans font-medium text-sm align-baseline subpixel-antialiased" >
                                In the early days, you can directly browse the project's airdrop information and follow the steps to have a chance to get the airdrop. In the future, Icpdrops will introduce cooperation with some projects to send airdrops, and only users who are authorized to log in will have a chance to get it.
                            </p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}