'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'
import ProductForm from '@/components/ProductForm'
import CategoryContainer from '@/components/CategoryContainer'

export default function Home() {
  let [count,setCount]=useState(0);
  const [data,setData]=useState(null);

  const renderComponent = (count) => {
    switch (count) {
      case 0:
        return <Dashboard setCount={setCount} data={data} setData={setData}/>;
      case 1:
        return <CategoryContainer setCount={setCount}/>
      case 2:
        return <ProductForm setCount={setCount} data={data} setData={setData}/>;
      default:
        return <Dashboard setCount={setCount} data={data} setData={setData}/>;
    }
  };

  return (
    <div>
      <Header/>
      {
        renderComponent(count)
      }
    </div>
    )
}
      // {
      //   showDashboard ? 
      //   <Dashboard setShowDashboard={setShowDashboard} state={state}/>:
      //   <ProductForm setShowDashboard={setShowDashboard} />
      // }
