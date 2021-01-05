//company
//position title
//main tasks of those jobs
//date from start and to the end
const Work = (props) => {
  return (
    <div>
      <h1>Work Experience</h1>
      <span>
        <p>Company:</p>
        <input type="text"></input>
      </span>
      <span>
        <p>Postion:</p>
        <input type="text"></input>
      </span>
      <span>
        <p>Tasks:</p>
        <input type="text"></input>
      </span>
      <span>
        <p>Start Date:</p>
        <input type="text"></input>
      </span>
      <span>
        <p>End Date:</p>
        <input type="text"></input>
      </span>
    </div>
  );
};
export default Work;
