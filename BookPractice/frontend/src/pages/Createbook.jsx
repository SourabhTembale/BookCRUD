import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An Error happened. Please check console!!');
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h1 className="text-center">Create Book</h1>
            </div>
            <div className="card-body">
              {loading && <Spinner />}
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="title" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="author" 
                  value={author} 
                  onChange={(e) => setAuthor(e.target.value)} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="publishYear" className="form-label">Publish Year</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="publishYear" 
                  value={publishYear} 
                  onChange={(e) => setPublishYear(e.target.value)} 
                />
              </div>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleSaveBook}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;