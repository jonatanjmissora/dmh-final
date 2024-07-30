import SVGPlus from "@/app/assets/SVG/SVGPlus";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CardsSelectList from "@/app/components/Dashboard/Cards/CardsSelectList";
import { getCookies } from "@/app/helpers/getCookies";
import { getCardsData } from "@/app/services/card.services";
import { CardDataTypes } from "@/app/types/card.types";
import Link from "next/link";

export default async function DepositCard({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const [token, accountId] = getCookies("token", "accountid")
  const cardsData: CardDataTypes[] = await getCardsData(accountId, token) || []
  const { cardnum } = searchParams

  return (
    <article className="dashboard-content-container xl:py-16">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/deposits`} className="link link-border" >Cargar dinero</Link>
      </div>

      <div className="relative bg-my-black rounded-xl p-8 flex flex-col gap-8 sm:p-20 sm:gap-16 xl:py-12 xl:gap-8 xl:pb-16">
        <h2 className="text-primary text-4xl font-bold xl:text-3xl">Seleccionar tarjeta</h2>

        <div>
          <CardsSelectList cardsData={cardsData} accountId={accountId} />
        </div>

        <Link className="text-primary flex items-center gap-6 py-6 sm:py-0" href={`/dashboard/accounts/${accountId}/cards/new`}>
          <SVGPlus className="size-11 sm:size-14 xl:size-10" />
          <span className="text-3xl font-bold xl:text-2xl">Nueva tarjeta</span>
        </Link>

        <div className="w-full flex justify-end absolute -bottom-[8rem] right-0 sm:relative sm:bottom-0 xl:absolute xl:w-1/4 xl:bottom-12 xl:right-20">
          <Link className="button-form card-shadow w-1/2 sm:w-full" href={`/dashboard/accounts/${accountId}/deposits/amount?cardnum=${cardnum}`}>Continuar</Link>
        </div>
      </div>


    </article>
  )
}