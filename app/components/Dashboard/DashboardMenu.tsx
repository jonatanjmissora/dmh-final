import React from 'react'
import LinksMenu from '../LinksMenu'
import CloseSessionBtn from '../Button/CloseSessionBtn'

export default function DashboardMenu() {

  const accountId = "85"

  return (
    <aside className='hidden sm:block sm:w-[26%] sm:bg-primary sm:px-14 sm:py-24 xl:w-[18%] xl:px-12 xl:py-16'>
      <nav className='text-3xl flex flex-col gap-6 xl:text-xl xl:gap-3 xl:fixed'>
        <LinksMenu accountId={accountId} />
        <CloseSessionBtn />
      </nav>
    </aside>
  )
}
