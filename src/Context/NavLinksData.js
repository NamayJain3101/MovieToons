import React from 'react'
import { GoHome } from 'react-icons/go'
import { MdOndemandVideo } from 'react-icons/md'
import { GrGamepad } from 'react-icons/gr'
import { FiEdit3 } from 'react-icons/fi'
import { BiBookReader } from 'react-icons/bi'
export const NavLinksData = [{
    id: 1,
    text: 'home',
    path: '/',
    icon: <GoHome className='link-icon' />
},
{
    id: 2,
    text: 'cartoons',
    path: '/cartoons',
    icon: <MdOndemandVideo className='link-icon' />
},
{
    id: 3,
    text: 'quiz',
    path: '/quiz',
    icon: <FiEdit3 className='link-icon' />
},
{
    id: 4,
    text: 'games',
    path: '/games',
    icon: <GrGamepad className='link-icon' />
},
{
    id: 5,
    text: 'learning',
    path: '/learning',
    icon: <BiBookReader className='link-icon' />
}
]