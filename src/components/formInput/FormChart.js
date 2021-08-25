import { useState } from "react";
import { Button } from "reactstrap";

const FormChart = ({ onDataGet, onCancel }) => {
  const [userDetails, setUserDetails] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandler = (event) => {
    // console.log(event.target.name);
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: userDetails.title,
      amount: userDetails.amount,
      date: new Date(userDetails.date),
    };
    onDataGet(formData);
    document.myForm.reset();
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        style={{ marginTop: "50px", marginBottom: "50px" }}
        name="myForm"
      >
        <h1>Product Information</h1>
        <table align="center" cellSpacing="20" cellPadding="10">
          <tbody>
            <tr>
              <td>Enter Product Title:</td>
              <td>
                <input
                  type="text"
                  name="title"
                  onChange={changeHandler}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Enter Product Amount:</td>
              <td>
                <input
                  type="number"
                  name="amount"
                  onChange={changeHandler}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Enter Product Date:</td>
              <td>
                <input
                  type="date"
                  name="date"
                  min="2015-01-01"
                  max="2020-12-31"
                  onChange={changeHandler}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align={"center"}>
                <Button
                  type="button"
                  style={{
                    marginTop: "50px",
                    marginBottom: "50px",
                    marginRight: "30px",
                  }}
                  color="primary"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
                <Button color="success" type="submit">
                  Submit
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default FormChart;
