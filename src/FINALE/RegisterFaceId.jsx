import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";
import './FaceID.css'
function RegisterFaceId() {
  const videoRef = useRef();
  const [status, setStatus] = useState("Камера іске қосылуда...");
  const navigate = useNavigate();

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    ]);
    startVideo();
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setStatus("Камера іске қосылды. Түріңізді көрсетіңіз.");
      })
      .catch(() => {
        setStatus("Камераға қосылу мүмкін емес.");
      });
  };

  const handleCapture = async () => {
    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (detection) {
      const descriptor = Array.from(detection.descriptor);
      localStorage.setItem("faceDescriptor", JSON.stringify(descriptor));
      setStatus("Тіркелу сәтті өтті! Енді Face ID арқылы кіре аласыз.");
      setTimeout(() => navigate("/loginfaceid"), 2000);
    } else {
      setStatus("Бет табылмады. Қайтадан көріңіз.");
    }
  };

  useEffect(() => {
    loadModels();
  }, []);

  return (
    <div className="faceid-container">
      <h2>Face ID арқылы тіркелу</h2>
      <video ref={videoRef} autoPlay muted width="350" height="260" />
      <button onClick={handleCapture}>Бетімді тіркеу</button>
      <p>{status}</p>
    </div>
  );
}

export default RegisterFaceId;
