import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle ,BiShow} from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
    const [showModal,setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      style={{
        width: "30%", // Adjust to fit 3 cards in a row
        margin: "8px", // Reduced margin for better spacing
      }}
    >
      <div
        style={{
          border: "2px solid gray",
          borderRadius: "8px",
          padding: "12px", // Reduced padding
          position: "relative",
          transition: "box-shadow 0.2s",
        }}
      >
        <h2
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            padding: "4px 8px", // Reduced padding for the year badge
            backgroundColor: "rgba(255, 99, 71, 0.5)", // Adjust opacity if needed
            borderRadius: "8px",
          }}
        >
          {book.publishYear}
        </h2>
        <h4 style={{ margin: "8px 0", color: "gray", fontSize: "14px" }}>
          {book._id}
        </h4>
        <div style={{ display: "flex", alignitems: "center", gap: "4px" }}>
          <PiBookOpenTextLight style={{ color: "red", fontSize: "20px" }} />
          <h2 style={{ margin: "4px 0", fontSize: "16px" }}>{book.title}</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <BiUserCircle style={{ color: "red", fontSize: "20px" }} />
          <h2 style={{ margin: "4px 0", fontSize: "16px" }}>{book.author}</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "4px",
            marginTop: "12px",
            padding: "8px",
          }}
        >
            <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
          <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle style={{ fontSize: "20px", color: "green" }} />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit style={{ fontSize: "20px", color: "orange" }} />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete style={{ fontSize: "20px", color: "red" }} />
          </Link>
        </div>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
