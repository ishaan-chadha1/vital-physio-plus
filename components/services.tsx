// components/services.tsx

const services = [
    { title: "Manual Therapy", desc: "Hands-on techniques to relieve pain and restore mobility." },
    { title: "Sports Injury Rehab", desc: "Tailored rehab plans to get you back in the game." },
    { title: "Post-Surgical Recovery", desc: "Supportive care to ensure full recovery after surgery." },
    { title: "Back & Neck Pain Relief", desc: "Targeted treatments for spinal and muscular issues." },
    { title: "Mobility Training", desc: "Improve balance, strength, and movement." },
    { title: "Chronic Pain Management", desc: "Evidence-based strategies to manage long-term pain." },
  ];
  
  export default function Services() {
    return (
      <section
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#38bdf8]"
        id="services"
      >
        <div className="max-w-6xl mx-auto py-24 px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg bg-[#38bdf8] text-white hover:bg-white hover:text-blue-700 p-6 rounded-xl border border-transparent hover:border-blue-200"
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  