import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", "size-8 text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", className)}
      {...props}
    />
  )
}

export { Spinner }
