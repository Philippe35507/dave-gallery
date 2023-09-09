import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        sizes="(min-width: 1300px) 282px, (min-width: 1040px) calc(11.67vw + 133px), (min-width: 780px) 33.33vw, (min-width: 520px) 50vw, 100vw"
        className="object-cover group-hover:opacity-75"
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
      ></Image>
    </div>
  );
}
