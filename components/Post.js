// import { useState, useEffect } from "react";
// import useSWR from "swr";

// define the "fetcher" function.  
// This Can also be defined globally using SWRConfig (https://swr.vercel.app/docs/global-configuration)
/* 
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Post() {
	const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/1', fetcher);
  
	return (
	  <>
		<strong>User ID:</strong> {data?.userId}<br />
		<strong>Title:</strong> {data?.title}<br />
		<strong>Body:</strong> {data?.body}<br />
	  </>
	);
  } 
*/

/* 
	export default function Post() {

	const [post, setPost] = useState();
  
	useEffect(() => {
	  fetch(`https://jsonplaceholder.typicode.com/posts/1`).then(res => res.json()).then(data => {
		setPost(data);
	  })
	}, []);
  
	return (
	  <>
		<strong>User ID:</strong> {post?.userId}<br />
		<strong>Title:</strong> {post?.title}<br />
		<strong>Body:</strong> {post?.body}<br />
	  </>
	)
  } 
  
*/

export default function Post(props) {
	return (
	  <>
		<strong>User ID:</strong> {props.post?.userId}<br />
		<strong>Title:</strong> {props.post?.title}<br />
		<strong>Body:</strong> {props.post?.body}<br />
	  </>
	)
  }