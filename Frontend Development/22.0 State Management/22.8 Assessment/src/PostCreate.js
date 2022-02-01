import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({createPost}) {
  const [type, setType] = useState("Text");
  const [textContent, setTextContent] = useState("");
  const [imageContent, setImageContent] = useState("");

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`
  const handleTypeChange = (e) =>{setType(e.target.value);}
  const handleSubmit = (e) =>{
    e.preventDefault();
    createPost({textContent, imageContent});
    setTextContent("");
    setImageContent("");
  }
  //   const chooseType = (e)=>{  if (type === "Image"){
  //   <input id="content" name="content" type="url" required={true} onChange={handleContentInput} />
  // } else if(type === "Text"){
  //   <textarea id="content" name="content" required={true} rows={3} onChange={handleContentInput} />
  // }}
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" required={true} onChange={handleTypeChange}>
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
            {type === "Text" ? (
              <textarea id="content" name="content" required={true}
              rows={3} value={textContent} onChange={(e) => setTextContent(e.target.value)} />
            ) : (
              <input id="content" name="content" type="url" required={true} value={imageContent}
              onChange={(e) => setImageContent(e.target.value)} />
            )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
