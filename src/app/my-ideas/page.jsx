import MyIdeaDataCart from "@/components/myIdeasDataCart";
import NotFoundData from "@/components/NotFountData";
import { auth } from "@/lib/auth";
import { buildApiUrl } from "@/lib/api";
import { headers } from "next/headers";
export const metadata = {
  title: "IdeaVault || My Ideas",
}

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user.id;

  const res = await fetch(buildApiUrl(`/ideasAll/${userId}`));
  const payload = await res.json();
  const myIdeasData = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
    ? payload.data
    : Array.isArray(payload?.ideas)
    ? payload.ideas
    : [];

  if (myIdeasData.length === 0) {
    return <NotFoundData />;
  }

  return (
    <div className="container mx-auto my-10">
      <div className=" relative grid grid-cols-3 gap-5 ">
        {myIdeasData.map((idea) => (
          <MyIdeaDataCart key={idea._id} idea={idea} />
        ))}
      </div>
    </div>
  );
};

export default MyIdeasPage;
