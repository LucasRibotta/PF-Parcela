"use client"
import { useGetUsersQuery } from "@/redux/services/userApi"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"

export default function About() {
  // const { data, error, isLoading, isFetching } = useGetUsersQuery(null)
  const { data, error, isLoading, isFetching } = useGetParcelasQuery(null)
  console.log(data)

  return (
    <div className="pt-[6rem]">
      {error ? (
        <div>error</div>
      ) : (
        <div>
          {isLoading || isFetching ? (
            <div>Loading...</div>
          ) : (
            <div>
              {data?.map((parcela) => (
                <div>
                  <div>{parcela.name}</div>
                  <div>{parcela.image}</div>
                  <div>{parcela.location}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
