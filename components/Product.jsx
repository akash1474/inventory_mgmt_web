import Image from "next/image"
import axios from 'axios'

const Product=({data,deleteFn,setProducts,products,setData,setCount})=>{

	const buyPrice=data.stock_count*data.price.buy;
	const sellPrice=data.stock_count*data.price.sell;
	const profit=sellPrice-buyPrice;

	function addComma(number) {
	  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}


	const updateStockCount=(increment)=>{
		console.log(data._id);
		const currentCount=increment ? data.stock_count+1 : data.stock_count-1;
		axios.post(`http://localhost:7000/api/product/update/${data._id}`,{stock_count:currentCount}).then((res)=>{

			const newProducts=products.map(obj=>{
				if(obj._id===data._id) return {...obj,stock_count:currentCount};
				return obj;
			})

			setProducts(newProducts);

		}).catch(err=>{
			console.error(err);
		})
	}

	return (
		<div className="product__container">
			<div className="flex items-center">
				<Image className="product_image mr-4" src='/product.svg' alt="Icon" width={48} height={48} />
				<div className="product__title">
					<p
						onClick={()=>{
							setData(data);
							setCount(2);
						}}
						className="text-indigo-500 hover:text-indigo-800 cursor-pointer text-decoration-line: underline">{data.name}</p>		
					<p className="text-sm text-gray-600 capitalize">{data.category.name}</p>		
				</div>
			</div>
			<div className="product__group">
				<p className="text-zinc-800 mr-1">Stock:</p>		
				<p className="text-indigo-500">{addComma(data.stock_count)}</p>		
			</div>
			<div className="product__group">
				<p className="text-zinc-800 mr-1">Buy:</p>		
				<p className="text-indigo-500">{addComma(data.price.buy)}</p>		
			</div>
			<div className="product__group">
				<p className="text-zinc-800 mr-1">Sell:</p>		
				<p className="text-indigo-500">{addComma(data.price.sell)}</p>		
			</div>
			<p className="text-emerald-600">{profit > 0 ? `+${addComma(profit)}` : addComma(profit)}</p>		

			<div className="product__buttons">
				<button
					onClick={()=>updateStockCount(true)} 
				type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm p-1.5 text-center inline-flex items-center">
					<Image className="product_icons" src='/plus.svg' alt="Icon" width={20} height={20} />
				  <span className="sr-only">Icon description</span>
				</button>

				<button
					onClick={()=>updateStockCount(false)} 
				type="button" className="text-white bg-blue-700 ml-3 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm p-1.5 text-center inline-flex items-center">
					<Image className="product_icons" src='/minus.svg' alt="Icon" width={20} height={20} />
				  <span className="sr-only">Icon description</span>
				</button>

				<button
					onClick={()=>deleteFn(data._id)}
				 type="button" className="w-120 h-50 ml-auto mt-auto text-white bg-rose-700 hover:bg-rose-800 focus:ring-1 focus:outline-none focus:ring-rose-300 font-medium rounded-md text-sm px-5 py-2 text-center inline-flex items-center mr-2 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
					<Image className="product_icons mr-2" src='/trash.svg' alt="Icon" width={20} height={20} />
				  Delete
				</button>
			</div>
		</div>
		);
}

export default Product;