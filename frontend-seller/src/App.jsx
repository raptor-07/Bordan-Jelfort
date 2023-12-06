import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    mail: "",
    urls: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(formData);
  };

  const handleMailChange = (event) => {
    // console.log(event);
    setFormData({
      ...formData,
      mail: event.target.value,
    });
    // console.log(formData);
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
        <label htmlFor="mail">Email</label>
        <input
          type="text"
          name="mail"
          placeholder="Enter your amazon seller email"
          value={formData.mail}
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
