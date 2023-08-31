import { Card, CardHeader, CardBody, Image, CardFooter } from '@nextui-org/react';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import '../styles/note.css';

interface NoteProps {
  notes: number;
}

const Note = ({ notes }: NoteProps) => {
  const optionsArray = [
    {
      icon: IconPencil,
      func: () => console.log('click'),
    },
    {
      icon: IconTrash,
      func: () => console.log('click'),
    },
  ];

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: notes,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card>
        <CardHeader className='note-cardHeader'>
          <p className='note-title'>Notes {notes}</p>
          <small className='text-default-500'>description {notes}</small>
        </CardHeader>
        <CardBody className='note-cardBody'>
          <Image
            isZoomed
            alt='Card background'
            className='object-cover rounded-xl'
            src='https://nextui.org/images/hero-card-complete.jpeg'
            width={270}
          />
        </CardBody>
        <CardFooter className='flex justify-end py-2'>
          {optionsArray.map((option, index) => (
            <button key={index} className='note-iconStyle' onClick={option.func}>
              <option.icon size={18} />
            </button>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};
export default Note;
