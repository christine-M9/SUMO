import Image from "next/image";

export default function NewsSection() {
  const posts = [
    {
      category: "TESTING",
      title: "TEST BLOG POST 20260226_184343",
      excerpt:
        "This is a test blog post excerpt created by the API testing suite.",
      image: "/news1.jpg",
    },
    {
      category: "TESTING",
      title: "TEST BLOG POST 20260226_182353",
      excerpt:
        "This is a test blog post excerpt created by the API testing suite.",
      image: "/news2.jpg",
    },
    {
      category: "EVENTS",
      title:
        "SPEAKING AT THE GLOBAL MINISTERIAL CONFERENCE ON ROAD SAFETY 2025",
      excerpt:
        "SUMO Africa was honored to participate in the 4th Global Ministerial Conference on Road Safety...",
      image: "/news3.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">

          <div>
            <p className="text-orange-500 text-sm font-semibold tracking-wider mb-2">
              NEWS & UPDATES
            </p>

            <h2 className="text-3xl font-bold text-slate-900">
              LATEST FROM SUMO AFRICA
            </h2>
          </div>

          <button className="border border-gray-800 px-6 py-2 text-sm font-semibold hover:bg-gray-900 hover:text-white transition">
            VIEW ALL NEWS
          </button>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {post.category}
                </span>

                <h3 className="font-bold text-lg mt-2 mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>

                <button className="text-orange-500 font-semibold text-sm flex items-center gap-1">
                  READ MORE →
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}