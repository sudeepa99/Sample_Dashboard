import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigationbar({ editMode }) {
  const [navItems, setNavItems] = useState([
    { id: 1, label: 'Dashboard', link: '/' },
    { id: 2, label: 'Catalogue', link: '/catalogue' },
    { id: 3, label: 'Suppliers', link: '/suppliers' },
    { id: 4, label: 'About', link: '/about' },
  ]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, index) => {
    if (!editMode) return; // Prevent dragging if not in edit mode
    setDraggedItem(navItems[index]);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (index) => {
    if (!editMode) return; // Prevent reordering if not in edit mode
    const draggedOverItem = navItems[index];

    // Ignore if the item is dragged to itself
    if (draggedItem === draggedOverItem) return;

    // Reorder the list
    const newItems = navItems.filter((item) => item !== draggedItem);
    newItems.splice(index, 0, draggedItem);

    setNavItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    // Save the new order to local storage (or backend) only in edit mode
    if (editMode) {
      localStorage.setItem('navOrder', JSON.stringify(navItems));
    }
  };

  // Load the saved order on component mount
  React.useEffect(() => {
    const savedOrder = localStorage.getItem('navOrder');
    if (savedOrder) {
      setNavItems(JSON.parse(savedOrder));
    }
  }, []);

  return (
    <div className='bg-blue-600 w-36 h-72 text-lg py-3 text-center absolute top-20 rounded-md left-3'>
      <nav className='flex flex-col gap-6'>
        {navItems.map((item, index) => (
          <Link
            key={item.id}
            to={item.link}
            draggable={editMode} // Enable dragging only when in edit mode
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={() => handleDragOver(index)}
            onDragEnd={handleDragEnd}
            className={`hover:bg-violet-800 ${editMode ? 'cursor-move' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
