/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaReply, FaEdit, FaTrash, FaUser, FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { api_url } from '@/hooks/apiurl';


interface Commentator {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image?: string;
}

interface Comment {
  _id: string;
  blog_id: string;
  text: string;
  commentator: Commentator;
  createdAt?: string;
  replies?: Comment[];
}

interface PostcommentProps {
  comments: Comment[];
  postId: string;
  refetch:()=>void
}

const Postcomment = ({ comments = [], postId,refetch }: PostcommentProps) => {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [commentText, setCommentText] = useState('');
  const [localComments, setLocalComments] = useState<Comment[]>(comments);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setIsSubmitting(true);
    try {
      const commentData = {
        id: postId,
        text: newComment,
      };
      refetch()
      const response = await api_url.post('/v1/website/create-comment/on-blog', commentData);
      
      if (response.data.success) {
        const newCommentData = {
          ...response.data.data,
          commentator: response.data.data.commentator || {
            _id: 'current-user',
            first_name: 'You',
            last_name: '',
            email: ''
          }
        };
        
        setLocalComments(prev => [newCommentData, ...prev]);
        setNewComment('');
        toast.success('Comment posted successfully!');
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.error || 'Failed to post comment');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (commentId: string, currentText: string) => {
    setEditingComment(commentId);
    setCommentText(currentText);
  };

  const handleUpdate = async (commentId: string) => {
    try {
      const response = await api_url.put(`/v1/website/update-comment/${commentId}`, {
        text: commentText
      });
      
      if (response.data.success) {
        setLocalComments(prev =>
          prev.map(comment => 
            comment._id === commentId 
              ? { ...comment, text: commentText } 
              : comment
          )
        );
        setEditingComment(null);
        toast.success('Comment updated successfully!');
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.error || 'Failed to update comment');
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!confirm('Are you sure you want to delete this comment?')) return;
    
    try {
      const response = await api_url.delete(`/v1/website/delete-comment/${commentId}`);
      
      if (response.data.success) {
        setLocalComments(prev => prev.filter(comment => comment._id !== commentId));
        toast.success('Comment deleted successfully!');
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.error || 'Failed to delete comment');
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Just now';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getUserName = (commentator: Commentator) => {
    return `${commentator.first_name} ${commentator.last_name}`;
  };

  const renderComment = (comment: Comment, isReply = false) => (
    <div
      key={comment._id}
      className={`border rounded-lg p-4 mb-4 ${isReply ? 'ml-8 bg-[#f9f9fa]' : 'bg-white'}`}
    >
      <div className="flex items-start gap-3">
        {comment.commentator.profile_image ? (
          <Image
            src={comment?.commentator?.profile_image}
            alt={getUserName(comment?.commentator)}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#f6fef9] flex items-center justify-center">
            <FaUser className="text-[#1D2939]" />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-[#1D2939]">
                {getUserName(comment.commentator)}
              </h4>
              <span className="text-xs text-gray-500">
                {formatDate(comment.createdAt)}
              </span>
            </div>
            {comment.commentator._id === 'current-user-id' && (
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(comment._id, comment.text)}
                  className="text-gray-500 hover:text-[#1cab55]"
                >
                  <FaEdit size={14} />
                </button>
                <button
                  onClick={() => handleDelete(comment._id)}
                  className="text-gray-500 hover:text-[#e1242c]"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            )}
          </div>

          {editingComment === comment._id ? (
            <div className="mt-2">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-[#1cab55] focus:border-transparent"
                rows={3}
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => setEditingComment(null)}
                  className="px-3 py-1 text-sm border rounded hover:bg-[#f6fef9]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleUpdate(comment._id)}
                  className="px-3 py-1 text-sm bg-[#1cab55] text-white rounded hover:bg-[#16d43b]"
                >
                  Update
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-2 text-[#1D2939]">{comment.text}</p>
          )}

          <div className="flex items-center gap-4 mt-3">
            <button
              onClick={() => setReplyingTo(replyingTo === comment._id ? null : comment._id)}
              className="flex items-center gap-1 text-sm text-[#1cab55] hover:text-[#16d43b]"
            >
              <FaReply size={12} /> Reply
            </button>
            
            <button className="flex items-center gap-1 text-sm text-[#1D2939] hover:text-[#e1242c]">
              {true ? (
                <FaHeart className="text-[#e1242c]" size={12} />
              ) : (
                <FaRegHeart size={12} />
              )}
              <span>Like</span>
            </button>
          </div>

          {replyingTo === comment._id && (
            <div className="mt-3">
              <textarea
                placeholder="Write your reply..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-[#1cab55] focus:border-transparent"
                rows={2}
              />
              <div className="flex justify-end gap-2 mt-1">
                <button
                  onClick={() => setReplyingTo(null)}
                  className="px-2 py-1 text-xs border rounded hover:bg-[#f6fef9]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-2 py-1 text-xs bg-[#1cab55] text-white rounded flex items-center gap-1 hover:bg-[#16d43b]"
                >
                  <FiSend size={12} /> Post Reply
                </button>
              </div>
            </div>
          )}

          {comment.replies?.map((reply) => renderComment(reply, true))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-6 text-[#1D2939]">
        Comments ({localComments.length})
      </h3>

      {/* Add new comment */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#f6fef9] flex items-center justify-center">
              <FaUser className="text-[#1D2939]" />
            </div>
          </div>
          <div className="flex-1">
            <textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1cab55] focus:border-transparent"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-[#1cab55] text-white rounded-lg hover:bg-[#16d43b] flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Posting...' : (
                  <>
                    <FiSend /> Post Comment
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments list */}
      <div className="space-y-4">
        {localComments.length > 0 ? (
          localComments.map((comment) => renderComment(comment, false))
        ) : (
          <p className="text-gray-500 text-center py-4">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default Postcomment;