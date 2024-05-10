import React, { useState } from 'react';
import useAxios from '../../../axios';
import { Trash2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [noComments, setNoComments] = useState(false);
  const axiosInstance = useAxios();

  const handleShowAllComments = async () => {
    try {
      const response = await axiosInstance.get(`User/comments/${postId}/`);
      if (response.data.length === 0) {
        setNoComments(true);
        setShowAllComments(true); 
      } else {
        setComments(response.data);
        setShowAllComments(true);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleHideComments = () => {
    setShowAllComments(false);
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axiosInstance.delete(`User/delete-comment/${commentId}/`);
      setComments(comments.filter(comment => comment.id !== commentId));
      toast.success('Comment deleted successfully!');
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast.error('You cant delete that comment .');
    }
  };

  return (
    <div>
      {noComments ? (
        <>
          <p>No comments yet.</p>
        </>
      ) : showAllComments ? (
        <>
          <ul className='flex flex-col'>
            {comments.map(comment => (
              <li key={comment.id} className="flex items-center justify-between">
                <div>
                  <p className='text-base'>{comment.content}</p>
                </div>
                <div>
                  <Trash2 className='w-4 ' onClick={() => handleDeleteComment(comment.id)} />
                </div>
              </li>
            ))}
          </ul>
          {comments.length > 0 && (
            <button onClick={handleHideComments} className='text-tiny'>Hide comments</button>
          )}
        </>
      ) : (
        <button className='text-sm' onClick={handleShowAllComments}>Show All Comments</button>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Comments;
