"use client"

import { useState, useEffect } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function OrdersLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const t = pathname.split('/');
    console.log(t);

    if (t.length <= 2) setValue(0);
    else {
      switch (t[2]) {
        case "merchant":
          setValue(1);
          break;
        default:
          setValue(0);
      }
    }
  }, [pathname]);

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab
                component={Link}
                href="/register"
                label={"User"}/>

              <Tab 
                component={Link}
                href="/register/merchant"
                label={"Merchant"}/>
          </Tabs>
        </Box>
      </Box>
      {children}
    </div>
  )
}