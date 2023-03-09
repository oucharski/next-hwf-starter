import { settings } from "./settings";

type BreadcrumbInfoProps = {
  title: string;
  path: string;
};

export const BreadcrumbInfo = (props: BreadcrumbInfoProps) => {
  return (
    <span
      id={settings.breadcrumbInfoId}
      style={{ display: "none" }}
      data-title={props.title}
      data-path={props.path}
    />
  );
};
