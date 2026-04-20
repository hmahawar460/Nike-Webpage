import React from 'react'
import nike2 from '../assets/nike2.png'


export default function About() {
  return (
      <div className="py-8">
          <div className="container max-w-6xl m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src={nike2}
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          We Don’t Just Build Products. <br /> We Build Athletes.
                      </h2>
                      <p className="mt-6 text-gray-600">
                          At Nike, innovation is at the heart of everything we create. 
                          From cutting-edge footwear to performance-driven apparel, 
                          our mission is to inspire every athlete* in the world.
                      </p>
                      <p className="mt-4 text-gray-600">
                          Whether you're chasing records, training hard, or just starting 
                          your journey — we’re here to help you push limits and redefine 
                          what’s possible.
                      </p>
                      <p className="mt-6 font-semibold text-black">
                          *If you have a body, you are an athlete.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}