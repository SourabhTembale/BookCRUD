import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Bookstable = ({books}) => {
  return (
    
              <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "2px",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid gray", padding: "8px" }}>No</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Title</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Author</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Publish Year
              </th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td style={{ border: "1px solid gray", textAlign: "center", padding: "8px" }}>
                  {index + 1}
                </td>
                <td style={{ border: "1px solid gray", textAlign: "center", padding: "8px" }}>
                  {book.title}
                </td>
                <td style={{ border: "1px solid gray", textAlign: "center", padding: "8px" }}>
                  {book.author}
                </td>
                <td style={{ border: "1px solid gray", textAlign: "center", padding: "8px" }}>
                  {book.publishYear}
                </td>
                <td style={{ border: "1px solid gray", textAlign: "center", padding: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                    <Link to={`books/details/${book._id}`}>
                      <BsInfoCircle style={{ fontSize: "24px", color: "green" }} />
                    </Link>
                    <Link to={`books/edit/${book._id}`}>
                      <AiOutlineEdit style={{ fontSize: "24px", color: "orange" }} />
                    </Link>
                    <Link to={`books/delete/${book._id}`}>
                      <MdOutlineDelete style={{ fontSize: "24px", color: "red" }} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
  )
}

export default Bookstable
