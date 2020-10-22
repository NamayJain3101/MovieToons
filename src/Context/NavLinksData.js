import React from 'react'
import { GoHome } from 'react-icons/go'
import { MdOndemandVideo } from 'react-icons/md'
import { CgGames } from 'react-icons/cg'
import { FiEdit3 } from 'react-icons/fi'
import { BiBookReader } from 'react-icons/bi'
export const NavLinksData = [{
    id: 1,
    text: 'home',
    path: '/',
    icon: <GoHome className='link-icon' />,
    color: 'red'
},
{
    id: 2,
    text: 'cartoons',
    path: '/cartoons',
    icon: <MdOndemandVideo className='link-icon' />,
    color: 'green'
},
{
    id: 3,
    text: 'quiz',
    path: '/quiz',
    icon: <FiEdit3 className='link-icon' />,
    color: 'purple'
},
{
    id: 4,
    text: 'games',
    path: '/games',
    icon: <CgGames className='link-icon' />,
    color: 'blue'
},
{
    id: 5,
    text: 'learning',
    path: '/learning',
    icon: <BiBookReader className='link-icon' />,
    color: 'orange'
}
]