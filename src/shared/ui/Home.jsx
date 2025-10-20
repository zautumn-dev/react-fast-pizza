import CreateUser from '@/features/user/CreateUser.jsx'
import Button from '@UI/components/Button.jsx'
import { useUserSelector } from '@/features/user/store/userSelector.js'

function Home() {
  const fullName = useUserSelector()

  return (
    <div className="mx-6 my-10 text-center">
      <h1 className="mb-4 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <div className="text-yellow-500">Straight out of the oven, straight to you.</div>
      </h1>
      {!fullName ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/cart">
          continue ordering, {fullName}
        </Button>
      )}
    </div>
  )
}

export default Home
