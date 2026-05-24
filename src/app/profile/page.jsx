import UserNameUpdate from "@/components/UserNameUpdate";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";


const ProfilePage = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;
  console.log(user);
  return (
    <div className="container mx-auto bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, <span className="bg-blue-100 px-1 rounded">{user?.name}</span>
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your profile information and account settings.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
           

          <div className="flex items-center gap-4 mb-8">
            <div className="relative group cursor-pointer">
              <Image src={user?.image || "/default-avatar.png"} alt="Profile Photo" width={80} height={80} className="rounded-full" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Profile Photo</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Click the image to change your avatar.
              </p>
            </div>
          </div>

          <UserNameUpdate user={user} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
