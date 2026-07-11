import Breadcrumb from "../../../components/Reusable/Breadcrumb/Breadcrumb";
import Container from "../../../components/Reusable/Container/Container";
import BlogContents from "../../../components/BlogDetailsPage/BlogContents/BlogContents";
import ShareOptions from "../../../components/BlogDetailsPage/ShareOptions/ShareOptions";
import OtherBlogs from "../../../components/BlogDetailsPage/OtherBlogs/OtherBlogs";
import Tags from "../../../components/BlogDetailsPage/Tags/Tags";
import NewsletterOption from "../../../components/BlogDetailsPage/NewsletterOption/NewsletterOption";
import {
  useGetAllBlogsQuery,
  useGetSingleBlogBySlugQuery,
} from "../../../redux/Features/Blog/blogApi";
import { useParams } from "react-router-dom";
import type { TBlog } from "../../../types/blog.type";

const BlogDetails = () => {
  const { slug } = useParams();
  const { data } = useGetSingleBlogBySlugQuery(slug);
  const blog = data?.data || {};

  const { data: allBlogs } = useGetAllBlogsQuery({});
  const blogs = allBlogs?.data?.data || [];
  const otherBlogs = blogs?.filter((blog: TBlog) => blog.slug !== slug);
  return (
    <Container>
      <div className="font-Manrope my-36">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            {
              label: "Blogs",
              path: "/blogs",
            },
            {
              label: blog?.category,
              isActive: true,
            },
          ]}
        />

        <div className="flex gap-10 mt-3">
          {/* Left Side Content */}
          <div className="w-[70%]">
            <BlogContents blog={blog} />
          </div>

          {/* Right Side Info */}
          <div className="w-[30%] h-fit bg-neutral-50/5 rounded-2xl p-4 space-y-8">
            <ShareOptions />
            <OtherBlogs otherBlogs={otherBlogs} />
            <Tags tags={blog?.tags as string[]} />
            <NewsletterOption />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;
