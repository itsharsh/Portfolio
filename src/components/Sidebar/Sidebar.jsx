import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SideNavItems,
  SideNavLink,
} from "carbon-components-react/lib/components/UIShell";

import { StyledSideNav } from "./styles";

const items = [
  { name: "Profile", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Achievements", path: "/achievements" },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <StyledSideNav
      isFixedNav
      expanded
      isChildOfHeader={false}
      aria-label="Side navigation"
    >
      <SideNavItems>
        {items.map((i) => (
          <SideNavLink
            isActive={
              location.pathname === "/" && i.path === "/"
                ? true
                : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.path}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;
