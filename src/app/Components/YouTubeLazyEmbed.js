import { useState } from "react";

const YouTubeLazyEmbed = ({ videoId, height = 312 }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl cursor-pointer"
      style={{ height }}
      onClick={() => setIsIframeLoaded(true)}
    >
      {!isIframeLoaded ? (
        <>
          <img
            src={thumbnail}
            alt="YouTube video thumbnail"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl shadow-xl">
              ▶
            </div>
          </div>
        </>
      ) : (
        <iframe
          width="100%"
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeLazyEmbed;
