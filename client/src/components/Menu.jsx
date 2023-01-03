import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ postId, cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);

        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [cat]);

  const recommendedPosts = posts.filter((post) => post.id !== postId);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>

      {recommendedPosts.map((rPost) => (
        <div className="post" key={rPost.id}>
          <img src={`../upload/${rPost?.img}`} alt="" />
          <h2>{rPost.title}</h2>
          <Link className="link" to={`/post/${rPost.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
