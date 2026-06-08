import { ImagePlus } from "lucide-react";
import { useDropzone } from "react-dropzone";

type Props = {
  images: File[];
  onChange: (files: File[]) => void;
};

const ImageDropzone = ({ images, onChange }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: true,
    maxFiles: 5,

    onDrop: (acceptedFiles) => {
      onChange(acceptedFiles);
    },
  });

  return (
    <div
      {...getRootProps()}
      className="cursor-pointer rounded-3xl border border-dashed border-white/20 bg-[#132238] p-6 transition hover:border-blue-400/40"
    >
      <input {...getInputProps()} />

      {images.length > 0 ? (
        <div className="grid grid-cols-2 gap-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`preview-${index}`}
              className="h-48 w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <ImagePlus size={40} />

          <p>Drag & drop image here</p>

          <p className="text-sm">or click to select</p>
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;
