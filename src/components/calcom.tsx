/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useIsMobile } from "../lib/utils";

export default function MyApp() {
  const isMobile = useIsMobile();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "intro-call" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: isMobile,
        layout: "month_view",
      });
    })();
  }, [isMobile]);
  return (
    <Cal
      namespace="intro-call"
      calLink="hanifyaskur/intro-call"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: "month_view",
        theme: "dark",
        hideEventTypeDetails: isMobile ? "true" : "false",
      }}
    />
  );
}
