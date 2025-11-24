/* eslint-disable @typescript-eslint/no-explicit-any */

import SignInComponent from "./SignIn";

export default async function SignInPage({ searchParams }: any) {
  const queryParams = await searchParams;
  return (
    <>
      {/* <Suspense fallback={null}> */}
      {/* <SignInSearchParamsHandler /> */}
      {/* </Suspense> */}
      <SignInComponent queryParams={queryParams} />
    </>
  );
}
