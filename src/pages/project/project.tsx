import { useEffect, useState } from "react";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setCards } from "../../redux/reducers/slices/cardSlice";
import { CardData } from "../../types";
import Demo from "../../assets/demo.png";
import tenaya from "../../assets/tenaya-logo.png";
import Course1 from "../../assets/course1.jpg";
import TodoApp from "../../assets/todo.png";
import Portfolio from "../../assets/portfolio.png";
import Github from "../../assets/github.svg";
import style from "./project.module.css";
import { Layout } from "../../components/layout";
import ProjectDetails from "../../components/ProjectDetails/projectDetails";

function Project() {
  Layout(true);
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards);
  const [selectedProject, setSelectedProject] = useState<CardData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const projectData: CardData[] = [
      {
        imageSrc: tenaya,
        title: "Tenaya Fit Recommendation System",
        description:
          "A multi-step shoe size recommendation app designed to improve the online shopping experience. This intuitive and responsive application, built with React and Node.js, allows users to select shoe brands, models, and sizes seamlessly. It features sophisticated algorithms for size conversion across various size types, ensuring accurate and personalized recommendations. Collaboration with stakeholders ensured the app aligned with business needs, enhancing user satisfaction and engagement.",
        liveDemo: "https://trango.com/pages/test",
        tools: [
          "React",
          "HTML",
          "CSS",
          "Node.js",
          "JavaScript",
        ],
      },
      {
        imageSrc: Course1,
        title: "Course Planner",
        description:
          "A digital tool designed to assist Computer Science students of UCDenver in creating, organizing, and managing educational courses.",
        githubLink: "https://github.com/sherpa2025/course-dragon",
        tools: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "HTML",
          "CSS",
          "JavaScript",
          "Docker",
        ],
      },
      {
        imageSrc: TodoApp,
        title: "Todo Application",
        description:
          "A digital tool designed to help users manage tasks and stay organized. It allows users to create lists of tasks, edit the tasks, and mark tasks as completed when they're done.",
        githubLink: "https://github.com/satshree/task-manager-todo",
        tools: ["React", "Node.js", "HTML", "CSS", "TypeScript"],
      },
      {
        imageSrc: Portfolio,
        title: "My Portfolio",
        description:
          "An online platform where I can showcase my work, skills, and accomplishments. It serves as a digital portfolio or resume, allowing me to display my projects and contact details.",
        githubLink: "https://github.com/sherpa2025/portfolio",
        tools: ["React", "Node.js", "HTML", "CSS", "TypeScript", "ChakraUI"],
      },
    ];
    dispatch(setCards(projectData));
  }, [dispatch]);

  const handleProjectClick = (project: CardData) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Flex
      flexWrap={{ base: "wrap", md: "nowrap" }}
      justifyContent={{ base: "center", md: "space-between" }}
    >
      {cards.map((data, index) => (
        <Card
          key={index}
          maxW="sm"
          mb={{ base: "4", md: "0" }}
          bg="gray.100"
          m={5}
          onClick={() => handleProjectClick(data)}
        >
          <CardBody className={style["body-image"]}>
            <Image src={data.imageSrc} alt={data.title} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{data.title}</Heading>
              <Text>{data.description}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            {/* Conditionally render GitHub icon if githubLink exists */}
            {data.githubLink && (
              <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
                <Image src={Github} alt="GitHub" className={style["footer-image"]} />
              </a>
            )}
          
            {/* Conditionally render Live Demo icon if liveDemo exists */}
            {data.liveDemo && (
              <a href={data.liveDemo} target="_blank" rel="noopener noreferrer">
                <Image src={Demo} alt="Live Demo" className={style["footer-image"]} />
              </a>
            )}
          </CardFooter>

        </Card>
      ))}
      <ProjectDetails
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        project={selectedProject}
      />
    </Flex>
  );
}

export default Project;
