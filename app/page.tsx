import Image from 'next/image'
import productList from "@/app/product-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-hoof-orange">
      <div className="flex-col items-center justify-between font-serif lg:flex text-hound-blue">
        <h1 className={'text-3xl'}> Welcome to Hoof & Hound Heritage</h1>
      </div>

      <div className="relative flex place-items-center">
        <img src={'og-orange-logo.svg'} alt={'hoof and hound logo'}  width="400"
             height="341"/>
      </div>
        <div className="flex-col items-center justify-between font-serif lg:flex text-hound-blue">
            <h2 className={'text-xl'}> Our site is coming soon...</h2>
            <p className={'text-base'}> In the meantime find us on instagram <b>@hoofandhoundheritage</b></p>
        </div>
    </main>
  )
}
