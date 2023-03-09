import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { settings as breadCrumbsSettings } from "./settings";

export const useBreadCrumbInfo = () => {
  const [title, setTitle] = useState<string>("");
  const [path, setPath] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const breadCrumbInfo = document.getElementById(
      breadCrumbsSettings.breadcrumbInfoId
    );
    if (breadCrumbInfo) {
      const title = breadCrumbInfo.dataset.title;
      const path = breadCrumbInfo.dataset.path;

      if (title && typeof title === "string") {
        setTitle(title);
      }

      if (path && typeof path === "string") {
        setPath(path);
      }
    } else {
      setTitle("");
      setPath("");
    }
  }, [router.asPath]);

  return { title, path };
};
