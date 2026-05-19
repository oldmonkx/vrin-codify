import React, { useState } from 'react';
import { motion } from 'motion/react';

const amenityGroups = [
  {
    title: "NATURE",
    fullTitle: "Outdoors & Nature",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_12.jpg",
    items: ["Central Courtyard", "Amphitheatre", "Party Lawn", "Pond", "Youth Plaza", "Meditation Pavilion"]
  },
  {
    title: "SOCIAL",
    fullTitle: "Social & Lifestyle",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_09.jpg",
    items: ["Entrance Plaza", "Concierge Desk", "Banquet Hall", "Co-Working Spaces", "Premium Guest Suites"]
  },
  {
    title: "FITNESS",
    fullTitle: "Sports & Fitness",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_21.jpg",
    items: ["Swimming Pool", "Kids' Pool", "Indoor Gym", "Badminton Courts", "Tennis Courts"]
  },
  {
    title: "CONVENIENCE",
    fullTitle: "Convenience",
    image: "/3d-renders/3646_Vrindavan_Namishree__Kondapur_Image_25.jpg",
    items: ["Centralised Kitchen", "Pharmacy", "Departmental Store", "School Bus Stop", "EV Charging"]
  }
];

export default function Amenities() {
  const [active, setActive] = useState(0);

  return (
    <section id="amenities" className="py-16 lg:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-gold/15">
      <div className="absolute inset-0 bg-pattern-starry opacity-60 pointer-events-none" />
      <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-16 lg:gap-12 relative z-10">
        
        {/* Left Side (Text) */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-[70px] font-serif tracking-tight font-light text-brand-paper mb-8 leading-[1.1]"
          >
            Carefully curated <span className="block italic bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-deep to-brand-gold mt-2">lifestyle</span>
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="self-start px-8 py-3.5 bg-brand-gold/8 hover:bg-brand-gold/16 text-brand-gold border border-brand-gold/30 hover:border-brand-gold/60 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
          >
            Explore Amenities
          </motion.button>
        </div>

        {/* Right Side (Accordion) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-3/5 h-[400px] md:h-[500px] lg:h-[650px] flex gap-2 lg:gap-4"
        >
          {amenityGroups.map((group, index) => {
            const isActive = active === index;
            return (
              <motion.div
                layout
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                transition={{ layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
                className={`relative overflow-hidden bg-brand-paper cursor-pointer flex flex-col justify-end
                  ${isActive ? "flex-[4] lg:flex-[5] rounded-[2rem]" : "flex-[1] shadow-none rounded-2xl lg:rounded-full"}`}
              >
                {/* Background Image Container */}
                <div 
                  className="absolute inset-0 transition-transform duration-[1.5s] ease-out w-full h-full"
                  style={{
                    backgroundImage: `url('${group.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    opacity: isActive ? 1 : 0.55
                  }}
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-paper via-transparent to-transparent opacity-80" />
                <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-paper via-brand-paper/60 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-60'}`} />

                {/* Content inside the slice */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-8 lg:pb-12 overflow-hidden">
                  
                  {/* Vertical Text (Shows when inactive, hides when active) */}
                  <div 
                    className={`transition-all duration-500 whitespace-nowrap text-lg lg:text-2xl font-serif tracking-[0.4em] uppercase text-white/70 absolute bottom-12
                    ${isActive ? 'opacity-0 translate-y-8 invisible' : 'opacity-100 translate-y-0 visible'}`}
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {group.title}
                  </div>

                  {/* Active State Content */}
                  <div className={`absolute bottom-0 left-0 w-full p-6 lg:p-10 transition-all duration-700 delay-150 transform
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none absolute'}`}>
                     <h3 className="text-2xl lg:text-4xl font-serif italic text-white mb-4 lg:mb-6">{group.fullTitle}</h3>
                     <ul className="space-y-2 lg:space-y-3">
                       {group.items.map((item, i) => (
                         <li key={i} className="text-white/80 text-xs lg:text-sm font-light tracking-wide flex items-center gap-2">
                           <span className="w-1 h-1 rounded-full bg-brand-cyan block" />
                           {item}
                         </li>
                       ))}
                     </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
