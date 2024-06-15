import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { MyButton } from '@/UI/button';
import { useDispatch } from 'react-redux';
import { storTaskComplete } from '@/services/redux/slices/task.slice';
import { v4 as uuidv4 } from 'uuid';
const SheetSide = () => {
  const [todo, setTodo] = useState({
    id:uuidv4(),
    title: '',
    description: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  console.log('todo', todo);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <MyButton text="Add Todo" onClick={()=>{
    setTodo({...todo, title:'', description:''})
        }}/>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 shadow-1 dark:bg-surface-dark" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none rounded-md">
          <fieldset className="mb-[15px] flex items-center gap-5 mt-5">
            <label
              className="text-violet11 w-[90px] text-right text-[15px]"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="title"
              value={todo.title}
              name="title"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-violet11 w-[90px] text-right text-[15px]"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="description"
              value={todo.description}
              name="description"
              onChange={handleChange}
            />
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <MyButton
                variant="link"
                text="Add"
                onClick={() =>{
                    if(todo.title && todo.description){
                         dispatch(storTaskComplete(todo))
                    }
                }}
              />
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SheetSide;
