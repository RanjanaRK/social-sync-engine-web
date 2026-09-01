import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PostCarouselProps = {
  images?: {
    url: string;
  }[];
};

const PostCarousel = ({ images = [] }: PostCarouselProps) => {
  const safeImages = images ?? [];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: safeImages.length > 1,
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  if (safeImages.length === 0) {
    return (
      <div className="flex aspect-square w-full items-center justify-center bg-[#0F0D10]">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/4">
            <span className="text-lg text-[#6F666D]">♡</span>
          </div>

          <p className="text-xs text-[#6F666D]">No image available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-[#0F0D10]">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {safeImages.map((image, index) => (
            <div
              key={`${image.url}-${index}`}
              className="min-w-0 flex-[0_0_100%]"
            >
              <img
                src={image.url}
                alt={`Post image ${index + 1}`}
                className="aspect-square w-full object-cover select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {safeImages.length > 1 && (
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous image"
          className="absolute top-1/2 left-3 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:opacity-100 hover:bg-black/65 md:flex"
        >
          <ChevronLeft size={18} strokeWidth={1.8} />
        </button>
      )}

      {safeImages.length > 1 && (
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next image"
          className="absolute top-1/2 right-3 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:opacity-100 hover:bg-black/65 md:flex"
        >
          <ChevronRight size={18} strokeWidth={1.8} />
        </button>
      )}

      {safeImages.length > 1 && (
        <div className="absolute top-3 right-3 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/80 backdrop-blur-md">
          {safeImages.length} photos
        </div>
      )}
    </div>
  );
};

export default PostCarousel;
