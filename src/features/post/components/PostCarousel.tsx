import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PostCarouselProps = {
  images: {
    url: string;
  }[];
};

const PostCarousel = ({ images }: PostCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image) => (
              <div className="min-w-0 flex-[0_0_100%]">
                <img
                  src={image.url}
                  alt=""
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 left-3 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 text-white md:flex"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={scrollNext}
              className="absolute top-1/2 right-3 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 text-white md:flex"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default PostCarousel;
