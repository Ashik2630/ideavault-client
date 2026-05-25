"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useLoading } from "@/components/LoadingProvider";

const DeleteComment = ({ id }) => {
  const { setLoading } = useLoading();

  const handleDelete = async () => {
    try {
      setLoading(true);

  

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();

      

      if (res.ok) {
        toast.success("Comment deleted");
        window.location.reload();
        return;
      }

      toast.error(data?.error || "Failed to delete comment");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button variant="text" color="danger" size="sm" className="text-danger">
          Delete
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete Comment permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p>This will permanently delete your comment.</p>
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>

                <Button onPress={handleDelete} slot="close" variant="danger">
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteComment;
