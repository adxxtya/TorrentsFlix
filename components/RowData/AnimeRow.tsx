import React from 'react'

function Row(props: any) {
  //   console.log(props);

  return (
    <main className='ml-2'>
       <div className="text-2xl mt-6 mb-4 ml-6">{props.title}</div>
      <div className="flex object-cover items-center overflow-y-hidden
                    overflow-x-scroll scrollbar-hide">
        {props?.data.map((prop: any, key: any, title: any) => {
          return (
            <div
              key={key}
              className="relative flex items-center justify-center rounded-lg
                         min-w-[120px] md:min-w-[140px] lg:min-w-[160px] 
                         cursor-pointer transition ease-in-out duration-500  
                         hover:scale-[1.02] m-2 
                         h-36 md:h-40 lg:h-48
                         ">
              <div className="group flex justify-center items-center 
                              absolute text-center
                              min-w-[120px] md:min-w-[140px] lg:min-w-[160px]  
                              h-40 md:h-44 lg:h-56
                              hover:bg-[#000000c3]
                              transition-opacity ease-in-out duration-500 opacity-0 : hover:opacity-100 z-10">
                  <div className='absolute top-1 leading-4 min-w-[110px] md:min-w-[130px] lg:min-w-[150px]  
                                  text-xs md:text-lg lg:text-xl 
                                  '>
                    {prop?.title_english || prop?.title || prop?.original_title || prop?.name}
                  </div>
                 <div className="hidden group-hover:block ">
                  <img
                    src="/assets/play-button.svg"
                    width={45}
                    alt=""
                    className=""
                  />
                  </div>
                  <div className='text-xs md:text-base lg:text-lg
                              absolute bottom-4 '>
                Rating: {prop?.score}/10   
                   </div>
              </div>
              <div className="rounded-lg">
                <img
                   src={prop?.images.jpg.maximum_image_url || prop?.images.jpg.large_image_url || prop?.images.webp.large_image_url || prop?.images.jpg.image_url}
                  className="rounded-lg"
                />
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Row
