import { Avatar } from "@heroui/react";
import Link from "next/link";
import { buildApiUrl } from "@/lib/api";

export const metadata = {
  title: "IdeaVault || My Interactions",
}

const MyInteractionsPage = async () => {
  const res = await fetch(buildApiUrl("/comments"));
  const data = await res.json();
  const comments = Array.isArray(data)
    ? data
    : Array.isArray(data?.comments)
    ? data.comments
    : Array.isArray(data?.data)
    ? data.data
    : [];


  return (
    <div className="container mx-auto my-8">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Interactions</h1>
        <p className="text-gray-600">
          This page will display all your interactions, including comments and
          ideas you ve engaged with.
        </p>
      </div>
      <div>
        <div className="w-full container mx-auto p-6 ">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <Link
                href="#"
                className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                Comments ({comments.length} )
              </Link>
            </nav>
          </div>

          {comments.map((comment) => (
            <div key={comment._id} className="mt-4 first:mt-0">
              <div className="flex gap-4  rounded-lg p-8 shadow-sm border container mx-auto">
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src={comment.userImage || "https://via.placeholder.com/150"}
                  />
                  <Avatar.Fallback>
                    {comment.userName?.slice(0, 2) || "U"}
                  </Avatar.Fallback>
                </Avatar>

                <div>
                  <h3 className="text-gray-900 text-2xl font-bold mb-2">
                    {comment.ideaTitle || "Idea Title"}
                  </h3>

                  {/* Dynamic Comment Body */}
                  <p className="text-gray-600 text-sm mb-3">{comment.text}</p>

                  {/* Dynamic Date */}
                  <span className="text-gray-400 text-xs block">
                    {comment.createdAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyInteractionsPage;
