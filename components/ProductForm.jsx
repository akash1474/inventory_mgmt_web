'use-client'
import Image from "next/image"
import axios from 'axios'
import React, {useRef,useState,useEffect} from 'react'

const ProductForm=({setCount,data,setData})=>{

	const [categories, setCategories] = useState(null);
	const stockRef = useRef(null);
	const buyRef = useRef(null);
	const sellRef = useRef(null);
	const nameRef = useRef(null);
	const unitRef = useRef(null);
	const categoryRef = useRef(null);


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

	useEffect(()=>{
		if(data){
			stockRef.current.value=data.stock_count;
			buyRef.current.value=data.price.buy;
			sellRef.current.value=data.price.sell;
			nameRef.current.value=data.name;
			unitRef.current.value=data.unit;
			categoryRef.current.value=data.category._id;
		}
	},[categories])

	const createProduct=()=>{
		const product_data={
			name:nameRef.current.value,
			price:{
				buy:buyRef.current.value,
				sell:sellRef.current.value,
			},
			stock_count:stockRef.current.value,
			category:categoryRef.current.value,
			unit:unitRef.current.value
		};
		const url= data ? `http://localhost:7000/api/product/update/${data._id}` : "http://localhost:7000/api/product/create"
		axios.post(url,product_data).then((res)=>{
			setCount(0);
		}).catch(err=>{
			console.error(err);
		})
	}

	return (
		<div className="form__container">
			<form 
				onSubmit={(e)=>{
					e.preventDefault();
					createProduct();
					setData(null);
					console.log("Submitted");
				}}
			>
				<p className="text-xl font-bold text-zinc-950 mb-10">Product Details</p>
			    <div className="grid gap-6 mb-6 md:grid-cols-2">
			        <div>
			            <label htmlFor="first_name" className="block mb-2 text-base font-medium text-gray-900">Product Name</label>
			            <input ref={nameRef} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required/>
			        </div>
			        <div>
				        <label htmlFor="category" className="block mb-2 text-base font-medium text-gray-900 ">Category</label>
						<select ref={categoryRef} id="category" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize">
						  <option className="text-gray-900" value="default">Choose a Category</option>
						  {
						  	categories ? categories.map((el)=><option key={el._id} className="text-gray-900 capitalize" value={el._id}>{el.name}</option>):null
						  }
						</select>
			        </div>
			        <div>
				        <label htmlFor="unit" className="block mb-2 text-base font-medium text-gray-900 ">Unit</label>
						<select ref={unitRef} defaultValue="default" id="unit" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
						  <option className="text-gray-900" value="default">Choose a Unit</option>
						  <option className="text-gray-900" value="kilogram">Kilogram</option>
						  <option className="text-gray-900" value="gram">Gram</option>
						  <option className="text-gray-900" value="litre">Litre</option>
						  <option className="text-gray-900" value="unit">Unit</option>
						</select>
			        </div>
			        <div>
			            <label htmlFor="buy_price" className="block mb-2 text-base font-medium text-gray-900">Buy Price</label>
			            <input ref={buyRef} type="number" id="buy_price" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Amount" required/>
			        </div>
			        <div>
			            <label htmlFor="sell_price" className="block mb-2 text-base font-medium text-gray-900">Sell Price</label>
			            <input ref={sellRef} type="number" id="sell_price" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Amount" required/>
			        </div>
			    </div>
		        <div className="mb-6">
		            <label htmlFor="stock" className="block mb-2 text-base font-medium text-gray-900">Quantity In Stock</label>
		            <input ref={stockRef} type="number" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Count" required/>
		        </div>
		        <button type="none" 
			        onClick={()=>{
			        	setCount(0);
			        	setData(null);
			        }} 
			        className="text-white mr-5 bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-md text-base w-full sm:w-auto px-5 py-2 text-center">Cancel</button>
			    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-base w-full sm:w-auto px-5 py-2 text-center">
			     {data ? "Update" : "Create"}
			    </button>
			</form>
		</div>
		);
}

export default ProductForm;