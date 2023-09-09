import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div
      key={photo.id}
      className="h-64 bg-gray-200 rounded-xl relative overflow-hidden"
    >
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        sizes="(min-width: 1300px) 282px, (min-width: 1040px) calc(11.67vw + 133px), (min-width: 780px) 33.33vw, (min-width: 520px) 50vw, 100vw"
        className="object-cover"
      ></Image>
    </div>
  );
}
