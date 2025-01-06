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
import Demo from "../../assets/demo.png";
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

  {/* Conditionally render the GitHub icon link */}
  {project.githubLink && (
    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
      <Image src={Github} alt="GitHub" className={style["footer-image"]} />
    </a>
  )}

  {/* Conditionally render the Live Demo icon link */}
  {project.liveDemo && (
    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
      <Image src={Demo} alt="Live Demo" className={style["footer-image"]} />
    </a>
  )}
</DrawerBody>

      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDetails;
