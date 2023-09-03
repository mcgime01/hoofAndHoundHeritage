import Image from 'next/image'
import productList from "@/app/product-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center sm:p-20 py-12 px-6 bg-hoof-orange">
      <div className="flex flex-col items-center justify-between font-serif lg:flex text-hound-blue">
        <h1 className={'sm:text-4xl text-xl '}> Welcome to Hoof & Hound Heritage</h1>
      </div>

      <div className="relative flex place-items-center">
        <img src={'og-orange-logo.svg'} alt={'hoof and hound logo'}  width="700"
             height="341"/>
      </div>
        <div className="flex flex-col items-center justify-between font-serif lg:flex text-hound-blue">
            <h2 className={'sm:text-2xl text-l flex flex-col items-center'}> Our site is coming soon...</h2>
            <p className={'sm:text-xl text-l flex flex-col items-center'}> In the meantime, find us on Instagram <b>@hoofandhoundheritage</b></p>
        </div>
    </main>
  )
}
