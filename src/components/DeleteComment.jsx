'use client';
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useLoading } from "@/components/LoadingProvider";
import { getVerificationToken } from "@/lib/verification-token";


const DeleteComment = ({ id }) => {
  const { setLoading } = useLoading();

  const handleDelete = async () => {
    try {
      setLoading(true);
      const token = getVerificationToken();
      const headers = {
        ...(token ? { Authorization: `Bearer ${token}`, "x-verification-token": token } : {}),
      };
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comments/${id}`, {
        method: "DELETE",
        headers,
      });
      if (res.ok) {
        toast.success("Comment deleted");
        window.location.reload(true);
        return;
      }
      toast.error("Failed to delete comment");
    } catch (err) {
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
                <AlertDialog.Heading>Delete Comment permanently?</AlertDialog.Heading>
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
