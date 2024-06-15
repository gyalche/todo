import * as React from 'react';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDispatch } from 'react-redux';
import { removeIndividalTask } from '@/services/redux/slices/task.slice';
import SheetSide from './drawer';

export function Cards(data: any) {
      const [updateTodo, setUpdateTodo] = React.useState(false)
    const id=data?.data?.id;
  const title = data?.data?.title;
  const description = data?.data?.description;

  const dispatch=useDispatch()
  
  return (
    <>
       <Card className="w-[250px] border-2 border-red-950 h-[150px] p-5 rounded-md shadow-1 dark:bg-surface-dark">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex items-center gap:60 border border-red-900 border-none">
              <h2 className="font-semibold">Title:</h2> <p>{title}</p>
            </div>
            <div className="flex items-center gap:60 border border-red-900 border-none">
              <h2 className="font-semibold">Description:</h2>{' '}
              <p>{description}</p>
            </div>

            <div className='flex items-center justify-between'>
                {/* <button className='bg-slate-500 p-1 rounded-md text-white' onClick={()=>setUpdateTodo(true)}>update</button> */}
                <button className='bg-red-500 p-1 rounded-md text-white' onClick={()=>dispatch(removeIndividalTask(id))}>delete</button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    </>
 
  );
}
