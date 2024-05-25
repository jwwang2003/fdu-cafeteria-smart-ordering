'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PersonIcon from '@mui/icons-material/Person';

import { SvgIconProps } from '@mui/material';

interface NavigationItemInterface {
  name: string,
  icon: React.ReactElement<SvgIconProps>,
  path: string
}

const NavigationItems: NavigationItemInterface[] = [
  {
    name: "Home",
    icon: <RestaurantMenuIcon fontSize="inherit" />,
    path: "/"
  },
  {
    name: "Cart",
    icon: <ShoppingCartIcon fontSize="inherit" />,
    path: "/cart"
  },
  {
    name: "Orders",
    icon: <RoomServiceIcon fontSize="inherit" />,
    path: "/orders"
  },
  {
    name: "Me",
    icon: <PersonIcon fontSize="inherit" />,
    path: "/me"
  }
]

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row px-2 py-2 justify-around text-xl phone:text-2xl">
      {
        NavigationItems.map((item, index)=> {
          const isActive = new RegExp(`^${item.path}(/.*)?$`).test(pathname);

          return (
            <Link href={item.path} key={"nav-icon" + index} >
            <div className={`${isActive ? 'bg-blue-200' : ''} px-8 py-2 rounded-lg`} >
              
                <div className="aspect-square h-full text-blue-700">
                  {item.icon}
                </div>
              
            </div>
            </Link>
          )
        })
      }
    </div>
  )
}