import { constants } from './constants/index.js'
import { ThemeProvider } from './ThemeProvider'
import PreLoading from './components/Loading/index.jsx'
import { Suspense } from 'react'
import { ModalsProvider } from '@mantine/modals'
import NavigationConfigs from './navigation/NavigationConfg.jsx';

function App() {
    return (
        <ThemeProvider>
            <ModalsProvider>
                <Suspense fallback={<PreLoading />}>
                    <NavigationConfigs />
                </Suspense>
            </ModalsProvider>
        </ThemeProvider>
    )
}

export default App
