import React from "react";
import leadership1 from "../../assets/leadership1.png";
import leadership2 from "../../assets/leadership2.png";
import leadership3 from "../../assets/leadership3.png";


const Leadership = () => {
    return (
      <div className="mt-12 max-w-6xl mx-auto px-4 pb-20">
        {/* Section Title */}
        <h2 className="text-xl font-bold text-blue-900 uppercase">
            LEADERSHIP AND EMPOWERMENT PROGRAM IN YORK VILLAGE
        </h2>
        <hr className="my-2 border-gray-300" />
  
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <img src={leadership1} alt="Woman at screen" className="w-full h-auto rounded-lg" />
          <img src={leadership2} alt="Woman in safety gear" className="w-full h-auto rounded-lg" />
          <img src={leadership3} alt="Woman working on pipes" className="w-full h-auto rounded-lg" />
        </div>
  
        {/* Description */}
        <div className="text-gray-700 mt-6 leading-relaxed space-y-6">
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. 
            Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. 
            Mi sit ut risus bibendum urna purus curabitur sapien. Nibh tincidunt sed sed tortor euismod ultricies vitae orci gravida.
          </p>
  
          <p>
            Augue ac feugiat volutpat a lorem elit id dolor. Elit duis egestas eros odio libero sit. 
            Dignissim viverra at magna sed sapien urna adipiscing nisl. Enim et et enim nibh ut placerat. 
            Eget elit in quam dignissim amet. Gravida et augue ut risus adipiscing orci viverra posuere. 
            Sodales nisl aliquet mauris pellentesque sed. Ut ac sed enim eget nulla ac. 
            Dignissim dictum tristique fermentum semper urna in amet amet. Nulla pretium vivamus a integer sit enim lobortis magna. 
            Volutpat arcu ac ullamcorper sed nunc.
          </p>
  
          <p>
            In iaculis mattis lacus enim nunc sed tortor habitasse magnis. Ut facilisis egestas amet faucibus sem faucibus sed morbi lectus.
          </p>
  
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultricies felis nibh cras dui venenatis vitae enim mattis amet. 
            Sed lectus interdum lectus tellus quam viverra. Leo sed massa non varius a egestas pellentesque. 
            Mi sit ut risus bibendum urna purus curabitur sapien. Nibh tincidunt sed sed tortor euismod ultricies vitae orci gravida.
          </p>
  
          <p>
            Augue ac feugiat volutpat a lorem elit id dolor. Elit duis egestas eros odio libero sit. 
            Dignissim viverra at magna sed sapien urna adipiscing nisl. Enim et et enim nibh ut placerat. 
            Eget elit in quam dignissim amet. Gravida et augue ut risus adipiscing orci viverra posuere. 
            Sodales nisl aliquet mauris pellentesque sed. Ut ac sed enim eget nulla ac. 
            Dignissim dictum tristique fermentum semper urna in amet amet. Nulla pretium vivamus a integer sit enim lobortis magna. 
            Volutpat arcu ac ullamcorper sed nunc.
          </p>
  
          <p>
            In iaculis mattis lacus enim nunc sed tortor habitasse magnis. Ut facilisis egestas amet faucibus sem faucibus sed morbi lectus.
          </p>
        </div>
      </div>
    );
  };
  
  export default Leadership;
  