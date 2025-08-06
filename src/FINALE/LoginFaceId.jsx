import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";

function LoginFaceID() {
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
        setStatus("Камера қосылмады.");
      });
  };

  const handleLogin = async () => {
    const storedDescriptor = localStorage.getItem("faceDescriptor");
    if (!storedDescriptor) {
      setStatus("Алдымен тіркелу қажет.");
      return;
    }

    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (!detection) {
      setStatus("Бет табылмады.");
      return;
    }

    const descriptorFromCamera = detection.descriptor;
    const descriptorFromStorage = new Float32Array(JSON.parse(storedDescriptor));
    const distance = faceapi.euclideanDistance(descriptorFromCamera, descriptorFromStorage);

    if (distance < 0.5) {
      setStatus("Face ID сәйкестігі табылды! Кіру сәтті.");
      localStorage.setItem("userToken", "face-id-auth");
      setTimeout(() => navigate("/home"), 1500);
    } else {
      setStatus("Бет сәйкес келмеді.");
    }
  };

  useEffect(() => {
    loadModels();
  }, []);

  return (
    <div className="faceid-container">
      <h2>Face ID арқылы кіру</h2>
      <video ref={videoRef} autoPlay muted width="350" height="260" />
      <button onClick={handleLogin}>Face ID арқылы кіру</button>
      <p>{status}</p>
    </div>
  );
}

export default LoginFaceID;
