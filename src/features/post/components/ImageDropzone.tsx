import { ImagePlus, UploadCloud, X } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
  images: File[];
  onChange: (files: File[]) => void;
};

const ImageDropzone = ({ images, onChange }: Props) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const combined = [...images, ...acceptedFiles].slice(0, 5);

      onChange(combined);
    },
    [images, onChange],
  );

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);

    onChange(updatedImages);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: true,
    maxFiles: 5,
    onDrop,
  });

  return (
    <div className="space-y-3">
      {/* Preview */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image.name}-${index}`}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[#0F0C10] ring-1 ring-white/6"
            >
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

              {/* Remove */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  removeImage(index);
                }}
                className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 hover:bg-[#E7A8BD] hover:text-[#24171D]"
                aria-label={`Remove image ${index + 1}`}
              >
                <X size={14} />
              </button>

              {/* Image number */}
              <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur-md">
                {index + 1}
              </span>
            </div>
          ))}

          {/* Add more */}
          {images.length < 5 && (
            <div
              {...getRootProps()}
              className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#0F0C10] text-[#625A60] transition hover:border-[#E7A8BD]/30 hover:bg-[#E7A8BD]/5 hover:text-[#E7A8BD]"
            >
              <input {...getInputProps()} />

              <ImagePlus size={22} strokeWidth={1.7} />

              <span className="mt-2 text-xs">Add photo</span>
            </div>
          )}
        </div>
      )}

      {/* Empty upload area */}
      {images.length === 0 && (
        <div
          {...getRootProps()}
          className={`group flex min-h-57.5 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-6 transition-all duration-300 ${
            isDragActive
              ? "border-[#E7A8BD]/60 bg-[#E7A8BD]/10"
              : "border-white/10 bg-[#0F0C10] hover:border-[#E7A8BD]/30 hover:bg-[#E7A8BD]/3"
          }`}
        >
          <input {...getInputProps()} />

          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl transition ${
              isDragActive
                ? "bg-[#E7A8BD]/15 text-[#E7A8BD]"
                : "bg-white/4 text-[#756B72] group-hover:bg-[#E7A8BD]/10 group-hover:text-[#E7A8BD]"
            }`}
          >
            <UploadCloud size={25} strokeWidth={1.6} />
          </div>

          <p className="mt-4 text-sm font-medium text-[#B8AFB5]">
            {isDragActive ? "Drop your images here" : "Drag & drop your images"}
          </p>

          <p className="mt-1 text-xs text-[#625A60]">
            or click to browse from your device
          </p>

          <div className="mt-4 flex items-center gap-2 text-[10px] text-[#514A4F]">
            <span>JPG</span>
            <span>•</span>
            <span>PNG</span>
            <span>•</span>
            <span>WEBP</span>
            <span>•</span>
            <span>Max 5 images</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;
