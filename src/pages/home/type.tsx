import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: ["Full Stack Developer", "Problem Solver", "Lifelong Learner"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
