import { Box, Flex, Image } from "@chakra-ui/react";
import Type from "./type";
import ProfilePhoto from "../../assets/Programming-amico.png";
import style from "./home.module.css";

function Home() {
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className={style["content-container"]}
      >
        <Box>
          <div className={style["home-content"]}>
            <div>Hi There! </div>
            <div>
              I'M <strong className={style["main-name"]}>NIMA SHERPA</strong>
            </div>
            <div className={style["typewriter-prompt"]}>
              <Type />
            </div>
          </div>
        </Box>
        <Box>
          <Image
            src={ProfilePhoto}
            alt="profile pic"
            maxH="500px"
            className={style.profileImage}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
