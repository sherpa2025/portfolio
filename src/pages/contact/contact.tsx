import { Box, Button, Flex, Input, Textarea } from "@chakra-ui/react";
import style from "./contact.module.css";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Email from "../../assets/email.svg";
import mapPin from "../../assets/pin.svg";
import { Layout } from "../../components/layout";
function Contact() {
  Layout(false);
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        className={style["content-container"]}
      >
        <Box>
          <div className={style["main-name"]}>Nima Sherpa</div>
          <div className={style.contact}>
            <Flex alignItems="center">
              <img src={mapPin} alt="Location" />
              <p>Broomfield, Colorado</p>
            </Flex>
            <Flex alignItems="center">
              <img src={Email} alt="Email" />
              <p>sherpa.ndorjee@gmail.com</p>
            </Flex>
            <Flex alignItems="center">
              <a href="https://github.com/sherpa2025" target="_blank">
                <img src={Github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/nimadorjee/" target="_blank">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
            </Flex>
          </div>
        </Box>

        <Box className={style.form}>
          <form action="https://api.web3forms.com/submit" method="POST">
            <div>
              <label htmlFor="name">Name:</label>
              <Input type="text" id="name" name="name" required mb={5} />
              <Input
                type="hidden"
                name="access_key"
                value="d0c71d05-008d-438a-942e-b4df843635ca"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Input type="email" id="email" name="email" required mb={5} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <Textarea id="message" name="message" required mb={5} />
            </div>
            <Button type="submit">Send Mail</Button>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Contact;
