import Link from "next/link"
import {MdEmail} from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
const Footer = () => {
  return (
    <div className="text-gray-700 flex justify-center py-5 text-center">
        <div>
            <h2 className="text-xl font-bold">Vil du have fat i os?</h2>
            <br />
            <p className="pb-2">Du kan altid kontakte os på email eller telefon.</p>
            <p>Fang os på hverdage: <br /> 09:00 - 15:00</p>
            <div className="flex gap-10 font-bold text-lime-600 mt-4">
                <h4 className="flex items-center gap-1">
                    <MdEmail className="text-xl"/>
                    <Link href="/">info@gogogarden.dk</Link>
                </h4>
                <h4 className="flex items-center gap-1">
                    <BsFillTelephoneFill />
                    <Link href="">92 45 45 80</Link>
                </h4>
            </div>
        </div>
    </div>
  )
}

export default Footer