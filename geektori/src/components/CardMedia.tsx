import React from "react";

interface CardMediaProps {
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

const Image = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  // console.log("thsis is props : ", { ...props });
  return (
    <img className={`esticker-image ${props.className ?? ""}`} {...props} />
  );
};

const CardMedia = (props: CardMediaProps) => {
  return (
    <div className={`esticker-media ${props.className ?? ""}`}>
      <Image src={props.imageSrc} alt={props.imageAlt ?? ""} />
    </div>
  );
};

export { CardMedia, Image };
