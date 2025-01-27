import Link from "next/link";
import Image from "next/image";

interface ProductLink {
  label: string;
  href: string;
  external?: boolean; // Optional field to mark external links
}

interface ProductType {
  id: number;
  section: string;
  link: ProductLink[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "About",
    link: [
      { label: "About", href: "/about" },
      {
        label: "Careers",
        href: "https://www.linkedin.com/in/awais-ilyas-655797261/",
        external: true, // Added flag for external link
      },
      { label: "Mobile", href: "/mobile" },
      { label: "Blog", href: "/blog" },
      { label: "How we work?", href: "/how-we-work" },
    ],
  },
  {
    id: 2,
    section: "Support",
    link: [
      { label: "Help/FAQ", href: "/help" },
      { label: "Press", href: "/press" },
      { label: "Affiliates", href: "/affiliates" },
      { label: "Hotel owners", href: "/hotel-owners" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    id: 3,
    section: "Services",
    link: [
      { label: "Airline fees", href: "/airline-fees" },
      { label: "Airlines", href: "/airlines" },
      { label: "Low fare tips", href: "/low-fare-tips" },
      { label: "Badges &", href: "/badges" },
      { label: "Certificates", href: "/certificates" },
    ],
  },
];

const footer = () => {
  return (
    <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}
        <div className="sm:col-span-6 lg:col-span-5">
          <div className="flex flex-shrink-0 items-center border-right">
            <Image
              src="/assets/logo/logo.svg"
              alt="logo"
              width={214}
              height={66}
            />
          </div>
          <h3 className="text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16">
            Create an account in minutes, gain complete financial
            <br />
            control for much longer.
          </h3>
        </div>

        {/* DYNAMIC COLUMNS */}
        {products.map((product) => (
          <div key={product.id} className="sm:col-span-2">
            <p className="text-black text-lg font-medium mb-9">
              {product.section}
            </p>
            <ul>
              {product.link.map((item, index) => (
                <li key={index} className="mb-5">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-darkgray text-base font-normal mb-6 space-links"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-darkgray text-base font-normal mb-6 space-links"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* All Rights Reserved */}
      <div className="py-10 md:flex items-center justify-between border-t border-t-gray-blue">
        <h4 className="text-dark-red opacity-75 text-sm text-center md:text-start font-normal">
          &copy; {new Date().getFullYear()} Learnings. All rights reserved
        </h4>
        <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
          <h4 className="text-dark-red opacity-75 text-sm font-normal">
            <Link href="/privacy-policy">Privacy policy</Link>
          </h4>
          <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
          <h4 className="text-dark-red opacity-75 text-sm font-normal">
            <Link href="/terms-and-conditions">Terms & conditions</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default footer;
