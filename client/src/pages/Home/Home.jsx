import React, { useEffect, useState } from 'react'
import Carousel from '../../components/Home/Carousel'
// import founder from '../../assets/founder.png'
import donate from '../../assets/donate.png'
import Programs from '../../components/Home/Programs'
import VisionMision from '../../components/Home/VisionMision'
import ContactForm from '../../components/Home/ContactForm'
import PartnersSection from '../../components/Home/PartnersSection'

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Home = () => {
    const [founder, setFounder] = useState(null);

    useEffect(() => {
        const roleName = encodeURIComponent("Founder and CEO"); // Encodde spaces
        fetch(`${API_BASE_URL}/api/roles/role/${roleName}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors", 
          })
          .then((response) => response.json())
          .then((data) => {
            console.log("Fetched Founder:", data);
            setFounder(data);
          })
          .catch((error) => console.error("Error fetching founder:", error));
      }, []);
  return (
    <div >
        <Carousel />
        <div className="   mb-20">
            <div className="w-full max-w-6xl mx-auto text-center py-10 px-5">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                    CENTER FOR COMMUNITY IMPACT AND SUSTAINABILITY
                </h2>
                <p className="text-gray-700 mt-4 leading-relaxed">
                    The center for community impact and sustainability (CCIS) is a dynamic
                    youth-led organization dedicated to empowering vulnerable communities
                    through sustainable development initiatives. CCIS works to address
                    pressing global challenges by advancing{" "}
                    <span className="text-blue-600 font-semibold">
                    youth participation, gender equality, climate action, and capacity
                    building.
                    </span>{" "}
                    With operations spanning multiple countries including Sierra Leone, CCIS
                    champions innovative solutions to ensure marginalized groups—particularly
                    women, girls, and youth—are at the forefront of decision-making processes
                    and sustainable development efforts.
                </p>
                <button className="mt-6 bg-[#052F6B] text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-blue-800 transition">
                    Learn more
                </button>
            </div>

            {founder && (
            <div className=' p-6'><div className="max-w-6xl mx-auto bg-[#052F6B33]   p-6 rounded-2xl mb-20 flex flex-col md:flex-row items-center md:items-start shadow-lg">
                {/* Image Section */}
                <div className="md:w-1/3 flex flex-col items-center text-center">
                    <img
                    src={`${API_BASE_URL}${founder.image_path}`} 
                    alt="Founder"
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <p className="mt-3 text-gray-600">{founder.person_name}</p>
                    <p className="font-bold">{founder.role_name}</p>
                </div>

                {/* Text Section */}
                <div className="md:w-2/3 mt-6 md:mt-0 md:ml-8 text-gray-700">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    MESSAGE FROM THE FOUNDER
                    </h2>
                    <p className="mt-3 leading-relaxed">
                    At the Center for Community Impact and Sustainability (CCIS), we are driven by the belief that real change happens when communities are empowered at the grassroots level to lead their own transformation.
                    </p>
                    <p className="mt-3 leading-relaxed">
                    Through our work, we amplify the voices of youth in decision-making and equipping them with the skills and resources to thrive.
                    </p>
                    <p className="mt-3 leading-relaxed">
                    CCIS is more than an organization; it is a dynamic platform of passionate  young leaders, dedicated partners, and resilient communities working together to create lasting impact. 
                    </p>
                    <p className="mt-3 leading-relaxed">
                    Our work is deeply rooted in purpose. It’s about the young girl who finally gets access to education, the youth developing innovative projects to tackle climate change, and the community that rebuilds stronger after conflict or disaster. We are not waiting for the future to happen—we are shaping it, together.
                    </p>
                    <p className="mt-4 leading-relaxed">
                    To every partner, supporter, and chagemaker—thank you for walking this journey with us. 
                    Your collaboration and commitment strengthen our efforts, and together, we are shaping a future that is sustainable and filled with possibilities, by the grace of God Almighty.
                    </p>
                    <p className="mt-3 leading-relaxed">
                    Let’s transform, innovate, and build the future we deserve.

                    </p>
                </div>
            </div></div>
             )}

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    MAKE A DONATION TODAY <br /> TO SUPPORT US!
                    </h2>
                    <button className="mt-4 bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                    Donate Now
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                    <img
                    src={donate} 
                    alt="Donation"
                    className="w-full max-w-md rounded-lg"
                    />
                </div>
            </div>

            <Programs />
            <VisionMision/>
            <PartnersSection/>
            <ContactForm />

        </div>    
    </div>
  )
}

export default Home