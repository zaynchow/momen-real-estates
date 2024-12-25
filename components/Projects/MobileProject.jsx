import React, { useState } from "react";
import styled from "styled-components";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const MobileProject = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <OpenButton onClick={() => setOpen(true)}>Open drawer</OpenButton>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <Content>
          <h2>
            Drag the handle at the top of this modal downwards 100px to close it
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
            nulla aliquid iure optio quaerat deserunt, molestias quasi facere
            aut quidem reprehenderit maiores.
          </p>
        </Content>
      </DragCloseDrawer>
    </Container>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, { opacity: [1, 0] });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", { y: [yStart, height] });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <Backdrop
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
        >
          <Drawer
            id="drawer"
            ref={drawerRef}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "easeInOut" }}
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <DrawerHandle>
              <HandleButton
                onPointerDown={(e) => {
                  controls.start(e);
                }}
              />
            </DrawerHandle>
            <DrawerContent>{children}</DrawerContent>
          </Drawer>
        </Backdrop>
      )}
    </>
  );
};

/* Styled Components */

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-content: center;
  background-color: #171717; /* Neutral 950 */
`;

const OpenButton = styled.button`
  border-radius: 0.375rem;
  background-color: #4f46e5; /* Indigo 500 */
  padding: 0.5rem 1rem;
  color: white;
  transition: background-color 0.2s;
  &:hover {
    background-color: #4338ca; /* Indigo 600 */
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(23, 23, 23, 0.7); /* Neutral 950 with 70% opacity */
`;

const Drawer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 75vh;
  width: 100%;
  overflow: hidden;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: #1f2937; /* Neutral 900 */
`;

const DrawerHandle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  background-color: #1f2937; /* Neutral 900 */
  padding: 1rem;
`;

const HandleButton = styled.button`
  height: 0.5rem;
  width: 3.5rem;
  cursor: grab;
  touch-action: none;
  border-radius: 9999px;
  background-color: #374151; /* Neutral 700 */
  &:active {
    cursor: grabbing;
  }
`;

const DrawerContent = styled.div`
  position: relative;
  z-index: 0;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem;
  padding-top: 3rem;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 42rem; /* Max width 2xl */
  color: #9ca3af; /* Neutral 400 */
  h2 {
    font-size: 2.25rem; /* Text 4xl */
    font-weight: 700; /* Bold */
    color: #e5e7eb; /* Neutral 200 */
  }
  p {
    margin-bottom: 1rem;
  }
`;

export default MobileProject;
