import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/shadcn/toast";
import { useToast } from "@/components/shadcn/use-toast";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            className="bg-transparent backdrop-blur-sm border border-[#1da1f2]"
            key={id}
            {...props}
          >
            <div className="grid gap-1">
              {title && (
                <>
                  <ToastTitle className="text-red-600 font-bold text-lg inline">
                    <ExclamationTriangleIcon className="h-4 w-4 inline mr-3 [&_path]:text-red-500" />
                    {title}
                  </ToastTitle>
                </>
              )}
              {description && (
                <ToastDescription className="font-semibold text-md">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
