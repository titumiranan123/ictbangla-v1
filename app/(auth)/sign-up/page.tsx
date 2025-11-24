/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SingupComponent from './SignupComponent';

const Signup =async ({
  searchParams,
}:any) => {
  const queryParams =await searchParams
  return (
    <>
      <SingupComponent queryParams={queryParams}  />
    </>
  );
};

export default Signup;