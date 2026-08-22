import { ShieldCheck, Bus, Megaphone, Bike } from "lucide-react";

export default function LocalActionProjects() {
  const focusAreas = [
    {
      number: "01",
      title: "Child Safety",
      text: (
        <>
          We promote safer journeys
          <br />
          for children. Education and
          <br />
          awareness help protect
          <br />
          young road users.
        </>
      ),
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Public Transport",
      text: (
        <>
          We support inclusive
          <br />
          public transport. Everyone
          <br />
          should have access to safe
          <br />
          and reliable mobility.
        </>
      ),
      icon: Bus,
    },
    {
      number: "03",
      title: "Advocacy",
      text: (
        <>
          We advocate for better
          <br />
          transport policies. We work
          <br />
          with partners to influence
          <br />
          positive change.
        </>
      ),
      icon: Megaphone,
    },
    {
      number: "04",
      title: "Active Mobility",
      text: (
        <>
          We promote walking and
          <br />
          cycling. Active mobility
          <br />
          supports healthier and more
          <br />
          connected communities.
        </>
      ),
      icon: Bike,
    },
  ];

  return (
    <section className="bg-white py-32 sm:py-36 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
            WHAT WE DO
          </p>
        </div>

       {/* Focus Circles */}
<div
  className="
    mx-auto
    flex
    flex-col
    items-center
    justify-center
    gap-10
    lg:flex-row
    lg:gap-8
  "
>
  {focusAreas.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        className="
          group
          relative
          flex
          !h-[210px]
          !w-[210px]
          !min-h-[210px]
          !min-w-[210px]
          !max-h-[210px]
          !max-w-[210px]
          shrink-0
          grow-0
          basis-[210px]
          flex-col
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-[#3eaef2]
          p-6
          text-center
          text-white
          shadow-[0_10px_25px_rgba(62,174,242,0.22)]
          transition-all
          duration-300
          hover:-translate-y-2
          hover:scale-105
        "
      >
        {/* Icon */}
        <Icon className="mb-2 h-7 w-7 shrink-0" />

        {/* Title */}
        <h3 className="max-w-[150px] text-sm font-bold leading-tight">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-2 max-w-[145px] text-[9px] leading-[1.45] text-white/90">
          {item.text}
        </p>

        {/* Accent */}
        <div className="mt-2 h-[2px] w-6 shrink-0 rounded-full bg-orange-500" />
      </div>
    );
  })}
        </div>

      </div>
    </section>
  );
}