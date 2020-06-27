import Head from 'next/head'
import tw, { styled } from 'twin.macro'
// import 
 
const Button = styled.button`
  ${tw`bg-red-500 text-white p-4 shadow rounded`}
  `;

export default function Home() {
  return (
    <div className="">
      <Button>
        Hello World
      </Button>
    </div>
  )
}
