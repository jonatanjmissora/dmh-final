import Link from "next/link"

export default function CardsList() {

  const accountId = "85"
  const cardsData = [
    { id: 1, number: 4067 },
    { id: 2, number: 8040 },
    { id: 3, number: 9006 },
  ]

  return (
    <div className="bg-my-white card py-12 px-10 sm:py-20 xl:py-12 xl:px-10">
      <h2 className="text-3xl font-bold border-b border-gray-200 pb-6 xl:text-xl xl:border-b-0">Tus tarjetas</h2>
      {cardsData.map(card => <CardRow key={card.id} card={card} accountId={accountId} />)}
    </div>
  )
}

const CardRow = ({ card, accountId }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-14 sm:py-10 xl:py-6">
      <div className="flex gap-4 items-center">
        <div className="size-10 bg-primary rounded-full"></div>
        <span className="text-2xl font-light xl:text-xl">Terminada en {card.number}</span>
      </div>
      <Link href={`/dashboard/accounts/${accountId}/cards/delete`} className="text-xl font-bold">Eliminar</Link>
    </div>
  )
}