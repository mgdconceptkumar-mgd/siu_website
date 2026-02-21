"use client";
import React, { useState, useRef, useEffect } from "react";
import menu_data from "../menu-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  /* ======================================================
     🔹 ECOSYSTEM ROUTES (ACTIVE MENU LOGIC)
  ====================================================== */

  const routeGroups = {
    students: [
      "/blog-details",
      "/course-style-",
      "/course-details",
      "/lithuania",
      "/finland",
      "/spain",
      "/france",
      "/belgium",
      "/home-health-coach",
      "/home-modern-schooling",
      "/home-language-academy",
    ],

    universities: [
      "/gallery-masonry",
      "/university",
      "/faculty",
      "/campus",
      "/international-partnerships",
    ],

    schools: [
      "/event-grid",
      "/school",
      "/k12",
      "/boarding-school",
      "/school-programs",
    ],

    corporates: [
      "/event-list",
      "/corporates",
      "/training",
      "/upskilling",
      "/workforce",
    ],

    government: [
      "/event-details",
      "/policy",
      "/public-sector",
      "/skill-mission",
    ],

    about: [
      "/contact-us",
      "/about-us",
      "/our-story",
      "/team",
      "/careers",
      "/contact",
    ],
  };

  const isGroupActive = (routes) =>
    routes.some((route) => pathname?.startsWith(route));

  const isStudentActive = isGroupActive(routeGroups.students);
  const isUniversityActive = isGroupActive(routeGroups.universities);
  const isSchoolActive = isGroupActive(routeGroups.schools);
  const isCorporateActive = isGroupActive(routeGroups.corporates);
  const isGovernmentActive = isGroupActive(routeGroups.government);
  const isAboutActive = isGroupActive(routeGroups.about);

  /* ======================================================
     🔹 MENU STATE
  ====================================================== */

  const [openMenu, setOpenMenu] = useState(null);
  const [openNodes, setOpenNodes] = useState({});
  const rootRef = useRef(null);

  const isActiveMenu = (menu) => {
    if (menu.link === pathname) return true;

    const search = (items) => {
      if (!items) return false;
      for (let i of items) {
        if (i.link === pathname) return true;
        if (i.submenu && search(i.submenu)) return true;
        if (i.mega_submenu && search(i.mega_submenu)) return true;
      }
      return false;
    };

    return menu.submenus && search(menu.submenus);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpenMenu(null);
        setOpenNodes({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNode = (key) => {
    setOpenNodes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderSubmenu = (items, parentKey = "") => (
    <ul className="clean-sub-list">
      {items?.map((item, index) => {
        const nodeKey = `${parentKey}-${item.title}-${index}`;
        const isOpen = openNodes[nodeKey];

        return (
          <li key={nodeKey}>
            {item.submenu ? (
              <>
                <div className="expand-item" onClick={() => toggleNode(nodeKey)}>
                  {item.title}
                  <span className="chevron-sm">{isOpen ? "▴" : "▾"}</span>
                </div>
                {isOpen && renderSubmenu(item.submenu, nodeKey)}
              </>
            ) : (
              <Link
                href={item.link}
                className={`nested-link ${
                  item.link === pathname ? "active-sub" : ""
                }`}
              >
                {item.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );

  /* ======================================================
     🔹 RENDER
  ====================================================== */

  return (
    <>
      <nav ref={rootRef}>
        <ul className="mainmenu">
          {menu_data.map((menu, index) => {
            const isOpen = openMenu === menu.title;
            const hasDropdown =
              menu.mega_menu || (menu.submenus && menu.submenus.length > 0);

            const ecosystemActive =
              (menu.title === "For Students" && isStudentActive) ||
              (menu.title === "For Universities" && isUniversityActive) ||
              (menu.title === "For Schools" && isSchoolActive) ||
              (menu.title === "For Corporates" && isCorporateActive) ||
              (menu.title === "For Government" && isGovernmentActive) ||
              (menu.title === "About Us" && isAboutActive);

            return (
              <li
                key={index}
                className="menu-item"
                onMouseEnter={() => hasDropdown && setOpenMenu(menu.title)}
              >
                {!hasDropdown ? (
                  <Link
                    href={menu.link}
                    className={`menu-btn ${
                      ecosystemActive || isActiveMenu(menu)
                        ? "active-menu"
                        : ""
                    }`}
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <div
                    className={`menu-btn ${
                      ecosystemActive || isActiveMenu(menu)
                        ? "active-menu"
                        : ""
                    }`}
                  >
                    {menu.title}
                    <span className="chevron">{isOpen ? "▴" : "▾"}</span>
                  </div>
                )}

                {isOpen && hasDropdown && (
                  <div
                    className="dropdown-panel"
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    {menu.mega_menu &&
                      menu.submenus?.map((group, gi) => (
                        <div key={gi} className="dropdown-section">
                          <h4 className="section-title">{group.title}</h4>

                          {group.mega_submenu?.map((item, ii) => {
                            const itemKey = `${group.title}-${item.title}-${ii}`;

                            return (
                              <div key={itemKey} className="submenu-block">
                                {item.submenu ? (
                                  renderSubmenu(item.submenu, itemKey)
                                ) : (
                                  <Link
                                    href={item.link}
                                    className={`nested-link ${
                                      item.link === pathname
                                        ? "active-sub"
                                        : ""
                                    }`}
                                  >
                                    {item.title}
                                  </Link>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ======================================================
         🔹 STYLES
      ====================================================== */}
      <style jsx>{`
        .mainmenu {
          display: flex;
          gap: 18px !important;
          list-style: none;
          align-items: center;
        }

        .menu-btn {
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          color: #222;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 4px;
        }

        :global(.menu-btn.active-menu),
        :global(a.menu-btn.active-menu) {
          font-weight: 900 !important;
          color: #6f4bff !important;
          border-bottom: 3px solid #6f4bff;
          padding-bottom: 4px;
        }

        .dropdown-panel {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 380px;
          max-height: 420px;
          overflow-y: auto;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0px 18px 40px rgba(0, 0, 0, 0.15);
          z-index: 9999;
        }

        .nested-link {
          font-size: 14px;
          color: #555;
          text-decoration: none;
        }

        .active-sub {
          font-weight: 700 !important;
          color: #6f4bff;
        }
      `}</style>
    </>
  );
};

export default MainMenu;
