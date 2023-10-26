'use-client'
import Image from 'next/image'
import Category from '@/components/Category'

const CategoryContainer=()=>{

	return (
		<div className="category__container">

			<div className="bg-gray-50 border p-2.5">
				<p className="text-xl font-bold text-zinc-950 mb-10">Categories</p>
				<Category name="Shampoo" />	
				<Category name="Oil" />	
				<Category name="Soap" />	
				<Category name="Pulses" />	
				<Category name="Biscuits" />	
				<Category name="Juice" />	
	        <div className="mt-auto flex items-center">
	            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1.5" placeholder="Category Name" required/>
				<button type="button" className=" ml-auto text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-medium rounded-md ml-2 text-sm px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
					<Image className="product_icons" src='/plus.svg' alt="Icon" width={20} height={20} />
				</button>

	        </div>
			</div>


		</div>
		);
}

export default CategoryContainer;