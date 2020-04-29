import { toast, ToastContent, ToastOptions } from 'react-toastify';
export interface ShowToast {
  content: ToastContent;
  options?: ToastOptions;
}

export const useToast = () => ({ content, options }: ShowToast) => {
  toast(content, options);
};
