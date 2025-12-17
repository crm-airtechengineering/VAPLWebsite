import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});

  const videos = [
    {
      id: 1,
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'HVAC Installation Process',
      description: 'Watch our expert team install state-of-the-art HVAC systems',
    },
    {
      id: 2,
      url: 'https://www.w3schools.com/html/movie.mp4',
      title: 'Energy Efficient Solutions',
      description: 'Discover how our solutions reduce energy consumption',
    },
    {
      id: 3,
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'Client Success Stories',
      description: "See the impact we've made across 400+ projects",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const togglePlayPause = (index: number, videoElement: HTMLVideoElement | null) => {
    if (videoElement) {
      if (isPlaying[index]) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying({ ...isPlaying, [index]: !isPlaying[index] });
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Video Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        {/* Main Video Display */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <video
            key={videos[currentIndex].id}
            className="w-full h-full object-cover"
            controls
            ref={(el) => {
              if (el) {
                el.onplay = () => setIsPlaying({ ...isPlaying, [currentIndex]: true });
                el.onpause = () => setIsPlaying({ ...isPlaying, [currentIndex]: false });
              }
            }}
          >
            <source src={videos[currentIndex].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Video Info */}
        <div className="mt-6 text-center">
          <h2 className="text-3xl text-gray-900 mb-3">
            {videos[currentIndex].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {videos[currentIndex].description}
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-4 ring-blue-600 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <video
                src={video.url}
                className="w-full h-full object-cover"
                muted
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <p className="text-white text-xs truncate">{video.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}