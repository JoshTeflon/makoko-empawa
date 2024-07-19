import Image from "next/image";
import clsx from "clsx";

import { galleryList } from "@/lib";
import { GalleryItem } from "@/types";

const Gallery = () => {
  const sideLineClass = "ml-[1.125rem] h-full border-r-[0.5px] border-galleryLines/30"
  const bottomLineClass = "mt-[1.125rem] mx-auto w-full border-b-[0.5px] border-galleryLines/30"

  return (
    <section className="width-balance pt-14 pb-16 lg:pt-20">
      <div className="mb-11 lg:mb-14 flex items-center justify-center">
        <h3 className="title-line after:mx-auto text-black text-[1.375rem] lg:text-[2.25rem] leading-6 lg:leading-10 font-medium">
          Gallery
        </h3>
      </div>
      <div>
        <div className="mb-[1.125rem] grid grid-cols-3">
          {
            galleryList?.slice(0, 3)?.map((item: GalleryItem, idx: number) => (
              <div
                key={item?.title ?? `gallery_item_${idx}`}
                className={clsx("w-full flex", { "pl-[1.125rem]": idx !== 0 })}
              >
                <div className="w-full">
                  <div className="w-full h-[32rem]">
                    <div className="w-full h-full">
                      <Image
                        className="w-full h-full"
                        src={item?.src}
                        alt={item?.title ?? `gallery_item_${idx}`}
                        priority
                      />
                    </div>
                  </div>
                  <div className={bottomLineClass}></div>
                </div>
                {idx !== 2 && <div className={clsx("h-[32rem]", sideLineClass)}></div>}
              </div>
            ))
          }
        </div>
        <div className='hidden lg:grid grid-cols-2'>
          {
            galleryList?.slice(-2)?.map((item: GalleryItem, idx: number) => ( 
              <div
                key={item?.title ?? `gallery_item_${idx}`}
                className={clsx("flex", { "pl-[1.125rem]": idx === 1 })}
              >
                <div className="w-full h-[15.5rem]">
                  <Image
                    className="w-full h-full"
                    src={item?.src}
                    alt={item?.title ?? `gallery_item_${idx}`}
                    priority
                  />
                </div>
                {idx === 0 && <div className={clsx("max-h-[12.25rem]", sideLineClass)}></div>}
              </div>
            ))
          }
        </div>
        <div className={clsx("hidden lg:block max-w-[25rem]", bottomLineClass)}></div>
      </div>
    </section>
  )
}

export default Gallery