interface ProjectDescription {
  image_video: string;
  skill1: string;
  skill2: string;
  skill3: string;
  projectName: string;
  projectDescription: string;
}

type ProjectDataType = ProjectDescription[];

const projectData: ProjectDataType = [
  {
    image_video: "video/recipe_app_video.mp4",
    skill1: "recorded by my co-developer",
    skill2: "TypeScript,",
    skill3: "HTML,",
    projectName: "ChatGPT recipe-app videos",
    projectDescription: "After completing my 12-week bootcamp, one of my classmates and I teamed up to build an AI-powered recipe application. Watching the video will allow you to see all of the features the application has"
  },
  {
    image_video: "images/Designer_2.png",
    skill1: "HTML,",
    skill2: "CSS,",
    skill3: "JavaScript",
    projectName: "ChatGPT recipe-app",
    projectDescription: " Recipe For Success is a web application that generates personalised recipes based on user preferences and dietary restrictions. Utilising the OpenAI API for text and image generation, this app provides unique recipes complete with AI-generated images"
  },
  {
    image_video: "images/shopping_cart3.webp",
    skill1: "React,",
    skill2: "ypeScript,",
    skill3: "HTML,",
    projectName: "Shopping Cart",
    projectDescription: "This project, written in React and TypeScript, gave me the opportunity to learn about the useContext React hook, which in some cases proves to be a better alternative to prop drilling. I use Supabase as a backend service to store my data. It is still a work in progress."
  },

  {
    image_video: "images/project2.png",
    skill1: "TypeScript,",
    skill2: "HTML,",
    skill3: "CSS",
    projectName: "Calculator",
    projectDescription: "  My main goal is to rewrite the same calculator in Python, a programming language I'm learning. This will not only reinforce my understanding of Python syntax, but also allow me to compare and contrast the different approaches between TypeScript and Python in building similar applications."
  },
  {
    image_video: "images/project6.png",
    skill1: "HTML,",
    skill2: "CSS,",
    skill3: "JavScript",
    projectName: "Showcase website",
    projectDescription: "The website stands as a testament to my continuous learning and passion for web development, inviting others to explore the possibilities of code. This website was initially a pure frontend project, but I added a backend to it as my coding skills grew. You can now email me directly from my portfolio via an npm package."
  },
];

export default projectData
