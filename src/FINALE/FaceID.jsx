import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";
import "./FaceID.css";

function FaceID() {
  const videoRef = useRef();
  const [status, setStatus] = useState("Камера іске қосылуда...");
  const navigate = useNavigate();

  const loadModels = async () => {
    const MODEL_URL = "/models";
    setStatus("Face ID модельдері жүктелуде...");

    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      startVideo();
    } catch (err) {
      console.error("Модель жүктеу қатесі:", err);
      setStatus("Модельдерді жүктеу мүмкін болмады.");
    }
  };

  const startVideo = () => {
    if (navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          setStatus("Камера іске қосылды. Бетіңізді камераға қаратыңыз.");
        })
        .catch((err) => {
          console.error("Камера қатесі:", err);
          setStatus("Камераға қол жеткізу мүмкін емес.");
        });
    } else {
      setStatus("Бұл құрылғы камераны қолдамайды.");
    }
  };

  const handleDetectFace = async () => {
    const result = await faceapi.detectSingleFace(
      videoRef.current,
      new faceapi.TinyFaceDetectorOptions()
    );

    if (result) {
      setStatus("Бет табылды. Кіру сәтті өтті!");
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
