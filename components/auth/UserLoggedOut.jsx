'use client'
import Link from 'next/link'
import { Button } from '@mui/material';
const UserLoggedOut = () => {
  return (
    <div className='flex justify-around w-full'>
      <Button variant='outlined'  className='mt-16'>
        <Link href='/signIn'>Se connecter</Link>
      </Button>
      <Button variant='outlined' className='mt-16'>
        <Link href='/signUp'> S&apos;inscrire</Link>
      </Button>
    </div>
  );
};

export default UserLoggedOut;