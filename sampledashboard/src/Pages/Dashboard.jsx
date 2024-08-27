import React, { useState } from 'react';
import Navigationbar from '../Components/Navigationbar';
import Card from '../Components/Card';
// import image1 from "../Images/img1.jpg";
// import image2 from "../Images/img2.jpg";
// import image3 from "../Images/img3.jpg";
// import image4 from "../Images/img4.jpg";
import EditableIcon from '../Components/EditableIcon';

export default function Dashboard() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-slate-900'>
      <Navigationbar editMode={editMode} />
      <EditableIcon setEditMode={setEditMode} />
      <div className="flex flex-row gap-8 mt-10">
        <Card
       
          title="Innovative Product"
        //   img={image1}
          description="Experience the latest in technology with our cutting-edge product. Designed to meet all your needs and exceed your expectations."
        />
        <Card
          title="Exclusive Offer"
        //   img={image2}
          description="Take advantage of our limited-time offer and enjoy exceptional savings on our premium services. Don't miss out on this opportunity to enhance your experience."
        />
        <Card
         
          title="Radiant Glow Serum"
        //   img={image3}
          description="Achieve a luminous complexion with our Radiant Glow Serum. Formulated with natural ingredients to enhance your skin's natural radiance and reduce signs of aging."
        />
        <Card
          title="Hydrating Facial Mist"
        //   img={image4}
          description="Refresh and hydrate your skin with our Hydrating Facial Mist. Perfect for a quick pick-me-up during the day, it leaves your skin feeling dewy and revitalized."
        />
      </div>
    </div>
  );
}
