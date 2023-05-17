import toast from "react-hot-toast";

type ToastType = "success" | "error" | "info";
type Notify = (message: string, type: ToastType) => void;

// Custom Hook
const useToast = (): Notify => {
  const notify: Notify = (message, type) => {
    switch (type) {
      case "success":
        toast.success(message, { duration: 2000, position: "bottom-right" });
        break;
      case "error":
        toast.error(message, { duration: 4000, position: "bottom-right" });
        break;
      case "info":
        toast(message, { duration: 1000, position: "bottom-right" });
        break;
      default:
        throw new Error(`Unsupported toast type: ${type}`);
    }
  };

  return notify;
};

export default useToast;
