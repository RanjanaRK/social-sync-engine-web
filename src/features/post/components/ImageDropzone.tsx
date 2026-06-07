import { ImagePlus } from "lucide-react";
import { useDropzone } from "react-dropzone";

type Props = {
  image?: File;
  onChange: (file: File) => void;
};

const ImageDropzone = ({ image, onChange }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,

    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        onChange(file);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className="cursor-pointer rounded-3xl border border-dashed border-white/20 bg-[#132238] p-6 transition hover:border-blue-400/40"
    >
      <input {...getInputProps()} />

      {image ? (
        <img
          src={URL.createObjectURL(image)}
          alt="preview"
          className="max-h-96 w-full rounded-2xl object-cover"
        />
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
