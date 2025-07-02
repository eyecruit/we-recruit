"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello World from the frontend
      </h1>
      <Button onClick={() => router.push("/login")}>Click me</Button>
    </>
  );
}
