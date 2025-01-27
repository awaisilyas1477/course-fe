import Newsletter from "@/app/components/Newsletter/Newsletter";
import BlogTestimonials from "../../blog/components/blogTestmonials";

import blogPosts from "../../components/utils/blogData/blogData";

const BlogDetail = ({ params }) => {
  const { id } = params;

  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found...</p>;
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="my-10 md:mt-24 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3 md:mb-0">
                <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-blue">
                  {blog.category}
                </span>
                <span className="text-xs text-[#667085]">{blog.readTime}</span>
              </div>

              <div className="text-xs text-[#667085]">{blog.date}</div>
            </div>
            <hr className="bg-gray-blue" />

            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-BearFont-bold tracking-tighter mb-6">
              {blog.title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-900 mb-6 font-BearFont-regular">
              {blog.description}
            </p>
            <hr className="bg-gray-blue" />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-10 mb-4 md:mb-0">
                <div className="flex items-center gap-3">
                  <img
                    alt="Author Image"
                    loading="lazy"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    className="inline-block h-9 w-9 rounded-full object-cover"
                    src={blog.authorImg}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                      {blog.author}
                    </p>
                    <p className="text-xs md:text-sm font-normal text-[#667085] group-hover:text-gray-900">
                      Founder/CEO
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                    href={`https://www.linkedin.com/in/${blog.author}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_3305_10776)">
                        <path
                          d="M22.2234 0.980957H1.77187C0.792187 0.980957 0 1.75439 0 2.71064V23.2466C0 24.2028 0.792187 24.981 1.77187 24.981H22.2234C23.2031 24.981 24 24.2028 24 23.2513V2.71064C24 1.75439 23.2031 0.980957 22.2234 0.980957ZM7.12031 21.4325H3.55781V9.97627H7.12031V21.4325ZM5.33906 8.41533C4.19531 8.41533 3.27188 7.49189 3.27188 6.35283C3.27188 5.21377 4.19531 4.29033 5.33906 4.29033C6.47813 4.29033 7.40156 5.21377 7.40156 6.35283C7.40156 7.48721 6.47813 8.41533 5.33906 8.41533ZM20.4516 21.4325H16.8937V15.8638C16.8937 14.5372 16.8703 12.8263 15.0422 12.8263C13.1906 12.8263 12.9094 14.2747 12.9094 15.77V21.4325H9.35625V9.97627H12.7687V11.5419H12.8156C13.2891 10.6419 14.4516 9.69033 16.1813 9.69033C19.7859 9.69033 20.4516 12.0622 20.4516 15.1466V21.4325Z"
                          fill="black"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3305_10776">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.980957)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                    href={`http://instagram.com/${blog.author}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="flex gap-1 items-center hidden sm:flex cursor-pointer">
                  <div className="text-xs cursor-pointer">Copy link</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3305_10151)">
                      <path
                        d="M7.5 9.74045C7.82209 10.171 8.23302 10.5273 8.70491 10.7852C9.17681 11.043 9.69863 11.1963 10.235 11.2347C10.7713 11.2731 11.3097 11.1957 11.8135 11.0078C12.3173 10.8198 12.7748 10.5258 13.155 10.1455L15.405 7.89545C16.0881 7.18819 16.4661 6.24094 16.4575 5.2577C16.449 4.27446 16.0546 3.33391 15.3593 2.63863C14.664 1.94335 13.7235 1.54897 12.7403 1.54042C11.757 1.53188 10.8098 1.90986 10.1025 2.59295L8.8125 3.87545"
                        stroke="#98A2B3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10.5006 8.2404C10.1785 7.80981 9.76762 7.45352 9.29573 7.1957C8.82383 6.93788 8.30201 6.78457 7.76565 6.74615C7.22929 6.70774 6.69095 6.78513 6.18713 6.97307C5.68331 7.16101 5.2258 7.4551 4.84564 7.8354L2.59564 10.0854C1.91255 10.7927 1.53457 11.7399 1.54311 12.7232C1.55165 13.7064 1.94604 14.6469 2.64132 15.3422C3.3366 16.0375 4.27715 16.4319 5.26038 16.4404C6.24362 16.449 7.19088 16.071 7.89814 15.3879L9.18064 14.1054"
                        stroke="#98A2B3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3305_10151">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 -0.00952148)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                &nbsp; &nbsp;
                <div className="flex gap-1 items-center">
                  <div className="text-xs cursor-pointer">Share</div>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3305_10170)">
                      <path
                        d="M12 5.32373C13.1046 5.32373 14 4.4283 14 3.32373C14 2.21916 13.1046 1.32373 12 1.32373C10.8954 1.32373 10 2.21916 10 3.32373C10 4.4283 10.8954 5.32373 12 5.32373Z"
                        stroke="#98A2B3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M4 9.99048C5.10457 9.99048 6 9.095 6 7.99048C6 6.88591 5.10457 5.99048 4 5.99048C2.89543 5.99048 2 6.88591 2 7.99048C2 9.09505 2.89543 9.99048 4 9.99048Z"
                        stroke="#98A2B3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M12 14.6572C13.1046 14.6572 14 13.7618 14 12.6572C14 11.5527 13.1046 10.6572 12 10.6572C10.8954 10.6572 10 11.5527 10 12.6572C10 13.7618 10.8954 14.6572 12 14.6572Z"
                        stroke="#98A2B3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.72656 8.99707L10.2799 11.6504"
                        stroke="#98A2B3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10.2732 4.33057L5.72656 6.9839"
                        stroke="#98A2B3"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3305_10170">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 -0.00952148)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src={blog.blogImg}
                alt={blog.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          {/* Blog Content */}
          <div className="text-gray-900 text-lg font-BearFont-regular">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </div>

        <BlogTestimonials />

        <div className="pt-20">
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
