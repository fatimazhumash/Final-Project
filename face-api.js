await faceapi.nets.tinyFaceDetector.loadFromUri('/models/tiny_face_detector_model');
await faceapi.nets.faceLandmark68Net.loadFromUri('/models/face_landmark_68_model');
await faceapi.nets.faceRecognitionNet.loadFromUri('/models/face_recognition_model');
