const Updates = () => {
    const updates = [
      { time: "2 hours ago", message: "+3 new followers on Instagram" },
      { time: "4 hours ago", message: "Michael Ogbonna added a new blog post" },
      { time: "6 hours ago", message: "You received $300!" },
    ];
  
    return (
      <div className="bg-white p-4 shadow-md rounded-md mb-20">
        <h2 className="text-lg font-bold">Latest Updates</h2>
        {updates.map(({ time, message }, index) => (
          <div key={index} className="border-b py-2">
            <p className="text-sm text-gray-500">{time}</p>
            <p>{message}</p>
          </div>
        ))}
        <button className="text-blue-500 mt-2">View all updates</button>
      </div>
    );
  };
  
  export default Updates;