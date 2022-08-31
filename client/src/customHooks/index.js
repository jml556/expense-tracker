import { useState } from 'react';
import { postExpense } from '../api';

 export const useInputHandler = (type) => {
   const [value, setValue] = useState('')

   const onChange = (e) => {
     setValue(e.target.value)
   }
   
  return {onChange, value}
 }

 export const useFormSubmit = () => {

 } 
