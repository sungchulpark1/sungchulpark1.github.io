import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home/Home"
import Work from "./pages/Work/Work"
import NotFound from "./pages/NotFound/NotFound"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work/:projectId" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
