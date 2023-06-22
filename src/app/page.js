import Banner from '@/components/Banner/Banner'
import Campaigns from '@/components/Campaigns/Campaigns'
import Form from '@/components/Form/Form'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Campaigns />
      <Form />
    </main>
  )
}
