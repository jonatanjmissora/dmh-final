import { ActivityDataTypes } from "../types/account.types"
import { getData } from "./direct.services"

export const getActivitiesData = async (accountId: string, token: string) => {
  return getData(`api/accounts/${accountId}/activity`, token)
}

export const getActivityData = async (activityId: string, accountId: string, token: string) => {
  const activityData: ActivityDataTypes[] = await getActivitiesData(accountId, token)
  return activityData.filter(activity => activity.id === +activityId)[0]
}