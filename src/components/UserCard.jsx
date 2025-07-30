const UserCard = (props) => {
  return <div className="card">
    <img src={props.imageSrc} alt={props.name} />
    <h2>{props.name}</h2>
    <h2>{props.job}</h2>
  </div>;
}

const UserCard2 = ({ name, job, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <h2>{job}</h2>
    </div>
  );
};

export default UserCard;