const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="pb-5 border-b border-neutral-50/10">
      <p className="text-neutral-50 font-medium">All Tags</p>
      <div className="flex flex-wrap gap-3 mt-3">
        {tags?.map((tag) => (
          <div
            key={tag}
            className="border border-neutral-97 rounded-xl bg-white text-xs text-neutral-65/90 font-medium px-2 py-1 w-fit"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
