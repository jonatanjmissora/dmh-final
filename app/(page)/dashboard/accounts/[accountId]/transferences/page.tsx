import SVGCard from "@/app/assets/SVG/SVGCard";
import SVGProfile from "@/app/assets/SVG/SVGProfile";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import Link from "next/link";

export default function page() {

    const accountId = "85"

  return (
    <article className="dashboard-content-container xl:py-20">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="opacity-50 size-7" />
        <Link className="link link-border" href={`/dashboard/accounts/${accountId}`}>Cargar dinero</Link>
      </div>
      <Link href={`dashboard/accounts/${accountId}/transferences/transfer`} className="flex justify-between items-center text-primary bg-my-black p-10 py-14 rounded-xl sm:py-24 xl:py-16">
        <div className="flex items-center gap-8 xl:gap-4">
            <SVGProfile />
            <span className="flex-wrap text-[2rem] font-bold tracking-wider w-[15ch] leading-tight sm:w-max xl:text-2xl">Transferencia bancaria</span>
        </div>
        <SVGRightArrow />
      </Link>

      <Link href={`dashboard/accounts/${accountId}/transferences/deposit`} className="flex justify-between items-center text-primary bg-my-black p-10 py-12 rounded-xl sm:py-24 xl:py-16">
        <div className="flex items-center gap-8 xl:gap-4">
            <SVGCard />
            <span className="flex-wrap text-[1.9rem] font-bold tracking-wider w-[15ch] leading-tight sm:w-max xl:text-2xl">Seleccionar tarjeta</span>
        </div>
        <SVGRightArrow />
      </Link>
    </article>
  )
}