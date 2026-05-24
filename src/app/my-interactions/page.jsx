import { Avatar } from "@heroui/react";

const MyInteractionsPage = async () => {
  const res = await fetch(`http://localhost:8080/comments`);
  const comments = await res.json();


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
        <div class="w-full container mx-auto p-6 bg-white">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                href="#"
                class="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                Comments ({comments.length} )
              </a>
            </nav>
          </div>

          {comments.map((comment) => (
            <div key={comment.id} class="mt-4 first:mt-0">
              <div class="flex gap-4 bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 container mx-auto">
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
                  <h3 class="text-gray-900 text-2xl font-bold mb-2">
                    {comment.ideaTitle || "Idea Title"}
                  </h3>

                  {/* Dynamic Comment Body */}
                  <p class="text-gray-600 text-sm mb-3">{comment.text}</p>

                  {/* Dynamic Date */}
                  <span class="text-gray-400 text-xs block">
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
