import React from 'react'

function RowAnime(props: any) {
  // console.log(props);

  return (
    <main className='ml-2'>
       <div className="text-2xl mt-6 mb-2 ml-6">{props.title}</div>
      <div className=" flex object-cover overflow-x-scroll scrollbar-hide">
        {props.data.map((prop: any, key: any, title: any) => {
          return (
            <div
              key={key}
              className="relative flex items-center 
                         min-w-[180px] md:min-w-[230px] lg:min-w-[250px] 
                         cursor-pointer transition ease-in-out duration-500  
                         hover:scale-[1.02] m-2 ">
              <div className="group flex flex-col justify-center items-center 
                              absolute rounded-lg text-center
                              min-w-[180px] md:min-w-[230px] lg:min-w-[250px] 
                              h-[101px] md:h-[129px] lg:h-[141px] 
                              hover:bg-[#000000c3] 
                              transition-opacity ease-in-out duration-500 opacity-0 : hover:opacity-100 z-10">
                  <div className='absolute top-1 leading-4 w-[170px] md:w-[220px] lg:w-[240px] 
                                  text-xs md:text-xl lg:text-xl 
                                  '>
                    {prop.snippet.title}
                  </div>
                {/* <div className="hidden group-hover:block ">
                  <img
                    src="/assets/play-button.svg"
                    width={40}
                    alt=""
                    className=""
                  />
                </div>
              <div className='text-xs md:text-base lg:text-lg
                              absolute bottom-2'>
                Rating: {prop.vote_average}/10   
              </div> */}
              </div>
              <div className="">
                <img
                  src={prop.snippet.thumbnails.medium.url}
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

export default RowAnime
