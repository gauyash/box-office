import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import { ResultContainer } from "./ResultContainer/ResultContainer";
import { searchForShows } from "../Api/api";

export const Home = ({ star, handleStar }) => {
  // Handling the data in the form
  const [formData, setFormData] = useState({
    search: "",
    options: "shows",
  });

  // Handling the data from the API
  const [data, setData] = useState([]);

  // Handling the onChange event
  function handleChange(event) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  // Handling the onSubmit event
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const apiData = await searchForShows(
        `/search/${formData.options}?q=${formData.search}`
      );
      setData(apiData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        data={data}
      />

      <ResultContainer
        star={star}
        handleStar={handleStar}
        data={data}
        formData={formData}
      />
    </>
  );
};
