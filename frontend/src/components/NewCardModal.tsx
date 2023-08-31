import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Image,
} from '@nextui-org/react';
import { IconPhotoFilled } from '@tabler/icons-react';

interface NewCardModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewCardModal = ({ isOpen, onOpenChange }: NewCardModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>New Note</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label='Title'
                placeholder='Enter the title'
                variant='bordered'
              />
              <Input
                label='Description'
                placeholder='Enter the description'
                variant='bordered'
              />

              {/* <Image src='https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg' /> */}
            </ModalBody>
            <ModalFooter>
              <Button color='success' className='text-gray-800'>
                <label
                  htmlFor='file'
                  className='flex justify-around items-center cursor-pointer'
                >
                  Add Image
                  <IconPhotoFilled className='ml-2' />
                </label>
                <input type='file' id='file' className='hidden' />
              </Button>

              <Button color='primary' onPress={onClose}>
                Create Note
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default NewCardModal;
