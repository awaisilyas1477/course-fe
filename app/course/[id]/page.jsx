"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { postData } from "../../components/utils/coursesData/coursesData";
import { StarIcon } from "@heroicons/react/24/solid";
import RelatedCourses from '../../components/RelatedCourses/index';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundCourse = postData.find((item) => item.id.toString() === id);
      if (foundCourse) {
        setCourse(foundCourse);
      }
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) return <div>Loading...</div>;

  if (!course)
    return (
      <div className="text-center text-red-500">
        <h1>Course not found!</h1>
      </div>
    );


  return (
    <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col">
        <div className="bg-white">
          <div className="container mx-auto flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-3/4">
              <div className="bg-gray-100 pb-8">
                <div className="container mx-auto px-4 ">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {course?.heading}
                  </h1>
                  <p className="max-w-4xl">{course?.title}</p>
                </div>
              </div>
              <img src={course.imgSrc} alt="Course Image" className="mb-8 rounded-lg" />
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: course.heading2 }} />
              </div>
            </div>

            <div className="w-full md:w-1/4">
  <div className="bg-white pb-10 border-2 border-[#1A21BCFF] rounded-2xl shadow-lg overflow-hidden sticky top-32">
    <div className="relative rounded-3xl">
      <img alt="gaby" className="m-auto clipPath" src={course?.imgSrc} />
      <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
        <h3 className="text-white uppercase text-center text-sm font-medium">Best Seller</h3>
      </div>
    </div>
    <div className="px-3">
      <h3 className="text-base font-normal pt-6 opacity-75">{course.instructor}</h3>
      <p className="text-sm opacity-75 mb-2"><strong>Published by:</strong> {course.name}</p>
      <p className="text-sm opacity-75 mb-6"><strong>Published on:</strong> 01/01/2021</p>
      <div className="flex justify-between items-center py-6">
        <div className="flex gap-2">

          <h3 className="text-red text-22xl font-medium">{course.rating}</h3>
          <div className="flex">
                            <StarIcon className="h-5 w-5 text-gold" />
                            <StarIcon className="h-5 w-5 text-gold" />
                            <StarIcon className="h-5 w-5 text-gold" />
                            <StarIcon className="h-5 w-5 text-gold" />
                            <StarIcon className="h-5 w-5 text-gold" />
                          </div>
          <div className="flex">{/* Add your star icons here */}</div>
        </div>
        <div>
          <h3 className="text-3xl font-medium">${course.price}</h3>
        </div>
      </div>
      <hr style={{ color: 'rgb(196, 196, 196)' }} />
      <div className="flex justify-between pt-6">
        <div className="flex gap-4">
          <img alt="users" className="inline-block m-auto" src="/assets/courses/book-open.svg" />
          <h3 className="text-base font-medium text-black opacity-75">{course.classes} classes</h3>
        </div>
        <div className="flex gap-4">
          <img alt="users" className="inline-block m-auto" src="/assets/courses/users.svg" />
          <h3 className="text-base font-medium text-black opacity-75">{course.students} students</h3>
        </div>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>

      <RelatedCourses />

    </div>
  );
};

export default CourseDetail;
