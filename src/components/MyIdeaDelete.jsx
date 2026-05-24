"use client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getVerificationToken } from "@/lib/verification-token";


const MyIdeaDelete = ({ idea }) => {
  const { _id } = idea;
  const handleDelete = async () => {
    const token = getVerificationToken();
    const headers = {
      "content-type": "application/json",
      ...(token
        ? { Authorization: `Bearer ${token}`, "x-verification-token": token }
        : {}),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ideasAll/${_id}`, {
      method: "DELETE",
      headers,
    });
    const data = await res.json();
    if (data) {
      toast.success("Successfully deleted idea");
      window.location.reload();
    } else {
      toast.error("Failed to delete idea");
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger" className={`absolute right-2 rounded-md`}>
        <TrashBin /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Heading className="text-2xl font-bold">
                Delete Idea permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>This action cannot be undone.</p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex justify-center gap-10">
              <Button className={`w-40`} slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                className={`w-40`}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default MyIdeaDelete;
