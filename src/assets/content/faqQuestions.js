import { v4 as uuidv4 } from "uuid"

// TODO: Probably better idea is to convert this file to Markdown format (.md)
export default [
  {
    id: uuidv4(),
    title: "About me",
    questions: [
      {
        id: uuidv4(),
        question: "Tell me about yourself",
        answer:
          "I’m Paul, and I’m a Senior Front End Developer at Bigfoot Digital, the digital agency based in Barnsley. I use my keen eye for design and a strong command of Javascript to develop front end experiences, landing pages, apps, emails, and many more. I’ve built many sites that are professional, eye-catching, responsive and easy to navigate. With more than two years in the industry, I’ve gathered enough experience to be a valuable employee and to make the web a beautiful place with every line of code."
      },
      {
        id: uuidv4(),
        question: "Why should I hire You?",
        answer:
          "I have a coding experience needed for this position and an attitude that helps me solve any problem. I have excellent organisation skills which I think are crucial to meet deadlines. And finally, I’m very interested in expanding my knowledge and being a part of an awesome team."
      },
      {
        id: uuidv4(),
        question: "What are your strengths?",
        answer:
          "That's my can-do attitude and that I don’t give up easily. I know that every problem can be solved so if there’s a bug in my code I know it’s just a matter of time before I’ll find the way to fix it."
      },
      {
        id: uuidv4(),
        question: "Where do you see yourself in five years?",
        answer:
          "I'm planing to move out from Barnsley to a bigger city so if I get this job I’ll probably move to Leeds. I'm also planning to keep growing as a developer, so I would probably be a senior dev by that time."
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Title 2",
    questions: [
      {
        id: uuidv4(),
        question: "Question 3",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos earum magni deleniti ratione maxime optio eveniet. Magnam dolorem velit impedit quam libero minus deleniti, qui reiciendis, voluptas ut veritatis!"
      },
      {
        id: uuidv4(),
        question: "Question 4",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos earum magni deleniti ratione maxime optio eveniet. Magnam dolorem velit impedit quam libero minus deleniti, qui reiciendis, voluptas ut veritatis!"
      }
    ]
  }
]
