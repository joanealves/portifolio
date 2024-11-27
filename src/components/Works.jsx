import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const works = [
  { id: 1, image: "/path/to/project1.jpg", link: "https://link-to-project1.com" },
  { id: 2, image: "/path/to/project2.jpg", link: "https://link-to-project2.com" },
  { id: 3, image: "/path/to/project3.jpg", link: "https://link-to-project3.com" },
];

const ArrowLeft = ({ onClick }) => (
  <button
    style={{ ...styles.arrow, left: "10px" }}
    onClick={onClick}
    aria-label="Previous slide"
  >
    <FaArrowLeft />
  </button>
);

ArrowLeft.propTypes = {
  onClick: PropTypes.func, // Tornando opcional para evitar erros
};

const ArrowRight = ({ onClick }) => (
  <button
    style={{ ...styles.arrow, right: "10px" }}
    onClick={onClick}
    aria-label="Next slide"
  >
    <FaArrowRight />
  </button>
);

ArrowRight.propTypes = {
  onClick: PropTypes.func, // Tornando opcional para evitar erros
};

const Works = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />, // Passando os componentes para o Slider
    prevArrow: <ArrowLeft />,
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundImage}></div>
      <h2 style={styles.title}>Works</h2>
      <p style={styles.subtitle}>
        I had the pleasure of working with these awesome projects
      </p>
      <Slider {...settings}>
        {works.map((work) => (
          <div key={work.id} style={styles.slide}>
            <div style={styles.imageWrapper}>
              <img src={work.image} alt="Project" style={styles.image} />
              <button
                style={styles.overlay}
                onClick={() => openModal(work.image)}
                aria-label="View Website"
              >
                <span style={styles.viewText}>View Website</span>
              </button>
            </div>
          </div>
        ))}
      </Slider>
      {modalImage && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <img src={modalImage} alt="Preview" style={styles.modalImage} />
            <button style={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    backgroundColor: "#292F36",
    padding: "64px 16px",
    textAlign: "center",
    overflow: "hidden",
    height: "auto",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "417px",
    height: "534px",
    margin: "0 auto",
    backgroundImage:
      "url(https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/photo-1619410283995-43d9134e7656.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
    filter: "opacity(10%)",
  },
  title: {
    fontSize: "64px",
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: 400,
    color: "#98FAEC",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "16px",
    fontFamily: "IBM Plex Mono, monospace",
    fontWeight: 400,
    color: "#FFFF",
    marginBottom: "32px",
  },
  slide: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "298px",
    height: "198px",
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#98FAEC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    opacity: 0,
    transition: "opacity 0.3s",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
  },
  viewText: {
    fontFamily: "IBM Plex Mono, monospace",
    cursor: "pointer",
    fontSize: "16px",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#292F36",
    padding: "16px",
    borderRadius: "8px",
    textAlign: "center",
  },
  modalImage: {
    maxWidth: "100%",
    maxHeight: "80vh",
    borderRadius: "8px",
  },
  closeButton: {
    marginTop: "16px",
    padding: "8px 16px",
    backgroundColor: "#98FAEC",
    color: "#292F36",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  arrow: {
    fontSize: "24px",
    color: "#98FAEC",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    cursor: "pointer",
    border: "none",
  },
};

export default Works;