import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import Bookstable from "../components/home/Bookstable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType,setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h1 style={{ fontSize: "24px" }}>Book List</h1>

        <button
  style={{
    backgroundColor: 'white', // sky-300
    color: 'black',
    padding: '6px 20px',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }}
  onClick={() => setShowType('table')}
>
  Table
</button>
<button
  style={{
    backgroundColor: 'white', // sky-300
    color: 'black',
    padding: '6px 20px',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }}
  onClick={() => setShowType('card')}
>
  Card
</button>

        <Link to="/books/create">
          <MdOutlineAddBox style={{ color: "#0e7490", fontSize: "32px" }} />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <Bookstable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
