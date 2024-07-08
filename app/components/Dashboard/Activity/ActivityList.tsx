

export default function ActivityList({ activities }) {

  const isPagination = activities.length > 4
  activities = activities.slice(0, 4)

  return (
    <div className="flex-1 flex flex-col">
      {activities.map(activity => <ActivityRow key={activity.id} activity={activity} />)}
    </div>
  )
}

const ActivityRow = ({ activity }) => {
  return (
    <div className="flex-1 flex items-center gap-4 py-3 border-b border-gray-200 text-xl xl:border-gray-400">
      <div className="size-8 bg-primary rounded-full sm:size-12 xl:size-9"></div>
      <span className="opacity-75 sm:text-2xl xl:text-xl">{activity.description}</span>
      <div className="opacity-75 ml-auto flex flex-col items-end sm:text-2xl xl:text-lg">
        <span>
          {activity.amount < 0 && "-"}$ {activity.amount}
        </span>
        <span className="text-base opacity-60 sm:text-xl xl:text-base">{activity.date}</span>
      </div>
    </div>
  )
}