import React from "react";
import donate1 from "../../assets/donate1.png";

const MakeDonation = () => {
  return (
    <div className="mt-12 mx-auto px-6 max-w-6xl mb-20">
      {/* Section Title */}
      <h1 className="text-xl font-bold text-blue-900 uppercase">Make a Donation</h1>
      <hr className="my-2 border-gray-300" />

      {/* Support Heading */}
      <h3 className="text-lg font-bold text-blue-900 mt-4">SUPPORT  US TODAY!</h3>

      {/* Donation Image */}
      <div className="mt-4">
        <img
          src={donate1} // Change to actual image path
          alt="People making a donation"
          className="w-full rounded-lg"
        />
      </div>

      {/* Description Content */}
      <div className="mt-6 text-gray-700 space-y-4">
        <p>
          Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. Mi sit ut risus bibendum urna purus curabitur sapien. Nibh tincidunt sed sed tortor euismod ultricies vitae orci gravida.
        </p>
        <p>
          Augue ac feugiat volutpat a lorem elit id dolor. Elit dui egestas eros odio libero sit. Dignissim viverra at magna sed sapien urna adipiscing nisl. Enim et et enim nibh ut placerat. Eget elit in quam dignissim amet. Gravida et augue ut risus adipiscing orci viverra posuere. Sodales nisl aliquet mauris pellentesque sed.
        </p>
        <p>
          In iaculis mattis lacus enim nunc sed tortor habitasse magnis. Ut facilisis egestas amet faucibus sem faucibus sed morbi lectus.
        </p>
      </div>

      {/* Donate Button */}
      <div className="mt-6">
        <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default MakeDonation;
