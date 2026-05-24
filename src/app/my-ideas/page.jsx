import MyIdeaDataCart from "@/components/myIdeasDataCart";
import NotFoundData from "@/components/NotFountData";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user.id;

  const res = await fetch(`https://ideavault-server-sigma.vercel.app/ideasAll/${userId}`);
  const myIdeasData = await res.json();
  if (!myIdeasData) {
    return <NotFoundData/>
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
