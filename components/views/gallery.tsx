import Image from "next/image";
import clsx from "clsx";

import { Button } from "@/components/interface";
import { galleryList } from "@/lib";
import { GalleryItem } from "@/types";

const Gallery: React.FC = () => {
  const sideLineClass = "ml-2.5 lg:ml-[1.125rem] h-full border-r-[0.5px] border-galleryLines/30"
  const bottomLineClass = "mt-[1.125rem] md:mt-2.5 lg:mt-[1.125rem] mx-auto w-full border-b-[0.5px] border-galleryLines/30"

  return (
    <section className="width-balance pt-14 pb-16 lg:pt-20">
      <div className="mb-10 lg:mb-14 flex md:items-center md:justify-center">
        <h3 className="title-line md:after:mx-auto text-black text-[1.375rem] lg:text-[2.25rem] leading-6 lg:leading-10 font-medium">
          Gallery
        </h3>
      </div>
      <div>
        <div className="mb-2.5 lg:mb-[1.125rem] grid md:grid-cols-3">
          {
            galleryList?.slice(0, 3)?.map((item: GalleryItem, idx: number) => (
              <div
                key={`${item?.title}-${idx}`}
                className={clsx("w-full flex", { "md:pl-2.5 lg:pl-[1.125rem]": idx !== 0 })}
              >
                <div className="w-full">
                  <div
                    className="mt-[1.125rem] md:mt-0 mx-auto max-w-[25rem] w-full md:h-[24rem] lg:h-[28rem] xl:h-[32rem] flex flex-col"
                  >
                    {idx === 0 && <h4 className="mb-1 md:mt-auto text-base text-black font-medium leading-5">{item?.title}</h4>}
                    <div className={clsx("relative w-full h-[26rem] md:h-full", {
                        "md:max-h-[75%]": idx !== 1
                      })}
                    >
                      <Image
                        className="w-full h-full"
                        src={item?.src}
                        alt={item?.title ?? `gallery_item_${idx}`}
                        priority
                      />
                      {idx === 1 && <h4 className="absolute bottom-1.5 right-3 text-base text-white font-medium leading-5">{item?.title}</h4>}
                    </div>
                    {idx === 2 && <h4 className="mt-1 text-end text-base text-black font-medium leading-5">{item?.title}</h4>}
                    {
                      idx === 2 &&
                      <Button
                        className="mt-10 md:mt-6 lg:mt-8 xl:mt-10 mx-auto lg:text-sm text-primary"
                        variant="link"
                      >View All Gallery</Button>
                    }
                  </div>
                  <div className={clsx("max-w-[25rem]", bottomLineClass, { 'hidden md:block': idx === 2 })}></div>
                </div>
                {
                  idx !== 2 &&
                  <div className={clsx("hidden md:block max-h-[24rem] lg:max-h-[28rem] xl:max-h-[32rem]", sideLineClass)}></div>
                }
              </div>
            ))
          }
        </div>
        <div className='hidden md:grid grid-cols-2'>
          {
            galleryList?.slice(-2)?.map((item: GalleryItem, idx: number) => ( 
              <div
                key={`${item?.title}-${idx}`}
                className={clsx("flex", { "pl-2.5 lg:pl-[1.125rem]": idx === 1 })}
              >
                <div className="relative w-full h-[14rem] lg:h-[15rem] xl:h-[15.5rem]">
                  <Image
                    className="w-full h-full"
                    src={item?.src}
                    alt={item?.title ?? `gallery_item_${idx}`}
                    priority
                  />
                  <h4 className="absolute bottom-1.5 left-3 text-base text-white font-medium leading-5">{item?.title}</h4>
                </div>
                {idx === 0 && <div className={clsx("max-h-[11.25rem] lg:max-h-[12.25rem]", sideLineClass)}></div>}
              </div>
            ))
          }
        </div>
        <div className={clsx("hidden lg:block max-w-[25rem]", bottomLineClass)}></div>
      </div>
    </section>
  )
}

export default Gallery;