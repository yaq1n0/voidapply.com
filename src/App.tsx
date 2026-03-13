import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { SearchResultsPage } from '@/pages/SearchResultsPage'
import { JobPage } from '@/pages/JobPage'
import { CompanyPage } from '@/pages/CompanyPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { DebugIndexPage } from '@/debug/DebugIndexPage'
import { DebugSkinPage } from '@/debug/DebugSkinPage'
import { DebugRejectionPage } from '@/debug/DebugRejectionPage'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/job/:jobId" element={<JobPage />} />
            <Route path="/company/:companyId" element={<CompanyPage />} />
            <Route path="/debug" element={<DebugIndexPage />} />
            <Route path="/debug/skin/:skinId" element={<DebugSkinPage />} />
            <Route path="/debug/rejection/:modeId" element={<DebugRejectionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
