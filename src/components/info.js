//name
//email
//phone number
const Info = (props) => {
  return (
    <form>
      <h1>Contact Information</h1>
      <span>
        <p>Name:</p>
        <input type="text"></input>
      </span>
      <span>
        <p>Email:</p>
        <input type="text"></input>
      </span>
      <span>
        <p>Phone Number:</p>
        <input type="text"></input>
      </span>
    </form>
  );
};
export default Info;
