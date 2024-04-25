import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/primitives/toast";
import { useToast } from "@/components/primitives/use-toast";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            className="border border-[#1da1f2] bg-transparent backdrop-blur-sm"
            key={id}
            {...props}
          >
            <div className="grid gap-1">
              {title && (
                <>
                  <ToastTitle className="inline text-lg font-bold text-red-600">
                    <ExclamationTriangleIcon className="mr-3 inline h-4 w-4 [&_path]:text-red-500" />
                    {title}
                  </ToastTitle>
                </>
              )}
              {description && (
                <ToastDescription className="text-md font-semibold">
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
