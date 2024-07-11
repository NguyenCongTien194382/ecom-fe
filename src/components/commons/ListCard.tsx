import React from 'react'
import Link from 'next/link'
import Container from '../ui/Container'
import CardItem from './CardItem'

const ListCard = () => {
  return (
    <div>
      <Container>
        <h2 className='uppercase text-2xl font-bold mb-4 mt-8 hover:opacity-60'>
          <Link href="">NEW ARRIVAL</Link>
        </h2>
        <div className='w-full grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </Container>
    </div>
  )
}

export default ListCard