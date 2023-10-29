import Image from "next/image"

const Filter=({name})=>{

	return (
		<span class="bg-blue-100 text-blue-800 text-base cursor-pointer font-lg mr-5 px-2.5 py-3.0 rounded hover:bg-blue-800 hover:text-white focus:border-blue-500">{name}</span>
		);
}

export default Filter;