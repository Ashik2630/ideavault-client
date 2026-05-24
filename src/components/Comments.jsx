"use client";
import { authClient } from "@/lib/auth-client";
import ViewComment from "./ViewComment";
import toast from "react-hot-toast";
import { getVerificationToken } from "@/lib/verification-token";

const Comments = ({ id, ideaDetail }) => {
  const {
    data: session
  } = authClient.useSession();
  const user = session?.user;



  const handleCommentBtn = async (e) => {
    e.preventDefault();

    const commentData = e.target[0].value;


    const comment = {
      ideaTitle: ideaDetail?.ideaTitle,
      createdAt: new Date(),
      text: commentData,
      userName: user?.name,
      userImage: user?.image,
      ideaId: id,
    };


    const token = getVerificationToken();
    const headers = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}`, "x-verification-token": token } : {}),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`, {
      method: "POST",
      headers,
      body: JSON.stringify(comment),
    });
    if(res.ok) {
      window.location.reload(true);
      toast.success("Comment added successfully!");
    }
    
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-sm border border-gray-100 font-sans">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Comments (2)</h2>

      {/* Comment Input Form */}
      <form onSubmit={handleCommentBtn} className="mb-6">
        <textarea
          className="w-full h-25 px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-indigo-600 transition-colors resize-vertical"
          placeholder="Add your comment..."
        />
        <button
          type="submit"
          className="mt-3 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base rounded-lg transition-colors shadow-sm"
        >
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <ViewComment ideaDetail={ideaDetail} id={id} />
    </div>
  );
};

export default Comments;
