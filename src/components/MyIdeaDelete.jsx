"use client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";


const MyIdeaDelete = ({ idea }) => {
  const { _id } = idea;
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`https://ideavault-server-sigma.vercel.app/ideasAll/${_id}`, {
      method: "Delete",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      toast.success("Successfully Delete  idea");
      router.refresh();      
    } else {
      toast.error("Failed to Delete  idea");
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
