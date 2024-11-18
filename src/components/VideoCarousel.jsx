import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import "../style/Carousel.css";

export default function VideoCarousel() {
  const [videos, setVideos] = useState([]);

  // Sample data for your video projects
  const videoData = [
    {
      id: 1,
      title: "Video Project 1",
      description: "",
      videoUrl: "/video/video-01.mp4",
    },
    {
      id: 2,
      title: "Video Project 2",
      description: "",
      videoUrl: "../video/video-02.mp4",
    },
    {
      id: 3,
      title: "Video Project 3",
      description: ".",
      videoUrl: "/video/video-03.mp4",
    },
    {
      id: 4,
      title: "Video Project 4",
      description: "",
      videoUrl: "/video/video-04.mp4",
    },
    {
      id: 5,
      title: "Video Project 5",
      description: "",
      videoUrl: "/video/video-05.mp4",
    },
    {
      id: 6,
      title: "Video Project 6",
      description: "",
      videoUrl: "/video/video-06.mp4",
    },
    {
      id: 7,
      title: "Video Project 7",
      description: "",
      videoUrl: "/video/video-07.mp4",
    },
    {
      id: 8,
      title: "Video Project 8",
      description: "",
      videoUrl: "/video/video-08.mp4",
    },
    {
      id: 9,
      title: "Video Project 9",
      description: "",
      videoUrl: "/video/video-09.mp4",
    },
    {
      id: 10,
      title: "Video Project 10",
      description: "",
      videoUrl: "/video/video-10.mp4",
    },
    {
      id: 11,
      title: "Video Project 11",
      description: "",
      videoUrl: "/video/video-11.mp4",
    },

    // Add more video data here
  ];

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (status) => {
    switch (status) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return null;
    }
  };

  useEffect(() => {
    // You can replace this with actual data fetching logic if needed
    setVideos(videoData);
  }, []);

  const videoTemplate = (video) => {
    return (
      <div
        id="projects"
        className=" carousel-card border-1 surface-border border-round m-2 text-center py-5 px-3"
      >
        <div className="mb-3">
          <video width="100%" height="550px" controls>
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h4 className="mb-1">{video.title}</h4>
          <p className="mt-0 mb-3">{video.description}</p>
          <Tag value={video.status} severity={getSeverity(video.status)}></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            {/* <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            /> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={videos}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={8000}
        itemTemplate={videoTemplate}
      />
    </div>
  );
}
