import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}
const SubmitButton = (props: ButtonProps) => {
  const { isLoading, className, children } = props;
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            width={24}
            height={24}
            className="animate-spin"
            alt="loader"
            src="assets/icons/loader.svg"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
