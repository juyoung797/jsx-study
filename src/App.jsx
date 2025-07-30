import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    name: "정주영",
    job: "baeksu",
    imageSrc: "avatar.jpg",
  },
  {
    name: "가나디",
    job: "baeksu",
    imageSrc: "avatar.jpg",
  },
  {
    name: "요를레이히",
    job: "baeksu",
    imageSrc: "avatar.jpg",
  },
]

const App = () => {
  return (
    <>
      <UserCard 
        name={userData[0].name} 
        job={userData[0].job} 
        imageSrc={userData[0].imageSrc} 
      />
      <UserCard 
        name={userData[1].name} 
        job={userData[1].job} 
        imageSrc={userData[1].imageSrc} 
      />
      <UserCard 
        name={userData[2].name} 
        job={userData[2].job} 
        imageSrc={userData[2].imageSrc} 
      />
    </>
  );
};

export default App;