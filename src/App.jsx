import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    name: "정주영",
    job: "baeksu",
    imageSrc: "avatar.jpg",
  },
  {
    name: "Jane Doe",
    job: "Programmer",
    imageSrc: "avatar2.webp",
  },
  {
    name: "가나디",
    job: "Writer",
    imageSrc: "avatar3.jpeg",
  },
]

const App = () => {
  return (
    <>
      {
        userData.map((value) =>
          (<UserCard 
            key={value.id}
            name={value.name} 
            job={value.job} 
            imageSrc={value.imageSrc}/>
          ))
      }
    </>
  );
};

export default App;