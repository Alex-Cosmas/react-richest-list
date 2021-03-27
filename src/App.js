import React from 'react'

import Billionaires from './components/Billionaires'
import FemaleBillionaires from './components/FemaleBillionaires'
import YoungestBillionares from './components/YoungestBillionares'
export default function App() {
  return (
    <div className='flex flex-col justify-center container mx-auto'>
      <Billionaires className='' />
      <FemaleBillionaires />
      <YoungestBillionares />
    </div>
  )
}
