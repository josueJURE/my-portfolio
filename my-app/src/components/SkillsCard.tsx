// import skillsArray from "./utilities/skillsArray"

const skillsData = [
  {
    skill: "HTML",
    percentage: "95%",
    description: "Mastery in HTML is the cornerstone of my web development journey. With over a year of self-teaching, I've honed my skills in creating clean, semantic, and well-structured HTML, ensuring a solid foundation for every project."
  },
  {
    skill: "CSS",
    percentage: "90%",
    description: "My CSS skills extends beyond styling; it's about creating visually appealing and responsive designs. Through self-guided learning, I've become adept at leveraging CSS to transform static layouts into engaging and user-friendly interfaces."
  },
  {
    skill: "JavaScript",
    percentage: "85%",
    description: "JavaScript is where I thrive in adding interactivity and dynamism to web applications. Over the past year, I've immersed myself in the language to master ES6 concepts."
  },
  {
    skill: "TypeScript",
    percentage: "75%",
    description: "After mastering JavaScript, learning TypeScript felt like the next natural step. I now understand how using types can prevent bugs from propagating into the codebase"
  },
  {
    skill: "Node.js and Express",
    percentage: "85%",
    description: "The dynamic duo of Node.js and Express has revolutionized my web development workflow. With Node.js as the backbone, I can leverage JavaScript's versatility on the server-side, unlocking a seamless coding experience."
  },
  {
    skill: "ChatGPT OpenAI API",
    percentage: "75%",
    description: "The ChatGPT OpenAI API is a recent technology that's captured my interest. I've integrated it into at least two of my projects, and the results have been nothing short of remarkable."
  },
  {
    skill: "React",
    percentage: "50%",
    description: "Since starting to volunteer with CAFOD, I've learned a lot more about React and React hooks such as useContext. I've also been exposed to React libraries and frameworks such as Next.js and Shadcn, respectively"
  }
];

function SkillsCard() {
  return (
    <div className="skills-cards">
      {skillsData.map((item, index) => (
        <div className="skills-card" key={index}>
          <div className="skill">
            <span>{item.skill}</span>
            <span>{item.percentage}</span>
          </div>
          <p>{item.description}</p>
          <div className="skills-card-progress"></div>
        </div>
      ))}
    </div>
  );
}




export default SkillsCard