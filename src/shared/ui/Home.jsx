import CreateUser from '@/features/user/CreateUser.jsx'

function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-4 text-xl font-semibold">
        The best pizza.
        <br />
        <div className="text-yellow-500">Straight out of the oven, straight to you.</div>
      </h1>
      <CreateUser />
    </div>
  )
}

export default Home
