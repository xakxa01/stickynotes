import { Button, useDisclosure } from '@nextui-org/react';
import '../styles/notes.css';
import Note from '../components/Note';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import NewCardModal from '../components/NewCardModal';

const Notes = () => {
  const [notesArray, setNotesArray] = useState([...Array(10)]);
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setNotesArray((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className='notes-container'>
      <Button onPress={onOpen} className='mt-2' color='primary' variant='shadow' size='lg'>
        New Note
      </Button>

      <NewCardModal isOpen={isOpen} onOpenChange={onOpenChange} />

      <div className='notes'>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={notesArray} strategy={verticalListSortingStrategy}>
            {notesArray.map((_, index) => (
              <Note notes={index} key={index} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Notes;
