interface ProjectDescription {
  link: string;
  image_video: string;
  skills: string[];

  projectName: string;
  projectDescription: string;
}

type ProjectDataType = ProjectDescription[];

const projectData: ProjectDataType = [
  {
    link: "https://recipe-for-success.onrender.com",
    image_video: "video/recipe_app_video.mp4",
    skills: ["TypeScript, ", "HTML, ", "CSS, ", "Open AI"],
    projectName: "ChatGPT recipe-app",
    projectDescription: "Filmed by my co-developer, this video showcases our AI-powered recipe app. You’ll see all its features in action, including the ability to take a picture of ingredients and generate recipe suggestions based on them."
  },
  {
    link: "https://recipe-for-success.onrender.com",
    image_video: "images/Designer_2.png",
    skills: ["HTML, ", "CSS, ", "JavaScript"],
    projectName: "ChatGPT recipe-app",
    projectDescription: " Recipe For Success is a web application that generates personalised recipes based on user preferences and dietary restrictions. Utilising the OpenAI API for text and image generation, this app provides unique recipes complete with AI-generated images"
  },
  {
    link: "http://shopping-cart-jj.vercel.app/",
    image_video: "images/shopping_cart3.webp",
    skills: ["React, ", "TypeScript, " , "HTML"],
    projectName: "Shopping Cart",
    projectDescription: "This project, written in React and TypeScript, gave me the opportunity to learn about the useContext React hook, which in some cases proves to be a better alternative to prop drilling. I use Supabase as a backend service to store my data. It is still a work in progress."
  },

  {
    link: "https://josuejure.github.io/calculator/",
    image_video: "images/project2.png",
    skills: ["TypeScript, ", "HTML, " , "CSS"],
    projectName: "Calculator",
    projectDescription: "  My main goal is to rewrite the same calculator in Python, a programming language I'm learning. This will not only reinforce my understanding of Python syntax, but also allow me to compare and contrast the different approaches between TypeScript and Python in building similar applications."
  },
  {
    link: "https://josuejure.github.io/Quiz",
    image_video: "images/download.jpeg",
    skills: ["HTML, CSS, JavaScript"],
    projectName: "Anime Quiz",
    projectDescription: "Since I'm an anime fan and I've always loved Japanese culture I decided to build an anime quiz as one of my first projects. I've recently revisited it in order to improve the UI/UX experience. You can even do the quiz in Japanese if you want to. "
  },
];

export default projectData
