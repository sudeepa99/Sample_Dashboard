import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisV, faSave } from '@fortawesome/free-solid-svg-icons';

export default function EditableIcon({ setEditMode }) {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditMode(true); // Enable dragging
  };

  const handleSave = () => {
    setIsEditing(false);
    setEditMode(false); // Disable dragging
    alert('Changes Saved');
  };

  return (
    <div className='absolute right-10 top-10'>
      <button onClick={toggleMenu}>
        <FontAwesomeIcon className='text-white' icon={faEllipsisV} />
      </button>
      {isMenuOpen && (
        <div className='bg-blue-600 text-white flex flex-col gap-2 py-4 px-2'>
          {!isEditing ? (
            <button className='hover:bg-green-700 p-2' onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
          ) : (
            <button className='hover:bg-red-600' onClick={handleSave}>
              <FontAwesomeIcon icon={faSave} /> Save
            </button>
          )}
        </div>
      )}
    </div>
  );
}
