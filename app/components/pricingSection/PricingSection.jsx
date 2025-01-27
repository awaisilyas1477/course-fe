import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold text-gray-900 sm:text-6xl">
            Affordable E-Learning Plans
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Flexible pricing for educators, trainers, and learners.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Basic Plan */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-Blueviolet lg:mt-8 lg:rounded-r-none xl:p-10">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id="tier-basic"
                  className="text-lg/8 font-semibold text-gray-900"
                >
                  Basic
                </h3>
              </div>
              <p className="mt-4 text-sm/6 text-gray-600">
                Get started with essential tools for small courses and personal
                learning projects.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  $15
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">
                  /month
                </span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm/6 text-gray-600"
              >
                <li className="flex gap-x-3">Up to 3 courses</li>
                <li className="flex gap-x-3">Basic learner analytics</li>
                <li className="flex gap-x-3">Email support</li>
              </ul>
            </div>
            <a
              href="#"
              aria-describedby="tier-basic"
              className="mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 ring-1 ring-Blueviolet ring-inset hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
          </div>

          {/* Professional Plan */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-Blueviolet lg:z-10 lg:rounded-b-none xl:p-10">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id="tier-professional"
                  className="text-lg/8 font-semibold text-indigo-600"
                >
                  Professional
                </h3>
                <p className="rounded-full  px-2.5 py-1 text-xs/5 font-semibold text-Blueviolet ring-1 ring-Blueviolet">
                  Most popular
                </p>
              </div>
              <p className="mt-4 text-sm/6 text-gray-600">
                Best for educators and small teams to manage multiple courses.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  $50
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">
                  /month
                </span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm/6 text-gray-600"
              >
                <li className="flex gap-x-3">Up to 10 courses</li>
                <li className="flex gap-x-3">Advanced analytics</li>
                <li className="flex gap-x-3">Custom branding</li>
                <li className="flex gap-x-3">Priority email support</li>
              </ul>
            </div>
            <a
              href="#"
              aria-describedby="tier-basic"
              className="mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-white bg-Blueviolet ring-1 ring-Blueviolet ring-inset hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Buy Now
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-Blueviolet lg:mt-8 lg:rounded-l-none xl:p-10">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id="tier-enterprise"
                  className="text-lg/8 font-semibold text-gray-900"
                >
                  Enterprise
                </h3>
              </div>
              <p className="mt-4 text-sm/6 text-gray-600">
                Comprehensive solutions for organizations with large-scale
                e-learning needs.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  $150
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">
                  /month
                </span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm/6 text-gray-600"
              >
                <li className="flex gap-x-3">Unlimited courses</li>
                <li className="flex gap-x-3">Advanced reporting tools</li>
                <li className="flex gap-x-3">Dedicated account manager</li>
                <li className="flex gap-x-3">24/7 support</li>
              </ul>
            </div>
            <a
              href="#"
              aria-describedby="tier-enterprise"
              className="mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 ring-1 ring-Blueviolet ring-inset hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
