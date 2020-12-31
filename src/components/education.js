//school name
//title of study
//date of study
const Education = (props) => {
  return (
    <form>
      <h1>Education:</h1>
      <span>
        <p>School:</p>
        <input type="text"></input>
      </span>
      <span>
        <p>Area of study:</p>
        <input type="text"></input>
      </span>
      <span>
        <p>Date:</p>
        <input type="text"></input>
      </span>
    </form>
  );
};
export default Education;
