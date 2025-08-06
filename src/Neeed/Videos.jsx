
// import React, { useEffect, useState, useRef } from "react";
// import "./InfiniteVideoFeed.css";

// cinst SimpleVideos = [
//   { url: "https://www.youtube.com/embed/0BqdTwebAmI" },
//   { url: "https://www.youtube.com/embed/qRfi1yhWtwc" },
//   { url: "https://www.youtube.com/embed/NO25GilhGIQ" },
//   { url: "https://www.youtube.com/embed/?listType=search&list=tik+tok+video" } 
// ];

// const generateVideo = (index) => ({
//   id: index,
//   title: `Видео #${index + 1}`,
//   url: sampleVideos[index % sampleVideos.length],
//   liked: false,
//   comments: [],
// });

// const InfiniteVideoFeed = () => {
//   const [videos, setVideos] = useState([]);
//   const loaderRef = useRef(null);

//   useEffect(() => {
//     loadMoreVideos();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           loadMoreVideos();
//         }
//       },
//       { threshold: 1 }
//     );

//     if (loaderRef.current) observer.observe(loaderRef.current);

//     return () => {
//       if (loaderRef.current) observer.unobserve(loaderRef.current);
//     };
//   }, [videos]);

//   const loadMoreVideos = () => {
//     const newVideos = Array.from({ length: 3 }, (_, i) =>
//       generateVideo(videos.length + i)
//     );
//     setVideos((prev) => [...prev, ...newVideos]);
//   };

//   const toggleLike = (id) => {
//     setVideos((prev) =>
//       prev.map((video) =>
//         video.id === id ? { ...video, liked: !video.liked } : video
//       )
//     );
//   };

//   const handleComment = (id, comment) => {
//     if (!comment.trim()) return;
//     setVideos((prev) =>
//       prev.map((video) =>
//         video.id === id
//           ? { ...video, comments: [...video.comments, comment] }
//           : video
//       )
//     );
//   };

//   const handleShare = (url) => {
//     navigator.clipboard.writeText(url);
//     alert("Сілтеме көшірілді!");
//   };

//   return (
//     <div className="infinite-video-feed">
//       {videos.map((video) => (
//         <div key={video.id} className="video-card">
//           <video controls className="video-player">
//             <source src={video.url} type="video/mp4" />
//           </video>
//           <div className="video-actions">
//             <button onClick={() => toggleLike(video.id)}>
//               {video.liked ? "❤️" : "🤍"}
//             </button>
//             <button onClick={() => handleShare(video.url)}>📤</button>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleComment(video.id, e.target.comment.value);
//                 e.target.comment.value = "";
//               }}
//             >
//               <input name="comment" placeholder="Пікір жаз..." />
//             </form>
//           </div>
//           <div className="video-comments">
//             {video.comments.map((c, i) => (
//               <p key={i}>💬 {c}</p>
//             ))}
//           </div>
//         </div>
//       ))}
//       <div ref={loaderRef} className="loading">
//         Жүктелуде...
//       </div>
//     </div>
//   );
// };

// export default InfiniteVideoFeed;
