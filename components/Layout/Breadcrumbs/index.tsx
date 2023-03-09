import Link from "next/link";
import MUILink from "@mui/material/Link";
import MUIBreadcrumbs from "@mui/material/Breadcrumbs";
import { settings } from "@/settings";
import { useBreadCrumbInfo } from "./useBreadCrumInfo";

export const Breadcrumbs = () => {
  const { title, path } = useBreadCrumbInfo();

  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      sx={{ ml: 1, fontSize: 24, fontWeight: 500 }}
    >
      <MUILink underline="none" color="inherit" component={Link} href="/">
        {settings.application.title}
      </MUILink>

      {title && path ? (
        <MUILink underline="none" color="inherit" component={Link} href={path}>
          {title}
        </MUILink>
      ) : null}
    </MUIBreadcrumbs>
  );
};

export { BreadcrumbInfo } from "./BreadcrumbInfo";
