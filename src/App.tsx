import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(236, 0, 154), rgb(221, 0, 238));
`;

const Grid = styled.div`
  margin: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlayVariants = {
  initial: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  leaving: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Button = styled(motion.div)`
  margin: 10px;
  font-size: 50px;
  text-align: center;
  width: 180px;
  height: 70px;
  background-color: whitesmoke;
  border-radius: 25px;
  border: none;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const circleSwitch = () => setClicked((prev) => !prev);
  const [id, setId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        <Box
          layoutId="one"
          onClick={() => setId("one")}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        />
        <Box>{!clicked ? <Circle layoutId="circle"></Circle> : null}</Box>
        <Box>{clicked ? <Circle layoutId="circle"></Circle> : null}</Box>
        <Box
          layoutId="two"
          onClick={() => setId("two")}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        />
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={overlayVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          >
            <Box layoutId={id} />
          </Overlay>
        ) : null}
      </AnimatePresence>
      {clicked ? (
        <Button
          onClick={circleSwitch}
          initial={{ scale: 1 }}
          animate={{ scale: 1.5 }}
          exit={{ scale: 1 }}
        >
          Switch
        </Button>
      ) : (
        <Button onClick={circleSwitch}>Switch</Button>
      )}
    </Wrapper>
  );
}
export default App;
