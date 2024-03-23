"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonBackProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: ButtonBackProps) => {
  return (
    <Button variant="link" size="sm" className="font-normal w-full" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
