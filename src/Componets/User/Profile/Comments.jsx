import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAxios from '../../../axios';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
const axiosinstance=useAxios()
  useEffect(() => {
    // Function to fetch comments by post ID
    const fetchComments = async () => {
      try {
        const response = await axiosinstance.get(`User/comments/${postId}/`);
        console.log('Fetched comments:', response.data); // Log the fetched comments
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    // Fetch comments when component mounts
    fetchComments();
  }, [postId]);

  const handleShowAllComments = () => {
    setShowAllComments(true);
  };

  console.log('Comments:', comments); 

  return (
    <div>
      <h2>Comments</h2>
      {showAllComments ? (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <p>{comment.content}</p>
              {/* <p>By: {comment.user}</p> */}
              {/* <p>Posted at: {comment.created_at}</p> */}
            </li>
          ))}
        </ul>
      ) : (
        <button onClick={handleShowAllComments}>Show All Comments</button>
      )}
    </div>
  );
};

export default Comments;
