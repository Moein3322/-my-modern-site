import Link from "next/link";
import { cn } from "@/lib/utils";

type Props =
  | ({
      href: string;
      children: React.ReactNode;
      className?: string;
      variant?: "primary" | "ghost";
    } & React.ComponentProps<typeof Link>)
  | ({
      href?: never;
      children: React.ReactNode;
      className?: string;
      variant?: "primary" | "ghost";
      onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
      type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    } & React.ButtonHTMLAttributes<HTMLButtonElement>);

export default function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20";

  const variants = {
    primary:
      "bg-white text-black hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.08)]",
    ghost: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
  };

  const variant = props.variant ?? "ghost";

  if ("href" in props && props.href) {
    const { href, children, className, ...rest } = props as any;
    return (
      <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, className, ...rest } = props as any;
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
