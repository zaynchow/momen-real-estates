import React, { useState } from "react";
import styled from "styled-components";
import {
  motion,
  useDragControls,
  useMotionValue,
  useAnimate,
} from "framer-motion";
import Map from "../Home/Map";

const MobileProjectContainer = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  background-color: #f8f8f8;
  height: 90vh;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.4);
  width: 100vw;
  bottom: -83%;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 20px;
  border: 2px solid grey;

  .dragging-btn-container {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: #f8f8f8;
    width: 100%;
    padding: 10px;
    button {
      background-color: #333;
      border: none;
      height: 10px;
      width: 80px;
      border-radius: 20px;
      cursor: grab;
      touch-action: none;
      &:active {
        cursor: grabbing;
      }
    }
  }

  .modal-content-container {
    margin-top: 10px;
    touch-action: none;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    p {
      margin: 0;
      color: black;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .map-container {
      width: 100%;
      height: 100%;
    }
  }
`;

const MobileProject = ({ projects }) => {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    await animate(
      scope.current,
      {
        bottom: ["0%", "-83%"],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      }
    );
    setOpen(false);
  };

  const handleOpen = async () => {
    await animate(
      scope.current,
      {
        bottom: ["-83%", "0%"],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      }
    );

    setOpen(true);
  };
  return (
    <MobileProjectContainer
      isOpen={open}
      onClick={(e) => e.stopPropagation()}
      transition={{ ease: "easeInOut" }}
      initial={{ bottom: "-83%" }}
      ref={scope}
      drag="y"
      style={{ y }}
      onDragEnd={() => {
        if (y.get() > 100) {
          handleClose();
        } else if (y.get() < -100) {
          handleOpen();
        }
      }}
      dragControls={controls}
      dragListener={false}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={open ? { top: 0, bottom: 0.5 } : { top: 0.5, bottom: 0 }}
    >
      <div className="dragging-btn-container">
        <button
          onPointerDown={(e) => {
            controls.start(e);
          }}
        />
      </div>
      <div className="modal-content-container">
        <p>{open ? "Hide Map" : "Show Map"}</p>
        <Map project_locations={projects} />
      </div>
    </MobileProjectContainer>
  );
};

export default MobileProject;
