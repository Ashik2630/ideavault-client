'use client';
import { AlertDialog, Button } from "@heroui/react";


const DeleteComment = ({ id }) => {
  
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8080/comments/${id}`, {
      method: "DELETE",
    });
    if(res.ok) {
      window.location.reload(true);
    }
  }

  return (
    <div>
      <AlertDialog>
        <Button  variant="text" color="danger" size="sm" className="text-danger">
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
                <Button onPress={handleDelete}  slot="close" variant="danger">
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
