import { useState } from 'react';
import { Segmented, Tabs } from 'antd';
import Description from './Description/Description';
import { DescriptionData } from './Description/DescriptionData';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Description',
    children: <Description data={DescriptionData}/>
  },
  {
    key: '2',
    label: 'Additional Info',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Reviews',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Video',
    children: 'Content of Tab Pane 4',
  },
];

const TabsBanner = () => {
    const [alignValue, setAlignValue] = useState('center');
  return (
    <div className='w-[1100px] m-auto'>
      <Segmented
        value={alignValue}
        style={{
          marginBottom: 8,
        }}
      />
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        indicator={{
          size: (origin) => origin - 20,
          align: alignValue,
        }}
      />
    </div>
  )
}

export default TabsBanner