import { useState, useEffect } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import OrderItem from './OrderItem';

export {OrderItem}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function OrderList() {
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
        case "ratepending":
          setValue(1);
          break;
        case "refund":
          setValue(2);
          break;
        default:
          break;
      }
    }
  }, [pathname]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab
              component={Link}
              href="/orders"
              label={"全部订单"}/>

            <Tab 
              component={Link}
              href="/orders/ratepending"
              label={"待评价"}/>

            <Tab
              component={Link}
              href="/orders/refund"
              label={"退款/集后"}/>
        </Tabs>
      </Box>
    </Box>
  );
}