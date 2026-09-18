// toBeInTheDocument() 같은 DOM 전용 단언(matcher)을 expect에 추가한다.
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// 테스트끼리 상태를 공유하지 않도록, 매 테스트가 끝나면 렌더링한 DOM을 정리한다.
afterEach(() => {
  cleanup();
});
