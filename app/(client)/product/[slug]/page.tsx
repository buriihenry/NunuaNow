import React from 'react'

const SingleProductPage = async({
    params
}:{
    params:Promise<{slug:string}>;
}) => {
    const { slug } = await params;
    console.log(slug)
  return (
    <div>
      SingleProductPage
    </div>
  )
}

export default SingleProductPage
