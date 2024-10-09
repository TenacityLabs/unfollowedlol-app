import { useState, useEffect } from "react";
import Image from "next/image";

// A component that displays an image with a fallback option
export default function UserAvatar({
  src,
  fallback = "/default.jpg",
  alt,
  width,
  height,
  className,
}: {
  src: string;
  fallback?: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) {
  // State to manage the image source
  const [imageSrc, setImageSrc] = useState(src || fallback); // Default to fallback if no source is provided

  useEffect(() => {
    // Reset the image source if the given source changes
    setImageSrc(src || fallback);
  }, [src, fallback]); // Monitor both `src` and `fallback` for changes

  return <img src={imageSrc} alt={alt} width={width} />;
}
