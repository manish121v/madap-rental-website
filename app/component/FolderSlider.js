"use client";
import React, { useEffect, useState } from "react";

function isVideo(file) {
  return /\.(mp4|mov|avi|mkv)$/i.test(file);
}

export default function FolderSlider({ slug, width = 300, height = 180 }) {
  const [files, setFiles] = useState([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const res = await fetch(`/api/gallery/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch images");
        const data = await res.json();
        setFiles(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchFiles();
  }, [slug]);

  // AUTOPLAY: advance slide every 3 seconds
  useEffect(() => {
    if (files.length === 0) return;

    const interval = setInterval(() => {
      setIdx(prev => (prev + 1) % files.length);
    }, 3000); // change slide every 3000ms = 3s

    // Cleanup on unmount or files change
    return () => clearInterval(interval);
  }, [files]);

  if (files.length === 0) return <div style={{ width, height, background: "#eee" }}>Loading...</div>;

  function next() {
    setIdx((prev) => (prev + 1) % files.length);
  }
  function prev() {
    setIdx((prev) => (prev - 1 + files.length) % files.length);
  }

  return (
    <div style={{ position: "relative", width, height, overflow: "hidden", borderRadius: 8, border: "1px solid #ddd" }}>
      {isVideo(files[idx]) ? (
        <video
          src={files[idx]}
          width={width}
          height={height}
          controls
          preload="none"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <img
          src={files[idx]}
          alt={`Slide ${idx + 1}`}
          width={width}
          height={height}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      )}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: 5,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.3)",
          border: "none",
          color: "#fff",
          padding: "2px 6px",
          cursor: "pointer",
          borderRadius: 3,
          userSelect: "none"
        }}
      >
        ‹
      </button>
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: 5,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.3)",
          border: "none",
          color: "#fff",
          padding: "2px 6px",
          cursor: "pointer",
          borderRadius: 3,
          userSelect: "none"
        }}
      >
        ›
      </button>
    </div>
  );
}
