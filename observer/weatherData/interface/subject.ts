import { Observer } from "./observer";

export interface Subject {
  // 옵저버 등록
  registerObserver(o: Observer): void;
  // 옵저버 제거
  removeObserver(o: Observer): void;
  // 주제의 상태가 변경되면 다른 옵저버들에게 알리는 역할
  notifyObservers(): void;
}
