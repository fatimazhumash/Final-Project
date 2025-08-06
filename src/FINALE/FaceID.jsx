import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";
import "./FaceID.css";

function FaceID() {
  const videoRef = useRef();
  const [status, setStatus] = useState("Камера іске қосылуда...");
  const navigate = useNavigate();

  // Модельдерді жүктеу
  const loadModels = async () => {
    const MODEL_URL = "/models"; // public/models ішінде
    setStatus("Face ID модельдері жүктелуде...");

    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);

    startVideo();
  };

  // Камераны қосу
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setStatus("Камера іске қосылды. Бетіңізді камераға қаратыңыз.");
      })
      .catch((err) => {
        console.error(err);
        setStatus("Камераға қол жеткізу мүмкін емес.");
      });
  };

  // Бетті тану
  const handleDetectFace = async () => {
    const detections = await faceapi.detectSingleFace(
      videoRef.current,
      new faceapi.TinyFaceDetectorOptions()
    );

    if (detections) {
      setStatus("Бет табылды. Кіру сәтті өтті!");
      // Мұнда логика: токен сақтау, навигация, т.б.
      localStorage.setItem("userToken", "face-id-auth");
      setTimeout(() => navigate("/home"), 1500);
    } else {
      setStatus("Бет анықталмады. Қайталап көріңіз.");
    }
  };

  useEffect(() => {
    loadModels();
  }, []);

  return (
    <div className="faceid-container">
      <h2>Face ID арқылы кіру</h2>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="350"
        height="260"
        style={{ borderRadius: "12px", border: "2px solid #ccc" }}
      />
      <button onClick={handleDetectFace}>Бетті тану</button>
      <p>{status}</p>
    </div>
  );
}

export default FaceID;
