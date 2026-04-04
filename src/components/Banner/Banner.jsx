import React from 'react'
import checkout from "../../../public/assets/images/checkout/checkout.png";
import breadcrumbs from "../../../public/assets/icons/breadcrume.svg";
export const Banner = ({title}) => {
  return (
    <div>
              {/* Banner */}
              <div className="relative my-10 lg:my-20">
                <img
                  src={checkout}
                  className="w-full h-40 sm:h-56 lg:h-full object-cover rounded-md"
                />
        
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent rounded-md"></div>
        
                <h4 className="absolute top-1/2 left-5 lg:left-20 -translate-y-1/2 text-lg sm:text-2xl lg:text-4xl text-white font-semibold">
                  {title}
                </h4>
        
                <img
                  src={breadcrumbs}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:w-auto w-52"
                />
        
                <p className="absolute bottom-2 text-white text-sm left-1/2 -translate-x-1/2">
                  Home {">"} {title}
                </p>
              </div>
    </div>
  )
}
