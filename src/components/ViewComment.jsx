"use client";

import { Avatar, Button } from "@heroui/react";
import { useEffect, useState } from "react";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import { useLoading } from "@/components/LoadingProvider";

export const metadata = {
  title: "IdeaVault || View Comment",
  }

const ViewComment = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);

       
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch comments");
        }

        const data = await res.json();

        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchComments();
  }, [id, setLoading]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!id) return null;

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="flex items-center gap-3 p-4 bg-gray-50/70 rounded-lg"
        >
          {/* Avatar */}
          <Avatar>
            <Avatar.Image
              alt="John Doe"
              src={comment.userImage || "https://via.placeholder.com/150"}
            />
            <Avatar.Fallback>{comment.userName?.slice(0, 2) || "U"}</Avatar.Fallback>
          </Avatar>

          {/* Content */}
          <div className="flex flex-col">
            <div className="flex justify-between mb-1">
              <span className="font-bold">{comment.userName || "User"}</span>
            </div>
            <p className="text-gray-700">{comment.text}</p>
            <p className="text-sm text-gray-500">
              {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : "Unknown date"}
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <EditComment id={comment._id} text={comment.text} />
            <DeleteComment id={comment._id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewComment;
