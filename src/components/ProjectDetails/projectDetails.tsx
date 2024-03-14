import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Image,
  Text,
} from "@chakra-ui/react";
import Github from "../../assets/github.svg";
import { ProjectDrawerProps } from "../../types";
import Close from "../../assets/close.svg";
import style from "./details.module.css";
const ProjectDetails: React.FC<ProjectDrawerProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!project) return null;

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader className={style.header}>
          {project.title}
          <Image src={Close} onClick={onClose} />
        </DrawerHeader>
        <DrawerBody>
          <div className={style["project-image"]}>
            <Image
              src={project.imageSrc}
              alt={project.title}
              borderRadius="lg"
            />
          </div>
          <Text>
            <strong>Description: </strong> {project.description}
          </Text>
          <Text mt="4" fontWeight="bold">
            Tools:
          </Text>
          <ul>
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          <hr className={style.line} />
          <div className={style.image}>
            <a href={project.githubLink} target="_blank">
              <Image src={Github} alt="GitHub" />
            </a>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDetails;
