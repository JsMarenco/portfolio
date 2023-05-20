import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className="w-full h-11 flex align-center justify-between sm:p-3">
      <div>
        <span
          className="text-1xl cursor-pointer text-bold hover:text-gray-400 text-gray-700 hover:underline"
          onClick={() => router.push('/')}
        >
          JsMarenco
        </span>
      </div>

      <nav className="flex align-middle justify-center gap-2">
        <button
          className="rounded-lg px-3 py-1 text-center text-black bg-white border border-black hover:bg-black hover:text-white"
          onClick={() => router.push('/#projects')}
        >
          <span>Projects</span>
        </button>

        <button
          className="rounded-lg px-3 py-1 text-center text-white bg-black border border-black hover:bg-white hover:text-black"
          onClick={() => router.push('/#contact')}
        >
          <span>Contact</span>
        </button>
      </nav>
    </header>
  )
}
