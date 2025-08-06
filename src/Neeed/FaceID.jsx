

import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import { useNavigate } from 'react-router-dom';
import './FaceID.css';

const FaceID = () => {
  const videoRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('Модельдер жүктелуде...');

  // Модельдерді жүктеу
  const loadModels = async () => {
    const MODEL_URL = '/models';
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    setMessage('Камера қосылуда...');
  };

  // Видеоны бастау
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error('Камера қосылмады:', err);
        setMessage('Камераға қол жеткізу мүмкін болмады');
      });
  };

  // Бетті салыстыру (бір эталон бетпен)
  const handleDetection = async () => {
    setMessage('Бет анықталуда...');
    const detections = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (detections) {
      const referenceImage = await faceapi.fetchImage('/models/reference.jpg'); // эталон фото
      const referenceDetection = await faceapi
        .detectSingleFace(referenceImage, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptor();

      const faceMatcher = new faceapi.FaceMatcher(referenceDetection);
      const match = faceMatcher.findBestMatch(detections.descriptor);

      if (match.distance < 0.5) {
        setMessage('Сәтті сәйкестендірілді! Жүйеге кірдіңіз.');
        setTimeout(() => navigate('/home'), 1500);
      } else {
        setMessage('Бет танылмады. Қайталап көріңіз.');
      }
    } else {
      setMessage('Бет анықталмады.');
    }
  };

  useEffect(() => {
    Promise.all([loadModels()]).then(() => {
      setLoading(false);
      startVideo();
    });
  }, []);

  return (
    <div className="face-container">
      <h2>Face ID тексеру</h2>
      <video ref={videoRef} autoPlay muted width="400" height="300" onPlay={handleDetection} />
      <p>{message}</p>
    </div>
  );
};

export default FaceID;
