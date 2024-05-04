import { useState, useEffect } from "react";
import styles from "@styles/react/YoutubeReactVideos.module.css";
// import "@styles/main.css";

import Modal from "./Modal";

export const YoutubeReactVideos = ({ apiKey, channelId }) => {
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        console.log(data.items);
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [apiKey, channelId]);

  return (
    <section>
      <h3 className={[styles.heading, styles.h4].join(" ")}>Youtube</h3>

      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <Modal open={open} onOpenChange={setOpen}>
              <Modal.Button>
                <img src={video.snippet.thumbnails.medium.url} alt="" />
              </Modal.Button>
              <h4
                className={[
                  styles.heading,
                  styles.h6,
                  styles["color-secondary"],
                ].join(" ")}
              >
                {video.snippet.title}
              </h4>

              <Modal.Button>Дивитись</Modal.Button>

              <Modal.Content>
                <div className={styles["video-container"]}>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </Modal.Content>
            </Modal>
          </li>
        ))}
      </ul>
    </section>
  );
};
