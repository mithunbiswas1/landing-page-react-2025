import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = (menu) => {
    setActiveDropDown(activeDropDown === menu ? null : menu);
  };

  const menuItems = {
    platform: {
      title: "Platform",
      sections: [
        {
          title: "BUILD",
          items: [
            { name: "Design", desc: "Build high-performing sites" },
            { name: "Edit mode", desc: "Empower your content team" },
            { name: "Interactions", desc: "Craft immersive experiences" },
            {
              name: "Page building",
              desc: "Launch simple landing pages quickly",
              isNew: true,
            },
          ],
        },
        {
          title: "MANAGE",
          items: [
            { name: "CMS", desc: "Manage content at scale" },
            {
              name: "Hosting",
              desc: "Host and scale your site without the hassle",
            },
            {
              name: "Localization",
              desc: "Customize your site for a worldwide audience",
            },
            { name: "Security", desc: "Ensure your site stays safe" },
          ],
        },
        {
          title: "OPTIMIZE",
          items: [
            {
              name: "Analyze",
              desc: "Understand how your site performs",
              isNew: true,
            },
            {
              name: "Optimize",
              desc: "Maximize conversions with testing",
              isNew: true,
            },
            { name: "SEO", desc: "Grow your reach with fine-tuned controls" },
          ],
        },
      ],
    },
    solutions: {
      title: "Solutions",
      items: [
        { name: "For Enterprise", desc: "Scale your business" },
        { name: "For Startups", desc: "Move faster with CodeTutor" },
        { name: "For Agencies", desc: "Win more clients" },
        { name: "For Marketing", desc: "Drive more growth" },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        { name: "Showcase", desc: "Get inspired by the community" },
        { name: "Blog", desc: "Read latest news and articles" },
        { name: "Documentation", desc: "Learn from our resources" },
        { name: "Community", desc: "Join the conversation" },
      ],
    },
  };
  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          {/* logo  */}
          <div className="">
            <Link to="/" className="text-xl font-bold">
              <span className="text-blue-500">CodeTutor</span> UI
            </Link>
          </div>

          {/* desktop menu  */}
          <div className="hidden lg:flex items-center space-x-4">
            {Object.keys(menuItems).map((key) => (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowDown
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeDropDown === key ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropDown === key && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-md shadow-lg py-1 text-black">
                    <div className="">
                      {key === "platform" ? (
                        <div>Platform Items</div>
                      ) : (
                        <div className="space-y-2">
                          {menuItems[key].items.map((item, idx) => (
                            <Link
                              to={`/${key}/${item.name.toLowerCase()}`}
                              className="group items-start p-2 rounded-lg "
                            >
                              <div className="group-hover:bg-gray-50">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 ">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/enterprice"
              className="hover:text-gray-300 text-sm font-medium"
            >
              Enterprice
            </Link>
            <Link
              to="/pricing"
              className="hover:text-gray-300 text-sm font-medium"
            >
              Pricing
            </Link>
          </div>

          {/* auto button  */}
          <div className="">button </div>

          {/* mobile menu  */}
          <div className="md:hidden">mobile menu</div>
        </div>
      </div>
    </nav>
  );
};
