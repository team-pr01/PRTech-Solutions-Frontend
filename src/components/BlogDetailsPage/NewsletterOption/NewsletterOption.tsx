const NewsletterOption = () => {
  return (
    <div>
      <h1 className="text-neutral-20 text-xl font-bold">Join Our Newsletter</h1>
      <p className="text-neutral-50 text-sm mt-2">
        Get thoughtfully curated insights on technology, design, product
        development, and digital innovation delivered directly to your inbox.
      </p>
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full py-2 px-4 rounded-xl text-neutral-30 placeholder:text-sm placeholder:text-neutral-50 bg-white border border-neutral-50/20 focus:outline-none focus:border-primary-10 transition duration-300 mt-5"
      />

      <button className="w-full py-2 px-4 rounded-xl border border-primary-10 bg-primary-10 text-white font-semibold transition duration-300 mt-3 text-sm">
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterOption;
