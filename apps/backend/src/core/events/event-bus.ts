type Handler<T = unknown> = (payload: T) => void | Promise<void>;

class EventBus {
  private handlers = new Map<string, Handler[]>();

  emit<T>(event: string, payload: T): void {
    const list = this.handlers.get(event) ?? [];
    for (const h of list) {
      void h(payload);
    }
  }

  on<T>(event: string, handler: Handler<T>): void {
    const list = this.handlers.get(event) ?? [];
    this.handlers.set(event, [...list, handler as Handler]);
  }
}

export const eventBus = new EventBus();
export type { EventBus };
