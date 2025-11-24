// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import CollapsListitem from "../shared/CollapsListitem";
// import Image from "next/image";
// import { ChangeEvent, FormEvent,  useState } from "react";
// // import { api_url } from "@/hooks/apiurl";

// const BlogFilter = () => {
//   const [searchText, setSearchText] = useState<string>("");
//   // const [searchResults, setSearchResults] = useState<any[]>([]);
//   // const [isSearching, setIsSearching] = useState<boolean>(false);
  
//   const handleSearch = async (e: FormEvent) => {
//     e.preventDefault();
//     // if (!searchText.trim()) {
//     //   setIsSearching(false);
//     //   return;
//     // }
//     // setIsSearching(true);
//     // try {
//     //   const response = await api_url.get(
//     //     `/v1/website/get/blog-list?query=${encodeURIComponent(searchText)}`
//     //   );
//     //   const data = response.data;
//     //   if (data.status === 200) {
//     //     setSearchResults(data.data);
//     //   } else {
//     //     setSearchResults([]);
//     //   }
//     // } catch (error) {
//     //   console.error("Error fetching search results:", error);
//     //   setSearchResults([]);
//     // } finally {
//     //   setIsSearching(false);
//     // }
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearchText(e.target.value);
//     console.log(e.target.value);
//   };
//   return (
//     <div className="w-full max-w-[400px] p-6 rounded-lg bg-white shadow-sm border border-gray-100 flex flex-col gap-6">
//       <div className="bg-white border border-gray-200 flex items-center w-full h-12 rounded-full">
//         <form
//           onSubmit={handleSearch}
//           className="flex items-center w-full h-full"
//         >
//           <input
//             type="text"
//             className="py-2 px-5 focus:outline-none w-full rounded-full text-sm"
//             placeholder="Search articles..."
//             value={searchText}
//             onChange={handleInputChange}
//           />

//           <button
//             // disabled={isSearching}
//             type="submit"
//             className=" bg-primary p-2 rounded-full mr-1 cursor-pointer hover:bg-[#d05c30] transition-colors"
//           >
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 24 24"
//               className="text-xl text-white"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
//             </svg>
//           </button>
//         </form>
//         {/* {(searchResults.length > 0  || isSearching) && (
//         <div className="border border-gray-200 rounded-lg p-4">
//           {isSearching ? (
//             <div className="text-center py-4">Searching...</div>
//           ) : searchResults.length > 0 ? (
//             <>
//               <h3 className="text-sm font-medium text-gray-800 mb-2">
//                 Search Results:
//               </h3>
//               <ul className="space-y-2">
//                 {searchResults.map((result, idx) => (
//                   <li
//                     key={idx}
//                     className="text-sm text-gray-600 hover: text-primary  transition-colors cursor-pointer"
//                   >
//                     <a href={`/blog/${result.id}`}>{result.title}</a>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           ) : (
//             <div className="text-sm text-gray-500">No results found</div>
//           )}
//         </div>
//       )} */}
//       </div>

//       <CollapsListitem title="Categories">
//         <div className="px-1 space-y-3">
//           {[]?.map((list: any, idx: number) => (
//             <div
//               className="flex justify-between items-center hover:bg-gray-50 rounded"
//               key={idx}
//             >
//               <p className="capitalize ">{list?.title}</p>
//               <p className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
//                 {list.count}
//               </p>
//             </div>
//           ))}
//         </div>
//       </CollapsListitem>

//       <CollapsListitem title="Recent Posts">
//         <div className="px-1 space-y-4">
//           {[]?.slice(0, 5)?.map((blog: any, idx: number) => (
//             <button
//               className="w-full transition-all duration-300 ease-in-out flex gap-3 hover:bg-gray-50 p-2 rounded-lg"
//               key={idx}
//             >
//               <Image
//                 className="w-16 h-16 rounded-md object-cover"
//                 src={blog?.image ??""}
//                 alt={blog.title}
//                 width={64}
//                 height={64}
//               />
//               <div className="flex-1 min-w-0">
//                 <h3 className="text-sm font-medium text-gray-800 text-left line-clamp-2">
//                   {blog.title}
//                 </h3>
//                 <p className="text-left text-xs text-gray-500 mt-1">
//                   {blog.date}
//                 </p>
//               </div>
//             </button>
//           ))}
//         </div>
//       </CollapsListitem>

//       <CollapsListitem title="Tags">
//         <div className="px-1 flex flex-wrap gap-2">
//           {tags.map((tag: string, idx: number) => (
//             <button
//               className="border border-gray-200 py-1 px-3 rounded-full text-xs text-gray-600 hover: bg-primary hover:text-white hover:border-primary transition-colors"
//               key={idx}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//       </CollapsListitem>
//     </div>
//   );
// };

// export default BlogFilter;
