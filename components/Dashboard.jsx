import Image from "next/image"
import Product from '@/components/Product'
import axios from 'axios'
import React,{useState,useEffect,useRef} from 'react'
import Filter from '@/components/Filter'

const Dashboard=({data,setData,setCount})=>{

	const [products, setProducts] = useState(null);
	const [categories, setCategories] = useState(null);
	const inputRef = useRef(null);
	const categoryRef=useRef(null);

	const getCategories=()=>{
		axios.get(`http://localhost:7000/api/category/all?limit=50`).then((res)=>{
			setCategories(res.data.doc);
		}).catch(err=>{
			console.error(err);
		})
	}



	const getProducts=()=>{
		let filters="";
		if(categoryRef.current.value!=="default"){
			filters+=`&category=${categoryRef.current.value}`
		}
		console.log(filters)
		axios.get(`http://localhost:7000/api/product/all?limit=50${filters}`).then((res)=>{
			console.log(res.data.doc)
			setProducts(res.data.doc);
		}).catch(err=>{
			console.error(err);
		})
	}

	useEffect(()=>{
		if(!products) getProducts();
		if(!categories) getCategories();
	},[])


	const deleteProduct=(id)=>{
		axios.delete(`http://localhost:7000/api/product/delete/${id}`).then((res)=>{
			getProducts();
		}).catch(err=>{
			console.error(err);
		})
		console.log(id);
	}

	const handleKeyDown=(e)=>{
		if(e.key==='Enter'){
			createProduct(inputRef.current.value);
		}
	}

	return (
		<div className="dashboard__container">
			<p className="text-zinc-950 text-2xl">Products</p>
			<div className="dashboard__filters h-10 mt-3">
		        <label htmlFor="category" className="block mb-2 text-base font-bold font-base text-zinc-950">Filter:</label>
				<select onChange={()=>getProducts()} ref={categoryRef} id="category" className="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-70 p-1.5 capitalize">
				  <option className="text-gray-900" value="default">None</option>
				  {
				  	categories ? categories.map((el)=><option key={el._id} className="text-gray-900 capitalize" value={el._id}>{el.name}</option>):null
				  }
				</select>
			</div>
			<div className="dashboard__products">
			{
				products ? products.map((el)=><Product setCount={setCount} setData={setData} key={el._id} data={el} setProducts={setProducts} products={products}  deleteFn={deleteProduct}/>) : null
			}
			</div>
			<div className="ml-auto mt-auto">
				<button
					onClick={()=>setCount(1)}
				 type="button" className="w-120 text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				  <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
				    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
				  </svg>
				  Edit Categories
				</button>
				<button
					onClick={()=>setCount(2)}
				 type="button" className="w-120 text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				  <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
				  <path d="M18 2L15.585938 4.4140625L19.585938 8.4140625L22 6L18 2 z M 14.076172 5.9238281L3 17L3 21L7 21L18.076172 9.9238281L14.076172 5.9238281 z" fill="#FFFFFF" />
				  </svg>
				  Add Product
				</button>
			</div>
		</div>
		);
}

export default Dashboard;