"use client";
import { Button, Modal, Surface } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { getVerificationToken } from "@/lib/verification-token";

export const metadata = {
  title: "IdeaVault || My Idea Edit",
};

const MyIdeaEdit = ({ idea }) => {
  const { _id, ideaTitle, detailedDescription, shortDescription } = idea;

  const onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedIdea = Object.fromEntries(formData.entries());

   
      const token = getVerificationToken();
      const headers = {
        "content-type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}`, "x-verification-token": token } : {}),
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ideasAll/${_id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify(updatedIdea),
      });

      const data = await res.json();

      if (data) {
        toast.success("Successfully Update your idea");
        redirect('/my-ideas')
      }
     else {
      toast.error("Failed to Update your idea");
    }
  
  };
  return (
    <div>
      <Modal>
        <Button variant="outline" className="absolute right-30 rounded-md">
          <FaEdit />
          Edit
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading className="flex gap-2 items-center text-2xl font-bold">
                  <FaEdit /> Edit Idea
                </Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onsubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      name="ideaTitle"
                      defaultValue={ideaTitle}
                      className="w-full rounded-lg border border-gray-400 p-3"
                    />

                    <input
                      type="text"
                      name="shortDescription"
                      defaultValue={shortDescription}
                      className="w-full rounded-lg border border-gray-400 p-3"
                    />

                    <textarea
                      name="detailedDescription"
                      rows="4"
                      defaultValue={detailedDescription}
                      className="w-full rounded-lg border border-gray-400 p-3 resize-none"
                    />

                    <Modal.Footer>
                      <Button
                        type="button"
                        slot="close"
                        variant="secondary"
                        className="flex-1"
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        slot="close"
                        className="flex-1 bg-[#155dfc] text-white"
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default MyIdeaEdit;
