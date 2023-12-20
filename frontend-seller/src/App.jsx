import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    urls: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(formData);

    fetch("http://localhost:3001/auth/addUserSubscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      console.log(response);
    });
  };

  const handleMailChange = (event) => {
    setFormData({
      ...formData,
      email: event.target.value,
    });
  };

  const handleUrlChange = (event, index) => {
    const updatedUrls = [...formData.urls];
    updatedUrls[index] = event.target.value;

    setFormData({
      ...formData,
      urls: updatedUrls,
    });
  };

  const handleUrlInput = () => {
    setFormData({
      ...formData,
      urls: [...formData.urls, ""],
    });
  };

  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your amazon seller email"
          value={formData.email}
          onChange={handleMailChange}
        />
        {formData.urls.map((url, index) => (
          <input
            key={index}
            type="text"
            name="urls"
            value={url}
            onChange={(event) => handleUrlChange(event, index)}
          />
        ))}
        <button type="button" onClick={handleUrlInput}>
          Add Product URL
        </button>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
