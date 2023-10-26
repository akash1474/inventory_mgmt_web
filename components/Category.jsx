'use-client'
import Image from "next/image"

const Category=({name})=>{

	return (
			<div className="h-12 bg-indigo-100 rounded-md border border-indigo-200 p-2.5 mb-2 flex items-center">
				<p className="text-base font-bold text-indigo-500">{name}</p>
				<button type="button" className=" ml-auto text-white bg-rose-700 hover:bg-rose-800 focus:ring-1 focus:outline-none focus:ring-rose-300 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
					<Image className="product_icons" src='/trash.svg' alt="Icon" width={20} height={20} />
				</button>
			</div>
		);
}

export default Category;