"use client";


import { Button,  Label, Modal, Surface, TextField } from "@heroui/react";

const EditComment = ({ id, text }) => {

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const editedText = e.target[0].value;
    const updatedComment = {
      text: editedText,
    };

    console.log(editedText, 'editedText');
    const res = await fetch(`http://localhost:8080/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( updatedComment ),
    });
    if(res.ok) {
      window.location.reload(true);
    }
    
    console.log(res, "res");
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
                <form onSubmit={handleEditSubmit}  className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="message"
                    variant="secondary"
                  >
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
