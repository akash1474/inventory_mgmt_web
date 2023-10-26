import Image from "next/image"

const Product=()=>{

	return (
		<div className="product__container">
			<Image className="product_image" src='/product.svg' alt="Icon" width={48} height={48} />
			<div className="product__title">
				<p className="text-indigo-500 hover:text-indigo-800 cursor-pointer text-decoration-line: underline">Inventory Management System</p>		
				<p className="text-sm text-gray-600">Shampoo</p>		
			</div>
			<div className="product__group">
				<p className="text-zinc-800">Stock:</p>		
				<p className="text-indigo-500">459</p>		
			</div>
			<div className="product__group">
				<p className="text-zinc-800">Buy:</p>		
				<p className="text-indigo-500">25,000</p>		
			</div>
			<div className="product__group">
				<p className="text-zinc-800">Sell:</p>		
				<p className="text-indigo-500">35,000</p>		
			</div>
			<p className="text-emerald-600">+5,000</p>		

			<div className="product__buttons">
				<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center">
					<Image className="product_icons" src='/plus.svg' alt="Icon" width={20} height={20} />
				  <span className="sr-only">Icon description</span>
				</button>

				<button type="button" className="text-white bg-blue-700 ml-3 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center">
					<Image className="product_icons" src='/minus.svg' alt="Icon" width={20} height={20} />
				  <span className="sr-only">Icon description</span>
				</button>

				<button type="button" className="w-120 h-50 ml-auto mt-auto text-white bg-rose-700 hover:bg-rose-800 focus:ring-1 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center mr-2 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
					<Image className="product_icons mr-2" src='/trash.svg' alt="Icon" width={20} height={20} />
				  Delete
				</button>
			</div>
		</div>
		);
}

export default Product;