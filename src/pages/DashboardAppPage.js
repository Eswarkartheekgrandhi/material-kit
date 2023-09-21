import React, { useState } from 'react';
import './DashboardAppPage.css';

function DashboardAppPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const videos = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  ];

  const videosPerPage = 6;
  const totalVideos = videos.length;

  const updateVisibility = () => {
    const startIndex = currentPage * videosPerPage;
    const endIndex = Math.min(startIndex + videosPerPage, totalVideos);

    return videos.map((video, index) => {
      if (index >= startIndex && index < endIndex) {
        return (
          <video key={index} className="video" autoPlay controls muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      }
      return null;
    });
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if ((currentPage + 1) * videosPerPage < totalVideos) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {/* <Navigation /> */}
      <div id="video-container">{updateVisibility()}</div>
      <div className="pnbuttons">
        <button onClick={previousPage} className="pn">
          Previous
        </button>
        <button onClick={nextPage} className="pn">
          Next
        </button>
      </div>
    </div>
  );
}

export default DashboardAppPage;
