import React from 'react';

function UsersSay() {
  return (
    <div>
      <div className='container mx-auto px-4'>
        <div className="text-center text-2xl font-bold mb-4">
          <h1 className="text-white">What Our Users Say</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-around px-8 md:flex-row ">
          {/* Testimonial 1 */}
          <div className="backdrop-blur-sm bg-white/10 text-white rounded-xl py-5 px-9 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <p>"BookAI revolutionized my writing process.</p>
            <p>I completed my debut novel in just two weeks!"</p>
            <h2 className="text-center font-bold">- Sarah J., Author</h2>
          </div>

          {/* Testimonial 2 */}
          <div className="backdrop-blur-sm bg-white/10 text-white rounded-xl py-5 px-9 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <p>"The AI-generated ideas helped me overcome writer's block.</p>
            <p>It's like having a co-author at your fingertips."</p>
            <h2 className="text-center font-bold">- Mark T., Aspiring Writer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersSay;
