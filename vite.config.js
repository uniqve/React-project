import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";

export default {
  plugins: [reactRefresh(), svgr()],
};
