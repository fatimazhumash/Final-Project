import React from "react";


function Modal({ show, onClose, place }) {
  if (!show || !place) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={place.image} alt={place.name} className="modal-img" />
        <h2>{place.name}</h2>
        <p><strong>Өңірі:</strong> {place.region}</p>
        <p>{place.description}</p>

        <div className="map-box">
          <strong>Карта:</strong>
          <div style={{ height: "250px" }}>
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, borderRadius: "10px" }}
              src={`https://www.google.com/maps?q=${place.coordinates.lat},${place.coordinates.lng}&z=10&output=embed`}
              allowFullScreen
            />
          </div>
        </div>

        <button className="close-btn" onClick={onClose}>Жабу</button>
      </div>
    </div>
  );
}

export default Modal;
