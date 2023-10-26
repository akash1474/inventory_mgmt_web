'use-client'
import Image from "next/image"

const ProductForm=({setShowDashboard})=>{

	return (
		<div className="form__container">
			<form 
				onSubmit={(e)=>{
					e.preventDefault();
					console.log("Submitted");
				}}
			>
				<p className="text-xl font-bold text-zinc-950 mb-10">Product Details</p>
			    <div className="grid gap-6 mb-6 md:grid-cols-2">
			        <div>
			            <label htmlFor="first_name" className="block mb-2 text-base font-medium text-gray-900">Product Name</label>
			            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required/>
			        </div>
			        <div>
				        <label htmlFor="category" className="block mb-2 text-base font-medium text-gray-900 ">Category</label>
						<select defaultValue="default" id="category" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
						  <option className="text-gray-900" value="default">Choose a Category</option>
						  <option className="text-gray-900" value="US">United States</option>
						  <option className="text-gray-900" value="CA">Canada</option>
						  <option className="text-gray-900" value="FR">France</option>
						  <option className="text-gray-900" value="DE">Germany</option>
						</select>
			        </div>
			        <div>
			            <label htmlFor="punit" className="block mb-2 text-base font-medium text-gray-900">Price Per Unit</label>
			            <input type="number" id="punit" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Amount" required/>
			        </div>  
			        <div>
				        <label htmlFor="unit" className="block mb-2 text-base font-medium text-gray-900 ">Unit</label>
						<select defaultValue="default" id="unit" className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
						  <option className="text-gray-900" value="default">Choose a Unit</option>
						  <option className="text-gray-900" value="kg">Kilogram</option>
						  <option className="text-gray-900" value="gm">Gram</option>
						  <option className="text-gray-900" value="l">Litre</option>
						  <option className="text-gray-900" value="unit">Unit</option>
						</select>
			        </div>
			        <div>
			            <label htmlFor="buy_price" className="block mb-2 text-base font-medium text-gray-900">Buy Price</label>
			            <input type="number" id="buy_price" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Amount" required/>
			        </div>
			        <div>
			            <label htmlFor="sell_price" className="block mb-2 text-base font-medium text-gray-900">Sell Price</label>
			            <input type="number" id="sell_price" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Amount" required/>
			        </div>
			    </div>
		        <div className="mb-6">
		            <label htmlFor="stock" className="block mb-2 text-base font-medium text-gray-900">Quantity In Stock</label>
		            <input type="number" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Count" required/>
		        </div>
{/*			    <div className="mb-6">
			        <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900">Email address</label>
			        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required/>
			    </div> 
			    <div className="mb-6">
			        <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900">Password</label>
			        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required/>
			    </div> 
			    <div className="mb-6">
			        <label htmlFor="confirm_password" className="block mb-2 text-base font-medium text-gray-900">Confirm password</label>
			        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required/>
			    </div> 
			    <div className="flex items-start mb-6">
			        <div className="flex items-center h-5">
			        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
			        </div>
			        <label htmlFor="remember" className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
			    </div>
*/}			    
		        <button type="none" onClick={()=>setShowDashboard(true)} className="text-white mr-5 bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">Cancel</button>
			    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
			</form>
		</div>
		);
}

export default ProductForm;