const people = [
  {
    name: "Tommy",
    position: "Student",
    cohort: "Thieves",
  },
  {
    name: "Christian",
    position: "Lead Instructor",
    cohort: "Thieves",
  },
  {
    name: "Dylan",
    position: "Associate Instructor",
    cohort: "Thieves",
  },
];

const Card = () => {
  let listPeople = people.map((person) => (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h3 className="card-title">{person.name}</h3>
        <h6 className="card-text">{person.position}</h6>
        <p className="card-text">{person.cohort}</p>
      </div>
    </div>
  ));
  return <div className="card-container">{listPeople}</div>;
};

export default Card;
