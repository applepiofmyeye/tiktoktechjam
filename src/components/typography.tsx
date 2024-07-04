import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

type TagName = "h1" | "h2" | "h3" | "h4" | "h5" | "p";

interface Props
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: TagName;
}

const typographyVariants = cva("", {
  variants: {
    variant: {
      "display-lg":
        "font-poppins md:text-[56px] md:leading-[64px] text-[40px] leading-[48px]",
      "display-md":
        "font-poppins md:text-[48px] md:leading-[56px] text-[36px] leading-[44px]",
      "display-sm":
        "font-poppins md:text-[40px] md:leading-[48px] text-[32px] leading-[40px]",
      "headline-lg":
        "md:text-[36px] md:leading-[48px] text-[24px] leading-[32px]",
      "headline-md":
        "md:text-[32px] md:leading-[40px] text-[20px] leading-[28px]",
      "headline-sm":
        "md:text-[28px] md:leading-[36px] text-[20px] leading-[28px]",
      "title-lg":
        "font-poppins md:text-[24px] md:leading-[32px] text-[18px] leading-[24px]",
      "title-md":
        "font-poppins md:text-[20px] md:leading-[28px] text-[16px] leading-[24px]",
      "title-sm":
        "font-poppins md:text-[18px] md:leading-[24px] text-[16px] leading-[24px]",
      "body-lg": "md:text-[18px] md:leading-[28px] text-[16px] leading-[24px]",
      "body-md": "md:text-[16px] md:leading-[24px] text-[14px] leading-[24px]",
      "body-sm": "md:text-[14px] md:leading-[24px] text-[12px] leading-[20px]",
      "label-lg": "text-[14px] leading-[24px]",
      "label-md": "text-[12px] leading-[16px]",
      "label-sm": "text-[10px] leading-[16px]",
    },
    weight: {
      regular: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body-md",
    weight: "regular",
  },
});

const Typography = React.forwardRef<HTMLParagraphElement, Props>(
  ({ className, variant, weight, children, as, ...props }, ref) => {
    const Comp = as || "p";
    return (
      <Comp
        className={cn(typographyVariants({ variant, weight, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
