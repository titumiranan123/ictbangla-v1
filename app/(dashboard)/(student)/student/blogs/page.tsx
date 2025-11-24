import { blogFetch } from '@/hooks/fetchfunctions/instructor/blogfetch';
import { queryClient } from '@/utils/queryclient/queryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React from 'react';
import Bloglist from './Bloglist';

const Blogs =async () => {
  await  queryClient.prefetchQuery({
    queryKey:["blogs"],
    queryFn:()=>blogFetch()
  })
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Bloglist />
    </HydrationBoundary>
  );
};

export default Blogs;