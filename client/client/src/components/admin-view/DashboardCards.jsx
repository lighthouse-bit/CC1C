const DashboardCards = () => {
    const stats = [
      { title: "Used Space", value: "20/50gb", color: "bg-yellow-100" },
      { title: "Donations", value: "$21,000", color: "bg-green-100" },
      { title: "Messages", value: "14", color: "bg-pink-100" },
      { title: "New Followers", value: "26", color: "bg-purple-100" },
    ];
  
    return (
      <div className="grid grid-cols-4 gap-4">
        {stats.map(({ title, value, color }) => (
          <div key={title} className={`p-4 rounded shadow ${color}`}>
            <h3 className="text-gray-700">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DashboardCards;