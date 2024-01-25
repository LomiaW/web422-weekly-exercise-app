import Hello from "@/components/Hello";
import Clock from '@/components/Clock';

export default function Home() {
  return (
    <>
      <Hello />
      <Clock locale="en-CA" /> 
    </>
  )
}
