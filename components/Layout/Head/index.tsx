import NextHead from "next/head";
import { useLayout } from "../hooks";

export const Head = () => {
  const layout = useLayout();
  return (
    <NextHead>
      <title>{layout.head.title}</title>
      <meta name="description" content={layout.head.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
