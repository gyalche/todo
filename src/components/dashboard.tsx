import { MyButton } from '@/UI/button';
import ContentWrapper from '@/contentWrapper';
import React from 'react';
import { Label } from '@/components/ui/label';
import SheetSide from './drawer';
import { useSelector } from 'react-redux';
import { getCompletedTaskList } from '@/services/redux/slices/task.slice';
import { Cards } from './card';
import { CardContent } from './ui/card';

type Props = {};

const DashboardComponent = (props: Props) => {
  const data = useSelector(getCompletedTaskList);
  console.log('data', data);
  return (
    <div className="border border-red-800 p-10 h-screen">
      <div className="flex items-center justify-end">
        <SheetSide />
      </div>
      <div className="flex flex-wrap mt-20 w-full gap-5">
        {data?.length? 
          data?.map((val: any) => <Cards key={val.title} data={val} />):(
           <div className='flex w-screen items-center justify-center'>
                <h1>Add your todo task</h1>
           </div>
          )}
      </div>
    </div>
  );
};

export default DashboardComponent;
