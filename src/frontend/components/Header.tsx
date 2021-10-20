import React from 'react'
import { Auth } from "./Auth"


const menuList = [
    {
        'name':'Home',
        'url':'/',
    },
    {
        'name':'DAOScore',
        'url':'/dao',
    },
    {
        'name':'About',
        'url':'/about',
    },
]

type Props = {
  title: string
}

const Header: React.FC<Props> = ({title}) => {
  return (
        <div className="md:px-20 navbar mb-2 shadow-lg bg-neutral text-neutral-content" data-theme="dark">
            <div className="flex-none px-2 mx-2">
                <span className="text-lg font-bold">
                   <a href="/"> {title} </a>
                </span>
            </div> 
            <div className="flex md:flex-auto px-2 mx-2">
                <div className="md:hidden lg:flex">
                    {
                        menuList.map((item, index) => (
                            <a href={item.url} className="btn btn-ghost btn-sm rounded-btn" key={index}>
                                {item.name}
                            </a> 
                        ))
                    }
                </div>
            </div> 
            <Auth />
        </div>
    )
}

export default Header
