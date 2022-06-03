import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="border font-bold py-5 border-b-1 border-b-gray-300 px-7 text-white bg-lime-600">
        <ul className="flex gap-5 justify-center uppercase">
            <li><Link href="/">Hjem</Link></li>
            <li><Link href="/">Ydelser</Link></li>
            <li><Link href="/">Om Os</Link></li>
            <li><Link href="/">Kontakt</Link></li>
            {/* <li><Link href="/vejret">Vejret</Link></li> */}
        </ul>
    </nav>
  )
}

export default Navigation