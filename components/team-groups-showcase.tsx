import Image from "next/image";

const TEAM_GROUPS = [
  {
    name: "Technical Team",
    photo: "/teams/technical-team.jpg",
    phrase: "Innovating the future.",
    members: [
      "Rupesh Nandale (T.E) – Head",
      "Sahil Sarmalkar (T.E) – Joint Head",
      "Shashikant Rajput (T.E) – Member",
      "Tanmay Pawar (S.E) – Member",
    ],
    accent: "green",
  },
  {
    name: "Public Relations Team",
    photo: "/teams/pr-team.jpg",
    phrase: "Connecting people and ideas.",
    members: [
      "Nidhi Thakur (T.E) – Head",
      "Samruddhi Niungare (S.E) – Joint Head",
      "Nidhi Kava (S.E) – Member",
      "Vaishnavi Khandagale (S.E) – Member",
    ],
    accent: "blue",
  },
  {
    name: "Media Team",
    photo: "/teams/media-team.jpg",
    phrase: "Capturing every moment.",
    members: [
      "Francis Bhingare (T.E) – Head",
      "Shriya Sanjeev (T.E) – Joint Head",
      "Mrigank Jaiswal  (S.E) – Member",
    ],
    accent: "purple",
  },
  {
    name: "Event Team",
    photo: "/teams/event-team.jpg",
    phrase: "Making it happen.",
    members: [
      "Rudra Patel (T.E) – Head",
      "Tejas Bhavthankar  (T.E) – Joint Head",
      "Aditya Singh (S.E) – Member",
      "Kashish Pandey (S.E) – Member",
    ],
    accent: "red",
  },
  {
    name: "Documentation Team",
    photo: "/teams/documentation-team.jpg",
    phrase: "Recording every detail.",
    members: [
      "Shivani Parmar (T.E) – Head",
      "Jeet Rathod (T.E) – Joint Head",
      "Praful Amati (S.E) – Member",
      "Sarthak Gharat (S.E) – Member",
    ],
    accent: "teal",
  },
  {
    name: "Design Team",
    photo: "/teams/design-team.jpg",
    phrase: "Creativity in action.",
    members: [
      "Dnyanada Patil (T.E) – Head",
      "Vrinda Khare (T.E) – Joint Head",
      "Siddhant Koli (S.E) – Member",
      "Jivitesh Patil (S.E) – Member",
      "Tanishka Gharat (S.E) – Member",
    ],
    accent: "yellow",
  },
];

const ACCENT = {
  green: "text-green-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
  red: "text-red-400",
  teal: "text-teal-400",
  yellow: "text-yellow-400",
};

export default function TeamGroupsShowcase() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-left text-white mb-12">
          ASCAI Team Groups
        </h2>

        <div className="space-y-16">
          {TEAM_GROUPS.map((team) => (
            <div
              key={team.name}
              className="relative group w-full rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800 shadow-2xl overflow-hidden flex flex-col transition-all duration-700 pt-12"
            >
              {/* Team header */}
              <div
                className={`font-orbitron font-bold text-2xl md:text-4xl px-6 pb-3 ${
                  ACCENT[team.accent as keyof typeof ACCENT]
                }`}
              >
                {team.name}
              </div>

              {/* Responsive group image */}
              <div className="w-full flex justify-center items-center mb-4 px-4 ">
                <Image
                  src={team.photo}
                  alt={team.name + " group photo"}
                  unoptimized
                  width={800}
                  height={450}
                  className="w-full max-w-3xl h-auto rounded-2xl shadow-2xl border border-neutral-800 object-contain"
                  style={{
                    boxShadow:
                      "0 16px 64px 0 rgba(0,0,0,0.85), 0 2px 24px 0 rgba(255,255,255,0.18)",
                  }}
                />
              </div>

              {/* Phrase */}
              <div className="px-6 pt-2 pb-2 text-sm md:text-lg text-gray-400 font-rajdhani italic text-center">
                {team.phrase}
              </div>

              {/* Members list */}
              <div
                className="w-full px-6 py-4 bg-black/80 border-t border-neutral-800 rounded-b-2xl mt-3 transition-all duration-700 ease-in-out
                md:max-h-0 md:opacity-0 md:group-hover:max-h-[220px] md:group-hover:opacity-100 overflow-hidden"
              >
                <ul className="flex flex-wrap gap-x-3 gap-y-2 text-gray-200 text-xs md:text-base font-rajdhani justify-center">
                  {team.members.map((m) => (
                    <li
                      key={m}
                      className="chip px-3 py-1 rounded bg-neutral-800 border border-neutral-700 shadow-sm"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Background grid */}
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  background:
                    "repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_40px),repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_40px)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
