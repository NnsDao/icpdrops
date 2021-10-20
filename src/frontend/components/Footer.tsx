import React from 'react';
import Logo from "../assets/logo.png"
import GithubLogo from "../assets/github.png"
import TelegramLogo from "../assets/telegram.png"
import TwitterLogo from "../assets/twitter.png"

const Footer: React.FC<{}> = () => {
  return (
        <footer className="items-center p-5  footer bg-neutral text-neutral-content" data-theme="dark">
            <div className="items-center grid-flow-col ml-10">
                <img className="w-24" src={Logo} />
                <p className="mt-2">Copyright © 2021 - NnsDAO Labs</p>
            </div> 
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mr-20">
                <a className="w-6 mx-1 transform hover:scale-105 transition duration-500" href="https://twitter.com/NnsDaos">
                    <img src={TwitterLogo}  />
                </a> 
                <a href="https://github.com/NnsDao" className="w-6 mx-1 transform hover:scale-105 transition duration-500">
                    <img src={GithubLogo}  />
                </a>
                <a href="https://t.me/NnsDaos" className="w-6 mx-1 transform hover:scale-105 transition duration-500">
                    <img src={TelegramLogo}  />
                </a>
            </div>
        </footer>
    )
}
export default Footer


