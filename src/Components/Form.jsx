import React from "react";

export const Form = ({ data, formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
      <input
        type="text"
        name="search"
        id="search"
        className="rounded border-0 py-2 px-3 shadow-sm"
        placeholder="Search for something"
        onChange={handleChange}
        value={formData.search}
      />
      <div className="options d-flex justify-content-between">
        <div className="d-flex justify-content-center align-items-center">
          <input
            className="radio-buttons"
            type="radio"
            name="options"
            id="shows"
            onChange={handleChange}
            value="shows"
            checked={formData.options === "shows"}
          />
          <label className="radio-label" htmlFor="shows">
            Shows
          </label>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <input
            className="radio-buttons"
            type="radio"
            name="options"
            id="actor"
            onChange={handleChange}
            value="people"
          />
          <label className="radio-label" htmlFor="actor">
            Actor
          </label>
        </div>
      </div>
      <div className="text-center">
        <button className="rounded text-bg-success border-0 py-2 px-5">
          Search
        </button>
      </div>
    </form>
  );
};
