import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ openModel,openModalImg,handelModelClose }) {
  const [open, setOpen] = React.useState(openModel);

  const handleClose = () => setOpen(false);
  console.log(openModalImg);
  return (
    <div>
      
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handelModelClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          {openModalImg && <img src={URL.createObjectURL(openModalImg)} alt="Selected Image" />}
        </Box>
      </Modal>
    </div>
  );
}