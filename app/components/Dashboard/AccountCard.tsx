import { getCookies } from "@/app/helpers/getCookies";
import { getAccountData } from "@/app/services/account.services";
import { AccountDataTypes } from "@/app/types/account.types";
import Link from "next/link";

export default async function AccountCard() {

  const [token, accountId] = getCookies("token", "accountid")
  const accountData: AccountDataTypes = await getAccountData(token)
  const formatedAmount = new Intl.NumberFormat("de-DE").format(accountData.available_amount)

  return (
    <div className="bg-my-grey-dark text-white flex flex-col gap-2 rounded-xl py-7 px-9 sm:w-full sm:text-2xl sm:gap-8 xl:text-xl">
      <div className="opacity-75 flex gap-4 justify-end sm:opacity-100">
        <Link className="link-border" href={`/dashboard/accounts/${accountId}/cards`}>Ver tarjetas</Link>
        <Link className="link-border" href={`/dashboard/accounts/${accountId}`}>Ver CVU</Link>
      </div>
      <div className="flex flex-col sm:gap-4 sm:py-8 xl:py-0">
        <span className="text-xl opacity-75 sm:opacity-100 sm:text-2xl">Dinero disponible</span>
        <span className="w-max text-3xl font-semibold border-[1px] border-primary rounded-full p-3 pr-6 mx-2 my-2 sm:text-6xl sm:py-6 sm:px-8 sm:border-2 xl:text-4xl xl:py-4">$ {formatedAmount}</span>
      </div>
    </div>
  )
}
