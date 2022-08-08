import React, { ReactNode } from 'react';

import authImage from '@ui-kit/icons/auth.jpg';

interface SplitScreenProprs {
  children: ReactNode;
}

export function SplitScreen({ children }: SplitScreenProprs) {
  return (
    <div className='min-h-full flex'>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 bg-grey-900'>
        <div className='mx-auto w-full max-w-2lg'>
          <div>{children}</div>
        </div>
      </div>
      <div className='lg:block relative w-0 flex-1 hidden before:w-full before:h-full before:absolute before:z-10 before:bg-gradient-to-r from-grey-900 to-grey-50'>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src={authImage}
        />
      </div>
    </div>
  );
}
