import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/docs/Layout'
import { HomePage } from './pages/Home'
import { ButtonsPage } from './pages/ButtonsPage'
import { CardsPage } from './pages/CardsPage'
import { InputsPage } from './pages/InputsPage'
import { AlertsPage } from './pages/AlertsPage'
import { BadgesPage } from './pages/BadgesPage'
import { ModalsPage } from './pages/ModalsPage'
import { TabsPage } from './pages/TabsPage'
import { AccordionPage } from './pages/AccordionPage'
import { TooltipsPage } from './pages/TooltipsPage'
import { SpinnersPage } from './pages/SpinnersPage'
import { CarouselPage } from './pages/CarouselPage'
import { MenuPage } from './pages/MenuPage'
import { FooterPage } from './pages/FooterPage'
import { InstallMethodProvider } from './context/InstallMethodContext'

function App() {
  return (
    <InstallMethodProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/buttons' element={<ButtonsPage />} />
          <Route path='/cards' element={<CardsPage />} />
          <Route path='/inputs' element={<InputsPage />} />
          <Route path='/alerts' element={<AlertsPage />} />
          <Route path='/badges' element={<BadgesPage />} />
          <Route path='/modals' element={<ModalsPage />} />
          <Route path='/tabs' element={<TabsPage />} />
          <Route path='/accordion' element={<AccordionPage />} />
          <Route path='/tooltips' element={<TooltipsPage />} />
          <Route path='/spinners' element={<SpinnersPage />} />
          <Route path='/carousel' element={<CarouselPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/footer' element={<FooterPage />} />
        </Routes>
      </Layout>
    </InstallMethodProvider>
  )
}

export default App
