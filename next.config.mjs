/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neoone.com.my",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/vision-mission.html", destination: "/vision-mission", permanent: true },
      { source: "/about/vision-mission", destination: "/vision-mission", permanent: true },
      { source: "/our-people.html", destination: "/people", permanent: true },
      { source: "/about/our-people", destination: "/people", permanent: true },
      { source: "/our-partners-and-clients.html", destination: "/partners-clients", permanent: true },
      { source: "/our-solutions.html", destination: "/solutions", permanent: true },
      { source: "/transformation-and-change.html", destination: "/transformation-and-change", permanent: true },
      {
        source: "/pillar-two-entrepreneurship-innovation.html",
        destination: "/entrepreneurship-innovation",
        permanent: true,
      },
      { source: "/learning-development.html", destination: "/learning-development", permanent: true },
      { source: "/our-sustainability-impact.html", destination: "/impact", permanent: true },
      { source: "/our-programs-and-certifications.html", destination: "/programs", permanent: true },
      { source: "/public-program-2.html", destination: "/public-program", permanent: true },
      { source: "/learning-pass-3.html", destination: "/learning-pass", permanent: true },
      { source: "/a-p-p-l-e-products.html", destination: "/apple-products", permanent: true },
      { source: "/a-p-p-l-e-products-2.html", destination: "/apple-products", permanent: true },
      { source: "/a-p-p-l-e-products", destination: "/apple-products", permanent: true },
      { source: "/a-p-p-l-e-products-2", destination: "/apple-products", permanent: true },
      { source: "/hot-csr-project.html", destination: "/hot-csr-project", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
      {
        source: "/the-power-of-being-understanding-the-be-do-have-model.html",
        destination: "/be-do-have-model",
        permanent: true,
      },
      {
        source: "/trainer-credibility-index-6p-building-the-foundation-of-trust.html",
        destination: "/trainer-credibility-index",
        permanent: true,
      },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy", permanent: true },
      { source: "/thank-you.html", destination: "/thank-you", permanent: true },
    ];
  },
};

export default nextConfig;
