import { useRouter } from 'next/router'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'

export function Footer() {
  const router = useRouter()

  function handleGoUrl(url: string) {
    router.push(`${url}`)
  }
  return (
    <footer className="w-full py-6 px-8 bg-primary flex justify-between">
      <div className="flex-1 flex justify-center items-center">
        <p className="text-secondary text-sm">
          © 2019 La Rose - Estética, Beleza e Arte
        </p>
      </div>
      <div className="flex gap-4">
        <FacebookLogo
          onClick={() => handleGoUrl('https://www.facebook.com/larosebeleza/')}
          className="text-[#1149cc] cursor-pointer"
          size={32}
        />
        <InstagramLogo
          onClick={() => handleGoUrl('https://www.instagram.com/larosebeleza/')}
          className="text-red-700 cursor-pointer"
          size={32}
        />
      </div>
    </footer>
  )
}
