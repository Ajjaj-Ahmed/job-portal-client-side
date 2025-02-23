import React from 'react';

const Testimonial = () => {
    const feedbacks = [
        {
          name: "John Doe",
          role: "Software Engineer",
          company: "Google",
          text: "This platform helped me land my dream job within a week! The process was smooth and easy.",
          image: "https://i.ibb.co.com/S4xmbB83/images.jpg",
          rating: 5,
        },
        {
          name: "Sarah Smith",
          role: "Marketing Manager",
          company: "Amazon",
          text: "Very user-friendly! I applied for jobs and got multiple offers in just days!",
          image: "https://i.ibb.co.com/ynHBHQnr/istockphoto-1664876848-612x612.jpg",
          rating: 4,
        },
        {
          name: "Michael Lee",
          role: "HR Recruiter",
          company: "Netflix",
          text: "As a recruiter, I found top talent effortlessly. Highly recommend this platform!",
          image: "https://i.ibb.co.com/Jj6vgrbH/253abf4f1f4bc16b6dc04571f8d21624.jpg",
          rating: 5,
        },
        {
            name: "Emily Carter",
            role: "UX Designer",
            company: "Microsoft",
            text: "The job recommendations were spot-on! I love how tailored the experience was.",
            image: "https://i.ibb.co.com/B0HxGdB/professional-business-woman-smiling-outdoor-close-up-portrait-55472495.webp",
            rating: 5,
          },
          {
            name: "David Kim",
            role: "Data Analyst",
            company: "Facebook",
            text: "Amazing platform! The AI-driven job suggestions saved me a lot of time.",
            image: "https://i.ibb.co.com/Cpb8RHTV/young-happy-black-man-communicates-online-laptop-random-guy-sitting-couch-living-room-young-happy-bl.webp",
            rating: 4,
          },
          {
            name: "Jessica Brown",
            role: "Product Manager",
            company: "Apple",
            text: "The job alerts feature is a game-changer! Got my dream role thanks to this.",
            image: "https://i.ibb.co.com/vxs9pbV6/istockphoto-1401557224-612x612.jpg",
            rating: 5,
          }
      ];
    return (
        <div className="py-10 px-6 bg-gray-100 shadow-md rounded-xl my-8">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src={feedback.image} alt={feedback.name} className="w-28 h-28 object-center rounded-full mx-auto mb-3" />
              <h3 className="text-2xl font-semibold">{feedback.name}</h3>
              <p className="text-gray-500 text-sm">{feedback.role} at {feedback.company}</p>
              <div className="flex justify-center mt-2 text-yellow-500">
                {"★".repeat(feedback.rating)}{"☆".repeat(5 - feedback.rating)}
              </div>
              <p className="mt-3 text-gray-600">{feedback.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Testimonial;