
import SignUpForm from '@/components/form/SignUpForm';
import React from 'react';

const signUp = () => {
  return (
    <main className='flex flex-col h-full w-full border-red-600 bg-red-500 justify-center items-center'>
    <SignUpForm/>
    </main>
  );
};

export default signUp;