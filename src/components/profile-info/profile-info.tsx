export interface ProfileInfoProps {
    className?: string;
    children?: React.ReactNode;
}
import {createMachine} from "xstate"
import {useForm} from "react-hook-form"



const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});


import {machine} from "../../Events.machine"
import {useState, useEffect} from "react"
/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProfileInfo = ({
    children = 'CODUX FUNCTIONAL TEST',
}: ProfileInfoProps) => {
    const [state] = useState(false)
    const x = useEffect(() => {console.log('render')})
    
    return <div className="flex flex-col gap-2">
        <div className="p-2 bg-gray-100 rounded-full">
            {children}
        </div>
        custom tailwindcss
        <div className="text-white bg-sunset">hello world</div>
        xstate state machine
        <StateMachineTest/>
        React Spring + use-gesture
        <DragExample/>
        React Hook Form
        <UseFormTest/>
        React query
        <div>TODO</div>
    </div>;
};

import {useMachine} from "@xstate/react"
const StateMachineTest = () => {
    const mc = useMachine(toggleMachine)
    return <div></div>
}





import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

function DragExample() {
    
  const [{ x, y, scale }, api] = useSpring(() => ({ x: 0, y: 0, scale: 1 }))
  
  const bind = useDrag(({ down, movement: [x, y] }) => {
    api.start({ x: down ? x : 0, y: down ? y : 0, scale: down ? 1.2 : 1 })
  })

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return <animated.div {...bind()} style={{ x, y, scale }} className="w-16 h-16 bg-purple-800 text-white"/>
}


export default function UseFormTest() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}