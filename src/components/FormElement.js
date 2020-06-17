import React from "react";

function FormElement(props) {
  return (
    <div>
      <form>
        <label htmlFor="fname">
          First name:
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={props.handleChange}
            value={props.fname}
          />
        </label>
        <br />
        <label htmlFor="lname">
          Last name:
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={props.handleChange}
            value={props.lname}
          />
        </label>
        <br />
        <label htmlFor="age">
          Enter your age:
          <input
            type="number"
            id="age"
            name="age"
            min="18"
            max="130"
            value={props.age}
            onChange={props.handleChange}
          />
        </label>
        <fieldset>
          <legend>Gender:</legend>
          <label htmlFor="male">
            <input
              id="male"
              checked={props.gender === "male"}
              type="radio"
              value="male"
              name="gender"
              onChange={props.handleChange}
            />
            male
          </label>
          <br />
          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            onChange={props.handleChange}
          />
          <label htmlFor="female">female</label>
          <br />
          <input
            type="radio"
            id="other"
            value="other"
            name="gender"
            onChange={props.handleChange}
          />{" "}
          <label htmlFor="other">other</label>
          <br />
        </fieldset>
        <fieldset>
          <legend>Please choose food that you do not consume:</legend>
          <input
            type="checkbox"
            name="kosher"
            checked={props.kosher}
            onChange={props.handleChange}
          />
          Kosher?
          <br />
          <input
            type="checkbox"
            name="hallal"
            checked={props.hallal}
            onChange={props.handleChange}
          />
          Hallal?
          <br />
          <input
            type="checkbox"
            name="lactose"
            checked={props.lactose}
            onChange={props.handleChange}
          />
          Lactose intolerant?
          <br />
          <input
            type="checkbox"
            name="gluten"
            checked={props.gluten}
            onChange={props.handleChange}
          />
          Gluten intolerant?
          <br />
        </fieldset>
        Please select the destination you would like to visit:
        <select
          name="destination"
          value={props.destination}
          onChange={props.handleChange}
        >
          <option value="">-- Please choose destination -- </option>
          <option value="adriatic sea">Adriatic sea</option>
          <option value="mediteranien sea">Mediteranien sea</option>
          <option value="usa">USA</option>
          <option value="brazil">Brazil</option>
        </select>
        <br />
      </form>
      <div id="submitted">
        <h2>Entered information</h2>
        <p>Name: {props.fname}</p> <p>Surname: {props.lname}</p>
        <p>Age: {props.age} </p>
        <p>
          Gender:
          {props.gender}
        </p>
        <p>
          Dietary restrictions:
          {props.kosher === true ? "kosher food" : ""}{" "}
          {props.hallal === true ? "hallal food" : ""}{" "}
          {props.lactose === true ? "lactose intolerant" : ""}{" "}
          {props.gluten === true ? "gluten intolerant" : ""}
        </p>
        <p>
          Destination:
          {props.destination}
        </p>
      </div>
    </div>
  );
}

export default FormElement;
