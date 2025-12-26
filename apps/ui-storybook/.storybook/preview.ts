import type { Preview } from "@storybook/react";
import "@tzc/ui/dist/styles.css";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on[A-Z].*" }
  }
};

export default preview;
