'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'
import ProductForm from '@/components/ProductForm'
import CategoryContainer from '@/components/CategoryContainer'

export default function Home() {
  let [showDashboard,setShowDashboard]=useState(true);
  let state={};

  return (
    <div>
      <Header/>
      <CategoryContainer/>
    </div>
    )
}
      // {
      //   showDashboard ? 
      //   <Dashboard setShowDashboard={setShowDashboard} state={state}/>:
      //   <ProductForm setShowDashboard={setShowDashboard} />
      // }
