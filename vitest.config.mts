import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // tsconfig의 경로 별칭(@/* → src/*)을 테스트에서도 그대로 쓴다.
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    // 컴포넌트 테스트를 위해 브라우저 DOM을 흉내 내는 jsdom 환경에서 실행한다.
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    // 스캐폴드(main)에는 아직 테스트 파일이 없으므로, 없어도 실패로 처리하지 않는다.
    passWithNoTests: true,
  },
});
