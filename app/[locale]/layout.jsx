import { Lato } from 'next/font/google'
import Header from 'templates/header'
import i18nConfig from '@/i18nConfig'
import TranslationsProvider from '../TranslationsProvider'
import initTranslations from '../i18n'
import { dir } from 'i18next'
import 'styles/globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})
const i18nNamespaces = ['common']

export const metadata = {
  title: 'Egdev Next Boilerplate',
  description: 'Next.js boilerplate with i18n, tailwindcss, and more',
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }))
}

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <html lang={locale || 'es'}>
      <body className={lato.className} suppressHydrationWarning={true}>
        <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
          <Header />
          {children}
        </TranslationsProvider>
      </body>
    </html>
  )
}
