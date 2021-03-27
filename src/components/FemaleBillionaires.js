// eslint-disable-next-line
import { female_billionaires } from '../data/female_billionaires'
import React, { useState } from 'react'

const FemaleBillionaires = () => {
  // eslint-disable-next-line
  const [people, setPeople] = useState(female_billionaires)

  return (
    <>
      <h1 className='text-5xl my-10 text-center'>
        The top 10 Women Billionaires in the World
      </h1>
      <section className='grid sm:grid-cols-3 gap-8'>
        {people.map((person) => {
          const {
            id,
            name,
            netWorth,
            country,
            source,
            industry,
            image,
            story,
          } = person

          return (
            <article
              key={id}
              className='bg-gray-900  rounded-md shadow-lg text-white'
            >
              <div className='p-10'>
                <div className=''>
                  <div className='flex justify-between py-4 items-center'>
                    <h3 className='text-2xl '>{name}</h3>
                  </div>
                  <div className='flex items-center justify-between pb-4'>
                    <div>
                      Net Worth<p className='text-4xl'>{netWorth}</p>
                    </div>
                    <img
                      src={image}
                      alt='{name}'
                      className='w-48 h-48  rounded-full object-cover'
                    />
                  </div>

                  <div className='flex flex-col '>
                    <div className='flex justify-between items-center'>
                      <div>
                        Source
                        <p className='bg-white text-gray-900 px-8 py-1 rounded-sm'>
                          {source}
                        </p>
                      </div>
                      <p>{country}</p>
                      <div>
                        <p>{industry}</p>
                      </div>
                    </div>
                    <p>{story}</p>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default FemaleBillionaires
