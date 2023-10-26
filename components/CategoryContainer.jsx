'use-client'
import React,{useEffect,useState,useRef } from 'react';
import axios from 'axios'
import Image from 'next/image'
import Category from '@/components/Category'

const CategoryContainer=({setCount})=>{

	const [categories, setCategories] = useState(null);
	const inputRef = useRef(null);


	const getCategories=()=>{
		axios.get("http://localhost:7000/api/category/all?limit=20").then((res)=>{
			setCategories(res.data.doc);
		}).catch(err=>{
			console.error(err);
		})
	}

	useEffect(()=>{
		if(!categories) getCategories();
	},[])

	const deleteCategory=(key)=>{
		axios.delete(`http://localhost:7000/api/category/delete/${key}`).then((res)=>{
			getCategories();
		}).catch(err=>{
			console.error(err);
		})
		console.log(key);
	}

	const createCategory=(name)=>{
		axios.post("http://localhost:7000/api/category/create",{name}).then((res)=>{
			getCategories();
			inputRef.current.value="";
		}).catch(err=>{
			console.error(err);
		})
		console.log(name);
	}

	const handleKeyDown=(e)=>{
		if(e.key==='Enter'){
			createCategory(inputRef.current.value);
		}
	}

	return (
		<div className="category__container">
			<button onClick={()=>{setCount(0)}} type="button" className="absolute top-5 left-5 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-medium rounded-md ml-2 text-sm px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
				<Image className="product_icons mr-2" src='/back.svg' alt="Icon" width={20} height={20} />
				Back
			</button>


			<div className="bg-gray-50 border p-2.5">
				<p className="text-xl font-bold text-zinc-950 mb-5">Categories</p>
				{
					categories ? categories.map((el)=>(<Category key={el._id} id={el._id} name={el.name} deleteFn={deleteCategory}/>)): null
				}
	        <div className="mt-auto flex items-center">
	            <input 
					onKeyPress={handleKeyDown}
	            	ref={inputRef} 
	            	type="text" id="first_name" className="mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1.5" placeholder="Category Name" required/>
				<button 
					onClick={()=>createCategory(inputRef.current.value)}
				type="button" className=" ml-auto text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-medium rounded-md ml-2 text-sm px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
					<Image className="product_icons" src='/plus.svg' alt="Icon" width={20} height={20} />
				</button>

	        </div>
			</div>


		</div>
		);
}

export default CategoryContainer;