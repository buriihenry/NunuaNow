import React from 'react'
import Container from './Container'
import Image from 'next/image'
import payment from "@/images/payment.png"

const Footer = () => {
  return (
    <footer className='bg-tech_light_gray text-sm'>
      <Container className='py-5 flex  items-center justify-between'>
        <p className='text-gray-500'>Copyright © 2025{" "}
          <span className='text-tech_blue font-semibold'>Burii</span> all rights reserved.
        </p>
        <Image src={payment} alt="payment" className='w-64 object-cover'/>
      </Container>
    </footer>
  )
}

export default Footer
