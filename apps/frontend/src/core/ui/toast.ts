type ToastType = "success" | "error" | "info";

export interface ToastEvent {
  id: number;
  type: ToastType;
  message: string;
  duration?: number;
}

let _id = 0;

function emit(type: ToastType, message: string, duration = 4000) {
  const event = new CustomEvent<ToastEvent>("app:toast", {
    detail: { id: ++_id, type, message, duration },
  });
  window.dispatchEvent(event);
}

export const toast = {
  success: (message: string, duration?: number) =>
    emit("success", message, duration),
  error: (message: string, duration?: number) =>
    emit("error", message, duration),
  info: (message: string, duration?: number) => emit("info", message, duration),
};
