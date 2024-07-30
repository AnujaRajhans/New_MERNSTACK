// src/App.js
import React, { useState } from 'react';
import TourCard from './components/TourCard';

const App = () => {
  const [tours, setTours] = useState([
    { id: 1, title: 'Mumbai Gateaway', description: 'The Gateway of India is an arch-monument completed in 1924 on the waterfront of Mumbai (Bombay), India. It was erected to commemorate the landing of George V for his coronation as the Emperor of India in December 1911 at Strand Road near Wellington Fountain. He was the first British monarch to visit India.', image: 'https://media.istockphoto.com/id/539018660/photo/taj-mahal-hotel-and-gateway-of-india.jpg?s=2048x2048&w=is&k=20&c=88iz53lAOjNsqosQAY2qB7fEebFW46qhPMkIiIaFvlw=' },
    { id: 2, title: 'Rajasthan', description: 'Rajasthan, area-wise the largest State in India area-wise prior to Independence was known as Rajputana.The history of Rajasthan dates back to the pre-historic times. Around 3,000 and 1,000 BC, it had a culture akin to that of the Indus Valley civilisation. A martial community ruled over this area for centuries.', image: 'https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?s=1024x1024&w=is&k=20&c=NVM5bBGtxyrKv8zNKBfcgdlNHfkYkEa-LADVjQXLV3Q=' },
    { id: 3, title: 'Delhi', description: 'Delhi is of great historical significance as an important commercial, transport, and cultural hub, as well as the political centre of India. According to legend, the city was named for Raja Dhilu, a king who reigned in the region in the 1st century bc.It was designed by British architects, Sir Edwin Lutyens and Sir Herbert Baker.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHl8ZW58MHx8fHwxNjI2MTcyMzg0&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 4, title: 'Goa', description: 'Apart from the Pre-Portuguese political history of Goa.The Portuguese invaded Goa in 1510, defeated the Bijapur Sultanate. The Portuguese rule lasted for about 450 years, and heavily influenced Goan culture, cuisine, and architecture. In 1961, India took control over Goa after a 36-hour battle and integrated it into India.', image: 'https://media.istockphoto.com/id/160106550/photo/goa-church.jpg?s=2048x2048&w=is&k=20&c=xiNc7EMOCNTUbnbwbnrw9zSJ1XUZIroTuUfbR_Lek5Q=' },
    { id: 5, title: 'Kashmir', description: 'The most magnificent of the Kashmir trees is the Chinar found throughout the valley. It grows to giant size and girth. Kashmir is renowned for its beauty, with Neelum Valley often regarded as the most captivating part. The valley boasts stunning landscapes, including Shounter Lake and lush greenery, making it a top destination for nature lovers.', image: 'https://media.istockphoto.com/id/1248778221/photo/himalaya-mountains-panoramic-landscape-india.jpg?s=2048x2048&w=is&k=20&c=OhFHKcNUYZK9CgSx7URf_ru1QlahCMg26ljdNrCDnAM=' },
    { id: 6, title: 'Amritsar', description: 'Amritsar was founded by Sri Guru Ramdass ji, the fourth guru of the Sikhs covered with thick forests and had several lakes.Amritsar is the largest and most important city in Punjab and is a major commercial. To start the city the Guru invited 52 traders from different sectors belongings to nearby places like Patti and Kasur to settle here.', image: 'https://media.istockphoto.com/id/535570117/photo/golden-temple-in-amritsar-punjab-india.jpg?s=2048x2048&w=is&k=20&c=OM4d72Yq8eEGPWOFfeR8usPcGu7eOsn71i9H7pZtXoo=' }
  ]);

  const deleteTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="container">
      <h1 className="my-4">Tour Planner</h1>
      <div className="row">
        {tours.map(tour => (
          <div key={tour.id} className="col-md-4">
            <TourCard tour={tour} onDelete={deleteTour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;