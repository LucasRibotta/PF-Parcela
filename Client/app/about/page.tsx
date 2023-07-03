import { useGetUsersQuery } from "@/redux/services/userApi"

export default function About() {
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null)

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
              {data?.map((user) => (
                <div key={user.id}>
                  <div>{user.username}</div>
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
