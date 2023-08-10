import React, { useState } from "react";
import axios from "axios";
function PostCreate() {
  const [title, setTitle] = useState("");

  async function onSubmitHandler(e) {
    e.preventDefault();
    await axios.post("http://posts.com/posts/create", {
      title,
    });

    setTitle("");
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
