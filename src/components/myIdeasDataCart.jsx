"use client";
import { useSession } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import MyIdeaEdit from "./MyIdeaEdit";
import MyIdeaDelete from "./MyIdeaDelete";

const MyIdeaDataCart = ({ idea }) => {
  const { data: section } = useSession();
  const user = section?.user;
  if(!user){
    return null;
  }
  const { _id, ideaTitle, shortDescription, category, imageUrl } = idea;

  return (
    <div className="group flex flex-col  rounded-4xl   overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden aspect-16/10">
        <Image
          alt="Course Image"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          src={
            imageUrl ||
            "https://i.ibb.co/n8zTkcGm/photo-1498837167922-ddd27525d352.jpg"
          }
          fill
        />
        <div className="absolute top-4 right-4">
          <Chip
            color="primary"
            variant="solid"
            className="font-bold shadow-lg shadow-blue-600/20"
          >
            {category}
          </Chip>
        </div>
      </div>
      <div className="relative px-6 pb-6 pt-2 flex flex-col grow z-10">
        {/* Title (Changes color when the whole card is hovered) */}
        <h3 className="text-xl font-black text-slate-800 mb-3 leading-snug group-hover:text-indigo-600 transition-colors duration-300">
          {ideaTitle}
        </h3>

        {/* Description */}
        <div className="flex ">
          <p className="text-slate-500 text-sm mb-6 grow line-clamp-3 leading-relaxed">
            {shortDescription}
          </p>
          <MyIdeaEdit idea={idea} />
          <MyIdeaDelete idea={idea}  />
        </div>

        {/* Footer Actions: Avatar & Button perfectly aligned horizontally */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          {/* Upgraded Avatar */}
          <div className="flex items-center space-x-2">
            <div className="w-30 h-8 rounded-full  flex items-center justify-center text-xs font-bold">
              <Image
                className="rounded-full mr-2"
                src={user?.image}
                alt={user?.name || "image"}
                width={30}
                height={30}
              />
              <p>{user?.name || "US"}</p>
            </div>
          </div>

          {/* Upgraded Call to Action Button */}
          <Link href={`/ideas/${_id}`}>
            <Button className="flex items-center justify-center bg-[#155dfc] hover:bg-indigo-600 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5">
              View Details
              <GoArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyIdeaDataCart;
