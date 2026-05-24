"use client";

import { Button, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { useLoading } from "@/components/LoadingProvider";
import { getVerificationToken } from "@/lib/verification-token";

export const metadata = {
  title: "IdeaVault || Edit Comment",
}

const EditComment = ({ id, text }) => {
  const { setLoading } = useLoading();

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const editedText = e.target[0].value;
    const updatedComment = {
      text: editedText,
    };

    try {
      setLoading(true);
      const token = getVerificationToken();
      const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}`, "x-verification-token": token } : {}),
      };
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comments/${id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify(updatedComment),
      });

      if (res.ok) {
        toast.success("Comment updated");
        window.location.reload(true);
        return;
      }

      toast.error("Failed to update comment");
    } catch (err) {
      toast.error("Failed to update comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button variant="text" color="danger" size="sm">
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleEditSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="message" variant="secondary">
                    <Label>Message</Label>
                    <textarea
                      rows={4}
                      color={5}
                      placeholder="Enter your message"
                      className="resize-none border rounded-md p-2"
                      defaultValue={text}
                    />
                  </TextField>
                  <Modal.Footer>
                    <Button type="submit" slot="close">
                      Edit
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditComment;
